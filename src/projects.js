import sign1Img from "./images/sign-lingo-1.jpg";
import sign2Img from "./images/sign-lingo-2.jpg";
import sign3Img from "./images/sign-lingo-3.jpg";

import recycle1Img from "./images/recycle-iq-1.jpg";
import recycle2Img from "./images/recycle-iq-2.jpg";
import recycle3Img from "./images/recycle-iq-3.jpg";

import wanderlust1Img from "./images/wanderlust-1.jpg";
import wanderlust2Img from "./images/wanderlust-2.jpg";
import wanderlust3Img from "./images/wanderlust-3.jpg";

const projects = [
  {
    title: [
      { text: "American Sign Language", width: 300 },
      { text: "learning platform", width: 210 },
    ],
    images: [sign1Img, sign2Img, sign3Img],
    url: "/work/sign-lingo",
    description:
      "SignLingo provides a game-like experience learning American Sign Language",
  },
  {
    title: [
      { text: "Computer vision", width: 204 },
      { text: "recycling app", width: 168 },
    ],
    images: [recycle1Img, recycle2Img, recycle3Img],
    url: "/work/recycle-iq",
    description:
      "Recycle IQ uses photo recognition software to help people identify items that are recyclable.",
  },
  {
    title: [
      { text: "Tour guide", width: 136 },
      { text: "advertising service", width: 237 },
    ],
    images: [wanderlust1Img, wanderlust2Img, wanderlust3Img],
    url: "https://www.google.com",
    description:
      "Wanderlust helps local tour guides advertise their private tours.",
  },
];

export default projects;
