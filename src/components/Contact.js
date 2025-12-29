import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { submitContactForm } from "../services/contactService";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear message when user starts typing again
    if (responseMessage) {
      setResponseMessage("");
      setMessageType("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setMessageType("");

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setResponseMessage(result.message);
        setMessageType("success");
        // Reset form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        // Clear success message after 5 seconds
        setTimeout(() => {
          setResponseMessage("");
          setMessageType("");
        }, 5000);
      } else {
        setResponseMessage(result.message);
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setResponseMessage("Error: Unable to send message. Please try again later.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Contact
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold leading-6"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  required
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="btn btn-outline text-sm w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send it"}
            </button>
          </div>
          {responseMessage && (
            <div
              className={`mt-4 p-4 rounded-lg text-center text-sm ${
                messageType === "success"
                  ? "bg-success/20 text-success"
                  : "bg-error/20 text-error"
              }`}
            >
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
