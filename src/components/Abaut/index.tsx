import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaRocket } from 'react-icons/fa';

export default function Abaut() {
  return (
    <section className="min-h-0 bg-gray-50 mb-20" id="about">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="pt-32 text-center">
            <h1 className="text-5xl text- text-gray-900">SOBRE MIM</h1>
            <h2 className="text-sm mt-3">ESPERO TE CONHECER DEPOIS</h2>
          </div>
          <div className="border-b-2 border-gray-900 w-52 my-4"></div>
          <div>
            <Image
              className="rounded-full"
              src="/eemr3.jpeg"
              alt="Foto perfil Emerson"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div
          className="
          flex flex-col
          items-center
          justify-center
          lg:grid
          grid-cols-2
          gap-56
          mt-8
          sm:ml-6
          lg:max-w-5xl
          lg:m-auto
        "
        >
          <div>
            <p className="font-bold mb-4">QUEM SOU EU ?</p>
            <p>
              Desenvolvedor Web Full Stack Jr, sou apaixonado por tecnologia ,
              principalmente área de desenvolvimento, estou sempre disposto a encarar
              novos desafios e aprender novas tecnologias, e culturas que engajam e
              impactam na vida de outras pessoas, adoro estar em ambientes colaborativos,
              com alto nível de diversidade, onde podemos nos comunicar e nos desenvolver
              com outras pessoas que também prezam por conexões humanas. Com muita vontade
              de contribuir através da tecnologia para um mundo melhor, tenho foco em me
              tornar um desenvolvedor Full Stack. Realizei projetos como estudante em
              minha trajetória na Trybe, utilizando as tecnologias como: ReactJs,
              JavaScript, HTML5, CSS3, Bootstrap, GIT, Github, Docker, NodeJs, TypeScript,
              MySQL e MongoDB.
            </p>
          </div>
          <div>
            <h2 className="font-bold mb-4">EMERSON MOREIRA</h2>
            <p className="mb-3">
              <span className="font-bold text-gray-500">E-mail:</span>
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
