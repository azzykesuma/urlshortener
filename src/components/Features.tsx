import brandIcon from "../assets/images/icon-brand-recognition.svg";
import recordsIcon from "../assets/images/icon-detailed-records.svg";
import customizableIcon from "../assets/images/icon-fully-customizable.svg";
import Title from "./ui/Title";

const Features = () => {
  const features = [
    {
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      icon: brandIcon,
    },
    {
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: recordsIcon,
    },
    {
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: customizableIcon,
    },
  ];
  return (
    <section className="text-center md:mb-16">
      <Title variants="h2">Advanced Statistics</Title>
      <p className="my-6 text-grayish-violet font-medium md:max-w-[400px] md:mx-auto">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
  {features.map((feature, i) => (
    <div key={i} className={`bg-white p-6 mb-12 rounded-lg relative z-10 list-${i+1} md:text-left`}>
      <div className="bg-dark-violet w-fit p-4 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 md:-translate-x-0 md:left-6">
        <img src={feature.icon} alt={feature.title} className="w-10 " />
      </div>
      <h3 className="text-dark-violet text-xl font-bold mb-4 mt-10">
        {feature.title}
      </h3>
      <p className="text-grayish-violet font-medium pb-4">
        {feature.description}
      </p>
      {i !== features.length - 1 && (
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-2 bg-cyan h-10 z-0 md:hidden"></div>
      )} 
      {i !== features.length - 1 && (
        <div className={`absolute transform -right-7   translate-y-1/2 w-7 bg-cyan h-2 z-0 hidden md:block ${i === 1 ? 'bottom-[90px]' : 'bottom-[120px]'}`}></div>
      )}
    </div>
  ))}
</div>

    </section>
  );
};

export default Features;
