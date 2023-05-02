const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://"
        target="blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" width="90%" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://"
        target="blank"
        rel="noreferrer"
      >
        <img alt="youtube-link" src="../assets/youtube.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 pd-10"
        href="https://"
        target="blank"
        rel="noreferrer"
      >
        <img alt="location-link" src="../assets/google_map.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
