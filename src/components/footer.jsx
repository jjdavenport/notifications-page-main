const Footer = ({ className }) => {
  return (
    <footer
      className={`${className} w-full text-center text-sm font-medium text-grayishBlue`}
    >
      <p>
        Challenge by{" "}
        <a
          className="font-extrabold text-veryDarkBlue hover:text-blue"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="font-extrabold text-veryDarkBlue hover:text-blue"
          href="https://github.com/jjdavenport"
        >
          jjdavenport
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
