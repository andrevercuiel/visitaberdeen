type RatingSource = {
  name: string;
  score: string;
  scale: string;
  count: number;
  url: string;
};

const sources: RatingSource[] = [
  {
    name: "Booking.com",
    score: "9.1",
    scale: "10",
    count: 111,
    url: "https://www.booking.com/hotel/za/aberdeen-self-catering-aberdeen12.html"
  },
  {
    name: "LekkeSlaap",
    score: "4.8",
    scale: "5",
    count: 271,
    url: "https://www.lekkeslaap.co.za/accommodation/aberdeen-self-catering/reviews"
  },
  {
    name: "Google",
    score: "4.6",
    scale: "5",
    count: 183,
    url: "https://www.google.com/maps/search/?api=1&query=Aberdeen%20Self%20Catering%20Aberdeen%20Eastern%20Cape"
  }
];

export default function GuestRatings() {
  return <div className="guest-ratings" role="group" aria-label="Guest review ratings from independent booking and review websites">
    <div className="guest-ratings-row">
      <span className="guest-ratings-heading">Guest ratings</span>
      {sources.map(source => <a
        className="guest-rating"
        key={source.name}
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={source.name + ": " + source.score + " out of " + source.scale + " from " + source.count + " reviews. View reviews on " + source.name}>
        <span className="guest-rating-source">{source.name}</span>
        <strong className="guest-rating-score">{source.score}<span>/{source.scale}</span></strong>
        <span className="guest-rating-count">{source.count} reviews <span aria-hidden="true">↗</span></span>
      </a>)}
    </div>
    <p className="guest-ratings-note">Ratings shown on 14 October 2026 · Scores and review counts may change.</p>
  </div>;
}
