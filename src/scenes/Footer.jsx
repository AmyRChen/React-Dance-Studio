import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-50 pt-1 bg-red">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow pb-4">
            AC DANCE STUDIO
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 Chen. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
