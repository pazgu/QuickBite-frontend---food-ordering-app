import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <img src={hero} alt="Hamburger and french fries" className="w-full max-h-[500px] object-cover" />
    </div>
  );
};

export default Hero;