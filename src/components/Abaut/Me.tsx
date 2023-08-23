import React from 'react';

export default function Me() {
  return (
    <div
      className="bg-white border border-gray-200 dark:border dark:border-[#6D6D6D] 
      dark:bg-[#6D6D6D] rounded-[0.25rem]"
    >
      <div
        className="w-auto bg-white/30 dark:bg-[#494949] dark:bg-opacity-30 border-b 
        border-gray-200 dark:border-b-[#494949] flex items-center p-2 justify-between"
      >
        <div className="flex text-[13px] gap-x-[2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 64 64"
            className="iconify"
            data-icon="emojione:red-circle"
            data-inline="false"
            style={{ transform: 'rotate(360deg)' }}
          >
            <circle cx="32" cy="32" r="30" fill="#ed4c5c"></circle>
          </svg>{' '}
          &nbsp;{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 36 36"
            className="iconify"
            data-icon="twemoji:yellow-circle"
            data-inline="false"
            style={{ transform: 'rotate(360deg)' }}
          >
            <circle cx="18" cy="18" r="18" fill="#FDCB58"></circle>
          </svg>{' '}
          &nbsp;{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 36 36"
            className="iconify"
            data-icon="twemoji:green-circle"
            data-inline="false"
            style={{ transform: 'rotate(360deg)' }}
          >
            <circle cx="18" cy="18" r="18" fill="#78B159"></circle>
          </svg>
        </div>
        <div className="w-[85%] pr-10">
          <p className="text-gray-900 dark:text-white text-center font-semibold ">
            Quem eu sou!
          </p>
        </div>
      </div>
      <div
        className="text-justify ml-3 mr-3 p-2"
        style={{
          height: 'auto',
          fontSize: '132%',
          lineHeight: '200%',
        }}
      >
        <p className="text-base text-justify text-gray-600 dark:text-white">
          Desenvolvedor Web Full Stack Jr, sou apaixonado por tecnologia, principalmente
          área de desenvolvimento, estou sempre disposto a encarar novos desafios e
          aprender novas tecnologias, e culturas que engajam e impactam na vida de outras
          pessoas, gosto de estar em ambientes colaborativos, com alto nível de
          diversidade, onde podemos nos comunicar e nos desenvolver com outras pessoas que
          também prezam por conexões humanas. Com muita vontade de contribuir através da
          tecnologia para um mundo melhor, tenho foco em me tornar um desenvolvedor Full
          Stack. Realizei projetos como estudante em minha trajetória na Trybe, utilizando
          as tecnologias como: ReactJs, JavaScript, HTML5, CSS3, Bootstrap, GIT, Github,
          Docker, NodeJs, TypeScript, MySQL e MongoDB, e atualmente estou atuando com dev
          backend e tech lead em um projeto voluntário chamado Findy.
        </p>
      </div>
    </div>
  );
}
