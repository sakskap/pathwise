import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Ananya R.",
    designation: "Student – Grade 12, Bangalore",
    content:
      "Before Pathwise, I wasn’t sure how to stand out. The support I got helped me launch a real coding project and write a research essay I submitted to a student journal.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Sung-Min K.",
    designation: "Parent – Seoul, South Korea",
    content:
      "My son was overwhelmed by test prep programs. Pathwise gave him a space to think deeply, explore coding, and prepare with purpose — not pressure.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Aryan J.",
    designation: "Student – CS Applicant",
    content:
      "The Pathwise mentors helped me frame my academic journey, build my portfolio, and actually enjoy the process. It’s so much more than just tutoring.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          title="What Students and Families Say"
          paragraph="Pathwise helps students connect their learning to real outcomes — whether that's a coding project, a journal publication, or a stronger college application."
          center // Ensures dark heading
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
