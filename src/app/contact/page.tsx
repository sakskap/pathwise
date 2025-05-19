import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pathwise",
  description: "Get in touch with the Pathwise team for questions, consultations, or enrollment support.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Pathwise"
        description="Have a question or want to learn more? Reach out to us for a free consultation or details about how Pathwise can support your academic journey."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
