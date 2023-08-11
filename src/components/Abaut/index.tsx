import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaRocket } from 'react-icons/fa';

export default function Abaut() {
  return (
    <section className="min-h-screen bg-gray-50 mb-20" id="about">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="pt-10 pb-6 lg:pt-24 lg:pb-0 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">SOBRE MIM</h1>
            <h2 className="text-sm sm:text-base mt-2 sm:mt-3">
              ESPERO TE CONHECER DEPOIS
            </h2>
          </div>
          <div className="border-b-2 border-gray-900 w-40 sm:w-52 my-4"></div>
          <div className="mb-6">
            <Image
              className="rounded-full"
              src="/eemr3.jpeg"
              alt="Foto perfil Emerson"
              width={180}
              height={180}
            />
          </div>
        </div>
        <div
          className="flex flex-1 flex-col px-5 lg:px-0 lg:grid lg:justify-center 
          lg:items-center md:grid-cols-2 
          lg:gap-56 lg:max-w-5xl lg:m-auto gap-8 mt-8"
        >
          <div>
            <p className="font-bold mb-2">QUEM SOU EU ?</p>
            <p className="text-sm sm:text-base">
              Desenvolvedor Web Full Stack Jr, sou apaixonado por tecnologia ,
              principalmente área de desenvolvimento, estou sempre disposto a encarar
              novos desafios e aprender novas tecnologias, e culturas que engajam e
              impactam na vida de outras pessoas, gosto de estar em ambientes
              colaborativos, com alto nível de diversidade, onde podemos nos comunicar e
              nos desenvolver com outras pessoas que também prezam por conexões humanas.
              Com muita vontade de contribuir através da tecnologia para um mundo melhor,
              tenho foco em me tornar um desenvolvedor Full Stack. Realizei projetos como
              estudante em minha trajetória na Trybe, utilizando as tecnologias como:
              ReactJs, JavaScript, HTML5, CSS3, Bootstrap, GIT, Github, Docker, NodeJs,
              TypeScript, MySQL e MongoDB, e atualmente estou atuando com dev backend e
              tech lead em um projeto voluntário chamado Findy.
            </p>
          </div>
          <div>
            <h2 className="font-bold mb-4">EMERSON MOREIRA</h2>
            <p className="mb-3">
              <span className="font-bold text-gray-500">E-mail: </span>
              eemr3@yahoo.com.br
            </p>
            <p className="mb-3">
              <span className="font-bold text-gray-500">Cidade:</span> Anápolis - GO
            </p>
            <ul className="flex items-center">
              <li className="text-3xl mr-3">
                <Link
                  href="https://www.linkedin.com/in/emerson-moreira/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="text-3xl mr-3">
                <Link href="https://github.com/eemr3" target="_blank" rel="noreferrer">
                  <FaGithub />
                </Link>
              </li>
              <li className="text-3xl">
                <Link
                  href="https://app.rocketseat.com.br/me/emerson-moreira-1566533806"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaRocket />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
