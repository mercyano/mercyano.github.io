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
            <p>Web | Mobile | Artificial Intelligence</p>
            <p>
              I&#39;m a web and mobile developer with expertise in artificial
              intelligence. I&#39;m eager to collaborate with prospective
              clients on innovative projects, leveraging my diverse skills to
              create cutting-edge solutions. Feel free to contact me to discuss
              your software needs.
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
                href="https://docs.google.com/document/d/1xapeK9xG_66ukife3QNoHmHB6fDh9g2w/edit?usp=share_link&ouid=116995472747169890715&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
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
