import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] bg-black">
      {/* Background Image */}
      <img
        src="/images/hero/hero-illustration.png"
        alt="Student working on a laptop"
        className="absolute inset-0 w-full h-full object-cover object-left md:object-left"
      />

      {/* Overlay */}
      <div className="relative z-10 flex items-center justify-end h-full w-full px-6 md:px-16">
        <div className="max-w-xl text-right text-white space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Build a Standout Profile for College Admissions
          </h1>
          <p className="text-lg sm:text-xl">
            Research. Projects. Test Prep. Everything you need to apply with confidence — in one program.
          </p>
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            {/* Google Calendar – Free Profile Review */}
            <Link
              href="https://calendar.app.google/AjdfRxWfNVLqkLif7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/80"
            >
              📩 Book a Free Profile Review
            </Link>

            {/* WhatsApp Chat */}
            <Link
              href="https://wa.me/918197924637?text=Hi%20I%20came%20across%20Pathwise%20and%20would%20love%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100"
            >
              💬 Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Optional: Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-[1]" />
    </section>
  );
};

export default Hero;
