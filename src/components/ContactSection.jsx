import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { SiGithub, SiLinkedin } from 'react-icons/si';
const ContactSection = () => {
  return (
    <>
      <div id="contact">
        <h1 className="text-4xl font-fredoka text-primary font-bold mb-6">
          Contact Me
        </h1>
        <div className="flex flex-col gap-4">
          <p>Feel free to contact me.</p>
          <div className="flex flex-row gap-8 mb-12">
            <a
              href="https://www.linkedin.com/in/mercyanodandi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <SiLinkedin size={32} />
            </a>
            <a
              href="https://github.com/mercyano"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <SiGithub size={32} />
            </a>
            <a
              href="mailto:mercyanodandi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <MdEmail size={32} />
            </a>
            <a
              href="https://wa.me/6289691789050/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <IoLogoWhatsapp size={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
