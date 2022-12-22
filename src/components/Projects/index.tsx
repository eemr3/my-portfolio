import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api } from '../../services/http';

export default function Projects() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const response = await api.get('/projects.json');
      console.log(response.data);

      setProjectData(response.data);
    };
    getProjects();
  }, []);

  return (
    <section className="min-h-screen pb-24 bg-zinc-900" id="project w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto pt-20 text-center">
          <h2 className="text-5xl text-gray-50 mb-4">MEUS PROJETOS</h2>
          <span className="text-gray-50 text-sm">ESTA É A MINHA HISTÓRIA</span>
        </div>
        <div className="border-b-2 border-gray-50 w-52 my-4"></div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-7 gap-y-20 gap-x-8 lg:w-[90%] xl:w-8/12 m-auto">
        {projectData?.map((item) => (
          <div key={item.id} className="h-96 max-w-md m-auto">
            <Image
              src={item.image}
              alt=""
              className="object-cover h-96"
              width={390}
              height={0}
            />
            <Link href={item.url} target="_blank">
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
