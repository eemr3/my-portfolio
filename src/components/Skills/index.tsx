import Image from 'next/image';

export default function Skills() {
  return (
    <section className="min-h-screen bg-gray-50 py-20" id="skills">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-5xl mb-2">HABILIDADES</h2>
          <p className="text-sm text-gray-500 mt-3">AQUI ESTÁ MEU ARMAMENTO</p>
        </div>
        <div className="border-b-2 border-gray-900 w-52 my-4"></div>
      </div>
      <div className="grid lg:grid-cols-5 mt-9 max-w-4xl m-auto gap-y-10 gap-x-2 items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/icons/html5-original.svg"
            alt="Imagem Logo HTML"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/css3-original.svg"
            alt="Imagem Logo CSS"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/javascript-original.svg"
            alt="Imagem Logo JavaScript"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/react-original.svg"
            alt="Imagem Logo React-Js"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>React-Js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/nodejs-original.svg"
            alt="Imagem Logo Node-Js"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>Node-Js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/typescript-original.svg"
            alt="Imagem Logo TypeScript"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/git-original.svg"
            alt="Imagem Logo Git"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>Git</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/github-original.svg"
            alt="Imagem Logo Github"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>Github</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/mysql-original.svg"
            alt="Imagem Logo MySQL"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>MySQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/docker-original.svg"
            alt="Imagem Logo Docker"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>Docker</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/jest-plain.svg"
            alt="Imagem Logo Jest"
            className="w-20 h-20 mb-1"
            width={0}
            height={0}
          />
          <p>Jest</p>
        </div>
      </div>
    </section>
  );
}
