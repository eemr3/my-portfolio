import { dataIconsSkills } from '../../helpers/data-icons-skills';

export default function Skills() {
  return (
    <section className="bg-[#1F1F1F] py-10 md:py-20" id="skills">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl text-[#fff] mb-2">HABILIDADES</h2>
          <p className="text-xs md:text-sm text-[#fff] mt-2 md:mt-3">
            AQUI ESTÁ MEU ARMAMENTO
          </p>
        </div>
        <div className="border-b-2 border-gray-900 w-32 md:w-52 my-2 md:my-4"></div>
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
        gap-4 md:gap-6 mt-6 md:mt-9 max-w-4xl mx-auto items-center"
      >
        {dataIconsSkills.map((icon) => (
          <div
            key={icon.id}
            className="flex flex-col justify-center
               items-center text-[#fff] w-[100px] 
               h-[85px] bg-[#2A2929] rounded-md p-2 gap-y-1"
          >
            <i className={icon.icon} style={{ fontSize: '220%' }}></i>
            <p className="text-[13px] ">{icon.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
