import {
  SiBootstrap,
  SiChakraui,
  SiDart,
  SiFlask,
  SiFlutter,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import project1 from '../assets/cinepedia_landing_page_screenshot.png';
import project5 from '../assets/insightsaham_screenshot.png';
import project4 from '../assets/rebike.png';
import project2 from '../assets/transmedia-career.png';
import project3 from '../assets/wawancaraAI_screenshot.png';

const ProjectSection = () => {
  return (
    <>
      <div id="projects">
        <h1 className="text-4xl font-fredoka text-primary font-bold">
          Projects
        </h1>

        <div className="my-8 flex flex-col gap-y-12 md:gap-y-12">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {/* Project Image */}
            <div className="w-full md:w-3/5 border-2 hover:drop-shadow-[7px_7px_#84fc84] transition-all min-w-[296px] h-[210px] md:h-[280px]">
              <img
                src={project1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="flex flex-col flex-1 gap-y-2 md:gap-y-4">
              <a
                href="https://cinepedia-list.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="font-fredoka md:font-bold underline hover:text-primary text-2xl">
                  Cinepedia
                </h1>
              </a>

              <div>
                <p>
                  Cinepedia is a web application that allows users to search for
                  film titles and view detailed information about the searched
                  films.
                </p>
              </div>

              <div className="flex flex-row gap-4 text-sm">
                <div className="flex flex-row items-center gap-1">
                  <SiJavascript className="" />
                  JavaScript
                </div>
                <div className="flex flex-row items-center gap-1">
                  <SiReact />
                  React
                </div>
                <div className="flex flex-row items-center gap-1">
                  <SiTailwindcss />
                  tailwind
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {/* Project Image */}
            <div className="w-full md:w-3/5 border-2 hover:drop-shadow-[7px_7px_#84fc84] transition-all min-w-[296px] h-[210px] md:h-[280px]">
              <img
                src={project2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="flex flex-col flex-1 gap-y-4 md:gap-y-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.karirtranstv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="font-fredoka md:font-bold underline hover:text-primary text-2xl">
                  TRANSMEDIA Career
                </h1>
              </a>

              <div>
                <p>
                  A mobile app that connecting talented individuals with
                  exciting career opportunities exclusively within the
                  TRANSMEDIA company.
                </p>
              </div>

              <div className="flex flex-row gap-4 text-sm">
                <div className="flex flex-row items-center gap-1">
                  <SiJavascript className="" />
                  JavaScript
                </div>
                <div className="flex flex-row items-center gap-1">
                  <SiReact />
                  React Native
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {/* Project Image */}
            <div className="md:w-3/5 border-2 hover:drop-shadow-[7px_7px_#84fc84] transition-all min-w-[296px] h-[210px] md:h-[280px]">
              <img
                src={project3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="flex flex-col flex-1 gap-y-4 md:gap-y-4">
              <a
                href="https://github.com/mercyano/wawancara-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="font-fredoka md:font-bold underline hover:text-primary text-2xl">
                  WawancaraAI
                </h1>
              </a>

              <div>
                <p>
                  AI-powered website that helps job seekers prepare for job
                  interviews.
                </p>
              </div>

              <div className="flex flex-row gap-4 text-sm">
                <div className="flex flex-row items-center gap-1">
                  <SiJavascript className="" />
                  JavaScript
                </div>
                <div className="flex flex-row items-center gap-1">
                  <SiReact />
                  React
                </div>
                <div className="flex flex-row items-center gap-1">
                  <SiChakraui />
                  chakra
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {/* Project Image */}
            <div className="w-full md:w-3/5 border-2 hover:drop-shadow-[7px_7px_#84fc84] transition-all min-w-[296px] h-[210px] md:h-[280px]">
              <img
                src={project4}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="flex flex-col flex-1 gap-y-4 md:gap-y-4">
              <a
                href="https://github.com/mercyano/REBIKE-Rental-Electric-Bike"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="font-fredoka md:font-bold underline hover:text-primary text-2xl">
                  REBIKE
                </h1>
              </a>

              <div>
                <p>
                  Rent Electric Bicycles with Ease. REBIKE is an innovative
                  mobile app that revolutionizes urban transportation. It offers
                  users a convenient and eco-friendly solution for renting
                  electric bicycles.
                </p>
              </div>

              <div className="flex flex-row gap-4 text-sm">
                <div className="flex flex-row items-center gap-1">
                  <SiDart />
                  Dart
                </div>
                <div className="flex flex-row items-center gap-1">
                  <SiFlutter />
                  Flutter
                </div>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {/* Project Image */}
            <div className="w-full md:w-3/5 border-2 hover:drop-shadow-[7px_7px_#84fc84] transition-all min-w-[296px] h-[210px] md:h-[280px]">
              <img
                src={project5}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="flex flex-col flex-1 gap-y-4 md:gap-y-4">
              <a
                href="https://github.com/mercyano/insightsaham-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="font-fredoka md:font-bold underline hover:text-primary text-2xl">
                  InsightSaham
                </h1>
              </a>

              <div>
                <p>
                  InsightSaham is an innovative AI-powered website designed to
                  simplify the stock selection process for potential investors
                  by providing stock price predictions.
                </p>
              </div>

              <div className="flex flex-row gap-4 text-sm">
                <div className="flex flex-row items-center gap-1">
                  <SiPython />
                  Python
                </div>
                <div className="flex flex-row items-center gap-1">
                  <SiFlask />
                  Flask
                </div>
                <div className="flex flex-row items-center gap-1">
                  <SiBootstrap />
                  Bootstrap
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex mt-12 justify-center md:justify-start">
          <a
            href="https://github.com/mercyano"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary p-2 border-2 hover:bg-secondary hover:drop-shadow-[5px_5px_black] transition-all"
          >
            See more on GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
