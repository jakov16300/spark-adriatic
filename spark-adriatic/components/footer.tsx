import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo i opis */}
        <div>
          <h3 className="text-white font-bold text-xl mb-4">Spark Adriatic</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Digitalna agencija koja pomaže tvrtkama da rastu kroz inovativna
            digitalna rješenja.
          </p>
        </div>

        {/* Linkovi */}
        <div>
          <h3 className="text-white font-bold mb-4">Navigacija</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              O nama
            </Link>
            <Link
              href="/services"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Usluge
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Kontakt
            </Link>
          </div>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-white font-bold mb-4">Kontakt</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <p>📍 Rijeka, Hrvatska</p>
            <p>📧 info@sparkadriatic.com</p>
            <p>📞 +385 91 000 0000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
