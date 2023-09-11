import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useStore, useDispatch } from 'react-redux'
import { saveAllMangas } from '../redux/actions/mangasAction.js'

export default function Mangas() {
  // const [mangas, setMangas] = useState([])
  const [input, setInput] = useState("")
  const [cantidadTotal, setCantidadT] = useState(1)
  // const [page, setPage] = useState(1)
  const { page } = useParams()
  const { mangas, filtrados } = useSelector((store) => store.mangasReducer)

  const dispatch = useDispatch()

  console.log(mangas);

  const referencia = useRef()

  async function getMangas() {
    console.log("Hice la peticion");
    const { data: { mangas, count } } = await axios.get(`http://localhost:8080/mangas?page=${page}`)
    // console.log("cantidad de mangas", count);
    dispatch(saveAllMangas(mangas))
    // setMangas(mangas)
    setCantidadT(count)
  }
  const navigate = useNavigate()

  useEffect(() => {
    
    getMangas()


  }, [page])

  async function findManga(e) {
    let titulo = referencia.current.value
    // setInput(e.target.value)
    const { data: { mangas } } = await axios.get(`http://localhost:8080/mangas?page=1&title=${titulo.trim().toLowerCase()}`)
    console.log(mangas);
    // setMangas(mangas)
    console.log(referencia.current.value)
    console.log(referencia.current)
    // busqueda de mangas
  }

  function next() {
    if (page < Math.floor(cantidadTotal / 4)) navigate("/mangas/" + (Number(page) + 1))
  }
  function prev() {
    if (page > 1) navigate("/mangas/" + (Number(page) - 1))
  }

  return <div className="flex-1 flex flex-col w-full px-8">
    <div className="w-full h-[65vh] absolute z-0 top-0 left-0 bg-cover" style={{ backgroundImage: `url(/images/portada.svg)` }}></div>
    <div className="w-full h-[50vh] z-10 flex justify-center items-center flex-col gap-16">
      <h1 className="text-center text-white text-6xl font-bold">Mangas</h1>
      <div className="flex bg-white w-1/2 p-4 rounded-xl overflow-hidden items-center">
        <img onClick={findManga} src="/images/Search.svg" className="shrink cursor-pointer" alt="Search" />
        <input ref={referencia} type="text" className="flex-1 outline-none p-2 text-lg" placeholder="Find your manga here" />
        <span className='text-2xl cursor-pointer select-none' onClick={prev}> ⬅️ </span> pagina {page} de {Math.floor(cantidadTotal / 4) || 1} <span className='text-2xl cursor-pointer select-none' onClick={next}> ➡️ </span>
      </div>

    </div>
    <div className="w-full h-[70vh] z-10 bg-white rounded-t-2xl p-4 flex place-content-center place-items-center gap-8 gap-y-8 flex-wrap">
      {
        mangas.length < 1 ? <p>Cargando...</p> :
          mangas.map(manga =>
            <Card key={manga._id} category={manga.category_id} cover={manga.cover_photo} title={manga.title} type={manga.category_id.name} _id={manga._id} />
          )
      }

    </div>
  </div>;
}



