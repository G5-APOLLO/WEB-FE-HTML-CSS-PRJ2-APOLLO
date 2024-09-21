import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../components/ProductsPlp';
import Filter from '../components/Filters';
import { Main } from "../layout/Main";
import { products } from '../data/Products.data';
import { filters } from '../data/Filters.data';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const PLP: React.FC = () => {
    const query = useQuery();
    const optionId = query.get('optionId');
    const optionName = query.get('optionName');

    console.log('optionId:', optionId);
    console.log('optionName:', optionName);

    // Filter products based on optionId
    const filteredProducts = products.filter(product => product.optionId === Number(optionId));

    // Filter filters based on optionId
    const filteredFilters = filters.filter(filter => filter.optionIDfilter === Number(optionId));

    return (
        <Main>
            <div className="max-w-screen-xl mx-auto px-6 py-10 font-poppins">
                <h2 className="text-3xl font-bold mb-6">{optionName}</h2>
                <div className="flex flex-wrap mt-6">
                    <aside className="w-full md:w-1/6 mb-6 md:mb-0 md:mr-6 mt-16">
                        <h2 className="text-2xl font-bold mb-6">Filtros</h2>
                        {filteredFilters.map((filter, index) => (
                            <Filter key={index} title={filter.title} options={filter.options} />
                        ))}
                    </aside>
                    <section className="flex-1">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <span>{filteredProducts.length} resultados de {optionName}</span>
                            <select className="border p-2 mt-4 md:mt-0" defaultValue="">
                                <option value="" disabled>Ordenar por</option>
                                <option value="relevancia">Relevancia</option>
                                <option value="fecha">Fecha de carga</option>
                                <option value="precio-asc">Precio menor a mayor</option>
                                <option value="precio-desc">Precio mayor a menor</option>
                            </select>
                        </div>
                        {filteredProducts.map((product, index) => (
                            <Product key={index} {...product} />
                        ))}
                    </section>
                </div>
            </div>
        </Main>
    );
};

export default PLP;
