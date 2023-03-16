import Intro from '@/components/intro/page';
import AboutMe from '@/components/aboutme/page';
import Footer from '@/components/footer/page';
import TechStacks from '@/components/techstack/page';

export default function Home() {
  return (
    <main className='container mx-auto bg-gray-900 h-full' >
        <Intro/>
        <AboutMe/>
        <TechStacks/>
        <Footer/>
    </main>
  )
}
