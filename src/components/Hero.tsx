import heroIllu from "../assets/images/illustration-working.svg";
import Button from "./ui/Button";
import Title from "./ui/Title";

const Hero = () => {
  return (
    <section className="overflow-hidden md:flex md:flex-row-reverse md:justify-between md:items-center">
      <div className="md:basis-1/2">
        <img
          src={heroIllu}
          className="transform translate-x-10"
          alt="illustration"
        />
      </div>
      <div className="mt-4 flex flex-col items-center text-center md:text-left md:items-start md:basis-1/3">
        <Title variants="h1">More than just shorter links</Title>
        <p className="my-5 text-grayish-violet font-medium">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="w-1/2">
            <Button variant="rounded">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
