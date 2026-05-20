import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Bell, 
  Key, 
  Zap, 
  Wrench, 
  Menu, 
  X, 
  Check, 
  ArrowRight, 
  Phone, 
  Instagram, 
  Cpu, 
  Activity,
  Home,
  Building,
  MapPin
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null); // 'residencia' or 'empresa'

  // WhatsApp Links Config
  const baseWhatsappUrl = "https://wa.me/5524998534534?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";
  const residenciaWhatsappUrl = "https://wa.me/5524998534534?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20minha%20RESIDÊNCIA.";
  const empresaWhatsappUrl = "https://wa.me/5524998534534?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20minha%20EMPRESA.";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-brand-red selection:text-white font-sans relative overflow-x-hidden">
      
      {/* 2. BACKGROUND WATERMARK FIXED */}
      <div 
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.04] mix-blend-screen"
        style={{ mixBlendMode: 'screen' }}
      >
        <img 
          src="/Logo.png" 
          alt="Barretos Segurança Marca d'água" 
          className="w-[500px] h-auto max-w-full"
        />
      </div>

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-50">
          {/* Logo - Replaced with official Logo.png */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src="/Logo.png" 
              alt="Barretos Segurança Logo" 
              className="h-[76px] md:h-[86px] w-auto transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-xl tracking-wider leading-none font-sans">
                BARRETOS
              </span>
              <span className="text-brand-red font-bold text-[10px] tracking-[0.2em] leading-none mt-1">
                SEGURANÇA ELETRÔNICA
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Início</a>
            <a href="#perfil" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Perfis</a>
            <a href="#servicos" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Serviços</a>
            <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Como Funciona</a>
            <a href="#sobre" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Quem Somos</a>
            <a href="#planos" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Planos</a>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#perfil" 
              className="bg-brand-red hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-all duration-300 hover:shadow-red-glow flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Abrir Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col p-6 md:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <img 
                  src="/Logo.png" 
                  alt="Barretos Logo" 
                  className="h-[44px] w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-white font-black text-lg tracking-wider">BARRETOS</span>
                  <span className="text-brand-red font-bold text-[9px] tracking-wider font-sans mt-1">SEGURANÇA ELETRÔNICA</span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white focus:outline-none"
                aria-label="Fechar Menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-xl font-bold mb-12">
              <a 
                href="#inicio" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white border-b border-white/5 pb-2"
              >
                Início
              </a>
              <a 
                href="#perfil" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white border-b border-white/5 pb-2"
              >
                Perfis
              </a>
              <a 
                href="#servicos" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white border-b border-white/5 pb-2"
              >
                Serviços
              </a>
              <a 
                href="#como-funciona" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white border-b border-white/5 pb-2"
              >
                Como Funciona
              </a>
              <a 
                href="#sobre" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white border-b border-white/5 pb-2"
              >
                Quem Somos
              </a>
              <a 
                href="#planos" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white border-b border-white/5 pb-2"
              >
                Planos
              </a>
            </nav>

            <a 
              href="#perfil"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-brand-red text-center hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 mt-auto flex items-center justify-center gap-3 w-full"
            >
              <Phone className="h-5 w-5" />
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - MOBILE OPTIMIZED */}
      <section id="inicio" className="stripe-bg pt-28 pb-16 md:pt-48 md:pb-36 overflow-hidden min-h-[85vh] flex items-center relative z-10">
        {/* Subtle diagonal lines stripe pattern overlay */}
        <div className="stripe-pattern"></div>
        
        {/* Glowing red radial gradient backdrop elements */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10 w-full">
          
          {/* Left Column: Copywriting */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-7 text-left flex flex-col justify-center"
          >
            {/* Giant Title - Max 40px on mobile */}
            <h1 className="text-3xl sm:text-[40px] md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-5 leading-[1.1] font-sans">
              Seu imóvel <br />
              <span className="text-brand-red font-black drop-shadow-sm">
                protegido agora.
              </span>
            </h1>

            {/* Subtitle explaining Comodato */}
            <p className="text-sm md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mb-6 md:mb-8">
              Segurança eletrônica profissional no modelo de <strong className="text-white font-semibold">comodato</strong>. 
              Você não compra o equipamento: paga apenas uma assinatura acessível com instalação profissional, manutenção técnica 
              e equipamentos de ponta (<strong className="text-white font-semibold">Intelbras, Hikvision e outras</strong>) inclusos.
            </p>

            {/* CTAs - 100% width buttons on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a 
                href="#perfil"
                className="bg-brand-red hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all duration-300 hover:shadow-red-glow text-center flex items-center justify-center gap-3 group relative overflow-hidden w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Orçamento pelo WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#planos"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-3.5 px-8 rounded-xl text-sm transition-all duration-300 text-center w-full sm:w-auto"
              >
                Conhecer Planos
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium CSS Dashboard Mockups */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative h-auto md:h-[450px] w-full flex items-center justify-center mt-6 lg:mt-0 pb-10 lg:pb-0"
          >
            {/* Interactive Asymmetric CSS Dashboard */}
            
            <div className="relative mx-auto w-[calc(100%-32px)] max-w-[360px] p-4 md:absolute md:top-0 md:right-12 md:w-[416px] md:max-w-none md:p-6 md:mx-0 z-20 glassmorphism rounded-2xl shadow-glass border border-white/10 overflow-hidden md:overflow-visible animate-float-s">
              
              {/* Centered Social Proof Badge */}
              <div className="flex justify-center mb-4">
                <div className="flex flex-wrap items-center justify-center gap-2 bg-[#0c0c0c]/80 backdrop-blur-md py-1 px-3 rounded-full border border-white/5 w-fit">
                  {/* Avatars CSS stacked pile in black/gray */}
                  <div className="flex -space-x-1.5">
                    <div className="h-5 w-5 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-300 text-[8px] font-bold border border-[#333333]">J</div>
                    <div className="h-5 w-5 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-300 text-[8px] font-bold border border-[#333333]">M</div>
                    <div className="h-5 w-5 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-300 text-[8px] font-bold border border-[#333333]">A</div>
                    <div className="h-5 w-5 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-300 text-[8px] font-bold border border-[#333333]">C</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse"></span>
                    <span className="text-gray-300 text-[9px] md:text-[10px] font-semibold leading-none">
                      Mais de 500 clientes protegidos em Barra Mansa
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3 md:pb-4">
                <div className="flex items-center gap-2.5">
                  <Activity className="h-4.5 w-4.5 md:h-5 md:w-5 text-brand-red" />
                  <span className="text-white text-xs md:text-sm font-bold font-sans">Monitoramento ao Vivo</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 py-1 px-2.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse"></span>
                  <span className="text-[10px] md:text-xs text-brand-red font-bold tracking-wider">LIVE</span>
                </div>
              </div>

              {/* Mini Camera Feed Frame */}
              <div className="relative w-full h-36 md:h-48 bg-black rounded-lg border border-white/5 overflow-hidden flex items-center justify-center">
                {/* Simulated Feed Grid lines */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-10 pointer-events-none">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white"></div>
                  ))}
                </div>
                {/* Stylized vector representation of security zone */}
                <div className="relative flex flex-col items-center z-10">
                  <Eye className="h-9 w-9 text-white/40 animate-pulse mb-1.5" />
                  <span className="text-[10px] md:text-xs text-white/50 font-semibold uppercase tracking-widest">Barra Mansa / RJ</span>
                </div>
                
                {/* REC Flashing Dot */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] md:text-xs font-bold text-brand-red border border-brand-red/20">
                  <span className="h-2 w-2 rounded-full bg-brand-red animate-ping"></span>
                  <span>CAM 01 - Full HD</span>
                </div>

                {/* Cyber Laser Scanner Line */}
                <div className="absolute w-full h-[1px] bg-brand-red/80 shadow-[0_0_8px_rgba(204,0,0,0.8)] top-0 left-0 animate-[scan_3s_linear_infinite]"></div>
              </div>

              {/* Analytics status bar */}
              <div className="mt-4 md:mt-5">
                <div className="flex justify-between items-center text-[10px] md:text-xs text-gray-400 mb-1.5">
                  <span>Sinal da Rede</span>
                  <span className="text-white font-bold">100% Excelente</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[100%] h-full bg-brand-red rounded-full"></div>
                </div>
              </div>

              {/* Status information */}
              <div className="mt-4 md:mt-5 flex items-center justify-between border-t border-white/5 pt-3 md:pt-4 text-xs md:text-sm text-gray-400">
                <span>Dispositivos</span>
                <span className="text-white font-bold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse"></span>
                  4 Câmeras Ativas
                </span>
              </div>

              {/* Card 2: Status Indicator "ATIVO" badge (Solid Red / White Text) - stacked inside flow on mobile, absolute on desktop */}
              <div className="relative mt-4 left-auto right-auto bottom-auto z-30 w-full bg-brand-red border border-brand-red rounded-xl p-3 shadow-red-glow flex items-center gap-3 animate-float-m md:absolute md:-left-8 md:-bottom-8 md:w-64">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-white flex-shrink-0 relative">
                  <Shield className="h-4.5 w-4.5 md:h-5 md:w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-white animate-ping"></span>
                </div>
                <div className="text-left">
                  <span className="text-[8px] md:text-[10px] text-white/90 font-bold uppercase tracking-wider block">SISTEMA CONECTADO</span>
                  <span className="text-xs md:text-sm font-bold text-white block mt-0.5">ALARME ATIVO 24H</span>
                  <span className="text-white/80 text-[9px] md:text-[10px] block leading-none mt-1">Conexão redundante OK</span>
                </div>
              </div>

              {/* Card 3: Small dynamic price card - stacked inside flow on mobile, absolute on desktop */}
              <div className="relative mt-3 left-auto right-auto bottom-auto z-30 w-full bg-brand-black/95 border border-brand-red/35 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg text-center animate-float-f md:absolute md:-right-6 md:bottom-20 md:w-auto">
                <span className="text-[8px] text-brand-red font-extrabold uppercase tracking-widest block">COMODATO</span>
                <span className="text-white text-xl md:text-2xl font-black block mt-0.5">R$ 139,90<span className="text-[10px] font-normal text-gray-300">/mês</span></span>
                <span className="bg-brand-red/20 border border-brand-red/40 text-white font-bold text-[8px] px-2 py-0.5 rounded-full inline-block mt-1.5">
                  Equipamento Incluso
                </span>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* STATS BAR - MOBILE OPTIMIZED */}
      <section className="bg-brand-gray/40 border-y border-white/5 py-8 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-5xl font-black text-white tracking-tight leading-none mb-1 md:mb-2">500+</span>
              <span className="text-[10px] md:text-sm text-gray-400 max-w-[130px] leading-snug">
                Clientes protegidos em Barra Mansa
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center border-l border-white/5">
              <span className="text-xl md:text-5xl font-black text-brand-red tracking-tight leading-none mb-1 md:mb-2">Desde 2018</span>
              <span className="text-[10px] md:text-sm text-gray-400 max-w-[130px] leading-snug">
                De experiência e confiança local
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center border-l border-white/5">
              <span className="text-xl md:text-4xl font-black text-white tracking-tight leading-none mb-1 md:mb-2">Intelbras / Hikvision</span>
              <span className="text-[10px] md:text-sm text-gray-400 max-w-[130px] leading-snug">
                E outras marcas líderes de mercado
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center border-l border-white/5">
              <span className="text-2xl md:text-5xl font-black text-brand-red tracking-tight leading-none mb-1 md:mb-2">24h</span>
              <span className="text-[10px] md:text-sm text-gray-400 max-w-[130px] leading-snug">
                Suporte e assistência total inclusa
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* MARCAS PARCEIRAS MARQUEE */}
      <section className="marcas-section">
        <p className="marcas-titulo">Marcas que trabalhamos</p>
        <div className="marquee-outer">
          <div className="marquee-track">

            {/* PRIMEIRA SEQUÊNCIA */}
            <div className="brand-item"><img src="/intelbras.png" alt="Intelbras" /></div>
            <div className="brand-item"><img src="/hikvision.png" alt="Hikvision" /></div>
            <div className="brand-item"><img src="/hilook.jpg" alt="HiLook" /></div>
            <div className="brand-item"><img src="/xiaomi.png" alt="Xiaomi" /></div>
            <div className="brand-item"><img src="/samsung.png" alt="Samsung" /></div>

            {/* SEGUNDA SEQUÊNCIA — cópia para o loop ficar contínuo */}
            <div className="brand-item"><img src="/intelbras.png" alt="Intelbras" /></div>
            <div className="brand-item"><img src="/hikvision.png" alt="Hikvision" /></div>
            <div className="brand-item"><img src="/hilook.jpg" alt="HiLook" /></div>
            <div className="brand-item"><img src="/xiaomi.png" alt="Xiaomi" /></div>
            <div className="brand-item"><img src="/samsung.png" alt="Samsung" /></div>

          </div>
        </div>
      </section>

      {/* 3. PROFILE SELECTOR SECTION */}
      <section id="perfil" className="py-14 md:py-24 relative z-25 bg-brand-gray/10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-brand-red text-xs font-black uppercase tracking-[0.25em] block mb-2">SELEÇÃO DE PERFIL</span>
            <h2 className="text-2xl md:text-[32px] font-bold tracking-tight text-white mb-4 font-sans">
              Para quem é a proteção?
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Selecione o perfil que melhor descreve o imóvel que deseja proteger para gerar o contato ideal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Card 1: Residencia */}
            <div 
              onClick={() => setSelectedProfile('residencia')}
              className={`glassmorphism rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col items-center text-center group border ${
                selectedProfile === 'residencia' 
                  ? 'border-brand-red shadow-red-glow scale-[1.02]' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                selectedProfile === 'residencia' ? 'bg-brand-red text-white' : 'bg-white/5 text-gray-400'
              }`}>
                <Home className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">🏠 Residência</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Proteja sua casa e família com planos de alarmes inteligentes e câmeras de alta definição.
              </p>
            </div>

            {/* Card 2: Empresa */}
            <div 
              onClick={() => setSelectedProfile('empresa')}
              className={`glassmorphism rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col items-center text-center group border ${
                selectedProfile === 'empresa' 
                  ? 'border-brand-red shadow-red-glow scale-[1.02]' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                selectedProfile === 'empresa' ? 'bg-brand-red text-white' : 'bg-white/5 text-gray-400'
              }`}>
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">🏢 Empresa</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Segurança para seu negócio com controle de acesso, tags RFID, cercas e monitoramento total.
              </p>
            </div>
          </div>

          {/* Conditional Button Animation */}
          <AnimatePresence>
            {selectedProfile && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex justify-center"
              >
                <a 
                  href={selectedProfile === 'residencia' ? residenciaWhatsappUrl : empresaWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl text-sm transition-all duration-300 hover:shadow-red-glow text-center flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <Phone className="h-4.5 w-4.5" />
                  Solicitar Orçamento no WhatsApp →
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. ÁREA DE ATENDIMENTO */}
      <section id="onde-atendemos" className="pt-20 pb-10 md:pt-32 md:pb-16 relative z-20 bg-brand-black border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-brand-red text-xs font-black uppercase tracking-[0.25em] block mb-2">Área de atendimento</span>
            <h2 className="text-2xl md:text-[32px] lg:text-4xl font-extrabold tracking-tight text-white mb-4 font-sans">
              Onde atendemos
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Volta Redonda, Barra Mansa, Pinheiral, Barra do Piraí e região
            </p>
          </div>

          <div className="glassmorphism rounded-2xl overflow-hidden max-w-[900px] mx-auto border border-white/10 hover:border-brand-red/30 transition-all duration-300 hover:shadow-red-glow mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117954.23!2d-44.1!3d-22.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ea9b97b3b5b5b5b%3A0x0!2sVolta+Redonda%2C+RJ!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* City Badges with premium styling */}
          <div className="flex flex-wrap justify-center gap-3 max-w-[600px] mx-auto mb-8">
            {["Volta Redonda", "Barra Mansa", "Pinheiral", "Barra do Piraí", "e região"].map((cidade) => (
              <span 
                key={cidade}
                className="bg-[#121212] border border-white/5 hover:border-brand-red/30 hover:text-brand-red rounded-xl px-5 py-2 text-xs md:text-sm font-semibold text-gray-300 transition-all duration-300 cursor-default hover:-translate-y-0.5"
              >
                {cidade}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href="https://wa.me/5524998534534?text=Olá!%20Quero%20verificar%20se%20vocês%20atendem%20minha%20cidade."
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center gap-2"
            >
              <Phone className="h-4.5 w-4.5" />
              Verificar atendimento na minha cidade
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - MOBILE OPTIMIZED */}
      <section id="servicos" className="py-14 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-brand-red text-xs font-black uppercase tracking-[0.25em] block mb-2 md:mb-3">CONHEÇA AS SOLUÇÕES</span>
            <h2 className="text-2xl md:text-[32px] font-bold tracking-tight text-white mb-4 font-sans">
              Segurança Eletrônica em Comodato
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Soluções completas sob medida para residências, condomínios e comércios com zero custo de compra de equipamentos.
            </p>
          </div>

          {/* Services Grid (6 Cards) - single column mobile, padding 20px (p-5), icons 40px on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Câmeras */}
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glassmorphism rounded-2xl p-5 md:p-8 hover:border-brand-red/30 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Eye className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Câmeras de Segurança Full HD</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 flex-grow">
                Visualização remota ao vivo pelo celular. Gravação contínua em alta definição e visão noturna (infravermelho) de alta performance.
              </p>
              <div className="flex items-end justify-between mt-auto border-t border-white/5 pt-4 md:pt-5">
                <div>
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider block leading-none">Mensalidade</span>
                  <span className="text-white text-base md:text-lg font-extrabold block mt-1">R$ 139,90<span className="text-[10px] md:text-xs font-normal text-gray-400">/mês</span></span>
                </div>
                <a 
                  href={baseWhatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/5 group-hover:bg-brand-red text-white group-hover:text-white py-2 px-4 rounded-lg border border-white/10 group-hover:border-brand-red transition-all duration-300 text-xs font-bold flex items-center gap-1"
                >
                  Solicitar
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>

            {/* Card 2: Alarme */}
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glassmorphism rounded-2xl p-5 md:p-8 hover:border-brand-red/30 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Bell className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Sistemas de Alarme</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 flex-grow">
                Central de alarme inteligente com sensores de barreira e de presença sem fios. Notificação em tempo real de disparos direto no seu smartphone.
              </p>
              <div className="flex items-end justify-between mt-auto border-t border-white/5 pt-4 md:pt-5">
                <div>
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider block leading-none">Mensalidade</span>
                  <span className="text-white text-base md:text-lg font-extrabold block mt-1">R$ 99,90<span className="text-[10px] md:text-xs font-normal text-gray-400">/mês</span></span>
                </div>
                <a 
                  href={baseWhatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/5 group-hover:bg-brand-red text-white group-hover:text-white py-2 px-4 rounded-lg border border-white/10 group-hover:border-brand-red transition-all duration-300 text-xs font-bold flex items-center gap-1"
                >
                  Solicitar
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>

            {/* Card 3: Portões */}
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glassmorphism rounded-2xl p-5 md:p-8 hover:border-brand-red/30 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Cpu className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Portões Eletrônicos</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 flex-grow">
                Instalação de motores rápidos para portões deslizantes, basculantes e pivotantes. Automação moderna com placas receptoras anti-clonagem Intelbras.
              </p>
              <div className="flex items-end justify-between mt-auto border-t border-white/5 pt-4 md:pt-5">
                <div>
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider block leading-none">Orçamento</span>
                  <span className="text-white text-base md:text-lg font-extrabold block mt-1">Sob consulta</span>
                </div>
                <a 
                  href={baseWhatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/5 group-hover:bg-brand-red text-white group-hover:text-white py-2 px-4 rounded-lg border border-white/10 group-hover:border-brand-red transition-all duration-300 text-xs font-bold flex items-center gap-1"
                >
                  Solicitar
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>

            {/* Card 4: Tag RFID */}
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glassmorphism rounded-2xl p-5 md:p-8 hover:border-brand-red/30 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Key className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Automação de Acesso RFID</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 flex-grow">
                Controle de acesso premium para moradores e colaboradores por meio de tag RFID veicular de aproximação ou chaveiros digitais codificados.
              </p>
              <div className="flex items-end justify-between mt-auto border-t border-white/5 pt-4 md:pt-5">
                <div>
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider block leading-none">Orçamento</span>
                  <span className="text-white text-base md:text-lg font-extrabold block mt-1">Sob consulta</span>
                </div>
                <a 
                  href={baseWhatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/5 group-hover:bg-brand-red text-white group-hover:text-white py-2 px-4 rounded-lg border border-white/10 group-hover:border-brand-red transition-all duration-300 text-xs font-bold flex items-center gap-1"
                >
                  Solicitar
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>

            {/* Card 5: Cercas Elétricas */}
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glassmorphism rounded-2xl p-5 md:p-8 hover:border-brand-red/30 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Zap className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Cercas Elétricas e Concertinas</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 flex-grow">
                Proteção física e de alto impacto no perímetro dos muros. Instalamos centrais de choque homologadas que geram alarmes imediatos ao serem violadas.
              </p>
              <div className="flex items-end justify-between mt-auto border-t border-white/5 pt-4 md:pt-5">
                <div>
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider block leading-none">Orçamento</span>
                  <span className="text-white text-base md:text-lg font-extrabold block mt-1">Sob consulta</span>
                </div>
                <a 
                  href={baseWhatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/5 group-hover:bg-brand-red text-white group-hover:text-white py-2 px-4 rounded-lg border border-white/10 group-hover:border-brand-red transition-all duration-300 text-xs font-bold flex items-center gap-1"
                >
                  Solicitar
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>

            {/* Card 6: Manutenção */}
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glassmorphism rounded-2xl p-5 md:p-8 hover:border-brand-red/30 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Wrench className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Manutenção de DVR e Sistemas</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 flex-grow">
                Tem um sistema de câmeras ou alarmes antigo inativo? Realizamos a revitalização total, trocas de cabeamento degradado, fontes e manutenção.
              </p>
              <div className="flex items-end justify-between mt-auto border-t border-white/5 pt-4 md:pt-5">
                <div>
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider block leading-none">Orçamento</span>
                  <span className="text-white text-base md:text-lg font-extrabold block mt-1">Sob consulta</span>
                </div>
                <a 
                  href={baseWhatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/5 group-hover:bg-brand-red text-white group-hover:text-white py-2 px-4 rounded-lg border border-white/10 group-hover:border-brand-red transition-all duration-300 text-xs font-bold flex items-center gap-1"
                >
                  Solicitar
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION - MOBILE OPTIMIZED (Gap 32px, Background number 60px on mobile) */}
      <section id="como-funciona" className="py-14 md:py-24 bg-brand-gray/20 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <span className="text-brand-red text-xs font-black uppercase tracking-[0.25em] block mb-2 md:mb-3">CUSTO ZERO INICIAL</span>
            <h2 className="text-2xl md:text-[32px] font-bold tracking-tight text-white mb-4 font-sans">
              Como Funciona o Comodato?
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Em vez de pagar caro para comprar aparelhos que desvalorizam, você desfruta de um serviço completo de segurança profissional.
            </p>
          </div>

          {/* Steps horizontal grid - Gap 32px (gap-8) on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            
            {/* Step 1 */}
            <div className="relative p-6 glassmorphism rounded-2xl overflow-hidden min-h-[180px] flex flex-col justify-end">
              {/* Giant Absolute Background Number: 60px on mobile, 120px on desktop */}
              <span className="absolute top-2 right-4 text-white/[0.03] font-black text-[60px] md:text-[120px] select-none leading-none">
                01
              </span>
              
              <div className="h-[60px] w-[60px] md:h-16 md:w-16 rounded-full bg-brand-red/10 border border-brand-red/35 flex items-center justify-center text-brand-red font-black text-xl mb-4 shadow-red-glow">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Escolha o Plano</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs relative z-10">
                Avaliamos o layout do seu imóvel e indicamos o plano perfeito de câmeras, alarmes ou controle de acesso que atende às suas necessidades.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 glassmorphism rounded-2xl overflow-hidden min-h-[180px] flex flex-col justify-end">
              {/* Giant Absolute Background Number: 60px on mobile, 120px on desktop */}
              <span className="absolute top-2 right-4 text-white/[0.03] font-black text-[60px] md:text-[120px] select-none leading-none">
                02
              </span>
              
              <div className="h-[60px] w-[60px] md:h-16 md:w-16 rounded-full bg-brand-red/10 border border-brand-red/35 flex items-center justify-center text-brand-red font-black text-xl mb-4 shadow-red-glow">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Instalação Profissional</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs relative z-10">
                Nossa própria equipe técnica realiza a instalação de equipamentos líderes de mercado (como Intelbras e Hikvision) sem que você pague nada pelo maquinário. Tudo limpo e rápido.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 glassmorphism rounded-2xl overflow-hidden min-h-[180px] flex flex-col justify-end">
              {/* Giant Absolute Background Number: 60px on mobile, 120px on desktop */}
              <span className="absolute top-2 right-4 text-white/[0.03] font-black text-[60px] md:text-[120px] select-none leading-none">
                03
              </span>
              
              <div className="h-[60px] w-[60px] md:h-16 md:w-16 rounded-full bg-brand-red/10 border border-brand-red/35 flex items-center justify-center text-brand-red font-black text-xl mb-4 shadow-red-glow">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pague Mensalmente</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs relative z-10">
                Tenha suporte técnico permanente incluso, reparo de defeitos e atualização tecnológica dos aparelhos coberta pela sua assinatura.
              </p>
            </div>

          </div>

          {/* Footnote card */}
          <div className="mt-12 md:mt-16 bg-[#161616]/50 border border-white/5 rounded-2xl p-5 md:p-6 text-center max-w-2xl mx-auto glassmorphism-light">
            <span className="text-white font-extrabold text-xs md:text-sm block mb-1">
              ✓ Sem custo inicial de compra • ✓ Suporte total • ✓ Instalação feita por técnicos
            </span>
            <span className="text-brand-red font-bold text-[10px] md:text-xs">
              Sem entrada. Sem burocracia. Equipamento 100% sob responsabilidade da empresa.
            </span>
          </div>

        </div>
      </section>

      {/* 5. SOBRE NÓS (QUEM SOMOS) SECTION */}
      <section id="sobre" className="py-14 md:py-24 relative z-10 bg-brand-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-brand-red text-xs font-black uppercase tracking-[0.25em] block mb-2">QUEM SOMOS</span>
            <h2 className="text-2xl md:text-[32px] lg:text-4xl font-extrabold tracking-tight text-white mb-4 font-sans">
              Segurança com quem <span className="text-brand-red">realmente entende</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Conheça a história e os valores que fazem da Barretos Segurança Eletrônica a escolha certa para o seu patrimônio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Premium visual highlight box */}
            <div className="lg:col-span-5 relative">
              <div className="glassmorphism rounded-3xl p-8 border border-brand-red/30 shadow-red-glow relative overflow-hidden text-left bg-gradient-to-br from-[#0c0c0c] to-[#121212]">
                
                {/* Glowing red radial gradient background */}
                <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-red/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="h-14 w-14 rounded-2xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">Barretos Segurança</h3>
                
                {/* Featured Quote / Main Commitment */}
                <div className="border-l-2 border-brand-red pl-4 my-6">
                  <p className="text-white text-sm md:text-base font-semibold leading-relaxed italic">
                    "Nosso compromisso é simples: sua segurança com quem realmente entende do assunto."
                  </p>
                </div>

                {/* Company quick highlights */}
                <ul className="space-y-3.5 text-xs text-gray-300 mt-6 pt-6 border-t border-white/5">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse"></span>
                    Experiência Local <strong>Desde 2018</strong>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse"></span>
                    Atendimento <strong>Direto pelo Proprietário</strong>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse"></span>
                    Marcas líderes: <strong>Intelbras, Hikvision</strong> e outras
                  </li>
                </ul>

              </div>
            </div>

            {/* Right Column: Grid mapping the core copywriting points */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              
              {/* Point 1: Experience & Scope */}
              <div className="glassmorphism rounded-2xl p-5 border border-white/5 hover:border-brand-red/35 transition-all duration-300">
                <div className="h-10 w-10 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-4">
                  <Activity className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Desde 2018</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  A Barretos Segurança Eletrônica atua em Volta Redonda e região desde 2018 instalando câmeras, alarmes e sistemas de acesso para residências e empresas.
                </p>
              </div>

              {/* Point 2: Commitment & Honesty */}
              <div className="glassmorphism rounded-2xl p-5 border border-white/5 hover:border-brand-red/35 transition-all duration-300">
                <div className="h-10 w-10 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-4">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Honestidade & Transparência</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Somos uma empresa séria, comprometida com a honestidade em cada orçamento e com a qualidade em cada instalação. Aqui você recebe exatamente o que foi combinado, sem surpresas no final.
                </p>
              </div>

              {/* Point 3: Direct Support by Owner */}
              <div className="glassmorphism rounded-2xl p-5 border border-white/5 hover:border-brand-red/35 transition-all duration-300">
                <div className="h-10 w-10 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-4">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Atendimento Direto</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Todo atendimento é feito diretamente pelo proprietário, sem intermediários, garantindo agilidade, qualidade e preço justo do início ao fim do projeto.
                </p>
              </div>

              {/* Point 4: Key Equipment Brands */}
              <div className="glassmorphism rounded-2xl p-5 border border-white/5 hover:border-brand-red/35 transition-all duration-300">
                <div className="h-10 w-10 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-4">
                  <Cpu className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Equipamentos de Ponta</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Trabalhamos com equipamentos das principais marcas do mercado, como Intelbras, Hikvision e outras, garantindo a solução ideal para cada projeto.
                </p>
              </div>

            </div>

          </div>

          {/* Regional focus bottom text */}
          <div className="mt-10 md:mt-12 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 text-center max-w-3xl mx-auto flex items-center justify-center gap-3">
            <MapPin className="h-5 w-5 text-brand-red flex-shrink-0" />
            <span className="text-xs md:text-sm text-gray-300 font-medium">
              Foco regional completo: Atendemos com agilidade em <strong>Volta Redonda, Barra Mansa, Pinheiral, Barra do Piraí e toda a região</strong>.
            </span>
          </div>

        </div>
      </section>

      {/* PRICING SECTION - MOBILE OPTIMIZED (Removed excess padding at bottom) */}
      <section id="planos" className="pt-14 pb-8 md:pt-24 md:pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-brand-red text-xs font-black uppercase tracking-[0.25em] block mb-2 md:mb-3">NOSSOS PREÇOS</span>
            <h2 className="text-2xl md:text-[32px] font-bold tracking-tight text-white mb-4 font-sans">
              Planos de Assinatura Simples
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Escolha a cobertura que melhor protege seu patrimônio. Transparência total e suporte incluso.
            </p>
          </div>

          {/* Pricing cards wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Plan 1: Alarme */}
            <div className="glassmorphism rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col relative transition-all duration-300 hover:border-white/10">
              <span className="text-[9px] md:text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block mb-1">PLANO RESIDENCIAL & COMERCIAL</span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4">Sistema de Alarme</h3>
              
              <div className="mb-5 md:mb-6">
                <span className="text-gray-400 text-xs">A partir de</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-white text-4xl md:text-5xl font-black">R$ 99,90</span>
                  <span className="text-gray-400 text-xs md:text-sm font-medium">/mês</span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3.5 mb-6 md:mb-8 flex-grow border-t border-white/5 pt-5 md:pt-6">
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-brand-red/10 border border-brand-red/35 text-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  Central de Alarme de Última Geração Inclusa
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-brand-red/10 border border-brand-red/35 text-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  Sensores de Abertura e Presença
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-brand-red/10 border border-brand-red/35 text-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  Bateria Backup (funciona sem energia)
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-brand-red/10 border border-brand-red/35 text-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  Controle total via app móvel
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-brand-red/10 border border-brand-red/35 text-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  Suporte Técnico e Manutenção Total
                </li>
              </ul>

              <a 
                href={baseWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white font-bold text-center py-3.5 rounded-xl text-sm border border-white/10 transition-all duration-300 w-full"
              >
                Solicitar Plano Alarme
              </a>
            </div>

            {/* Plan 2: Câmeras (Featured Card) */}
            <div className="bg-[#0e0e0e] rounded-3xl p-6 md:p-8 border-2 border-brand-red flex flex-col relative transition-all duration-300 shadow-red-glow">
              {/* Popularity Badge */}
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[9px] md:text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                Mais Popular
              </span>

              <span className="text-[9px] md:text-[10px] text-brand-red font-extrabold uppercase tracking-widest block mb-1 mt-2">PROTEÇÃO COMPLETA POR VÍDEO</span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4">Câmeras Full HD</h3>
              
              <div className="mb-5 md:mb-6">
                <span className="text-gray-400 text-xs">A partir de</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-white text-4xl md:text-5xl font-black">R$ 139,90</span>
                  <span className="text-gray-400 text-xs md:text-sm font-medium">/mês</span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3.5 mb-6 md:mb-8 flex-grow border-t border-white/5 pt-5 md:pt-6">
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-brand-red/10 border border-brand-red/35 text-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  Câmeras Full HD Inclusas (Intelbras/Hikvision)
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-brand-red/10 border border-brand-red/35 text-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  DVR Inteligente com Disco de Gravação
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-brand-red/10 border border-brand-red/35 text-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  Acesso Remoto Rápido em Tempo Real pelo Celular
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-brand-red/10 border border-brand-red/35 text-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  Visão Noturna Avançada (Infravermelho)
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-brand-red/10 border border-brand-red/35 text-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  Suporte Técnico e Troca de Peças Inclusos
                </li>
              </ul>

              <a 
                href={baseWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-red hover:bg-red-700 text-white font-bold text-center py-3.5 rounded-xl text-sm transition-all duration-300 hover:shadow-red-glow flex items-center justify-center gap-2 w-full"
              >
                <Phone className="h-4 w-4" />
                Contratar Plano Câmeras
              </a>
            </div>

          </div>

          <div className="text-center mt-8">
            <p className="text-[10px] md:text-xs text-gray-500 italic">
              *Consulte taxa de instalação única inicial de acordo com o tamanho do seu projeto.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION - MOBILE OPTIMIZED (Max padding 80px -> py-14) */}
      <section className="py-14 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="stripe-bg rounded-3xl p-8 md:p-16 text-center border border-white/10 shadow-red-glow relative overflow-hidden">
            {/* Diagonal overlay */}
            <div className="stripe-pattern"></div>
            
            {/* Radial background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="bg-white/10 border border-white/20 text-white font-extrabold text-[9px] md:text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full inline-block mb-4 md:mb-6 backdrop-blur-md">
                PROMOÇÃO DE COMODATO ATIVA
              </span>
              <h2 className="text-2xl md:text-[32px] lg:text-5xl font-black text-white tracking-tight mb-5 md:mb-6 font-sans">
                Proteja quem você ama com tecnologia profissional.
              </h2>
              <p className="text-white/80 text-xs md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
                Fale diretamente com nosso setor de vendas de Barra Mansa. Agende hoje mesmo uma vistoria técnica gratuita e receba a indicação do sistema perfeito.
              </p>
              <a 
                href={baseWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-gray-100 text-black font-extrabold py-3.5 px-8 rounded-xl text-sm transition-all duration-300 shadow-xl inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <Phone className="h-5 w-5 text-brand-red" />
                Falar com Consultor no WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-black border-t border-white/5 py-12 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          
          {/* Logo & Info column - Replaced with official Logo.png */}
          <div className="md:col-span-5 flex flex-col text-left">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/Logo.png" 
                alt="Barretos Logo" 
                className="h-[44px] w-auto"
              />
              <div className="flex flex-col">
                <span className="text-white font-black text-lg tracking-wider leading-none">BARRETOS</span>
                <span className="text-brand-red font-bold text-[9px] tracking-wider leading-none mt-1">SEGURANÇA ELETRÔNICA</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm mb-5 md:mb-6 font-sans">
              Especialistas em sistemas de segurança eletrônica de última geração no modelo de comodato. Protegendo lares e comércios no Sul Fluminense.
            </p>
            <span className="text-gray-500 text-xs">
              Barra Mansa, Rio de Janeiro - Brasil
            </span>
          </div>

          {/* Quick links column */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase mb-5 md:mb-6 font-sans">Navegação</h4>
            <ul className="space-y-3.5 text-xs md:text-sm">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors duration-200">Início</a>
              </li>
              <li>
                <a href="#perfil" className="text-gray-400 hover:text-white transition-colors duration-200">Perfis</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors duration-200">Serviços</a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors duration-200">Como Funciona</a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors duration-200">Quem Somos</a>
              </li>
              <li>
                <a href="#planos" className="text-gray-400 hover:text-white transition-colors duration-200">Planos de Assinatura</a>
              </li>
            </ul>
          </div>

          {/* Social column */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase mb-5 md:mb-6 font-sans">Contato & Redes</h4>
            <ul className="space-y-3.5 text-xs md:text-sm mb-6">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-red" />
                <a href="tel:24998534534" className="text-gray-400 hover:text-white transition-colors duration-200">(24) 99853-4534</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-brand-red" />
                <a 
                  href="https://instagram.com/barretos_seguranca" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  @barretos_seguranca
                </a>
              </li>
            </ul>
            
            {/* Brand Logo link */}
            <span className="text-xs text-gray-500 block border-t border-white/5 pt-4">
              Website: <a href="http://barretoseguraca.com" className="hover:text-white transition-colors duration-200">barretoseguraca.com</a>
            </span>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} Barretos Segurança Eletrônica. Todos os direitos reservados.
          </span>
          <span>
            Feito para Barra Mansa - RJ • Equipamentos líderes de mercado (Intelbras, Hikvision e outras)
          </span>
        </div>
      </footer>

    </div>
  );
}

export default App;
