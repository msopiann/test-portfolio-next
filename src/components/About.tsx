import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About Me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-green-900 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="text-justify">
        <p className="mb-4">
          Since I was a kid, I&apos;ve been super into the online world,
          especially chilling at internet cafes or{" "}
          <span className="text-white">&apos;warnet&apos; in Indonesia</span>.
          These spots were like my first playgrounds online, where I got to dive
          deep into all sorts of stuff that got me curious. As I got more into
          it, I naturally wanted to know how everything worked, especially how
          data gets put together and shows up on websites.
        </p>

        <p className="mb-4">
          One game-changing moment for me was messing around with the{" "}
          <span className="text-white">&apos;inspect element&apos;</span> tool
          in web browsers. It was like getting a backstage pass to see the
          coding magic behind every website. Those neat lines of code totally
          blew my mind, and I was super keen to dig deeper into the world of
          programming.
        </p>

        <p className="mb-4">
          So, with all this excitement, I jumped into learning programming big
          time. I went on a hunt for resources, signed up for courses, and spent
          heaps of time getting better at it. Every new thing I learned and
          every problem I cracked just made me even more stoked about becoming a
          pro at programming.
        </p>
      </div>
    </section>
  );
}
