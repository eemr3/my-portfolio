import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Aqui dizemos que esse componente só deve ser mostrado
  // depois da página carregada. Isso evita que o ícone
  // errado apareça antes do next-themes saber se deve
  // carregar o tema dark ou o tema light
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Uma função simples para verificar qual tema está ativo
  function isDark() {
    console.log(theme);
    return theme === 'dark';
  }
  // const handleDarkAndLigthMode = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');

  //     document.documentElement.classList.add('dark');
  //   } else {
  //     setTheme('light');

  //     document.documentElement.classList.remove('dark');
  //   }
  // };

  return (
    <header
      className="w-full min-h-screen bg-[#efe1bd] dark:bg-[#494949] 
      flex flex-col justify-center items-center bg-fixed"
    >
      <div className="flex justify-center items-center flex-col sm:w-4/12">
        <Image src="/image-header.svg" alt="" width={100} height={100} />
        <h1
          className="
          text-gray-900 dark:text-white border-white text-2xl
          lg:text-4xl 2xl:text-5xl my-5"
        >
          Emerson Moreira
        </h1>
        <div className="border-b-2 border-gray-900 dark:border-white w-full my-3" />
        <TypeAnimation
          className="text-sm lg:text-3xl 2xl:text-4xl mt-3 text-gray-900 dark:text-white"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Desenvolvedor Web Full Stack',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            '',
            500,
            'Desenvolvedor Font-End',
            1000,
            '',
            500,
            'Desenvolvedor Back-End',
            1000,
            '',
            1000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />
      </div>
      <div
        className="mt-6 flex justify-center items-center w-[50px] h-[50px] rounded-full 
        hover:bg-[#f4d690] dark:hover:bg-[#3b3b3b]"
      >
        <button
          onClick={() => setTheme(isDark() ? 'light' : 'dark')}
          aria-label="Theme toggle"
        >
          {isDark() ? (
            <BiSun className="lg:text-3xl text-white" />
          ) : (
            <BiMoon className="lg:text-3xl text-gray-800" />
          )}
        </button>
      </div>
    </header>
  );
}
