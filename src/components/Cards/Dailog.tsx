import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

interface DialogProjectsProps {
  urlDeploy: string;
  urlGithub: string;
  title: string;
  description?: string;
  image?: string;
  titleicon01: string;
  icon01: string;
  titleicon02: string;
  icon02: string;
  titleicon03: string;
  icon03: string;
  titleicon04: string;
  icon04: string;
  titleicon05: string;
  icon05: string;
}
const DialogProjects = ({
  urlDeploy,
  urlGithub,
  title,
  description,
  image,
  titleicon01,
  icon01,
  titleicon02,
  icon02,
  titleicon03,
  icon03,
  titleicon04,
  icon04,
  titleicon05,
  icon05,
}: DialogProjectsProps) => (
  <Dialog.Portal className="z-50">
    <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
    <Dialog.Content
      className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] 
      lg:max-h-[680px] lg:h-[680px] w-full lg:max-w-[750px] transform -translate-x-1/2 -translate-y-1/2 rounded-[6px]
      bg-white dark:bg-[#5b5b5b] p-5 md:p-10 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
    >
      <section className="hidden lg:block lg:w-[610px] h-[310px] w-full mx-auto bg-[#d7caaa] dark:bg-[#8c8c8c] mt-10">
        <div
          className="w-auto bg-white/30 dark:bg-[#8c8c8c] dark:bg-opacity-30 border-b 
        border-gray-200 dark:border-b-[#8c8c8c] flex items-center p-2 justify-between"
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
        </div>
        <figure className="p-2">
          <Image
            src={image}
            alt={`Imagem do projeto ${title}`}
            width={600}
            height={100}
            className="h-[260px] lg:w-full lg:mx-auto"
          />
        </figure>
      </section>
      <div className="w-full lg:w-[610px] mx-auto">
        <Dialog.Title
          className="text-mauve12 dark:text-white m-0 text-[17px] 
          font-medium mt-8 flex items-center gap-x-2"
        >
          {title}
          <Link
            href={urlGithub ? urlGithub : '#project'}
            target={urlGithub ? '_blank' : ''}
            className={urlGithub ? 'cursor-pointer' : 'cursor-default'}
          >
            <p className="text-gray-800 dark:text-[#fff] text-2xl">
              <i className="devicon-github-original"></i>
            </p>
          </Link>
          <Link
            href={urlDeploy ? urlDeploy : '#project'}
            target={urlDeploy ? '_blank ' : ''}
            className={urlDeploy ? 'cursor-pointer' : 'cursor-default'}
          >
            <p className="text-gray-800 dark:text-[#fff] text-2xl">
              <i className="devicon-chrome-plain"></i>
            </p>
          </Link>
        </Dialog.Title>

        <Dialog.Description className="text-mauve11 dark:text-gray-50 mt-[10px] mb-5 text-[15px] leading-normal">
          {description}
        </Dialog.Description>
        <div className="w-full lg:w-[610px] flex justify-center gap-x-4">
          <div className="flex flex-col items-center">
            <i className={`${icon01} text-[30px] text-gray-800 dark:text-white`}></i>
            <p className="text-gray-800 dark:text-gray-50">{titleicon01}</p>
          </div>
          <div className="flex flex-col items-center">
            <i className={`${icon02} text-[30px] text-gray-800 dark:text-white`}></i>
            <p className="text-gray-800 dark:text-gray-50">{titleicon02}</p>
          </div>
          <div className="flex flex-col items-center">
            <i className={`${icon03} text-[30px] text-gray-800 dark:text-white`}></i>
            <p className="text-gray-800 dark:text-gray-50">{titleicon03}</p>
          </div>
          <div className="flex flex-col items-center">
            <i className={`${icon04} text-[30px] text-gray-800 dark:text-white`}></i>
            <p className="text-gray-800 dark:text-gray-50">{titleicon04}</p>
          </div>
          <div className="flex flex-col items-center">
            <i className={`${icon05} text-[30px] text-gray-800 dark:text-white`}></i>
            <p className="text-gray-800 dark:text-gray-50">{titleicon05}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between"></div>

      <Dialog.Close asChild>
        <button
          className="text-violet11 dark:text-white hover:bg-violet4 dark:hover:bg-[#8c8c8c] focus:shadow-violet7 absolute top-[10px] 
            right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center 
            justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <Cross2Icon />
        </button>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
);

export default DialogProjects;
