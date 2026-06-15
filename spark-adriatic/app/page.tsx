import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero sekcija */}
      <section className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Vaša vizija,
          <span className="text-blue-500"> naša </span>
          tehnologija
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          Spark Adriatic je digitalna agencija koja pomaže tvrtkama da rastu
          kroz inovativna digitalna rješenja.
        </p>
        <div className="flex gap-4">
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Naše usluge
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 hover:border-white/50 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Kontaktiraj nas
          </Link>
        </div>
      </section>

      {/* Zašto mi */}
      <section className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Zašto odabrati nas?
          </h2>
          <div className="flex flex-col">
            <div className="py-6 border-b border-white/10">
              <h3 className="text-white font-semibold text-lg mb-1">
                Iskustvo
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Više od 5 godina iskustva u izradi digitalnih rješenja za
                klijente diljem regije.
              </p>
            </div>
            <div className="py-6 border-b border-white/10">
              <h3 className="text-white font-semibold text-lg mb-1">
                Kvaliteta
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Svaki projekt radimo s maksimalnom pažnjom i predanošću kako
                bismo premašili očekivanja.
              </p>
            </div>
            <div className="py-6 border-b border-white/10">
              <h3 className="text-white font-semibold text-lg mb-1">Brzina</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Isporučujemo projekte na vrijeme, bez kompromisa u kvaliteti.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-white font-semibold text-lg mb-1">Podrška</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Uz vas smo i nakon završetka projekta — uvijek dostupni za
                pitanja i podršku.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
