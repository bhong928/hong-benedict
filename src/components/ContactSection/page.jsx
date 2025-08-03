'use client';

import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    // Contact Form Function
    const formRef = useRef(); // so emailjs.sendForm can access the form
    const [formData, setFormData] = useState({
        name: "", email: "", subject: "", message: ""
    });
    // reCAPTCHA
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // CAPTCHA
        if (!captchaToken) {
            alert("Please complete the CAPTCHA.");
            return;
        }

        // Custom validation
        const { name, email, subject, message } = formData;

        if (
            !name.trim() ||
            !email.trim() ||
            !email.includes('@') ||
            !subject.trim() ||
            !message.trim()
        ) {
            alert("Please fill out all fields correctly.");
            return;
        }

        // Send form using EmailJS
        emailjs
            .sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            formRef.current,
            'YOUR_PUBLIC_KEY'
            )
            .then(() => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setCaptchaToken(null);
            })
            .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Something went wrong. Please try again.");
            });
        };

    return(
        <section id="contact" className="p-5 md:p-20 bg-[#2c2c2c] scroll-mt-24">
            <div className="flex flex-col md:flex-row w-full">
                <div className='md:flex md:flex-col md:justify-center md:max-w-3xl'>
                    <h1 className="text-xl md:text-3xl font-bold mb-4 text-white text-center">Get in touch</h1>
                    <p className="text-xs md:text-xl text-white mb-10">If you want to contact me, fill out the following form and I will try my best to get back to you
                    </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full">
                    <div className="grid sm:grid-cols-2 gap-6 text-white">
                    {/* Name */}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Name"
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    {/* Email */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    {/* Subject */}
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        placeholder="Subject"
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded text-white"
                    />
                    {/* Message */}
                    <textarea
                        name="message"
                        value={formData.message}
                        placeholder="Message"
                        rows="6"
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded text-white"
                        required
                    />
                    {/* reCAPTCHA slot here */}
                    <div className="pt-2 flex justify-center">
                        <ReCAPTCHA
                            sitekey="6LeU3W8rAAAAAHFaZvde9R_sqBpc_F5FE1zbw-Gw" // Site Key
                            onChange={(token) => setCaptchaToken(token)}
                            onExpired={() => setCaptchaToken(null)}
                        />
                    </div>
                    {/* Submit */}
                    <div className="pt-2 flex justify-center">
                        <button
                            type="submit"
                            className="px-8 py-4 border border-gray-300 rounded hover:bg-gray-600 transition text-white"
                        >
                            Send Message
                        </button>
                    </div>


                </form>

            </div>
        </section>
    )
}