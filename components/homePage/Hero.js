import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/kaan.jpg"
          alt="An image showing Kaan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kaan</h1>
      <p>
        I write about web development, engineering and corporate life but most
        of the time you can find me talking about frontend technologies.
      </p>
    </section>
  );
};

export default Hero;
