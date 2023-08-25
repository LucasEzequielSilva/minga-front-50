import midoriya from "../../public/images/midoriya.png";
import midoriya_cover from "../../public/images/midoriya_cover.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Carrousel = () => {
  let [counter, setCounter] = useState(0);
  let [categories, setCategories] = useState([]);

  console.log(categories);
  let url = "https://minga-back-vyqy.onrender.com/categories";
  let titulos = ["My Hero Academy", "Naruto", "Dragon Ball Z"];

  let prev = () => {
    counter !== 0 ? setCounter(counter - 1) : setCounter(counter.length - 1);
  };
  let next = () => {
    counter !== titulos.length - 1 ? setCounter(counter + 1) : setCounter(0);
  };

  function getData() {
    axios(url)
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-[40vh]  flex justify-center items-center">
      <div className="px-4 flex gap-8 justify-center items-end relative w-9/12 h-5/6 rounded bg-gradient-to-r from-[#434343] to-[#000]">
        <img
          className="w-6 absolute top-1/2 left-4 cursor-pointer rotate-180 bg-slate-300	p-2 rounded-md"
          src="./images/arrow-right.svg"
          alt="arrow"
          onClick={prev}
        />
        <img
          className="w-6 absolute top-1/2 right-4 cursor-pointer bg-slate-300 p-2 rounded-md"
          src="./images/arrow-right.svg"
          alt="arrow"
          onClick={next}
        />
        <img
          className="w-60 relative bottom-0 pointer-events-none"
          src={midoriya}
          alt="midoriya"
        />
        <img
          className="h-52 mb-8 pointer-events-none rounded"
          src={midoriya_cover}
          alt="midoriya"
        />
        <div className="flex flex-col gap-2 self-center">
          <h5 className="text-white font-bold text-xl">
            {categories[counter]?.name}
          </h5>
          <Link
            to={`/details/${categories[counter]?._id}`}
            className="text-white border-solid	border-gray-300	border-2 p-1 rounded-md	"
          >
            PRUEBA
          </Link>
          <p className="text-white text-[14px] w-[356px]">
            Is the manga that is aimed at adolescent boys. They are series with
            large amounts of action, in which humorous situations often occur.
            The camaraderie between members of a collective or a combat team
            stands out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
