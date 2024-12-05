import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
import './Home.css';
import AuroraButton from '@/CustomComponents/ArouraButton/AuroraButton';

export default function HeroSection() {
  return (
    <section >
      <div className="hero ">
      <div className="aurora"></div> {/* Aurora overlay */}

      </div>
      <section className="anchor">
        <div className=' hero-content min-h-screen w-full flex flex-col justify-center items-start text-white'>
        <p className="text-2xl sm:text-6xl p-8 mx-auto ">Hi there!</p>
      <p className="text-xl sm:text-4xl p-8 mx-auto">I am Rino, I bring ideas into digital reality</p>
      <p className="text-l sm:text-xl p-8 mx-auto">
      I am a FullStack Developer who can get the job done. Take a look at my work and feel free to reach out for a chat.
      </p>
      <div className='mx-auto'>
      <HashLink smooth to={"#contact"}>
      <AuroraButton text='Contact Me'/>
      </HashLink>
      </div>
      {/* <button className="text-xl mx-auto my-8 p-4 border rounded-md hover:bg-white hover:text-tblue">
        Contact me
      </button> */}
        </div>
</section >

    </section>
  );
}
