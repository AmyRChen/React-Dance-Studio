import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";
import clip from "../assets/landingVideo.mp4";

const Landing = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/*IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <video
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            autoPlay
            loop
            muted
          >
            <source src={clip} type="video/mp4" />
          </video>
        ) : (
          <video
            className="flex justify-center item-center"
            autoPlay
            loop
            muted
          >
            <source src={clip} type="video/mp4" />
          </video>
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-8xl font-playfair z-10 text-center md:text-start ml-32 mt-auto">
            Everything Has {""}
            <span
              className="xs:relative xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-right-[30px] before:-top-[40px] before:z-[-1]"
            >
              Rhythm
            </span>
          </p>
          <p className="text-3xl ml-32 mt-6">
            Join AC Dance Studio to find your own.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start ml-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};
export default Landing;
