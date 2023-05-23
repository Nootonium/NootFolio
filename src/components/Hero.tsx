function Hero() {
  return (
    <div className='mx-4 flex h-screen max-w-5xl snap-start items-center justify-center sm:mx-10 lg:mx-auto'>
      <div className='h-min rounded-full bg-dark-200 bg-opacity-50 px-8 py-8 text-center shadow-lg lg:px-12'>
        <h1 className='font-Oswald text-4xl text-white md:text-6xl lg:text-8xl'>{`Hi there! I'm Dan,`}</h1>
        <br />
        <p className='font-Oswald text-2xl text-white md:text-4xl lg:text-6xl'>
          {`Aspiring full-stack web developer with a passion for creative problem solving.`}
        </p>
      </div>
    </div>
  );
}
export default Hero;
