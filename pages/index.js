import Head from 'next/head';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Head>
        <title>Mustafa Kemal Atatürk</title>
        <meta name="description" content="Türkiye Cumhuriyeti'nin Kurucusu Atatürk'ü tanıyın." />
      </Head>

      <h1 style={{
        fontSize: '3rem',
        color: '#1f2937',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        Mustafa Kemal Atatürk
      </h1>

      <img
        src="/ataturk.jpg"
        alt="Mustafa Kemal Atatürk"
        style={{
          width: '300px',
          borderRadius: '12px',
          marginBottom: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      />

      <p style={{
        maxWidth: '700px',
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#374151',
        textAlign: 'center'
      }}>
        Mustafa Kemal Atatürk, Türk milletinin bağımsızlık mücadelesinin lideri ve Türkiye Cumhuriyeti'nin kurucusudur.
        1881 yılında Selanik'te doğmuş, askeri ve siyasi dehasıyla Türk halkını emperyalist işgale karşı örgütlemiş,
        modern, laik ve demokratik bir devletin temellerini atmıştır. Eğitim, hukuk, kadın hakları, ekonomi gibi
        pek çok alanda gerçekleştirdiği devrimlerle çağdaş Türkiye'nin şekillenmesinde öncü rol oynamıştır.
        "Yurtta sulh, cihanda sulh" sözüyle barışı her zaman ön planda tutmuştur.
      </p>

      <footer style={{
        marginTop: '40px',
        color: '#6b7280',
        fontSize: '0.9rem',
        textAlign: 'center'
      }}>
        © 2025 Atatürk Sitesi - Vercel & GitHub ile yayında
      </footer>
    </div>
  );
  }
