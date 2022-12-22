import { useFormik } from 'formik';
import Image from 'next/image';
import React from 'react';
import NavBar from '../../components/NavBar';
import { projectSchema } from '../../helpers/projectSchemas';

export default function Admin() {
  const formik = useFormik({
    initialValues: {
      title: '',
      urlImage: '',
      urlProject: '',
    },
    validationSchema: projectSchema,
    onSubmit: async (values, actions) => {
      try {
        await fetch('/api/project', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: values.title,
            urlProject: values.urlProject,
            urlImage: values.urlImage,
          }),
        });
        actions.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <NavBar />
      <div className="pt-32 w-full h-screen flex flex-col items-center bg-zinc-300">
        <div>
          <Image
            className="mx-auto h-12 w-auto"
            src="/logo.svg"
            alt="Your Company"
            width={0}
            height={0}
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Área administrativa
          </h2>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-10 space-y-6 flex flex-col w-1/3"
        >
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="title" className="sr-only">
                Titulo do projeto
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                required
                className="relative block w-full appearance-none rounded-none 
                rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
                 placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4"
                placeholder="Titulo do projeto"
              />
            </div>
            <div>
              <label htmlFor="urlProject" className="sr-only">
                Url do projeto
              </label>
              <input
                type="text"
                id="urlProject"
                name="urlProject"
                value={formik.values.urlProject}
                onChange={formik.handleChange}
                placeholder="Url do projeto"
                required
                className="relative block w-full appearance-none rounded-none 
                rounded-b-md border border-gray-300 px-3 py-2 text-gray-900
                 placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4"
              />
            </div>
            <div>
              <label htmlFor="urlImage" className="sr-only">
                Url da imagem
              </label>
              <input
                type="text"
                id="urlImage"
                name="urlImage"
                value={formik.values.urlImage}
                onChange={formik.handleChange}
                placeholder="Url da imagem"
                required
                className="relative block w-full appearance-none rounded-none 
                rounded-b-md border border-gray-300 px-3 py-2 text-gray-900
                 placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
