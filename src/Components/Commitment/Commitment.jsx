import React from "react";

const Commitment = () => {
  return (
    <section className="relative w-full bg-[#020617]" aria-labelledby="commitment-heading">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 text-white">

        <div className="w-full max-w-3xl lg:flex-1 mb-4 lg:mb-0">
          <h1 id="commitment-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 leading-tight">
            Your Trusted <br /> IT Partner
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
            Our priority is client satisfaction, performance and long-term reliability.<br className="hidden sm:block" /> We focus on delivering high-quality solutions and digital products.
          </p>
        </div>

        <article className="w-full max-w-xl lg:flex-1 bg-blue-900/20 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8">
          <h2 className="text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illo, officiis quisquam deleniti qui nemo recusandae quidem iste rem maxime!
          </h2>
        </article>

      </div>
    </section>
  );
};

export default Commitment;