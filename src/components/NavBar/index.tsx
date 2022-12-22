import { signOut } from 'next-auth/react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Sobre', href: '#about', current: false },
  { name: 'Projetos', href: '#project', current: false },
  { name: 'Habilidades', href: '#skills', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const { pathname, push } = useRouter();

  return (
    <Disclosure as="nav" className="bg-opacity-60 bg-zinc-900 w-full fixed z-5 font-sans">
      {({ open }) => (
        <div>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-whit">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 justify-center items-center">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src="/logo.svg"
                    width={0}
                    height={0}
                    alt="Your Company"
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src="/logo.svg"
                    alt="Your Company"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white
                          px-3 py-4 rounded-md font-semibold text-base"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {pathname === '/eemr3/admin' && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="h-8 w-8 rounded-full"
                          src="/eemr3.jpeg"
                          alt=""
                          width={0}
                          height={0}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/login"
                            className={classNames(
                              active ? 'bg-zinc-100' : '',
                              'block px-4 py-2 text-sm text-zinc-700',
                            )}
                          >
                            Admin
                          </a>
                        )}
                      </Menu.Item> */}
                        {pathname === '/eemr3/admin' && (
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => push('/')}
                                className={classNames(
                                  active ? 'bg-zinc-100' : '',
                                  'block px-4 py-2 text-sm text-zinc-700',
                                )}
                              >
                                Sair
                              </button>
                            )}
                          </Menu.Item>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-zinc-900 text-white'
                      : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
