import { useEffect, useState } from "react";

function Contact() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getphotos() {
      let photosData = await fetch(
        "https://dummyjson.com/products/search?q=phone",
      ).then((pho) => pho.json());
      setPhotos(photosData.products);
    }
    getphotos();
  }, []);

  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="text-center text-3xl font-bold">Photos</h1>
      <table>
        <thead>
          <tr>
            <th className="border border-stone-400">№</th>
            <th className="border border-stone-400">Title</th>
            <th className="border border-stone-400">Category</th>
            <th className="border border-stone-400">Rating</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo, index) => {
            return (
              <tr key={index}>
                <td className="border border-stone-400">{index + 1}</td>
                <td className="border border-stone-400">{photo.title}</td>
                <td className="border border-stone-400">{photo.category}</td>
                <td className="border border-stone-400">{photo.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Contact;
