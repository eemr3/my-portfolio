import Link from 'next/link';

interface ActionLinkProps {
  urlGithub: string;
  urlDeploy: string;
  title: string;
  description?: string;
}
export default function ActionLink({
  urlDeploy,
  urlGithub,
  title,
  description,
}: ActionLinkProps) {
  return (
    <div className="flex h-full w-full space-x-4">
      <div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-[#fff]0">{title}</h3>

        <p className="mt-1 text-sm font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <footer className="py-3 px-2 w-[390px] lg:w-auto flex items-center justify-center gap-x-4">
          <Link
            href={urlGithub ? urlGithub : '#project'}
            target={urlGithub ? '_blank' : ''}
            className={urlGithub ? 'cursor-pointer' : 'cursor-not-allowed'}
          >
            <p className="text-gray-800 dark:text-[#fff]0 text-2xl">
              <i className="devicon-github-original"></i>
            </p>
          </Link>
          <Link
            href={urlDeploy ? urlDeploy : '#project'}
            target={urlDeploy ? '_blank ' : ''}
            className={urlDeploy ? 'cursor-pointer' : 'cursor-not-allowed'}
          >
            <p className="text-gray-800 dark:text-[#fff]0 text-2xl">
              <i className="devicon-chrome-plain"></i>
            </p>
          </Link>
        </footer>
      </div>
    </div>
  );
}
