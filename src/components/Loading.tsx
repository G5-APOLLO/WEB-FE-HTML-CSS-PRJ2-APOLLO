import React from 'react';
import { importImage } from '../utils/importImage';

interface LoadingMessageProps {
    loadingMessage: string;
}

const Loading: React.FC<LoadingMessageProps> = ({ loadingMessage }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">{loadingMessage}</h2>
            <section className="flex justify-center">
                <img src={importImage("loading.gif")} alt="Cargando..." className="w-1/2 w-[200px]" />
            </section>
        </div>
    );
};
export default Loading;