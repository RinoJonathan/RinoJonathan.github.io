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
        <p className="text-6xl p-8 px-28">Hi there!</p>
      <p className="text-4xl p-8 px-28">I am Rino, I bring ideas into digital reality</p>
      <p className="text-xl p-8 px-28">
        I am a computer science engineering student with a passion for building software. I believe in continuous learning and am eager to take on new challenges. Take a look at my work and feel free to reach out for a chat.
      </p>
      <div className='mx-auto'>
      <AuroraButton/>
      </div>
      {/* <button className="text-xl mx-auto my-8 p-4 border rounded-md hover:bg-white hover:text-tblue">
        Contact me
      </button> */}
        </div>
</section >

    </section>
  );
}
