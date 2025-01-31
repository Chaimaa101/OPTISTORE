import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineBookOpen,
} from "react-icons/hi";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // If the input is corrected, remove the error message
    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // Clear error for that field
      }));
    }
  };

  // Validate form before submitting
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validation rules
    if (!formData.name) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required.";
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic (send to server, email, etc.)
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl uppercase font-bold italic text-center text-stick my-12">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`flex items-center p-3 shadow-[0px_2px_2px_1px_#0000004d] rounded-md ${
              errors.name ? "shadow-[0px_2px_2px_1px_red]" : ""
            }`}
          >
            <input
              className="border-none outline-none w-full flex-1 text-base text-stick placeholder-stick/50 placeholder:font-medium"
              placeholder="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Full Name"
            />
            <HiOutlineUser size={23} />
          </div>

          <div
            className={`flex items-center p-3 shadow-[0px_2px_2px_1px_#0000004d] rounded-md ${
              errors.email ? "shadow-[0px_2px_2px_1px_red]" : ""
            }`}
          >
            <input
              className="border-none outline-none w-full flex-1 text-base text-stick placeholder-stick/50 placeholder:font-medium"
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email"
            />
            <HiOutlineMail size={23} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`flex items-center p-3 shadow-[0px_2px_2px_1px_#0000004d] rounded-md ${
              errors.phone ? "shadow-[0px_2px_2px_1px_red]" : ""
            }`}
          >
            <input
              className="border-none outline-none w-full flex-1 text-base text-stick placeholder-stick/50 placeholder:font-medium"
              placeholder="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              aria-label="Phone"
            />
            <HiOutlinePhone size={23} />
          </div>

          <div
            className={`flex items-center p-3 shadow-[0px_2px_2px_1px_#0000004d] rounded-md ${
              errors.subject ? "shadow-[0px_2px_2px_1px_red]" : ""
            }`}
          >
            <input
              className="border-none outline-none w-full flex-1 text-base text-stick placeholder-stick/50 placeholder:font-medium"
              placeholder="Subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              aria-label="Subject"
            />
            <HiOutlineBookOpen size={23} />
          </div>
        </div>

        <div
          className={`p-3 shadow-[0px_2px_2px_1px_#0000004d] rounded-md ${
            errors.message ? "shadow-[0px_2px_2px_1px_red]" : ""
          }`}
        >
          <textarea
            className="border-none outline-none w-full h-[40vh] resize-none text-base text-stick placeholder-stick/50 placeholder:font-medium"
            placeholder="Write your comments here"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-label="Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-block w-fit py-3 px-9 text-white text-lg font-semibold bg-black rounded-md cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
