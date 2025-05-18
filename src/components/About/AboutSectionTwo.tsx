import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-video max-w-[500px] text-center lg:m-0"
            >
              <Image
                src="/images/about/pathwise-dashboard.png"
                alt="Pathwise dashboard preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[480px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl">
                  Real Projects. Real Learning.
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg">
                  At Pathwise, students don’t just study — they build. From launching cross-domain coding projects to contributing to student journals, we help learners turn curiosity into real-world outputs.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl">
                  Personalized Support, Always On
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg">
                  Each learner gets dedicated mentorship and tutoring — across test prep, academic writing, and competitive applications. No bots. Just people who care.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl">
                  A Platform Built for Student Growth
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg">
                  Our dashboard helps students set goals, track skill development, and showcase projects — making growth visible and motivating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
