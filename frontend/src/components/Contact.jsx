import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const photographerNumber = "919923403242";
  const photographerEmail = "udaykumarbadgujar@gmail.com";

  const eventTypes = [
    "Wedding",
    "Pre-Wedding",
    "Engagement",
    "Birthday",
    "Baby Shower",
    "Fashion",
    "Travel",
    "Brand Shoot",
    "Kids",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/contact", formData);
      setSuccess(res.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const message = encodeURIComponent(
    `Hello Studio Uday,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event: ${formData.eventType}

Message:
${formData.message}`
  );

  const whatsappLink = `https://wa.me/${photographerNumber}?text=${message}`;
  const emailLink = `mailto:${photographerEmail}?subject=Photography Enquiry&body=${message}`;

  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* INFO + MAP */}
        <div className="grid md:grid-cols-2 gap-16 items-stretch">

          {/* LEFT – INFO */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-orange-500 uppercase tracking-widest mb-3">
                Contact Studio Uday
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let’s Capture <br /> Something Timeless
              </h2>

              <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
                Share a few details about your event. Your message will reach the
                photographer directly via WhatsApp, Email, or this form.
              </p>

              <div className="space-y-6 text-gray-300">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-orange-500" />
                  <a href={`tel:+${photographerNumber}`} className="hover:text-orange-500">
                    +91 99234 03242
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-orange-500" />
                  <a
                    href={`mailto:${photographerEmail}`}
                    className="hover:text-orange-500 break-all"
                  >
                    {photographerEmail}
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-orange-500 mt-1" />
                  <p>
                    Shop No. 4, Gautam Apt., Dadawadi Road, <br />
                    Behind Gujral Petrol Pump, <br />
                    Jalgaon, Maharashtra 425002
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <FaClock className="text-orange-500 mt-1" />
                  <div className="text-sm leading-relaxed">
                    <p className="text-white font-semibold mb-1">
                      Studio Timings
                    </p>
                    <p>
                      <span className="text-gray-400">Mon – Fri:</span><br />
                      9:30 AM – 12:30 PM | 4:30 PM – 8:30 PM
                    </p>
                    <p className="mt-2">
                      <span className="text-gray-400">Sat – Sun:</span><br />
                      10:00 AM – 12:30 PM | 5:00 PM – 8:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-6 mt-10 text-2xl">
              <a
                href="https://www.instagram.com/uday.photographyy/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@udayphotography2628"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-500"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* RIGHT – MAP (MATCHES LEFT HEIGHT) */}
          <div className="w-full min-h-[520px] h-full rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
            <iframe
              src="https://www.google.com/maps?hl=en&q=21.0175654,75.5368816&z=17&output=embed"
              className="w-full h-full"
              loading="lazy"
              style={{ border: 0 }}
              title="Studio Uday Location"
            />
          </div>
        </div>

        {/* FORM – COMPACT & CONTROLLED */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-full max-w-3xl">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-8 space-y-5 shadow-2xl"
            >
              {success && <p className="text-green-500">{success}</p>}
              {error && <p className="text-red-500">{error}</p>}

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 py-2.5 focus:outline-none focus:border-orange-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 py-2.5 focus:outline-none focus:border-orange-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 py-2.5 focus:outline-none focus:border-orange-500"
              />

              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 py-2.5 focus:outline-none focus:border-orange-500"
              >
                <option value="">Select Event Type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                rows="3"
                placeholder="Tell me about your event"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 py-2.5 focus:outline-none focus:border-orange-500 resize-none"
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full font-semibold"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold"
                >
                  <FaWhatsapp />
                  WhatsApp Enquiry
                </a>

                <button
                  type="button"
                  onClick={() => {
                    window.location.href = `mailto:udaykumarbadujar@gmail.com?subject=Photography Inquiry&body=${encodeURIComponent(formData.message)}`;
                  }}
                  className="flex-1 flex items-center justify-center gap-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-6 py-3 rounded-full font-semibold"
                >
                  <FaEnvelope />
                  Email Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;