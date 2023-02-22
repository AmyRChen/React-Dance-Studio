const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/amy-chen-6827531aa/"
        target="blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com/chenpr?igshid=YmMyMTA2M2Y="
        target="blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 pd-10"
        href="https://github.com/AmyRChen?tab=repositories"
        target="blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" width="13%" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
