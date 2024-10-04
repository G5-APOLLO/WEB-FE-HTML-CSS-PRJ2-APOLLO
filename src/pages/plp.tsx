import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Product from '../components/ProductsPlp';
import Filter from '../components/Filters';
import { Main } from "../layout/Main";
import { useGetFilters } from '../hooks/useGetFilters';
import { useProducts } from '../hooks/useProductsQuery';
import Spinner from '../components/Spinner';
import ErrorComponent from '../components/ErrorComponent';
import Bannersection from '../components/BannerSection';


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};



const PLP: React.FC = () => {
    const query = useQuery();
    const optionId = query.get('optionId') ?? '';
    const optionName = query.get('optionName');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const { isLoading: isLoadingFilters, isSuccess: isSuccessFilters, isError: isErrorFilters, refetch, data: filters } = useGetFilters(optionId);
    const { data: products = [], isLoading: isLoadingProducts, isError: isErrorProducts } = useProducts();

    useEffect(() => {
        refetch();
    }, [optionId, refetch]);

    // filter products

    const filteredProducts = products.filter(product => product.optionId === Number(optionId));

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Main>
            <div className="max-w-screen-xl mx-auto px-6 py-10 font-poppins">
                <h2 className="text-3xl font-bold mb-6">{optionName}</h2>
                <div className="flex flex-wrap mt-6">
                    <aside className="w-full md:w-1/6 mb-6 md:mb-0 md:mr-6 mt-16">
                        <h2 className="text-2xl font-bold mb-6">Filtros</h2>
                        {isLoadingFilters && (
                            <div className="flex flex-col items-center text-gray-500">
                                Cargando filtros...
                                <Spinner />
                            </div>
                        )}
                        {isErrorFilters && (
                            <div className="flex justify-center">
                                <ErrorComponent message="Error al cargar filtros" />
                            </div>
                        )}
                        {!isLoadingFilters && !isErrorFilters && isSuccessFilters && filters && filters.map((filter, index) => (
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
                        <div className="">
                            {isLoadingProducts ? (
                                <Spinner />
                            ) : isErrorProducts ? (
                                <ErrorComponent message="Error al cargar productos" />
                            ) : (
                                currentProducts.map((product) => (
                                    <Link
                                        to={`/pdp?optionId=${product.id}&optionId=${product.name}`}
                                        className="block"
                                        key={product.id}
                                    >
                                        <Product {...product} />
                                    </Link>
                                ))
                            )}
                        </div>
                        <div className="flex justify-center mt-10">
                            <nav className="flex space-x-2">
                                {currentPage > 1 && (
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        className="px-4 py-2 rounded-lg border bg-white text-gray-800 border-gray-300 hover:bg-gray-300"
                                    >
                                        Anterior
                                    </button>
                                )}
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`px-4 py-2 rounded-lg border ${currentPage === index + 1
                                            ? 'bg-[#36382E] text-white border-gray-800'
                                            : 'bg-white text-gray-800 border-gray-300'
                                            } hover:bg-gray-300`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                {currentPage < totalPages && (
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        className="px-4 py-2 rounded-lg border bg-white text-gray-800 border-gray-300 hover:bg-gray-300"
                                    >
                                        Siguiente
                                    </button>
                                )}
                            </nav>
                        </div>
                    </section>
                </div>
            </div>
            <Bannersection id={1} />
        </Main>
    );
};

export default PLP;