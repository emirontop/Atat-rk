import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      <Head>
        <title>Büyük Önder Mustafa Kemal Atatürk</title>
        <meta name="description" content="Türkiye Cumhuriyeti'nin Kurucusu ve Ebedi Önderi Atatürk'ün Anıt Sayfası" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Hero Banner */}
        <div 
          className="bg-red-700 py-12 relative"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-90"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              GAZİ MUSTAFA KEMAL ATATÜRK
            </h1>
            <p className="text-white/90 mt-3 text-lg">
              Türkiye Cumhuriyeti'nin Kurucusu ve İlk Cumhurbaşkanı
            </p>
            <p className="text-white/80 mt-1">(1881 - 10 Kasım 1938)</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-2/5 h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white ring-2 ring-gray-200">
              <Image 
                src="/ataturk-portrait.jpg" 
                alt="Mustafa Kemal Atatürk Portresi"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-red-600 pl-3">
                Türk Milletinin Ebedî Başkomutanı
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Mustafa Kemal Atatürk, Türk milletinin bağımsızlık mücadelesinin önderi ve Türkiye Cumhuriyeti'nin kurucusudur. 
                1881'de Selanik'te doğan Atatürk, askerî dehasıyla Çanakkale'de tarih yazmış, Millî Mücadele'nin başkomutanı olarak 
                emperyalist işgale karşı zafer kazanmıştır. Modern, laik ve demokratik bir devlet kurarak; eğitim, hukuk, kadın hakları 
                ve ekonomide devrimler gerçekleştirmiştir. "Yurtta sulh, cihanda sulh" ilkesiyle barışı esas alan vizyonu, 
                Türkiye'yi çağdaş medeniyetler seviyesine taşımıştır.
              </p>
            </div>
          </div>

          {/* Quotes Section */}
          <div className="mt-12 bg-amber-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Özlü Sözler</h3>
            <div className="space-y-4">
              <blockquote className="italic text-gray-700 pl-4 border-l-2 border-amber-400">
                "Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak 
                Türkiye Cumhuriyeti ilelebet payidar kalacaktır."
              </blockquote>
              <blockquote className="italic text-gray-700 pl-4 border-l-2 border-amber-400">
                "Hayatta en hakiki mürşit ilimdir, fendir."
              </blockquote>
              <blockquote className="italic text-gray-700 pl-4 border-l-2 border-amber-400">
                "Egemenlik kayıtsız şartsız milletindir."
              </blockquote>
            </div>
          </div>

          {/* Legacy Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
              Atatürk'ün Emanetleri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-xl text-red-700 mb-3">Devrimler</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Harf Devrimi (1928)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Kadınlara Seçme ve Seçilme Hakkı (1934)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Laiklik İlkesi (1928)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Soyadı Kanunu (1934)
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-xl text-red-700 mb-3">İlkeler</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Cumhuriyetçilik
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Milliyetçilik
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Halkçılık
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Laiklik
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Devletçilik
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> İnkılapçılık
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-xl text-red-700 mb-3">Miras</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Tam bağımsız Türkiye
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Üniter devlet yapısı
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Çağdaş eğitim sistemi
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Modern hukuk sistemi
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span> Kadın-erkek eşitliği
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white/80 py-8 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-sm">© 2025 Aziz Hatırasına Saygıyla - Tüm Hakları Saklıdır</p>
            <p className="mt-4 italic text-white/70 max-w-2xl mx-auto">
              "Beni görmek demek mutlaka yüzümü görmek değildir. 
              Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu kâfidir."
            </p>
            <p className="mt-4 text-xs text-white/50">
              Bu site Vercel ve GitHub üzerinde barındırılmaktadır.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}