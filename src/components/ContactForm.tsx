import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                console.log("Enviando datos a EmailJS:", form);
                setSubmitted(true);
                setForm({ name: "", email: "", message: "" });
            })
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    console.error("Error al enviar el mensaje:", error.message);
                } else {
                    console.error("Error desconocido al enviar el mensaje", error);
                }
            });
    };

    return (
        <section className="px-6 py-20 bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Contáctame
                </h2>
                {submitted ? (
                    <p className="text-green-400 text-center">
                        ¡Gracias por tu mensaje! Te responderé pronto.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                        <div>
                            <label className="block mb-1 font-medium text-gray-300">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-600 rounded px-4 py-2 bg-gray-800 text-white"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-300">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-600 rounded px-4 py-2 bg-gray-800 text-white"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-300">
                                Mensaje
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full border border-gray-600 rounded px-4 py-2 bg-gray-800 text-white"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Enviar
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
