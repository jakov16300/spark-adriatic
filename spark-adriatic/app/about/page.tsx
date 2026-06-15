export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">O nama</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Spark Adriatic je digitalna agencija osnovana s ciljem pružanja
          inovativnih digitalnih rješenja klijentima diljem Jadrana i šire.
        </p>
      </section>

      {/* Misija i vizija */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Naša misija</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Naša misija je pomoći tvrtkama da dostignu svoj puni potencijal u
              digitalnom svijetu. Vjerujemo da svaka tvrtka zaslužuje pristup
              vrhunskim digitalnim rješenjima, bez obzira na veličinu.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Naša vizija</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Postati vodeća digitalna agencija na Jadranskoj obali, poznata po
              kvaliteti, inovaciji i predanosti klijentima.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
