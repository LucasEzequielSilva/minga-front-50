import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  let { id } = useParams();
  console.log(id);
  const [img, setImg] = useState(undefined)
  useEffect(() => {
    getImg(id)
  }, [])

  async function getImg(_id) {
    const { data } = await axios.get('http://localhost:8080/mangas/' + _id)
    console.log(data);
    setImg(data.cover_photo)
  }

  return <div className="flex-1 flex place-content-center place-items-center">
    <img src={img} alt="" />
  </div>;
}
