import Image from 'next/image';
import Link from 'next/link';
import { PorpsProject } from '../../helpers/interfaces';

export default function Projects({ data }: PorpsProject) {
  return (
    <section className="min-h-screen pb-24 bg-zinc-900 w-full" id="project">
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto pt-20 text-center">
          <h2 className="text-5xl text-gray-50 mb-4">MEUS PROJETOS</h2>
          <span className="text-gray-50 text-sm">ESTA É A MINHA HISTÓRIA</span>
        </div>
        <div className="border-b-2 border-gray-50 w-52 my-4"></div>
      </div>
      <div
        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-7
       gap-y-20 gap-x-8 lg:w-[90%] xl:w-8/12 m-auto"
      >
        {data.map((item) => (
          <div key={item.id} className="h-72 max-w-md m-auto">
            <Image
              src={item.imageProject.url}
              alt=""
              className="object-cover h-72"
              width={390}
              height={0}
            />
            <Link href={item.urlProject} target="_blank">
              <p className="text-gray-900 text-xl text-center bg-gray-50 py-3 px-2 w-[390px] lg:w-auto">
                <span className="text-orange-400">&lt;</span>
                {item.title}
                <span className="text-orange-400">&#47;&gt;</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
