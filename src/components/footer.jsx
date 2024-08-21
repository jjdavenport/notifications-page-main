const Footer = () => {
  return (
    <>
      <footer className="flex justify-center gap-1 text-sm text-grayishBlue">
        Challenge by
        <a
          className="font-extrabold text-veryDarkBlue hover:text-blue"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
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
      </footer>
    </>
  );
};

export default Footer;
