import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);

    const response = await fetch("https://formspree.io/f/maypkwjq", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("✅ Message sent successfully!");
      e.currentTarget.reset();
    } else {
      setStatus("❌ Failed to send message. Try again later.");
    }
    setLoading(false);
  };

  return (
    <section id={"contact"} className="w-full min-h-screen px-4 md:px-12 py-10 bg-white">

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT INFO */}
        <div className="flex flex-col justify-between bg-white rounded-lg">
          <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 border-b-2 border-gray-300 inline-block">
        Contact Us
      </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug text-gray-900">
              Contact Us for Inquiries and Bookings - <br /> Your Culinary Experience Starts Here!
            </h3>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Welcome! For all catering inquiries, please reach out at the numbers below or fill out the form.
              Kindly provide your Name, Email, Mobile No, Subject, and event details. We look forward to serving you!
            </p>

            <div className="space-y-8 text-base md:text-lg">
              <div>
                <h4 className="font-bold text-lg flex items-center gap-2">👨‍🍳 Name</h4>
                <p className="text-gray-800 mt-1">Parkash Chand</p>
              </div>
              <div>
                <h4 className="font-bold text-lg flex items-center gap-2">📍 Address</h4>
                <p className="text-gray-800 mt-1">
                  V.P.O Nangal Kalan, Tehsil Haroli, District Una
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg flex items-center gap-2">📧 Email</h4>
                <p className="text-gray-800 mt-1">
                  dineshchoudhary9815947385@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Message Me</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <input
                type="text"
                name="mobile"
                placeholder="Mobile No."
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />

              {/* SUBJECT FIELD */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status && <p className="mt-3 text-center text-sm">{status}</p>}
          </div>

          {/* MAP */}
          <div className="mt-6">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=31.3545,76.2766&z=14&output=embed"
              className="w-full h-64 md:h-72 rounded-md border-none"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
