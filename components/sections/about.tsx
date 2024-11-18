import { CheckCircle, Handshake } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="flex py-20">
      <div className="container">
        <div className="flex flex-col">
          <h1 className="flex text-4xl font-extrabold lg:text-5xl text-primary gap-x-1 drop-shadow">
            About Us <Handshake className="text-muted-foreground" />
          </h1>
          <p className="text-sm text-muted-foreground lg:text-base">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="flex flex-col mt-10 lg:mt-20 lg:flex-row">
          <div className="flex flex-col lg:pr-8 basis-1/2 lg:gap-y-8 gap-y-4">
            <strong className="text-xl md:text-2xl lg:text-3xl">
              Who We Are?
            </strong>
            <p className="text-sm lg:text-base text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nemo tempore non nostrum iure, repellendus debitis
              delectus perferendis. Libero suscipit sunt culpa recusandae quae
              perspiciatis, commodi illo velit earum ipsum.
            </p>

            <ul className="flex flex-col gap-y-2">
              {[
                "14+ years of industry experience",
                "5000+ satisfied customers",
                "100% satisfaction guaranteed",
                "Eco-friendly cleaning solutions",
              ].map((item, i) => {
                return (
                  <li
                    key={i}
                    className="flex items-center text-sm lg:text-base gap-x-2"
                  >
                    <CheckCircle className="text-primary size-5 lg:size-6" />{" "}
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative flex mt-10 lg:mt-0 basis-1/2">
            <img
              src="/about.jpg"
              alt="about image"
              className="object-cover w-full h-full shadow-md shadow-gray-400 dark:shadow-none"
            />
            <div className="absolute w-full h-full -top-3 -right-3 -z-10 bg-gradient-to-l from-primary to-emerald-300"></div>
          </div>
        </div>

        <div className="w-full h-[1px] lg:my-24 my-16 bg-border"></div>

        <div className="flex flex-col lg:flex-row-reverse">
          <div className="flex flex-col lg:pl-8 basis-1/2 lg:gap-y-8 gap-y-4">
            <strong className="text-xl md:text-2xl lg:text-3xl">
              Who We Are?
            </strong>
            <p className="text-sm lg:text-base text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nemo tempore non nostrum iure, repellendus debitis
              delectus perferendis. Libero suscipit sunt culpa recusandae quae
              perspiciatis, commodi illo velit earum ipsum.
            </p>

            <ul className="flex flex-col gap-y-2">
              {[
                "14+ years of industry experience",
                "5000+ satisfied customers",
                "100% satisfaction guaranteed",
                "Eco-friendly cleaning solutions",
              ].map((item, i) => {
                return (
                  <li
                    key={i}
                    className="flex items-center text-sm lg:text-base gap-x-2"
                  >
                    <CheckCircle className="text-primary size-5 lg:size-6" />{" "}
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative flex mt-10 lg:mt-0 basis-1/2">
            <img
              src="/pexels-mastercowley-713297.jpg"
              alt="about image"
              className="object-cover w-full h-full shadow-md shadow-gray-400 dark:shadow-none"
            />
            <div className="absolute w-full h-full -top-3 -left-3 -z-10 bg-gradient-to-r from-primary to-emerald-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
