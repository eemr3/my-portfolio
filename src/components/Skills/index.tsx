import Image from 'next/image';
import { dataIcons } from '../../helpers/data-icons';

export default function Skills() {
  return (
    <section className="bg-gray-50 py-10 md:py-20" id="skills">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl mb-2">HABILIDADES</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3">
            AQUI ESTÁ MEU ARMAMENTO
          </p>
        </div>
        <div className="border-b-2 border-gray-900 w-32 md:w-52 my-2 md:my-4"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-6 md:mt-9 max-w-4xl mx-auto items-center">
        {dataIcons.map((icon) => (
          <div key={icon.id} className="flex flex-col items-center">
            <Image
              src={icon.icon}
              alt={icon.alt}
              className="w-20 h-20 mb-1"
              width={0}
              height={0}
            />
            <p>{icon.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
