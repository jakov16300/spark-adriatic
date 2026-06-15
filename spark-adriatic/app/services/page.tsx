export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Web razvoj",
      description:
        "Izrađujemo moderne, brze i responzivne web stranice i aplikacije prilagođene vašim potrebama.",
    },
    {
      icon: "📱",
      title: "Mobilne aplikacije",
      description:
        "Razvijamo iOS i Android aplikacije koje pružaju izvrsno korisničko iskustvo.",
    },
    {
      icon: "🎨",
      title: "UI/UX dizajn",
      description:
        "Kreiramo intuitivne i vizualno privlačne dizajne koji privlače korisnike.",
    },
    {
      icon: "📈",
      title: "Digitalni marketing",
      description:
        "Pomažemo vam da dosegnete pravu publiku kroz SEO, društvene mreže i oglašavanje.",
    },
    {
      icon: "☁️",
      title: "Cloud rješenja",
      description:
        "Implementiramo skalabilna cloud rješenja koja rastu zajedno s vašim poslovanjem.",
    },
    {
      icon: "🔒",
      title: "Kibernetička sigurnost",
      description:
        "Štitimo vaše digitalne resurse od modernih prijetnji i osiguravamo vaše podatke.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Naše usluge</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Nudimo širok spektar digitalnih usluga kako bismo pomogli vašem
          poslovanju da raste i uspije u digitalnom dobu.
        </p>
      </section>

      {/* Usluge */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all"
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-white font-semibold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
