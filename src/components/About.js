import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
const features = [
  {
    name: "Age:",
    description: "21 years old",
    icon: CalendarIcon,
  },
  {
    name: "Email:",
    description: "swarnapudiishwar@gmai.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Jamshedpur,  Jharkhand, India",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7">Get to know more</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
              I am a driven and results-oriented software developer with a strong background in cybersecurity and a passion for AI and machine learning.
              My extensive experience in hackathons has sharpened my problem-solving abilities and honed my collaborative skills, enabling me to excel in fast-paced,
              team-driven environments. I am eager to leverage my technical expertise to tackle complex challenges and drive innovative solutions that make a significant impact.
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://images.unsplash.com/photo-1522504736366-8ea8bccc1e66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Person"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
            <div
  className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
  data-aos="zoom-in"
>
  <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
  <h2 className="text-2xl text-center font-bold tracking-tight">
    Work Experience
  </h2>
  <p className="mt-3 list-item list-inside">
    <strong>SmartInternz</strong> - Salesforce Developer Virtual Internship
  </p>
  <ul className="list-disc list-inside ml-5 mt-1">
    <li>Developed skills in Apex programming, testing, debugging, and setting up VS Code & Salesforce CLI.</li>
    <li>Gained hands-on experience with Lightning Web Components (LWC) and API integration.</li>
    <li>Earned Super Badges in Apex Specialist, Process Automation Specialist, and Developer Super Set.</li>
  </ul>
  <p className="mt-3 list-item list-inside">
    <strong>Coincent.ai</strong> - Brand Ambassador Intern (May 2024 - June 2024)
  </p>
  <ul className="list-disc list-inside ml-5 mt-1">
    <li>Represented the brand in digital campaigns, increasing brand awareness among targeted demographics.</li>
    <li>Collaborated with the marketing team to enhance engagement strategies, leading to an increase in user interactions.</li>
  </ul>
</div>

<div
  className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
  data-aos="zoom-in"
>
  <AcademicCapIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
  <h2 className="text-2xl text-center font-bold tracking-tight">
    Education
  </h2>
  <p className="mt-3 list-item list-inside">
    <strong>SRM University, Andhra Pradesh</strong> - B.Tech in Computer Science and Engineering with Specialization in Cybersecurity
  </p>
  <ul className="list-disc list-inside ml-5 mt-1">
    <li>Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Database Management, Artificial Intelligence, Machine Learning Algorithms, Cybersecurity</li>
    <li>CGPA: 8.05/10.0 (Sep 2021 - Jul 2025)</li>
  </ul>
  <p className="mt-3 list-item list-inside">
    <strong>Chinmaya Vidyalaya, Jharkhand</strong> - Senior Secondary School (Board: CBSE)
  </p>
  <ul className="list-disc list-inside ml-5 mt-1">
    <li>Percentage: 78.6/100</li>
  </ul>
  <p className="mt-3 list-item list-inside">
    <strong>Kerala Public School, Jharkhand</strong> - Secondary School (Board: CBSE)
  </p>
  <ul className="list-disc list-inside ml-5 mt-1">
    <li>Percentage: 76.1/100</li>
  </ul>
</div>

            </div>
            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
