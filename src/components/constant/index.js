import piano from '../../assets/piano.png'
import guitar from '../../assets/guitar.png'
import yoga from '../../assets/yoga.png'
import math from '../../assets/math.png'

export const NabBarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "#benefits" },
  { id: 3, title: "Courses", path: "#courses" },
  { id: 4, title: "Contact Us", path: "#" },
];



export const benefits = [
  {
    id: 1,
    title: "Share Your Child's Profile",
    description:
      "Contact us on WhatsApp to share insights about your child's learning needs. We customize our approach to suit them best.",
  },
  {
    id: 2,
    title: "Connect with Our Counselor",
    description:
      "Engage in a conversation with our counselor to articulate your expectations. They'll pair your child with the perfect tutor for a trial session.",
  },
  {
    id: 3,
    title: "Schedule the FREE demo!",
    description:
      "Observe your child's active learning experience with our tutors and have all your queries addressed.",
  },
  {
    id: 4,
    title: "Choose your slots and Pay",
    description:
      "Select your preferred slots and make your payment. Begin with a monthly package and renew classes each month. No obligation to commit to 3 or 6 months upfront.",
  },
];



export const courseCategories = ["MUSIC", "FITNESS", "ACADEMIC"];

export const courses = {
  MUSIC: [
    {
      id: 1,
      title: "Piano",
      description: "Unleash your child's musical potential with our piano lessons...",
      image: piano,
    },
    {
      id: 2,
      title: "Guitar",
      description: "Improve your guitar skills with personalized lessons...",
      image: guitar,
    },
  ],
  FITNESS: [
    {
      id: 3,
      title: "Yoga",
      description: "Join our yoga classes to enhance flexibility and mindfulness...",
      image: yoga,
    },
  ],
  ACADEMIC: [
    {
      id: 4,
      title: "Mathematics",
      description: "Boost your problem-solving skills with our math courses...",
      image: math,
    },
  ],
};
