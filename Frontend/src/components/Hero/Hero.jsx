import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="Main-Container">
        <div className="Main-Heading">Blog with the Best</div>
        <p id="hero-para">
          More bloggers and independent creators choose Us than any other
          blogging tool.
          <br />
          Tap into intuitive, flexible tools that put writes, bloggers, and
          creators first.
        </p>
        <button id="start">Start a Blog</button>
        <img
          className="hero-image"
          src="https://wpcom.files.wordpress.com/2022/12/create-blog-wang-cheung.jpg"
          alt="image"
        ></img>
      </div>
    </>
  );
};

export default Hero;
