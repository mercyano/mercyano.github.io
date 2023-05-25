import heroImg from '../assets/heroImg.svg';
const AboutSection = () => {
  return (
    <>
      <div className="my-10" id="about">
        <div className="flex flex-col items-center justify-between md:flex-row gap-12 gap-y-4">
          {/* Hero Image */}
          <div className="w-40 h-auto">
            <img src={heroImg} alt="" />
          </div>

          {/* About Content */}
          <div className="flex flex-col flex-1 gap-y-4">
            <h1 className="text-4xl font-fredoka">
              Hi! I&#39;m{' '}
              <span className="text-primary font-bold">Mercyano</span>
            </h1>
            <p>
              I&#39;m a fast learner and tech enthusiast experienced with
              various tech stacks. Currently, my passions lie in web development
              and machine learning. I&#39;m actively seeking job opportunities
              to contribute my skills and passion to innovative teams.
            </p>

            {/* Button */}
            <div className="flex flex-row gap-x-4">
              <a
                href="#contact"
                className="bg-primary p-2 border-2 hover:bg-secondary hover:drop-shadow-[5px_5px_black] transition-all"
              >
                Contact
              </a>
              <a
                href="#"
                className="bg-primary p-2 border-2 hover:bg-secondary hover:drop-shadow-[5px_5px_black] transition-all"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
