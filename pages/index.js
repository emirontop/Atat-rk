import React, { useEffect, useRef } from 'react';

const AtaturkTribute = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    
    // Set canvas size to window dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Draw waving Turkish flag
    const drawWavingFlag = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Wave parameters
      const amplitude = 30;
      const frequency = 0.01;
      const waveHeight = canvas.height / 2;
      
      // Draw red part of the flag with wave effect
      ctx.beginPath();
      ctx.moveTo(0, waveHeight);
      
      for (let x = 0; x < canvas.width; x++) {
        const y = waveHeight + Math.sin(x * 0.02 + time * frequency) * amplitude;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = '#E30A17';
      ctx.fill();
      
      // Draw white part of the flag with wave effect
      ctx.beginPath();
      ctx.moveTo(0, waveHeight);
      
      for (let x = 0; x < canvas.width; x++) {
        const y = waveHeight + Math.sin(x * 0.02 + time * frequency) * amplitude;
        ctx.lineTo(x, y - 60); // White part height
      }
      
      ctx.lineTo(canvas.width, waveHeight - 60);
      ctx.lineTo(canvas.width, waveHeight);
      ctx.closePath();
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      
      // Draw crescent and star
      const centerX = canvas.width / 2;
      const centerY = waveHeight - 30;
      
      // Crescent
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0.2 * Math.PI, 1.8 * Math.PI, false);
      ctx.arc(centerX - 20, centerY, 30, 0.2 * Math.PI, 1.8 * Math.PI, true);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      
      // Star
      ctx.beginPath();
      const starX = centerX + 45;
      const starY = centerY;
      const spikes = 5;
      const outerRadius = 15;
      const innerRadius = 7;
      
      let rot = Math.PI / 2 * 3;
      let x = starX;
      let y = starY;
      let step = Math.PI / spikes;
      
      ctx.moveTo(starX, starY - outerRadius);
      
      for (let i = 0; i < spikes; i++) {
        x = starX + Math.cos(rot) * outerRadius;
        y = starY + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;
        
        x = starX + Math.cos(rot) * innerRadius;
        y = starY + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      
      ctx.lineTo(starX, starY - outerRadius);
      ctx.closePath();
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      
      animationId = requestAnimationFrame(drawWavingFlag);
    };
    
    animationId = requestAnimationFrame(drawWavingFlag);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Waving flag background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full opacity-10 z-0"
      />
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            <span className="block">GAZİ MUSTAFA KEMAL</span>
            <span className="text-red-600 block mt-2">ATATÜRK</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Türkiye Cumhuriyeti'nin Kurucusu ve İlk Cumhurbaşkanı
          </p>
          <p className="text-gray-600 mt-2">1881 - 10 Kasım 1938</p>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform rotate-1">
              {/* Atatürk portrait placeholder */}
              <div className="bg-gradient-to-br from-amber-100 to-red-50 w-full h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 mx-auto mb-4" />
                  <p className="text-gray-600 italic">Mustafa Kemal Atatürk</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg transform rotate-3">
              <p className="font-semibold">"Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır."</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">Türk Milletinin Ebedî Önderi</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>Mustafa Kemal Atatürk, Türk milletinin bağımsızlık mücadelesinin lideri ve Türkiye Cumhuriyeti'nin kurucusudur. Askeri dehası, ileri görüşlülüğü ve devrimleriyle Türkiye'yi modern bir ulus devlet haline getirmiştir.</p>
              <p>1881 yılında Selanik'te doğan Atatürk, askeri eğitimini tamamladıktan sonra Osmanlı ordusunda görev yapmış, Çanakkale Savaşı'nda tarihi bir zafer kazanmıştır.</p>
              <p>Millî Mücadele döneminde Anadolu'ya geçerek emperyalist işgale karşı Türk halkını örgütlemiş, modern, laik ve demokratik bir devletin temellerini atmıştır.</p>
            </div>
          </div>
        </div>

        {/* Principles section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
          <div className="bg-gradient-to-r from-red-700 to-red-500 py-6 px-8">
            <h2 className="text-3xl font-bold text-white">Atatürk İlke ve Devrimleri</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {[
              { title: "Cumhuriyetçilik", desc: "Halkın kendi kendini yönetmesi ilkesi", icon: "🏛️" },
              { title: "Milliyetçilik", desc: "Ulusal birlik ve beraberlik ruhu", icon: "🌍" },
              { title: "Halkçılık", desc: "Sınıf ayrımcılığının reddi", icon: "👥" },
              { title: "Laiklik", desc: "Din ve devlet işlerinin ayrılması", icon: "🕊️" },
              { title: "Devletçilik", desc: "Ekonomide planlı kalkınma", icon: "📈" },
              { title: "İnkılapçılık", desc: "Sürekli yenilik ve gelişme", icon: "🔄" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 hover:bg-red-50 rounded-lg transition-all">
                <div className="text-4xl bg-red-100 p-3 rounded-full">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quotes section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 border-b-2 border-red-600 pb-3 inline-block">Atatürk'ün Özlü Sözleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Yurtta sulh, cihanda sulh.",
              "Hayatta en hakiki mürşit ilimdir.",
              "Egemenlik kayıtsız şartsız milletindir.",
              "Türk öğün, çalış, güven.",
              "Benim manevi mirasım ilim ve akıldır.",
              "Öğretmenler! Yeni nesil sizin eseriniz olacaktır."
            ].map((quote, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg border border-amber-100 transform hover:scale-105 transition-transform"
              >
                <div className="text-red-600 text-5xl mb-4">❝</div>
                <p className="text-lg italic text-gray-800">{quote}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy section */}
        <div className="bg-gradient-to-r from-red-800 to-red-600 rounded-2xl p-8 text-white text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Atatürk'ün Mirası</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Atatürk'ün kurduğu Türkiye Cumhuriyeti, onun ilke ve devrimleri ile çağdaş medeniyetler seviyesine ulaşma hedefini sürdürmektedir.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { title: "Harf Devrimi", year: 1928 },
              { title: "Kadın Hakları", year: 1934 },
              { title: "Soyadı Kanunu", year: 1934 },
              { title: "Kılık Kıyafet Devrimi", year: 1925 }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-4xl font-bold">{item.year}</div>
                <div className="text-lg mt-2">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-600 pb-12">
          <div className="mb-4">
            <div className="inline-block bg-gradient-to-r from-red-600 to-amber-500 rounded-full p-1">
              <div className="bg-white rounded-full p-4">
                <div className="bg-gradient-to-br from-amber-100 to-red-50 rounded-full w-16 h-16 flex items-center justify-center text-red-600 text-2xl">
                  A
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg max-w-2xl mx-auto italic">
            "Beni görmek demek mutlaka yüzümü görmek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu kâfidir."
          </p>
          <p className="mt-8">© 2023 - Mustafa Kemal Atatürk'ü Saygı ve Minnetle Anıyoruz</p>
        </footer>
      </div>
    </div>
  );
};

export default AtaturkTribute;