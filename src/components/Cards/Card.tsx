import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import DialogProjects from './Dailog';

interface RootCardProps {
  children: React.ReactNode;
  urlDeploy: string;
  urlGithub: string;
  title: string;
  description: string;
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

const RootCard = ({
  children,
  title,
  description,
  urlDeploy,
  urlGithub,
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
}: RootCardProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className="max-w-[403.11px] rounded-lg bg-white dark:bg-[#6d6d6d] shadow-normal-lg
          p-2.5 cursor-pointer hover:scale-105 transition duration-500 ease-in-out transform 
          hover:shadow-hover-3xl"
        >
          {children}
        </div>
      </Dialog.Trigger>
      <DialogProjects
        title={title}
        description={description}
        urlDeploy={urlDeploy}
        urlGithub={urlGithub}
        image={image}
        titleicon01={titleicon01}
        icon01={icon01}
        titleicon02={titleicon02}
        icon02={icon02}
        titleicon03={titleicon03}
        icon03={icon03}
        titleicon04={titleicon04}
        icon04={icon04}
        titleicon05={titleicon05}
        icon05={icon05}
      />
    </Dialog.Root>
  );
};

export { RootCard };
