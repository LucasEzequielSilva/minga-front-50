import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useStore, useDispatch } from 'react-redux'
import { saveAllMangas, filtro } from '../redux/actions/mangasAction.js'

export default function Mangas() {
  // const [mangas, setMangas] = useState([])
  const [input, setInput] = useState("")
  const [cantidadTotal, setCantidadT] = useState(1)
  // const [page, setPage] = useState(1)
  const { page } = useParams()
  const { mangas, text, checks } = useSelector((store) => store.mangasReducer)

  const dispatch = useDispatch()

  console.log(text, checks);

  const referencia = useRef()
  // Esto seria logica
  // Paso 1: Tener la info para lo que quieras hacer o guardar en el store.

  // Esto seria redux en si.
  // Paso 1: Tener el Provider con la prop store implementado.
  // Paso 1.5: Tener el reductor implementado en el configureStore.
  // Paso 2: Tener la accion a la cual enviar la info.
  // Paso 3: Tener el reductor que reciba la accion con la info.
  // Paso 4: Hacer que el reductor guarde un nuevo estado con esa accion y la info.

  // Esto seria la comunicacion con redux.
  // Paso 1: En el/los componente/s despachar (useDispatch) la accion con la info a guardar o modificar.
  // Paso 2: Suscribirse a esos estados (useSelector). 


















  useEffect(() => {
    // console.log('aca tengo que filtrar los mangas')
    filtroMangas()
  }, [text, checks])

  async function filtroMangas() {
    const { data: { mangas, count } } = await axios.get(`http://localhost:8080/mangas?page=1&title=${text}&category=${checks}`)
    dispatch(saveAllMangas(mangas))
    setCantidadT(count)
  }

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

  const findManga = (e) => {
    if (e.target.name === 'text') {
      dispatch(filtro({
        text: e.target.value,
        checks: null
      }))
    } else {
      dispatch(filtro({
        text: null,
        checks: e.target.value
      }))
    }
  }
  // async function findManga(e) {
  //   let titulo = referencia.current.value
  //   checks.filter(check => check !== referenciaCheck.current.value)
  //   // setInput(e.target.value)
  //   let data = {
  //     checks: [...checks, referenciaCheck.current.value],
  //     text: titulo
  //   }
  //   dispatch(filtro(data))
  //   // console.log(mangas);
  //   // setMangas(mangas)
  //   // console.log(referencia.current.value)
  //   // console.log(referencia.current)
  //   // busqueda de mangas
  // }

  // useEffect(() => {
  //   filtroC()
  // }, [text, checks])

  // async function filtroC() {
  //   const { data: { mangas } } = await axios.get(`http://localhost:8080/mangas?page=1&title=${text.trim().toLowerCase()}`)
  //   dispatch(saveAllMangas(mangas))
  // }

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
        <img src="/images/Search.svg" className="shrink cursor-pointer" alt="Search" />
        <input onChange={findManga} name='text' ref={referencia} type="text" className="flex-1 outline-none p-2 text-lg" placeholder="Find your manga here" />
        <select onChange={findManga} name="checks">
          <option value="default">-</option>
          <option value="shonen">shonen</option>
          <option value="seinen">seinen</option>
          <option value="comic">comic</option>
          <option value="otro">otro</option>
        </select>
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



