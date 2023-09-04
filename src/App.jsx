//Componente Principal de la SPA
import Empty from "./components/Empty";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
export default function App() {
  function mostrarPorConsola() {}
  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-cover bg-[center_top] h-screen "
      style={{ backgroundImage: "url(./images/hero_image.png)" }}
    >
      <Layout prop1={mostrarPorConsola} text="soy un texto mas coherente">
        <Home />
      </Layout>
    </div>
  );
}
