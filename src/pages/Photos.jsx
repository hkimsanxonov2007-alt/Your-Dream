import { useState, useEffect } from "react";
import Card from "../companents/Card";

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      let productPhotos = await fetch("https://dummyjson.com/products").then(
        (cam) => cam.json(),
      );
      setPhotos(productPhotos);
    }
    getPhotos();
  }, []);

  console.log(photos);

  return (
    <div className="h-screen overflow-scroll flex flex-wrap  gap-5">
      {photos?.products?.map((photo) => {
        return (
          <div className="bg-teal-200 w-79 h-auto rounded-2xl">
            <img src={photo.images[0]} alt="" />
            <div className="p-4">
              <h2 className="font-bold text-2xl">{photo.title}</h2>
              <p>{photo.description}</p>
              <p className="text-gray-600 font-bold">${photo.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Photos;
