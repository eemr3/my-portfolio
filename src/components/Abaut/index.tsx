import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaRocket } from 'react-icons/fa';
import Me from './Me';

export default function Abaut() {
  return (
    <section className="min-h-screen bg-[#7F7F7F] pb-20" id="about">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="pt-10 pb-6 lg:pt-24 lg:pb-0 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-4xl text-[#fff]">SOBRE MIM</h1>
            <h2 className="text-sm sm:text-[#fff] mt-2 sm:mt-3">
              ESPERO TE CONHECER DEPOIS
            </h2>
          </div>
          <div className="border-b-2 border-[#fff] w-40 sm:w-52 my-4" />
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
          <Me />

          <div>
            <h2 className="font-bold mb-4 text-[#fff]">EMERSON MOREIRA</h2>
            <p className="mb-3 text-[#fff]">
              <span className="font-bold text-[#fff]">E-mail: </span>
              eemr3@yahoo.com.br
            </p>
            <p className="mb-3 text-[#fff]">
              <span className="font-bold text-[#fff]">Cidade:</span> Anápolis - GO
            </p>
            <ul className="flex items-center text-[#fff]">
              <li className="text-3xl mr-3">
                <Link
                  href="https://www.linkedin.com/in/emerson-moreira/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Linkedin"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="text-3xl mr-3">
                <Link
                  href="https://github.com/eemr3"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <FaGithub />
                </Link>
              </li>
              <li className="text-3xl">
                <Link
                  href="https://app.rocketseat.com.br/me/emerson-moreira-1566533806"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Rocketseat"
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
