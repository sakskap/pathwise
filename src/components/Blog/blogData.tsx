import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How to Build a Student Portfolio That Actually Stands Out",
    paragraph:
      "A step-by-step guide for high school students on showcasing coding, research, and creative work in a way that college reviewers and recruiters notice.",
    image: "/images/blog/blog-01.jpg", // Update this if you have custom Pathwise visuals
    author: {
      name: "Saksham Kapoor",
      image: "/images/blog/author-01.png",
      designation: "Co-Founder, Pathwise",
    },
    tags: ["portfolio", "college prep"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Why Most Test Prep Fails, And What To Do Differently",
    paragraph:
      "Drilling practice questions only works up to a point. Here’s how strategic coaching, mental modeling, and personalized plans lead to lasting performance.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Ananya R.",
      image: "/images/blog/author-02.png",
      designation: "Academic Mentor",
    },
    tags: ["test prep", "study hacks"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "What Research Looks Like in High School",
    paragraph:
      "You don’t need a PhD to publish. From identifying questions to choosing journals, this guide walks students through publishing their first academic work.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Aryan J.",
      image: "/images/blog/author-03.png",
      designation: "Student Contributor",
    },
    tags: ["research", "student publishing"],
    publishDate: "2025",
  },
];

export default blogData;
