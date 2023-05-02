import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import breaking from "../assets/breaking.jpg";
import jazz from "../assets/jazz.jpg";
import modern from "../assets/modern.jpg";

const Genres = () => {
  return (
    <section id="genres" className="pt-40 pb-40">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            OUR DANCE<span className="text-red"> GENRES</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-5 mb-28 text-xl">
          We offer a variety of dance genres in which we excel
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <div className="text-2xl font-playfair font-semibold">
            STREET DANCE
          </div>
          <div className="text-2xl font-playfair font-semibold ">
            MODERN DANCE
          </div>
          <div className="text-2xl font-playfair font-semibold ">
            JAZZ DANCE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-lg shadow-md relative overflow-hidden flex justify-center">
            <img
              src={breaking}
              alt="breaking_dance"
              className="w-full h-full object-cover rounded-t-lg transition duration-500 ease-in-out inset-0"
            />
            <div className="p-4 absolute inset-0 transition duration-500 ease-in-out bg-red bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center items-center">
              <h3 className="text-lg font-bold text-white">
                Street dance is a style of dance that originated in the streets
                and clubs of urban areas. It incorporates a range of different
                dance styles such as hip hop, breaking, popping, and locking.
                Street dance is known for its high energy, athleticism, and
                improvisation, and has become popular all around the world
                through competitions, performances, and music videos.
              </h3>
            </div>
          </div>

          <div className="rounded-lg shadow-md relative overflow-hidden flex justify-center">
            <img
              src={modern}
              alt="modern_dance"
              className="w-full h-full object-cover rounded-t-lg transition duration-500 ease-in-out absolute inset-0"
            />
            <div className="p-4 absolute inset-0 transition duration-500 ease-in-out bg-blue bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center items-center">
              <h3 className="text-lg font-bold text-white">
                Modern dance is a style of dance that emerged in the early 20th
                century as a reaction against the rigid techniques of classical
                ballet. It emphasizes the use of gravity and natural movement,
                and incorporates elements such as floor work, improvisation, and
                emotional expression. Modern dance is known for its fluidity,
                freedom of movement, and innovation, and has had a significant
                influence on the development of other contemporary dance styles.
              </h3>
            </div>
          </div>

          <div className="rounded-lg shadow-md relative overflow-hidden flex justify-center">
            <img
              src={jazz}
              alt="jazz_dance"
              className="w-full h-full object-cover rounded-t-lg transition duration-500 ease-in-out absolute inset-0"
            />
            <div className="p-4 absolute inset-0 transition duration-500 ease-in-out bg-yellow bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center items-center">
              <h3 className="text-lg font-bold text-white">
                Jazz dance is a style of dance that originated in the early 20th
                century in African American communities. It incorporates
                elements of African, Caribbean, and European dance forms, as
                well as improvisation and syncopated rhythms. Jazz dance is
                known for its energy, fluidity, and expressive movements, and
                has influenced many other dance styles such as modern and hip
                hop.
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <p className="text-xl">
            Please check the class schedule for more details.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Genres;
