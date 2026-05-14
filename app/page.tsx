'use client'
export default function DJoaoSantosLanding() {
  
  const gallery = [
    '/images/djoao1.jpg',
    '/images/djoao2.jpg',
    '/images/djoao3.jpg',
    '/images/djoao4.jpg',
    '/images/djoao5.jpg',
    '/images/djoao6.jpg',
  ]

  const videos = [
    {
      title: 'Aftermovie',
      src: 'https://www.youtube.com/embed/6HBqrbqw-9o',
    },
    {
      title: 'VideoMaker Telão',
      src: 'https://www.youtube.com/embed/KE632eDBWm4',
    },
  ]

  const agenda = [
    {
      date: '16 MAI',
      place: 'Club Experience',
      city: 'Curitiba - PR',
    },
    {
      date: '24 MAI',
      place: 'Sunset Party',
      city: 'Cascavel - PR',
    },
    {
      date: '31 MAI',
      place: 'Underground Session',
      city: 'Guarapuava - PR',
    },
  ]
 const scrollPresskit = (direction) => {
    const container = document.getElementById('presskit-scroll')

    if (!container) return

    container.scrollBy({
      left: direction === 'left' ? -400 : 400,
      behavior: 'smooth',
    })
  }
  return (
    
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans selection:bg-white selection:text-black">
      

      <div className="pointer-events-none fixed inset-0 opacity-20 mix-blend-soft-light z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />
      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.9)), url('/images/banner-principal.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="relative z-10 text-center px-6 max-w-5xl animate-fadeIn">
          <p className="uppercase tracking-[0.5em] text-zinc-400 text-sm mb-4">
            Open Format • Funk • MegaFunk • Eletrônico
          </p>

          <div className="flex justify-center mb-8">
            <img
              src="https://i.imgur.com/jfdpcRT.png"
              alt="Logo SEM Fundo"
              className="
  w-full
  max-w-[220px]
  sm:max-w-[320px]
  md:max-w-[500px]
  object-contain
  mx-auto
  drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            />
          </div>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed mb-10">
            Set's intensos, estética underground e experiência feita para manter
            a pista conectada do começo ao fim.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              Contratar Agora
            </a>

            <a
              href="#galeria"
              className="px-8 py-4 border border-zinc-700 rounded-full hover:bg-zinc-900 transition-all duration-300"
            >
              Ver Galeria
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500 text-sm tracking-[0.3em] uppercase">
          Scroll
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-28 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full" />

            <img
              src="https://i.imgur.com/1TxVv70.jpeg"
              alt="DJ"
              className="relative rounded-3xl border border-zinc-800 shadow-2xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6">
              Sobre
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Uma identidade sonora feita para pistas lotadas.
            </h2>

            <p className="text-zinc-400 leading-relaxed text-lg mb-6">
              DJ Joao Santos entrega performances com presença, pressão e leitura
              de pista. Misturando estilos e criando atmosferas intensas, cada
              set é pensado para transformar o evento em experiência.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
                <h3 className="text-3xl font-black mb-2">+100</h3>
                <p className="text-zinc-500">Eventos</p>
              </div>

              <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
                <h3 className="text-3xl font-black mb-2">Open</h3>
                <p className="text-zinc-500">Format</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* GALERIA */}
<section id="galeria" className="py-24 px-4 md:px-10 bg-black">
  <div className="max-w-7xl mx-auto">
    
    <div className="mb-14 text-center">
      <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-4">
        Galeria
      </p>

      <h2 className="text-4xl md:text-6xl font-black">
        Visual cinematográfico.
      </h2>
    </div>

    {/* GRID RESPONSIVO */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

      {[
        'https://i.imgur.com/Hitc0wL.png',
        'https://i.imgur.com/wMBXsOP.jpeg',
        'https://i.imgur.com/57RR0bg.png',
        'https://i.imgur.com/LcYZEBp.png',
      ].map((img, index) => (
        
        <div
          key={index}
          className="group relative overflow-hidden rounded-[30px] border border-zinc-900 bg-zinc-950"
        >

          {/* IMAGEM AUTO AJUSTE */}
          <img
            src={img}
            alt={`Evento ${index + 1}`}
            className="
              w-full
              h-[280px]
              sm:h-[340px]
              md:h-[450px]
              object-cover
              object-center
              transition-all
              duration-700
              group-hover:scale-105
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

        </div>
      ))}
    </div>
  </div>
</section>

      {/* VIDEOS */}
      <section className="py-28 px-6 md:px-12 bg-[#040404]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-4">
              Vídeos
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              Energia da pista.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden border border-zinc-900 bg-black hover:scale-[1.02] transition-all duration-500"
              >
                <iframe
                  className="w-full aspect-video"
                  src={video.src}
                  title={video.title}
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

{/* PRESS KIT */}
<section className="py-24 px-4 md:px-10 bg-black border-y border-zinc-900 overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="text-center mb-14">
      <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-5">
        Press Kit
      </p>

      <h2 className="text-4xl md:text-6xl font-black mb-6">
        Material para divulgação.
      </h2>

      <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
        Fotos oficiais para promoters, designers, eventos e divulgação.
      </p>
    </div>

    {/* CARROSSEL */}
    <div className="relative">

      {/* BOTÃO ESQUERDA */}
      <button
  onClick={() => scrollPresskit('left')}
  className="
    absolute
    left-2
    top-1/2
    -translate-y-1/2
    z-20
    w-12
    h-12
    rounded-full
    bg-black/70
    border
    border-zinc-700
    backdrop-blur-xl
    flex
    items-center
    justify-center
    text-2xl
    hover:scale-110
    transition-all
  "
>
  ‹
</button>

      {/* BOTÃO DIREITA */}
     <button
  onClick={() => scrollPresskit('right')}
  className="
    absolute
    right-2
    top-1/2
    -translate-y-1/2
    z-20
    w-12
    h-12
    rounded-full
    bg-black/70
    border
    border-zinc-700
    backdrop-blur-xl
    flex
    items-center
    justify-center
    text-2xl
    hover:scale-110
    transition-all
  "
>
  ›
</button>

      {/* SCROLL */}
      <div
  id="presskit-scroll"
  className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-2 scrollbar-hide"
>

        {[
          'https://i.imgur.com/jfdpcRT.png',
          'https://i.imgur.com/4JPVdWv.png',
          'https://i.imgur.com/IXYkQ91.png',
          'https://i.imgur.com/hv2oGW4.png',
          'https://i.imgur.com/kHM2mQ7.png',
          'https://i.imgur.com/PFXS3iw.png',
        ].map((img, index) => (

          <div
            key={index}
            className="
              min-w-[85%]
              sm:min-w-[60%]
              md:min-w-[45%]
              lg:min-w-[35%]
              snap-center
              group
            "
          >

            <div className="
              overflow-hidden
              rounded-[32px]
              border
              border-zinc-800
              bg-zinc-950
            ">

              {/* IMAGEM AUTO AJUSTE */}
             <img
  src={img}
  alt={`Press Kit ${index + 1}`}
  className="
    w-full
    h-[260px]
    sm:h-[340px]
    md:h-[420px]

    object-contain
    bg-[#0a0a0a]

    transition-all
    duration-700
    group-hover:scale-[1.02]
  "
/>

            </div>
          </div>
        ))}
      </div>
    </div>

    {/* BOTÃO DOWNLOAD */}
    <div className="flex justify-center mt-14">

      <a
        href="https://drive.google.com/drive/u/1/folders/1-L3EFMHBtATocvwVWfQXMExXvT7iNPAk"
        target="_blank"
        className="
          inline-flex
          items-center
          justify-center
          gap-3
          px-8
          md:px-10
          py-4
          md:py-5
          bg-white
          text-black
          rounded-full
          font-black
          text-base
          md:text-lg
          hover:scale-105
          transition-all
          duration-300
          shadow-2xl
          text-center
        "
      >
        Baixar Press Kit
      </a>

    </div>
  </div>
</section>

    {/* AGENDA
    <section className="py-28 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-4">
            Agenda
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Próximos eventos.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid gap-6">
          {[
            {
              date: '16 MAI',
              place: 'Club Experience',
              city: 'Curitiba - PR',
            },
            {
              date: '24 MAI',
              place: 'Sunset Party',
              city: 'Cascavel - PR',
            },
            {
              date: '31 MAI',
              place: 'Underground Session',
              city: 'Guarapuava - PR',
            },
          ].map((event, index) => (
            <div
              key={index}
              className="border border-zinc-800 bg-black rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:border-white transition-all duration-300"
            >
              <div>
                <p className="text-zinc-500 text-sm tracking-[0.3em] uppercase mb-2">
                  {event.date}
                </p>

                <h3 className="text-3xl font-black">{event.place}</h3>
              </div>

              <p className="text-zinc-400 text-lg">{event.city}</p>
            </div>
          ))}
        </div>
    </section> */}

{/* CONTATO + REDES */}
<section
  id="contato"
  className="py-24 px-4 md:px-10 bg-black relative overflow-hidden"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

  <div className="relative z-10 max-w-7xl mx-auto border border-zinc-800 rounded-[40px] bg-[#050505] overflow-hidden">
    
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 p-8 md:p-14 lg:p-20 items-center">
      
      {/* LADO ESQUERDO */}
      <div className="flex flex-col justify-center">
        
        <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs md:text-sm mb-6">
          Contato & Redes
        </p>

        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8">
          Vamos lotar sua pista.
        </h2>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mb-10">
          Disponível para eventos, clubs, festivais e experiências privadas.
          Acompanhe também conteúdos exclusivos, backstage e registros das
          pistas no Instagram oficial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          
          <a
            href="https://wa.me/5546988086071?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20contratar%20o%20DJ%20JOAO%20SANTOS."
            target="_blank"
            className="px-8 py-5 bg-white text-black rounded-full font-black text-center hover:scale-105 transition-all duration-300"
          >
            Chamar no WhatsApp
          </a>

          <a
            href="https://www.instagram.com/joao_santos_dj?igsh=MWFldmY1eHo0c3o4eg=="
            target="_blank"
            className="px-8 py-5 rounded-full border border-pink-500/30 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white font-black text-center hover:scale-105 transition-all duration-300"
          >
            Instagram
          </a>

        </div>
      </div>

      {/* CARD INSTAGRAM */}
      <div className="w-full">
        
        <div className="rounded-[35px] border border-pink-500/20 bg-gradient-to-br from-pink-500/20 via-zinc-900 to-purple-500/20 p-6 md:p-10 shadow-[0_0_60px_rgba(236,72,153,0.15)] backdrop-blur-xl">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
            
            <div className="w-20 h-20 rounded-[25px] bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-3xl font-black shrink-0">
              IG
            </div>

            <div className="min-w-0">
              <p className="uppercase tracking-[0.3em] text-zinc-400 text-xs md:text-sm mb-2">
                Instagram Oficial
              </p>

              <h3 className="text-2xl md:text-4xl font-black break-words">
                @joao_santos_dj
              </h3>
            </div>
          </div>

          <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10">
            Bastidores, reels, eventos, conteúdos exclusivos e toda energia
            das pistas em tempo real.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              '#Funk',
              '#OpenFormat',
              '#Eventos',
              '#MegaFunk',
              '#EventosFormais',
            ].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-zinc-700 bg-black/40 text-zinc-400 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-600 text-sm tracking-wide">
        © 2026 DJOAO SANTOS — Todos os direitos reservados.
      </footer>
      
    </div>
  )
}
