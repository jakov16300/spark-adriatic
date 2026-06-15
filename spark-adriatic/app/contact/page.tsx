"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Hvala na poruci! Javit ćemo vam se uskoro.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Kontakt</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Imate projekt na umu? Javite nam se i zajedno ćemo ga ostvariti.
        </p>
      </section>

      {/* Kontakt forma i info */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Forma */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">
              Pošaljite poruku
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  placeholder="Unesite ime i prezime"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Unesite email adresu"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">
                  Poruka
                </label>
                <textarea
                  placeholder="Unesite poruku"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Pošalji poruku
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Informacije</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-white font-medium">Adresa</p>
                  <p className="text-gray-400">Rijeka, Hrvatska</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">info@sparkadriatic.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-white font-medium">Telefon</p>
                  <p className="text-gray-400">+385 91 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="text-white font-medium">Radno vrijeme</p>
                  <p className="text-gray-400">Pon - Pet: 9:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
