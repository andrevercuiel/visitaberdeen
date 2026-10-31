// Aberdeen, Eastern Cape photographs with source and licence attribution.
// All photography shown in the photo library is from the town, not generic stock.
const pictures = [
  { id: "church", file: "Dutch Reformed Church, Aberdeen, South Africa.jpg", title: "Dutch Reformed Church", alt: "Dutch Reformed Church in Aberdeen, Eastern Cape", credit: "Danie van der Merwe", licence: "CC BY 2.0" },
  { id: "street", file: "Straattoneel Aberdeen.jpg", title: "Aberdeen's historic streets", alt: "A quiet street lined with houses in Aberdeen", credit: "Morné van Rooyen", licence: "Attribution licence" },
  { id: "house", file: "Aberdeen, Eastern Cape building.jpg", title: "Historic Karoo home", alt: "An early historic house in Aberdeen, Eastern Cape", credit: "Jaybs62", licence: "Public domain" },
  { id: "court", file: "Post Office and Magistrate's Court.JPG", title: "Old post office & magistrate's court", alt: "Historic post office and magistrate's court in Aberdeen", credit: "Lugerda", licence: "CC BY-SA 3.0" },
  { id: "wesleyan", file: "South-africa-wesleyan-church-aberdeen.jpg", title: "Wesleyan Methodist Church", alt: "Wesleyan Methodist Church in Aberdeen, Eastern Cape", credit: "Bev18", licence: "CC BY-SA 3.0" },
  { id: "steeple", file: "NG kerk Aberdeen syaansig.jpg", title: "Aberdeen church architecture", alt: "Side view of Aberdeen's Dutch Reformed Church", credit: "Morné van Rooyen", licence: "Attribution licence" },
  { id: "church-detail", file: "Aberdeen Church, South Africa.jpg", title: "A closer look at the church", alt: "Aberdeen church in the Eastern Cape", credit: "Ralph Malan", licence: "CC BY 2.0" },
];
const commonsPhotos = pictures.map(photo => {
  const encoded = encodeURIComponent(photo.file.replaceAll(" ", "_"));
  return {
    ...photo,
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/" + encoded + "?width=1000",
    card: "https://commons.wikimedia.org/wiki/Special:FilePath/" + encoded + "?width=720",
    thumb: "https://commons.wikimedia.org/wiki/Special:FilePath/" + encoded + "?width=480",
    full: "https://commons.wikimedia.org/wiki/Special:FilePath/" + encoded,
    source: "https://commons.wikimedia.org/wiki/File:" + encoded,
  };
});
const localPhotos = [
  {
    "id": "karoo-home",
    "title": "A Karoo evening",
    "alt": "White heritage home at sunset in Aberdeen",
    "src": "/photos/aberdeen/karoo-home.webp",
    "card": "/photos/aberdeen/karoo-home-thumb.webp",
    "thumb": "/photos/aberdeen/karoo-home-thumb.webp",
    "full": "/photos/aberdeen/karoo-home.webp",
    "width": 1672,
    "height": 941
  },
  {
    "id": "veranda",
    "title": "A welcoming veranda",
    "alt": "Green veranda and aloes at an Aberdeen heritage home",
    "src": "/photos/aberdeen/veranda.webp",
    "card": "/photos/aberdeen/veranda-thumb.webp",
    "thumb": "/photos/aberdeen/veranda-thumb.webp",
    "full": "/photos/aberdeen/veranda.webp",
    "width": 1383,
    "height": 1038
  },
  {
    "id": "garden-home",
    "title": "Gardens and heritage",
    "alt": "Historic Aberdeen home framed by palms and a green garden",
    "src": "/photos/aberdeen/garden-home.webp",
    "card": "/photos/aberdeen/garden-home-thumb.webp",
    "thumb": "/photos/aberdeen/garden-home-thumb.webp",
    "full": "/photos/aberdeen/garden-home.webp",
    "width": 1519,
    "height": 916
  },
  {
    "id": "church-gable",
    "title": "Church details",
    "alt": "Stone church gable against an evening sky in Aberdeen",
    "src": "/photos/aberdeen/church-gable.webp",
    "card": "/photos/aberdeen/church-gable-thumb.webp",
    "thumb": "/photos/aberdeen/church-gable-thumb.webp",
    "full": "/photos/aberdeen/church-gable.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "id": "stonework",
    "title": "Heritage in stone",
    "alt": "Sunlight on a stone church wall in Aberdeen",
    "src": "/photos/aberdeen/stonework.webp",
    "card": "/photos/aberdeen/stonework-thumb.webp",
    "thumb": "/photos/aberdeen/stonework-thumb.webp",
    "full": "/photos/aberdeen/stonework.webp",
    "width": 1536,
    "height": 1024
  },
  {
    "id": "veranda-detail",
    "title": "Veranda craftsmanship",
    "alt": "Decorative veranda trim on an Aberdeen building",
    "src": "/photos/aberdeen/veranda-detail.webp",
    "card": "/photos/aberdeen/veranda-detail-thumb.webp",
    "thumb": "/photos/aberdeen/veranda-detail-thumb.webp",
    "full": "/photos/aberdeen/veranda-detail.webp",
    "width": 1536,
    "height": 1024
  },
  {
    "id": "church-skyline",
    "title": "The church on the skyline",
    "alt": "Aberdeen church spire rising above trees beneath an evening sky",
    "src": "/photos/aberdeen/church-skyline.webp",
    "card": "/photos/aberdeen/church-skyline-thumb.webp",
    "thumb": "/photos/aberdeen/church-skyline-thumb.webp",
    "full": "/photos/aberdeen/church-skyline.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "id": "biblical-panel",
    "title": "Faith through craftsmanship",
    "alt": "Colourful biblical textile panel in the NG Church collection",
    "src": "/photos/aberdeen/biblical-panel.webp",
    "card": "/photos/aberdeen/biblical-panel-thumb.webp",
    "thumb": "/photos/aberdeen/biblical-panel-thumb.webp",
    "full": "/photos/aberdeen/biblical-panel.webp",
    "width": 1535,
    "height": 1024
  },
  {
    "id": "ng-church",
    "title": "Aberdeen NG Church",
    "alt": "Tower of the Dutch Reformed Church in Aberdeen beneath golden clouds",
    "src": "/photos/aberdeen/ng-church.webp",
    "card": "/photos/aberdeen/ng-church-thumb.webp",
    "thumb": "/photos/aberdeen/ng-church-thumb.webp",
    "full": "/photos/aberdeen/ng-church.webp",
    "width": 1536,
    "height": 1024
  },
  {
    "id": "cafe-conversation",
    "title": "Time for coffee",
    "alt": "Visitors sharing conversation at an Aberdeen café",
    "src": "/photos/aberdeen/cafe-conversation.webp",
    "card": "/photos/aberdeen/cafe-conversation-thumb.webp",
    "thumb": "/photos/aberdeen/cafe-conversation-thumb.webp",
    "full": "/photos/aberdeen/cafe-conversation.webp",
    "width": 1448,
    "height": 1086
  },
  {
    "id": "pizza",
    "title": "Local flavours",
    "alt": "Freshly served pizza at an Aberdeen eatery",
    "src": "/photos/aberdeen/pizza.webp",
    "card": "/photos/aberdeen/pizza-thumb.webp",
    "thumb": "/photos/aberdeen/pizza-thumb.webp",
    "full": "/photos/aberdeen/pizza.webp",
    "width": 1536,
    "height": 1024
  },
  {
    "id": "check-mate",
    "title": "Check Mate Coffee Shop",
    "alt": "Visitor enjoying a drink at Check Mate Coffee Shop",
    "src": "/photos/aberdeen/check-mate.webp",
    "card": "/photos/aberdeen/check-mate-thumb.webp",
    "thumb": "/photos/aberdeen/check-mate-thumb.webp",
    "full": "/photos/aberdeen/check-mate.webp",
    "width": 1448,
    "height": 932
  },
  {
    "id": "diner",
    "title": "A relaxed meal",
    "alt": "Visitors sharing a meal at a local Aberdeen eatery",
    "src": "/photos/aberdeen/diner.webp",
    "card": "/photos/aberdeen/diner-thumb.webp",
    "thumb": "/photos/aberdeen/diner-thumb.webp",
    "full": "/photos/aberdeen/diner.webp",
    "width": 1448,
    "height": 1086
  },
  {
    "id": "cycling",
    "title": "Explore on two wheels",
    "alt": "Cyclist riding a trail through Karoo vegetation",
    "src": "/photos/aberdeen/cycling.webp",
    "card": "/photos/aberdeen/cycling-thumb.webp",
    "thumb": "/photos/aberdeen/cycling-thumb.webp",
    "full": "/photos/aberdeen/cycling.webp",
    "width": 1448,
    "height": 1086
  },
  {
    "id": "running",
    "title": "Run in the Karoo",
    "alt": "Two runners on a trail beneath the Karoo sky",
    "src": "/photos/aberdeen/running.webp",
    "card": "/photos/aberdeen/running-thumb.webp",
    "thumb": "/photos/aberdeen/running-thumb.webp",
    "full": "/photos/aberdeen/running.webp",
    "width": 1448,
    "height": 1086
  },
  {
    "id": "four-wheel-drive",
    "title": "Karoo adventure",
    "alt": "Four-wheel-drive vehicle travelling along a rugged track",
    "src": "/photos/aberdeen/four-wheel-drive.webp",
    "card": "/photos/aberdeen/four-wheel-drive-thumb.webp",
    "thumb": "/photos/aberdeen/four-wheel-drive-thumb.webp",
    "full": "/photos/aberdeen/four-wheel-drive.webp",
    "width": 1536,
    "height": 1024
  },
  {
    "id": "walking-view",
    "title": "Pause for the view",
    "alt": "Walkers resting above the open Karoo landscape",
    "src": "/photos/aberdeen/walking-view.webp",
    "card": "/photos/aberdeen/walking-view-thumb.webp",
    "thumb": "/photos/aberdeen/walking-view-thumb.webp",
    "full": "/photos/aberdeen/walking-view.webp",
    "width": 1685,
    "height": 1086
  },
  {
    "id": "hiking",
    "title": "A walk in the hills",
    "alt": "Walking group beneath rocky Karoo cliffs",
    "src": "/photos/aberdeen/hiking.webp",
    "card": "/photos/aberdeen/hiking-thumb.webp",
    "thumb": "/photos/aberdeen/hiking-thumb.webp",
    "full": "/photos/aberdeen/hiking.webp",
    "width": 1024,
    "height": 1536
  }
];
export const photos = [...commonsPhotos, ...localPhotos];
export const photoById = Object.fromEntries(photos.map(photo => [photo.id, photo]));
