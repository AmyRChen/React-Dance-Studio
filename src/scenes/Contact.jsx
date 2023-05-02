import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contact_bg from "../assets/contact_img.jpg";

const Contact = () => {
  const {
    register, //Identify input
    trigger, //helps validation
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      //After it validates
      e.preventDefault();
    }
  };
  return (
    <section
      id="contact"
      className="py-40 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${contact_bg})` }}
    >
      {/* HEADINGS */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {" "}
        <div>
          <p className="font-playfair font-semibold text-4xl mr-36">
            CONTACT US <span className="text-red">TO GET STARTED</span>
          </p>
          <div className="flex md:justify-end my-5 mr-36 ml-auto">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM*/}
      <div className="md:flex md:justify-between gap-16 mt-5 mr-36">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        ></motion.div>

        <motion.div
          className="basis-1/2 mt-10 ms:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/2ce0efe3743ae9f0258b0b4dea9513c3"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 opacity-70"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters."}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 opacity-70"
              type="text"
              placeholder="YOUR EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 opacity-70"
              type="text"
              placeholder="MESSAGE"
              rows="2"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "maxLength" &&
                  "Max length is 2000 characters."}
              </p>
            )}
            <button
              type="submit"
              className="p-3 bg-yellow font-semibold opacity-70 text-deep-blue mt-5 hover:bg-red 
                hover:text-white transition duration-500"
            >
              SEND AC DANCE STUDIO A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
