import React from "react";
import Product from '../components/products-plp';

const products = [
{
    image: "img/producto-1.png",
    name: 'Computador Portátil HP 14" Pulgadas Ep1001la',
    rating: 4,
    description: "Intel Core Ultra 5 - RAM 8GB - Disco SSD 512 GB - Plata",
    normalPrice: "$3.619.000",
    discountedPrice: "$3.119.900",
},
];

const PLP: React.FC = () => {
return (
    <div className="container mx-auto p-4">
    <nav className="breadcrumb mb-4">
        <a href="index.html" className="text-blue-500">
        Inicio
        </a>{" "}
        &gt;{" "}
        <a href="#" className="text-blue-500">
        Tecnología
        </a>{" "}
        &gt; <span>Computadores</span>
    </nav>
    <h2 className="text-2xl font-semibold mb-4">Computadores</h2>
    <div className="flex flex-wrap">
    {/* filters - aside */}
        <section className="flex-1">
        <div className="flex justify-between items-center mb-4">
            <span>40 resultados de computadores</span>
            <select className="border p-2">
            <option value="" disabled selected>
                Ordenar por
                </option>
                <option value="relevancia">Relevancia</option>
                <option value="fecha">Fecha de carga</option>
                <option value="precio-asc">Precio menor a mayor</option>
                <option value="precio-desc">Precio mayor a menor</option>
            </select>
        </div>
        {products.map((product, index) => (
            <Product key={index} {...product} />
        ))}
        </section>
    </div>
    </div>
);
};

export default PLP;
