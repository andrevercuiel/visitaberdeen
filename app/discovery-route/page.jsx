"use client";
import { useEffect, useRef, useState } from "react";
import stops from "../../data/stops.json";

function chooseVoice(voices) {
  const english = voices.filter(v => /^en([-_]|$)/i.test(v.lang));
  const scored = english.map(v => {
    const n = v.name.toLowerCase();
    const lang = v.lang.toLowerCase();
    let score = 0;
    if (lang === "en-za") score += 22;
    if (lang === "en-gb") score += 12;
    if (v.localService) score += 4;
    if (/premium|enhanced|natural|neural|siri/i.test(n)) score += 60;
    if (/samantha|daniel|karen|moira|serena|tessa|ava|allison|oliver|rishi/i.test(n)) score += 22;
    if (/compact|espeak|microsoft david desktop/i.test(n)) score -= 60;
    return { voice: v, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.voice || voices[0] || null;
}

export default function Route() {
  const [done, setDone] = useState([]);
  const [open, setOpen] = useState({});
  const [speakingId, setSpeakingId] = useState(null);
  const [speechAvailable, setSpeechAvailable] = useState(false);
  const [voiceLabel, setVoiceLabel] = useState("");
  const audioRefs = useRef({});
  const activeSpeech = useRef(null);

  useEffect(() => {
    try { setDone(JSON.parse(localStorage.getItem("ataStops") || "[]")); } catch {}
    const available = typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    setSpeechAvailable(available);
    if (!available) return;
    const updateVoices = () => {
      const voice = chooseVoice(window.speechSynthesis.getVoices());
      setVoiceLabel(voice?.name || "Device English voice");
    };
    updateVoices();
    window.speechSynthesis.addEventListener?.("voiceschanged", updateVoices);
    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.removeEventListener?.("voiceschanged", updateVoices);
    };
  }, []);

  function stopNarration() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    Object.values(audioRefs.current).forEach(el => { if (el) el.pause(); });
    activeSpeech.current = null;
    setSpeakingId(null);
  }

  function narrate(stop) {
    if (!speechAvailable) return;
    if (speakingId === stop.id) { stopNarration(); return; }
    stopNarration();
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(stop.transcript.replace(/\n+/g, ". "));
    const selected = chooseVoice(synth.getVoices());
    if (selected) { utterance.voice = selected; utterance.lang = selected.lang; }
    else utterance.lang = "en-ZA";
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onend = () => {
      if (activeSpeech.current === utterance) { activeSpeech.current = null; setSpeakingId(null); }
    };
    utterance.onerror = () => {
      if (activeSpeech.current === utterance) { activeSpeech.current = null; setSpeakingId(null); }
    };
    activeSpeech.current = utterance;
    setSpeakingId(stop.id);
    synth.speak(utterance);
  }

  function toggle(id) {
    setDone(d => {
      const next = d.includes(id) ? d.filter(x => x !== id) : [...d, id];
      localStorage.setItem("ataStops", JSON.stringify(next));
      return next;
    });
  }

  return <main className="container pad">
    <div className="eyebrow">DRIVE IT · WALK IT · LISTEN</div>
    <h1 className="pageTitle">Aberdeen Discovery Route</h1>
    <p className="lede">Your phone is your tour guide. Listen to a story at each stop, read the transcript and mark the places you visit.</p>
    <div className="progress"><span>{done.length} of {stops.length} stops visited</span><div className="bar"><div style={{width:`${done.length / stops.length * 100}%`}} /></div></div>
    <div className="stops">{stops.map(s => <article className="stop" key={s.id}>
      <div className="num">{String(s.id).padStart(2, "0")}</div>
      <div className="stopBody">
        <div className="eyebrow">HERITAGE AUDIO STOP</div>
        <h2>{s.name}</h2>
        {speechAvailable && <div style={{marginBottom: "0.75rem"}}>
          <button className="mark" type="button" onClick={() => narrate(s)} aria-label={speakingId === s.id ? `Stop narration at ${s.name}` : `Listen to ${s.name} with natural voice`}>
            {speakingId === s.id ? "■ Stop narration" : "▶ Listen — natural voice"}
          </button>
          <p className="fine" style={{margin: "0.35rem 0"}}>Uses your device’s English narrator{voiceLabel ? ` (${voiceLabel})` : ""}. Voice quality varies by device.</p>
        </div>}
        <details style={{marginBottom: "0.75rem"}}>
          <summary>{speechAvailable ? "Alternative: original audio recording" : "Listen to recording"}</summary>
          <audio ref={el => { audioRefs.current[s.id] = el; }} controls preload="none" src={s.audio} aria-label={`Original audio recording of ${s.name}`} onPlay={() => {
            if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
            activeSpeech.current = null;
            setSpeakingId(null);
            Object.entries(audioRefs.current).forEach(([id, el]) => { if (Number(id) !== s.id && el) el.pause(); });
          }}>Your browser does not support audio playback.</audio>
        </details>
        <div className="stopActions">
          <button className="plain" onClick={() => setOpen(p => ({...p, [s.id]: !p[s.id]}))}>{open[s.id] ? "Hide" : "Read"} story {open[s.id] ? "−" : "+"}</button>
          <button className={done.includes(s.id) ? "visited" : "mark"} onClick={() => toggle(s.id)}>{done.includes(s.id) ? "✓ Visited" : "Mark as visited"}</button>
        </div>
        {open[s.id] && <p className="transcript">{s.transcript}</p>}
      </div>
    </article>)}</div>
    {done.length === stops.length && <div className="completion">🎉 You completed the Aberdeen Discovery Route! Contact participating businesses about current offers. No automatic reward is promised.</div>}
    <p className="fine">Narration uses your device’s available English speech voices, with original recordings as a fallback. Historical transcripts, dates and pronunciation should be reviewed by local historians before official publication. GPS check-ins and Afrikaans narration are planned, not yet active.</p>
  </main>;
}
