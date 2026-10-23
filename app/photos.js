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
export const photos = pictures.map(photo => {
  const encoded = encodeURIComponent(photo.file.replaceAll(" ", "_"));
  return {
    ...photo,
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/" + encoded + "?width=1000",
    full: "https://commons.wikimedia.org/wiki/Special:FilePath/" + encoded,
    source: "https://commons.wikimedia.org/wiki/File:" + encoded,
  };
});
export const photoById = Object.fromEntries(photos.map(photo => [photo.id, photo]));
