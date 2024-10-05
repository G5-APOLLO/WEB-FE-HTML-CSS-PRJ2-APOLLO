import React from 'react';

interface TechnicalSpecificationsProps {
  specifications: { feature: string; value: string }[];
}

const TechnicalSpecifications: React.FC<TechnicalSpecificationsProps> = ({ specifications }) => {
  return (
    <section className="p-4 bg-[#f9f9f9] w-full shadow-md mt-1 flex-grow"> 
      <h2 className="text-center text-3xl font-bold mb-4">Especificaciones Técnicas</h2> 
      <table className="w-full bg-[#f9f9f9]"> 
        <tbody>
          {specifications.map((spec, index) => (
            <tr key={index} className="bg-[#f9f9f9]">
              <td className="py-2 px-4 font-semibold text-left">{spec.feature}</td>
              <td className="py-2 px-4 text-left">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TechnicalSpecifications;
