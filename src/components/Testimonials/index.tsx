import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Dárcio Nuno Carvalho',
      ocupation: 'Desenvolvedor Front-end',
      text: `Emerson é um ótimo profissional, dedicado, pró-ativo e trabalha em prol da equipe com o objetivo de alcançar a melhor entrega no projeto. Está sempre a disposição para ajudar os seus liderados dando o suporte necessário para concluir as tarefas. 
      Uma excelente pessoal com o qual tenho o prazer de trabalhar no projeto Findy.`,
      image: 'https://avatars.githubusercontent.com/u/48179708?v=4',
      github: 'Github',
      githubUrl: 'https://github.com/DarcioCarvalho',
      linkedin: 'Linkedin',
      linkedinUrl: 'https://www.linkedin.com/in/darcio-nuno-carvalho',
    },
    {
      id: 2,
      name: 'Jéssica Santana',
      ocupation: 'Analista Desenvolvedor de Sistemas na Stefanini',
      text: 'Profissional incrível, muito responsável! Um ótimo líder técnico e companheiro de equipe, sempre disposto a ajudar. Foi um prazer pra mim trabalhar com você em um projeto tão especial pra nós Juninhos como o projeto Findy!',
      image: 'https://i.ibb.co/dD03Zzv/IMG-20220905-WA0000.jpg',
      github: 'Github',
      githubUrl: 'https://github.com/DJehSantana',
      linkedin: 'Linkedin',
      linkedinUrl: 'https://www.linkedin.com/in/jessica-santana-developer/',
    },
    // {
    //   id: 3,
    //   name: 'Rafael Souza',
    //   ocupation: 'Desenvolvedor Front-end',
    //   text: 'Acompanhei Rafa durante sua formação como desenvolvedor web aqui na Cubos Academy  e fiquei impressionado com suas habilidades tanto no back-end quanto no front-end. Sua liderança, excelente comunicação não-violenta , clara e proatividade para propor algo novo foram características marcantes que realmente se destacaram. Em várias ocasiões, observei Rafa propondo novas soluções para alguns problemas enfrentado por ele ou sua eventual equipe durante o curso. Além disso, sua experiência em design foi um bônus incrível para os projeto que tiveram sua participação ou realizados por ele no curso. Recomendo fortemente Rafa para qualquer empresa que esteja procurando por um desenvolvedor web altamente competente, criativo e comprometido. Ele é um profissional exemplar que sempre presa pela excelência do trabalho.',
    //   image: 'https://avatars.githubusercontent.com/u/104039671?v=4',
    //   github: 'Github',
    //   githubUrl: 'url do github',
    //   linkedin: 'Linkedin',
    //   linkedinUrl: 'url do linkedin',
    // },
    // {
    //   id: 4,
    //   name: 'Sara',
    //   ocupation: 'Desenvolvedor Front-end',
    //   text: 'Acompanhei Rafa durante sua formação como desenvolvedor web aqui na Cubos Academy  e fiquei impressionado com suas habilidades tanto no back-end quanto no front-end. Sua liderança, excelente comunicação não-violenta , clara e proatividade para propor algo novo foram características marcantes que realmente se destacaram. Em várias ocasiões, observei Rafa propondo novas soluções para alguns problemas enfrentado por ele ou sua eventual equipe durante o curso. Além disso, sua experiência em design foi um bônus incrível para os projeto que tiveram sua participação ou realizados por ele no curso. Recomendo fortemente Rafa para qualquer empresa que esteja procurando por um desenvolvedor web altamente competente, criativo e comprometido. Ele é um profissional exemplar que sempre presa pela excelência do trabalho.',
    //   image: 'https://avatars.githubusercontent.com/u/111992494?v=4',
    //   github: 'Github',
    //   githubUrl: 'url do github',
    //   linkedin: 'Linkedin',
    //   linkedinUrl: 'url do linkedin',
    // },
    // {
    //   id: 5,
    //   name: 'Rafael',
    //   ocupation: 'Desenvolvedor Full Stack',
    //   text: 'Acompanhei Rafa durante sua formação como desenvolvedor web aqui na Cubos Academy  e fiquei impressionado com suas habilidades tanto no back-end quanto no front-end. Sua liderança, excelente comunicação não-violenta , clara e proatividade para propor algo novo foram características marcantes que realmente se destacaram. Em várias ocasiões, observei Rafa propondo novas soluções para alguns problemas enfrentado por ele ou sua eventual equipe durante o curso. Além disso, sua experiência em design foi um bônus incrível para os projeto que tiveram sua participação ou realizados por ele no curso. Recomendo fortemente Rafa para qualquer empresa que esteja procurando por um desenvolvedor web altamente competente, criativo e comprometido. Ele é um profissional exemplar que sempre presa pela excelência do trabalho.',
    //   image: 'https://avatars.githubusercontent.com/u/68519691?v=4',
    //   github: 'Github',
    //   githubUrl: 'url do github',
    //   linkedin: 'Linkedin',
    //   linkedinUrl: 'url do linkedin',
    // },
    // ... Adicione mais depoimentos aqui
  ];

  // Dividindo os depoimentos em grupos de 3 para exibir por páginação
  const testimonialsGroups = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialsGroups.push(testimonials.slice(i, i + 3));
  }

  return (
    <div
      id="testimonials"
      className="min-h-[700px] py-14 bg-[#efe1bd] dark:bg-[#494949] w-full"
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl text-gray-800 dark:text-[#fff] mb-2 uppercase">
          Depoimentos
        </h2>
        <p className="text-xs md:text-sm text-gray-800 dark:text-[#fff] mt-2 md:mt-3 uppercase">
          O que dizem sobre mim
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto mt-8">
        {testimonials.map((group) => (
          <TestimonialCard key={group.id} testimonial={group} />
        ))}
      </div>
    </div>
  );
}
