import Intro from '@/components/intro/page';
import AboutMe from '@/components/aboutme/page';
import Footer from '@/components/footer/page';
import TechStacks from '@/components/techstack/page';

export default function Home() {
  return (
    <main className='mt-10 px-10' >
        <Intro/>
        <AboutMe/>
        <TechStacks/>
        <Footer/>
    </main>
  )
}
