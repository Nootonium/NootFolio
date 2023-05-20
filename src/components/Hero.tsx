function Hero() {
  return (
    <div className='relative flex h-screen snap-start items-center justify-center' id='home'>
      <div className='absolute flex h-min items-center justify-center bg-white bg-opacity-50 shadow-lg'>
        <p className='text-left text-2xl md:text-4xl lg:text-6xl'>
          {`Hi there!`}
          <br />
          {`I'm Dan,`}
          <br />
          {`Aspiring full-stack web developer with a passion for creative problem solving.`}
        </p>
      </div>
    </div>
  );
}
export default Hero;
