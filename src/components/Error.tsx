import React from 'react';
import { importImage } from '../utils/importImage';

interface ErrorMessageProps {
    Error_Message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps>  = ({Error_Message}) => {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">{Error_Message}</h2>
            <section className="flex justify-center">
                <img src={importImage("cancelar.png")} alt="Error" className="w-[150px]" />
            </section>
        </div>
    );
};

export default ErrorMessage;
