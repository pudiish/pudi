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
    description: "swarnapudiishwar@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Bengaluru, Karnataka, India",
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
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
              Curious human trying to make sense of tech ☕. Building cool stuff, breaking it occasionally, 
              and learning something new every day 🚀.
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
    <strong>Moody's Analytics</strong> - Assoc Programmer Analyst (Jul 2025 - Present)
  </p>
  <ul className="list-disc list-inside ml-5 mt-1">
    <li>DevOps practices and AWS deployment automation.</li>
    <li>Infrastructure automation and system reliability improvements.</li>
  </ul>
  <p className="mt-3 list-item list-inside">
    <strong>Salesforce</strong> - Intern (May 2024 - Jun 2024)
  </p>
  <ul className="list-disc list-inside ml-5 mt-1">
    <li>Apex programming, LWC development, and API integration.</li>
  </ul>
  <p className="mt-3 list-item list-inside">
    <strong>Coincent.ai</strong> - Brand Ambassador (Jan 2022 - Sep 2022)
  </p>
  <ul className="list-disc list-inside ml-5 mt-1">
    <li>Digital campaigns and brand awareness initiatives.</li>
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
    <strong>SRM University, AP</strong> - Bachelor of Technology - BTech, Computer Science
  </p>
  <ul className="list-disc list-inside ml-5 mt-1">
    <li>Grade: 9.0/10.0 (Sep 2021 - 2025)</li>
    <li>Specialization in Cybersecurity, AI & ML</li>
  </ul>
  <p className="mt-3 list-item list-inside">
    <strong>Chinmaya Vidyalaya, Jharkhand</strong> - Senior Secondary School (Board: CBSE)
  </p>
  {/* <ul className="list-disc list-inside ml-5 mt-1">
    <li>Percentage: 78.6/100</li>
  </ul> */}
  <p className="mt-3 list-item list-inside">
    <strong>Kerala Public School, Jharkhand</strong> - Secondary School (Board: CBSE)
  </p>
  {/* <ul className="list-disc list-inside ml-5 mt-1">
    <li>Percentage: 76.1/100</li>
  </ul> */}
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
