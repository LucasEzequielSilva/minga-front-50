import { Link } from 'react-router-dom'

const Card = ({ title, type, _id, cover, category }) => {
    return (
        <div className="w-1/3 h-64 rounded-xl border overflow-hidden flex justify-between items-center" id="card">
            <div className="w-1/2 h-48 flex gap-8 justify-end p-4 flex-col border-l-4 " style={{ borderColor: category.color }}>
                <div>
                    <h1 className="text-3xl mb-0.5">{title}</h1>
                    <h2 className="text-red-300 font-medium text-xl">{type}</h2>
                </div>
                <Link to={"/details/" + _id} className="py-3 px-10 bg-green-200 text-green-500 rounded-full w-fit">Read</Link>
            </div>
            <img src={cover} className="w-1/3 rounded-l-full h-[120%] object-cover" alt="" />
        </div>
    )

}

export default Card