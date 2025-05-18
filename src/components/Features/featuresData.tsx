import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <div className="flex justify-center mb-4">
        <img src="/images/icons/feature-1.png" alt="Student-Led Research Icon" className="h-28 w-24 object-contain rounded-2xl shadow-lg" />
      </div>
    ),
    title: "Student-Led Research",
    paragraph:
      "We guide students to design, execute, and publish original research projects that demonstrate depth, initiative, and intellectual curiosity."
  },
  {
    id: 2,
    icon: (
      <div className="flex justify-center mb-4">
        <img src="/images/icons/feature-2.png" alt="Software Projects Icon" className="h-28 w-24 object-contain rounded-2xl shadow-lg" />
      </div>
    ),
    title: "Real-World Software Projects",
    paragraph:
      "From ideation to deployment, we help students build full-stack applications, develop engineering fundamentals, and publish standout portfolio work."
  },
  {
    id: 3,
    icon: (
      <div className="flex justify-center mb-4">
        <img src="/images/icons/feature-3.png" alt="Test Prep Icon" className="h-28 w-24 object-contain rounded-2xl shadow-lg" />
      </div>
    ),
    title: "Standardized Test Prep",
    paragraph:
      "Our tailored SAT, GRE, and language prep tracks help students achieve competitive scores with minimal stress through expert-led instruction."
  }
];

export default featuresData;
