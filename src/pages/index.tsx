import Abaut from '../components/Abaut';
import Footer from '../components/Footer';
import Header from '../components/Headers';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { IProjectProps } from '../helpers/interfaces';

export default function Home({ project }: IProjectProps) {
  return (
    <div>
      <NavBar />
      <Header />
      <Abaut />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
