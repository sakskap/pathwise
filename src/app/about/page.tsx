import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Pathwise",
  description: "Learn how Pathwise supports high school students through mentorship, projects, and personalized academic guidance.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Pathwise"
        description="Pathwise helps ambitious students turn their curiosity into outcomes — through 1:1 mentorship, real-world projects, and deep academic support across writing, test prep, and college readiness."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
