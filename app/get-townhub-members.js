import sourceMembers from "../data/ata-members.json";

function normalise(name) {
  return (name || "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

const aliases = {
  "aberdeenselfcatering": "aberdeenselfcatering",
  "dietuishuis": "dietuishuis",
  "aberdeensuperstore": "superstore",
  "windmillcoffeeanddeli": "windmillcoffeeshop",
  "ngkerkaberdeen": "ngkerkuniekebybelsepanele",
};

export async function getTownHubAtaMembers() {
  const fallback = sourceMembers;
  const url = process.env.TOWNHUB_MEMBERS_API_URL ||
    "https://townhub.co.za/api/tourism-members?association=aberdeen-tourism-association";
  try {
    const res = await fetch(url, { next: { revalidate: 900 } });
    if (!res.ok) throw new Error("TownHub member feed returned " + res.status);
    const data = await res.json();
    if (!Array.isArray(data.members)) throw new Error("Invalid member feed");
    return data.members.map(entry => {
      const key = aliases[normalise(entry.name)] || normalise(entry.name);
      const local = sourceMembers.find(m => normalise(m.name) === key);
      const links = [...(local?.links || [])];
      const append = (label, value, prefix = "") => {
        if (!value) return;
        const href = prefix + value;
        if (!links.some(link => link[1] === href)) links.push([label, href]);
      };
      append("Website", entry.website);
      append("Facebook", entry.facebook);
      append("Instagram", entry.instagram);
      append("Call", entry.phone, "tel:");
      append("WhatsApp", entry.whatsapp, "https://wa.me/");
      return {
        name: local?.name || entry.name,
        categories: local?.categories || ["ATA member"],
        image: local?.image || null,
        description: entry.description || local?.description || "",
        links
      };
    });
  } catch (e) {
    // Keep the existing ATA directory usable if TownHub or its feed is down.
    console.error("Using ATA member snapshot until TownHub feed is reachable:", e.message);
    return fallback;
  }
}
