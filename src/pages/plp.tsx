import React from 'react';
import Product from '../components/products-plp';
import Filter from '../components/filters';

const products = [
        {
        image: './img/plp/producto-1.png',
        name: 'Computador Portátil HP 14" Pulgadas Ep1001la',
        rating: 4,
        description: 'Intel Core Ultra 5 - RAM 8GB - Disco SSD 512 GB - Plata',
        normalPrice: '$3.619.000',
        discountedPrice: '$3.119.900',
        },
        {
        image: './img/plp/laptod-1.png',
        name: 'Computador Portátil LENOVO 15,6" Pulgadas IdeaPad Slim 3',
        rating: 3,
        description: 'Táctil - Intel Core i5 - RAM 8GB - Disco SSD 512GB',
        normalPrice: '$3.599.000',
        discountedPrice: '$2.999.999',
        },
        {
        image: './img/plp/laptod-2.png',
        name: 'Computador Portátil ASUS Vivobook 16" Pulgadas X1605ZA',
        rating: 2,
        description: 'Intel Core i5 - RAM 16GB - Disco SSD 512 GB - Negro',
        normalPrice: '$3.599.000',
        discountedPrice: '$2.650.900',
        },
        {
        image: './img/plp/laptod-3.png',
        name: 'Computador Portátil LENOVO IdeaPad Slim 5 14" Pulgadas 14IAH8',
        rating: 4,
        description: 'Intel Core i5 - RAM 16GB - Disco SSD 512GB - Gris',
        normalPrice: '$3.599.000',
        discountedPrice: '$2.250.980',
        },
        {
        image: './img/plp/laptod-4.png',
        name: 'MacBook Air de 13" Pulgadas MGN63LA/A',
        rating: 1,
        description: 'Chip M1 RAM 8GB Disco Estado Solido 256 GB - Gris espacial',
        normalPrice: '$6.659.000',
        discountedPrice: '$5.999.999',
        },
        {
        image: './img/plp/laptod-5.png',
        name: 'Computador Portátil ASUS Vivobook Go 15.6" Pulgadas E1504FA',
        rating: 5,
        description: '- AMD Ryzen 5 - RAM 8GB - Disco SSD 1 TB -',
        normalPrice: '$3.299.000',
        discountedPrice: '$2.790.000',
        },
        {
        image: './img/plp/laptod-6.png',
        name: 'Computador Portátil ASUS Vivobook Go 15.6" Pulgadas E1504GA',
        rating: 5,
        description: '- Intel Core i3 - RAM 8GB - Disco SSD 512 GB SSD - Plateado',
        normalPrice: '$1.200.000',
        discountedPrice: '$989.900',
        },
        {
        image: './img/plp/laptod-7.png',
        name: 'Computador Portátil ACER ASPIRE GO 15.6" Pulgadas 370J',
        rating: 3,
        description: '- Intel Core i3 - RAM 16GB - Disco SSD 1TB - Azul',
        normalPrice: '$3.249.000',
        discountedPrice: '$3.090.000',
        },
        {
        image: './img/plp/laptod-8.png',
        name: 'Computador Portátil ACER ASPIRE 5 15.6" Pulgadas 54XV',
        rating: 2,
        description: '- Intel Core i5 - RAM 16GB - Disco SSD 512GB - Azul',
        normalPrice: '$3.949.000',
        discountedPrice: '$3.540.000',
        },
        {
        image: './img/plp/laptod-9.png',
        name: 'Computador Portátil HP 14" Pulgadas EP0027la',
        rating: 4,
        description: '- Intel Core i3 - RAM 8GB- Disco SSD 512 GB - Plateado',
        normalPrice: '$2.899.000',
        discountedPrice: '$2.500.000',
        },
        {
        image: './img/plp/laptod-10.png',
        name: 'Computador Portátil Gamer Victus HP 15,6" Pulgadas Fa0000la',
        rating: 5,
        description: 'Intel Core I5- RAM 16GB - Disco SSD 512GB - Azul',
        normalPrice: '$6.499.000',
        discountedPrice: '$6.200.000',
        },
    ];

    const filters = [
        {
        title: 'Marca',
        options: [
            { label: 'HP', count: 3 },
            { label: 'LENOVO', count: 5 },
            { label: 'ZSUS', count: 8 },
            { label: 'APPLE', count: 8 },
        ],
        },
        {
        title: 'RAM',
        options: [
            { label: '32 GB', count: 3 },
            { label: '24 GB', count: 5 },
            { label: '16 GB', count: 8 },
            { label: '8 GB', count: 8 },
        ],
        },
        {
        title: 'Tipo de Disco',
        options: [
            { label: 'HDD', count: 7 },
            { label: 'SSD', count: 12 },
            { label: 'SSD M.2', count: 10 },
        ],
        },
        {
        title: 'Capacidad Disco Duro',
        options: [
            { label: 'SSD 256GB', count: 3 },
            { label: 'SSD 512GB', count: 5 },
            { label: 'SSD 1TB', count: 8 },
            { label: 'SSD 2TB', count: 3 },
        ],
        },
        {
        title: 'Sistema Operativo',
        options: [
            { label: 'Windows', count: 20 },
            { label: 'MacOS', count: 6 },
            { label: 'Linux', count: 5 },
        ],
        },
    ];

const PLP: React.FC = () => {
return (
    <div className="max-w-screen-xl mx-auto px-6 py-10 font-poppins"> 
    <nav className="text-base mb-6"> 
        <a href="index.html" className="text-blue-600">
        Inicio
        </a>{" "}
        &gt;{" "}
        <a href="#" className="text-blue-600">
        Tecnología
        </a>{" "}
        &gt; <span>Computadores</span>
    </nav>
    <h2 className="text-3xl font-bold mb-6">Computadores</h2> 
    <div className="flex flex-wrap mt-6">  
    <aside className="w-full md:w-1/6 mb-6 md:mb-0 md:mr-6 mt-16">
        <h2 className="text-2xl font-bold mb-6">Filtros</h2> 
        {filters.map((filter, index) => (
            <Filter key={index} title={filter.title} options={filter.options} />
        ))}
        </aside>
        <section className="flex-1">
        <div className="flex justify-between items-center mb-4">
            <span>40 resultados de computadores</span>
            <select className="border p-2">
            <option value="" disabled selected>Ordenar por</option>
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