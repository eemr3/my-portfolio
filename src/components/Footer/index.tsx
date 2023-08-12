import Link from 'next/link';
import { dataIconsSocial } from '../../helpers/data-icons-social';

export default function Footer() {
  return (
    <footer className="footer bg-[#494949] relative pt-1">
      <div className="container mx-auto px-6 flex flex-col items-center py-7">
        <ul className="flex items-center text-gray-100">
          {dataIconsSocial.map((icon) => (
            <li key={icon.id} className="text-2xl mr-3">
              <Link href={icon.url} target="_black" rel="noreferrer">
                <i className={icon.icon}></i>
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:w-2/3 text-center">
          <p className="text-sm text-gray-100 font-normal mt-2">
            © {new Date().getFullYear()} by Emerson Moreira
          </p>
        </div>
      </div>
    </footer>
  );
}
