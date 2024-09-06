import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import pfp from "../avatar.png";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const navigation = [
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact Me", id: "contact" },
];

export default function Hero() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [weatherPrompt, setWeatherPrompt] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Updated API URL to HTTPS to avoid Mixed Content issue
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const apiKey = "b71bd37c34ad6762415d8f3fb7410bc6";
        const city = "Jamshedpur,Jharkhand";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const weatherCondition = response.data.weather[0].main;
        const sentimentPrompt = generateSentimentPrompt(weatherCondition);
        setWeatherPrompt(sentimentPrompt);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeatherData();
  }, []);

  const generateSentimentPrompt = (weatherCondition) => {
    const weatherConditions = {
      Clear: "It's a beautiful day! How does the clear sky make you feel? ☀️",
      Clouds: "It's a cloudy day. What are your thoughts on the cloudy weather? ☁️",
      Rain: "It's raining in Jamshedpur. How does the rain affect your mood? ☔",
      Drizzle: "It's drizzling outside. How do you feel about this light rain? 🌦️",
      Thunderstorm: "There's a thunderstorm in Jamshedpur. How do you react to thunderstorms? ⛈️",
      Snow: "It's snowing in Jamshedpur! What are your feelings about snow? ❄️",
      Mist: "There's mist in the air. How does the misty weather make you feel? 🌫️",
      Haze: "It's hazy outside. How does the haze affect your mood? 🌫️",
      Fog: "There's fog in Jamshedpur. How do you feel about foggy weather? 🌫️",
      Smoke: "There's smoke in the air. How does the smoky weather make you feel? 🌫️",
      Dust: "It's a dusty day. How do you feel about the dusty weather? 🌫️",
      Sand: "There's sand in the air. How does the sandy weather make you feel? 🌫️",
    };

    return (
      weatherConditions[weatherCondition] ||
      `The weather in Jamshedpur is currently ${weatherCondition}. How does this weather make you feel?`
    );
  };

  const handleToggle = (e) => {
    e.target.checked ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <header className="fixed bg-base-300 shadow-2xl shadow-neutral inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <p className="-m-1.5 p-1.5 font-semibold">PudiIsh</p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.id} // Added key to prevent warning
                to={item.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-sm font-semibold leading-6 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="hidden"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />
              <SunIcon className="swap-off fill-current w-6 h-6" />
              <MoonIcon className="swap-on fill-current w-6 h-6" />
            </label>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/3 overflow-y-auto backdrop-brightness-90 backdrop-blur-2xl bg-transparent px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={handleToggle}
                  checked={theme === "light" ? false : true}
                />
                <SunIcon className="swap-off fill-current w-6 h-6" />
                <MoonIcon className="swap-on fill-current w-6 h-6" />
              </label>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.id} // Added key to prevent warning
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 btn btn-ghost"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-32"
            data-aos="zoom-in"
          >
            <div className="grid justify-center items-center">
              <img
                src={pfp}
                alt="Ishwar Swarnapudi"
                className="w-72 rounded-full drop-shadow-2xl"
              />
            </div>
            <div className="grid justify-center items-center mt-3">
              <div className="text-center">
                <div className="text-2xl tracking-tight sm:text-3xl">
                  Hello, I'm
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Ishwar Swarnapudi
                </h1>
                <p className="mt-6 text-2xl leading-8">
                  <TypeAnimation
                    sequence={[
                      "I'm a Software Developer",
                      2000,
                      "I'm a Cybersecurity Enthusiast",
                      2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: "1em" }}
                  />
                </p>
                <div className="mt-6 text-xl">{weatherPrompt}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
