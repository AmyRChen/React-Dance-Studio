const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover: opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover: opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>

      <a
        className="hover: opacity-50 transition duration-500 pd-10"
        href="https://www.github.com"
        target="blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" width="13.5%" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
