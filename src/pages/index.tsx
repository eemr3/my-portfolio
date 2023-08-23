import Abaut from '../components/Abaut';
import Footer from '../components/Footer';
import Header from '../components/Headers';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import TestimonialCard from '../components/Testimonials/TestimonialCard';
import { cmsService } from '../infra/cms/cmsService';

export default function Home({ content }: any) {
  return (
    <>
      <NavBar />
      <Header />
      <Abaut />
      <Projects data={content} />
      <Skills />
      <Testimonials />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await cmsService();

  return {
    props: {
      content: data.allProjectCards,
    },
    revalidate: 10, //segundos
  };
}
