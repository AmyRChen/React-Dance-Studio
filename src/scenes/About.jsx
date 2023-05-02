import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return (
    <section id="about" className="pt-10 pb-24">
      {isAboveMediumScreens ? (
        <div className="md:flex md:justify-between md:gap-16 mt-20">
          <motion.div
            className="md:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              ABOUT <span className="text-red">US </span>
            </p>
            <LineGradient width="w-full" />
            <p className="mt-10 mb-7 text-xl">
              In 2020, AC Dance Studio was founded in a basement studio, and has
              since expanded to welcome students of all ages, backgrounds, and
              experience levels in Taipei, Taiwan.
            </p>
          </motion.div>
        </div>
      ) : (
        <div className="md:flex md:justify-between md:gap-16 mt-1">
          <motion.div
            className="md:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              ABOUT <span className="text-red">US </span>
            </p>
            <LineGradient width="w-full" />
            <p className="mt-10 mb-7 text-xl">
              In 2020, AC Dance Studio was founded in a basement studio, and has
              since expanded to welcome students of all ages, backgrounds, and
              experience levels in Taipei, Taiwan.
            </p>
          </motion.div>
        </div>
      )}

      <div className="md:flex md:justify-between  gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-24">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl">01</p>
              <p className="font-playfair font-semibold text-3xl">
                In-person Class
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-1">
            AC's physical location holds up to 5 classes a day. Classes can be
            either booked on the AC website or through the AC DANCE STUDIO app.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-24">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl">02</p>
              <p className="font-playfair font-semibold text-3xl">
                Online Class
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-1">
            Online classes are offered on a variety of platforms, including on
            the AC Dance Studio app and on AC's YouTube channel.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-24">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl">03</p>
              <p className="font-playfair font-semibold text-3xl">
                Instructors
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-1">
            Our instructor is highly experienced and skilled in various dance
            styles, providing engaging lessons that cater to all levels of
            students.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
