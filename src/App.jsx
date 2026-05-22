import { useState, useEffect } from 'react';
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
  MapPin,
  Calendar,
  Clock,
  Award,
  Headset,
  Settings
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
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans relative overflow-x-hidden">
      
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

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 lg:grid-cols-12 gap-2 sm:gap-4 md:gap-8 items-center relative z-10 w-full">
          
          {/* Left Column: Copywriting */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="col-span-7 md:col-span-7 lg:col-span-7 text-left flex flex-col justify-center"
          >
            {/* Giant Title - Max 40px on mobile */}
            <h1 className="text-[20px] xs:text-[25px] sm:text-[32px] md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 xs:mb-5 leading-[1.1] font-sans">
              Seu imóvel <br />
              <span className="text-brand-red font-black drop-shadow-sm">
                protegido agora.
              </span>
            </h1>

            {/* Subtitle explaining Comodato */}
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mb-3 xs:mb-6 md:mb-8">
              Segurança eletrônica profissional no modelo de <strong className="text-white font-semibold">comodato</strong>. 
              Você não compra o equipamento: paga apenas uma assinatura acessível com instalação profissional, manutenção técnica 
              e equipamentos de ponta (<strong className="text-white font-semibold">Intelbras, Hikvision e outras</strong>) inclusos.
            </p>

            {/* CTAs - 100% width buttons on mobile */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
              <a 
                href="#perfil"
                className="bg-brand-red hover:bg-red-700 text-white font-bold py-2 xs:py-3.5 px-2 xs:px-8 rounded-lg xs:rounded-xl text-[10px] xs:text-sm transition-all duration-300 hover:shadow-red-glow text-center flex items-center justify-center gap-1.5 xs:gap-3 group relative overflow-hidden w-full sm:w-auto"
              >
                <Phone className="h-3.5 w-3.5 xs:h-5 xs:w-5" />
                Orçamento pelo WhatsApp
                <ArrowRight className="h-3 w-3 xs:h-4 xs:w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#planos"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-2 xs:py-3.5 px-2 xs:px-8 rounded-lg xs:rounded-xl text-[10px] xs:text-sm transition-all duration-300 text-center w-full sm:w-auto"
              >
                Conhecer Planos
              </a>
            </div>

            {/* Mobile/Desktop Trust Badges row */}
            <div className="flex items-center justify-between gap-1 mt-4 border-t border-white/5 pt-4 text-[7px] xs:text-[9px] sm:text-xs text-gray-400 font-semibold tracking-wider uppercase">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-brand-red flex-shrink-0" />
                <span>Instalação Profissional</span>
              </div>
              <div className="h-3 w-[1px] bg-white/10"></div>
              <div className="flex items-center gap-1">
                <Headset className="h-3 w-3 text-brand-red flex-shrink-0" />
                <span>Suporte Especializado</span>
              </div>
              <div className="h-3 w-[1px] bg-white/10"></div>
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-brand-red flex-shrink-0" />
                <span>Equipamentos de Ponta</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium CSS Dashboard Mockups */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-5 md:col-span-5 lg:col-span-5 relative h-auto md:h-[450px] w-full flex lg:flex items-center justify-center mt-0 lg:mt-0 pb-0 md:pb-10 lg:pb-0"
          >
            {/* Interactive Asymmetric CSS Dashboard */}
            
            <div className="relative mx-auto w-full max-w-[170px] xs:max-w-[210px] sm:max-w-[280px] md:max-w-none md:w-[416px] p-2 xs:p-3 sm:p-4 md:p-6 z-20 glassmorphism rounded-xl xs:rounded-2xl shadow-glass border border-white/10 overflow-visible animate-float-s md:absolute md:top-0 md:right-12 md:mx-0">
              
              {/* Centered Social Proof Badge */}
              <div className="flex justify-center mb-2 xs:mb-4">
                <div className="flex flex-wrap items-center justify-center gap-1 xs:gap-2 bg-[#0c0c0c]/80 backdrop-blur-md py-0.5 xs:py-1 px-1.5 xs:px-3 rounded-full border border-white/5 w-fit">
                  {/* Avatars CSS stacked pile in black/gray */}
                  <div className="flex -space-x-1 xs:-space-x-1.5">
                    <div className="h-3.5 w-3.5 xs:h-5 xs:w-5 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-300 text-[5px] xs:text-[8px] font-bold border border-[#333333]">J</div>
                    <div className="h-3.5 w-3.5 xs:h-5 xs:w-5 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-300 text-[5px] xs:text-[8px] font-bold border border-[#333333]">M</div>
                    <div className="h-3.5 w-3.5 xs:h-5 xs:w-5 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-300 text-[5px] xs:text-[8px] font-bold border border-[#333333]">A</div>
                    <div className="h-3.5 w-3.5 xs:h-5 xs:w-5 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-300 text-[5px] xs:text-[8px] font-bold border border-[#333333]">C</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-1 w-1 xs:h-1.5 xs:w-1.5 rounded-full bg-brand-red animate-pulse"></span>
                    <span className="text-gray-300 text-[7px] xs:text-[9px] md:text-[10px] font-semibold leading-none">
                      Mais de 500 clientes protegidos
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2 xs:mb-4 border-b border-white/5 pb-2 xs:pb-3 md:pb-4">
                <div className="flex items-center gap-1 xs:gap-2.5">
                  <Activity className="h-3.5 w-3.5 xs:h-4.5 xs:w-4.5 md:h-5 md:w-5 text-brand-red" />
                  <span className="text-white text-[9px] xs:text-xs md:text-sm font-bold font-sans">Monitoramento ao Vivo</span>
                </div>
                <div className="flex items-center gap-1 xs:gap-2 bg-brand-red/10 border border-brand-red/20 py-0.5 px-1.5 xs:py-1 xs:px-2.5 rounded-full">
                  <span className="h-1 w-1 xs:h-1.5 xs:w-1.5 rounded-full bg-brand-red animate-pulse"></span>
                  <span className="text-[7px] xs:text-[10px] md:text-xs text-brand-red font-bold tracking-wider">LIVE</span>
                </div>
              </div>

              {/* Mini Camera Feed Frame */}
              <div 
                className="relative w-full h-20 xs:h-28 sm:h-36 md:h-48 bg-black rounded-lg border border-white/5 overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/cameras.jpg)' }}
              >
                
                {/* REC Flashing Dot */}
                <div className="absolute top-1.5 left-1.5 xs:top-3 xs:left-3 flex items-center gap-1 bg-black/80 backdrop-blur-md px-1 py-0.5 xs:px-2 xs:py-1 rounded text-[7px] xs:text-[10px] md:text-xs font-bold text-brand-red border border-brand-red/20">
                  <span className="h-1.5 w-1.5 xs:h-2 xs:w-2 rounded-full bg-brand-red animate-ping"></span>
                  <span>CAM 01 - Full HD</span>
                </div>

                {/* Cyber Laser Scanner Line */}
                <div className="absolute w-full h-[1px] bg-brand-red/80 shadow-[0_0_8px_rgba(204,0,0,0.8)] top-0 left-0 animate-[scan_3s_linear_infinite]"></div>
              </div>

              {/* Analytics status bar */}
              <div className="mt-2 xs:mt-4 md:mt-5">
                <div className="flex justify-between items-center text-[7px] xs:text-[10px] md:text-xs text-gray-400 mb-1">
                  <span>Sinal da Rede</span>
                  <span className="text-white font-bold">100% Excelente</span>
                </div>
                <div className="w-full h-1 xs:h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[100%] h-full bg-brand-red rounded-full"></div>
                </div>
              </div>

              {/* Status information */}
              <div className="mt-2 xs:mt-4 md:mt-5 flex items-center justify-between border-t border-white/5 pt-2 xs:pt-3 md:pt-4 text-[7px] xs:text-xs md:text-sm text-gray-400">
                <span>Dispositivos</span>
                <span className="text-white font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 xs:h-2 xs:w-2 rounded-full bg-brand-red animate-pulse"></span>
                  9 Câmeras Ativas
                </span>
              </div>

              {/* Card 2: Status Indicator "ATIVO" badge (Solid Red / White Text) - Hidden on mobile inside mockup, absolute on desktop */}
              <div className="hidden md:flex md:absolute md:-left-8 md:-bottom-8 md:w-64 z-30 bg-brand-red border border-brand-red rounded-xl p-3 shadow-red-glow items-center gap-3 animate-float-m">
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

              {/* Card 3: Small dynamic price card - absolute overlapping bottom-right corner on mobile and desktop */}
              <div className="absolute -right-2 xs:-right-4 bottom-2 md:-right-6 md:bottom-20 z-30 w-[100px] xs:w-[130px] md:w-auto bg-brand-black/95 border border-brand-red/35 backdrop-blur-md rounded-xl xs:rounded-2xl p-1.5 xs:p-3 md:px-4 md:py-3 shadow-lg text-center animate-float-f">
                <span className="text-[5px] xs:text-[8px] text-brand-red font-extrabold uppercase tracking-widest block">COMODATO</span>
                <span className="text-white text-xs xs:text-base md:text-2xl font-black block mt-0.5">R$ 139,90<span className="text-[6px] xs:text-[10px] font-normal text-gray-300">/mês</span></span>
                <span className="bg-brand-red/20 border border-brand-red/40 text-white font-bold text-[5px] xs:text-[8px] px-1 xs:px-2 py-0.5 rounded-full inline-block mt-1">
                  Equipamento Incluso
                </span>
              </div>
            </div>
            
          </motion.div>

          {/* Full-width Status Card below columns on mobile only */}
          <div className="col-span-12 block md:hidden mt-4 xs:mt-6 w-full z-30">
            <div className="glassmorphism border border-white/10 rounded-2xl p-3 xs:p-4 flex items-center justify-between bg-brand-black/40 backdrop-blur-md">
              {/* Left side: System Status with Red Icon */}
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="h-8 w-8 xs:h-10 xs:w-10 rounded-lg xs:rounded-xl bg-brand-red flex items-center justify-center text-white flex-shrink-0 relative shadow-red-glow">
                  <Shield className="h-4.5 w-4.5 xs:h-5 xs:w-5" />
                  <span className="absolute top-0 right-0 h-1.5 w-1.5 xs:h-2 xs:w-2 rounded-full bg-white animate-ping"></span>
                </div>
                <div className="text-left">
                  <span className="text-[7px] xs:text-[9px] text-gray-400 font-bold uppercase tracking-wider block">SISTEMA CONECTADO</span>
                  <span className="text-[10px] xs:text-xs font-black text-white block mt-0.5 leading-none">ALARME ATIVO 24H</span>
                </div>
              </div>
              
              {/* Divider line */}
              <div className="h-8 w-[1px] bg-white/10 mx-1 xs:mx-2"></div>
              
              {/* Right side: Cameras active */}
              <div className="text-right flex flex-col items-end justify-center">
                <span className="text-white font-bold text-[10px] xs:text-xs flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse"></span>
                  9 Câmeras Ativas
                </span>
                <span className="text-gray-400 text-[8px] xs:text-[9px] block leading-none mt-1">Monitoramento 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSOS CLIENTES MARQUEE */}
      <section className="pt-12 pb-14 bg-[#0a0a0a] relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-gray-500 text-xs font-black uppercase tracking-[0.25em] block mb-2">
              Nossos clientes
            </span>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Como diversos outros, esses clientes já escolheram a Barretos Segurança para proteger o que importa.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full flex overflow-hidden mask-fade">
          <div className="flex gap-6 py-4 px-2 w-max animate-marquee whitespace-nowrap">
            {/* Sequence 1 */}
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/pm1.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/pm2.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/galpao.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/espacoc.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/pnb.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/play.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Sequence 2 */}
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/pm1.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/pm2.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/galpao.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/espacoc.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/pnb.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-44 h-20 flex items-center justify-center bg-[#121212] border border-white/5 rounded-xl p-4 flex-shrink-0">
              <img src="/play.png" alt="Cliente" className="w-full max-h-20 object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
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
              <h3 className="text-lg font-bold text-white mb-2">Residência</h3>
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
              <h3 className="text-lg font-bold text-white mb-2">Empresa</h3>
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
      <section id="onde-atendemos" className="py-20 relative z-20 bg-brand-gray/10 border-t border-white/5 text-left overflow-hidden">
        {/* Glowing red radial gradient backdrop elements to make glassmorphism translucency pop */}
        <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        {/* area-atendimento-bg to allow future background image in top-right */}
        <div 
          id="area-atendimento-bg" 
          className="absolute top-0 right-0 w-[40%] h-full opacity-15 pointer-events-none" 
          style={{ objectFit: 'cover' }}
        ></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          {/* TOPO DA SEÇÃO */}
          <div className="text-center mb-12">
            <span className="text-[#cc0000] text-[11px] font-semibold tracking-[3px] uppercase block">
              ÁREA DE ATENDIMENTO
            </span>
            <h2 className="text-[32px] md:text-[52px] font-extrabold text-white mt-2 leading-none font-sans">
              Onde <span className="text-[#cc0000]">atendemos</span>
            </h2>
            <p className="text-[#aaaaaa] text-base text-center max-w-[600px] mt-4 mb-12 mx-auto">
              Atendemos Volta Redonda, Barra Mansa e diversas cidades da região com instalação rápida, equipamentos de qualidade e suporte especializado.
            </p>
          </div>

          {/* LAYOUT PRINCIPAL (dois blocos lado a lado) */}
          <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
            
            {/* BLOCO ESQUERDO (card grande) */}
            <div className="w-full lg:w-[35%] glassmorphism rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 p-10 flex flex-col">
              {/* Ícone de localização no topo */}
              <div className="w-[56px] h-[56px] bg-[#1f0000] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="h-7 w-7 text-[#cc0000]" />
              </div>
              
              <h3 className="text-white text-[32px] font-extrabold leading-none mt-6">
                Atendimento
                <span className="block text-[#cc0000] mt-1">regional</span>
              </h3>
              
              {/* Linha decorativa */}
              <div className="w-10 h-[3px] bg-[#cc0000] my-4"></div>
              
              <p className="text-[#aaaaaa] text-[15px] leading-[1.6] mb-8">
                Equipe local, instalação rápida e suporte direto para residências, comércios, condomínios e empresas.
              </p>
              
              {/* Rodapé do card */}
              <div className="flex items-stretch justify-between border-t border-[#2a2a2a] pt-6 gap-2">
                <div className="flex-1 flex flex-col items-center text-center px-1">
                  <Shield className="h-6 w-6 text-[#cc0000] mb-2" />
                  <span className="text-[#aaaaaa] text-[12px] font-medium leading-tight">Instalação profissional</span>
                </div>
                <div className="border-r border-[#2a2a2a]"></div>
                <div className="flex-1 flex flex-col items-center text-center px-1">
                  <Headset className="h-6 w-6 text-[#cc0000] mb-2" />
                  <span className="text-[#aaaaaa] text-[12px] font-medium leading-tight">Suporte especializado</span>
                </div>
                <div className="border-r border-[#2a2a2a]"></div>
                <div className="flex-1 flex flex-col items-center text-center px-1">
                  <Clock className="h-6 w-6 text-[#cc0000] mb-2" />
                  <span className="text-[#aaaaaa] text-[12px] font-medium leading-tight">Atendimento rápido</span>
                </div>
              </div>
            </div>

            {/* BLOCO DIREITO (grid de cidades) */}
            <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Volta Redonda",
                "Barra Mansa",
                "Pinheiral",
                "Barra do Piraí",
                "Resende",
                "Porto Real",
                "Quatis",
                "Piraí",
                "Rio Claro",
                "Valença"
              ].map((cidade) => (
                <div 
                  key={cidade}
                  className="glassmorphism rounded-2xl border border-white/5 hover:border-white/20 p-6 flex flex-col items-start transition-all duration-300 group"
                >
                  <MapPin className="h-[22px] w-[22px] text-[#cc0000]" />
                  <div className="w-6 h-[2px] bg-[#cc0000] mt-3 mb-2"></div>
                  <span className="text-white text-[17px] font-bold">{cidade}</span>
                </div>
              ))}
            </div>

          </div>

          {/* BANNER INFERIOR */}
          <div className="mt-8 glassmorphism rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Lado esquerdo */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-[#cc0000] flex items-center justify-center flex-shrink-0 shadow-red-glow">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.007a9.863 9.863 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-white text-[18px] font-bold">Sua cidade não está na lista?</span>
                <span className="text-[#aaaaaa] text-sm mt-0.5">Chame no WhatsApp e consulte disponibilidade.</span>
              </div>
            </div>
            {/* Lado direito */}
            <a 
              href="https://wa.me/5524998534534?text=Olá!%20Minha%20cidade%20não%20está%20na%20lista.%20Vocês%20atendem%20aqui?"
              target="_blank"
              rel="noreferrer"
              className="bg-[#cc0000] hover:bg-red-700 text-white py-4 px-8 rounded-lg text-sm font-bold tracking-[1px] transition-all duration-300 shadow-red-glow text-center flex items-center justify-center flex-shrink-0"
            >
              CONSULTAR ATENDIMENTO →
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
      <section id="sobre" className="py-20 px-6 lg:px-[80px] bg-[#0a0a0a] w-full relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          {/* BLOCO SUPERIOR — dois blocos lado a lado */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] lg:h-[320px] items-stretch">
            
            {/* Bloco esquerdo (55%) */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center text-left">
              <span className="text-[#cc0000] text-[12px] font-semibold tracking-[2px] uppercase mb-4 block leading-none">
                SOBRE NÓS
              </span>
              <h2 className="text-[32px] lg:text-[48px] font-extrabold text-white leading-[1.1] font-sans">
                Proteção de verdade <br />
                começa com <span className="text-[#cc0000]">confiança.</span>
              </h2>
              <p className="text-[15px] text-[#aaaaaa] leading-[1.7] max-w-[420px] mt-5">
                Desde 2018, a Barretos Segurança Eletrônica trabalha para proteger o que mais importa: você, sua família e seu patrimônio.
              </p>
              
              {/* Três badges em linha horizontal */}
              <div className="flex flex-wrap items-center gap-6 mt-7">
                <div className="flex items-center gap-2">
                  <Shield className="h-[18px] w-[18px] text-[#cc0000] flex-shrink-0" />
                  <span className="text-[13px] font-medium text-white leading-none">Atendimento próprio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-[18px] w-[18px] text-[#cc0000] flex-shrink-0" />
                  <span className="text-[13px] font-medium text-white leading-none">Suporte rápido 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-[18px] w-[18px] text-[#cc0000] flex-shrink-0" />
                  <span className="text-[13px] font-medium text-white leading-none">Qualidade em cada instalação</span>
                </div>
              </div>
            </div>

            {/* Bloco direito (45%) */}
            <div className="w-full lg:w-[45%] flex items-center justify-center">
              <div className="rounded-2xl w-full h-[300px] bg-[#1a1a1a] overflow-hidden border border-white/5 flex items-center justify-center group hover:border-[#cc0000]/30 transition-all duration-300 shadow-lg">
                <img 
                  src="/carro-fachada.jpg" 
                  alt="Carro e Fachada Barretos Segurança" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>

          </div>

          {/* BLOCO INFERIOR — grid de 4 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            
            {/* Card 1 */}
            <div className="bg-[#141414] rounded-2xl p-6 border border-[#222] h-[320px] flex flex-col justify-between text-left group hover:border-[#cc0000]/30 transition-all duration-300">
              <div>
                <Calendar className="h-7 w-7 text-[#cc0000] mb-3.5" />
                <h3 className="text-white text-[16px] font-bold mb-2">Desde 2018</h3>
                <p className="text-[#999] text-[13px] leading-[1.6]">
                  Atuamos em Volta Redonda e região oferecendo soluções inteligentes em segurança eletrônica.
                </p>
              </div>
              <div className="mt-5 bg-[#1e1e1e] rounded-[10px] h-[130px] w-full overflow-hidden border border-white/5 flex items-center justify-center group-hover:border-[#cc0000]/20 transition-colors duration-300">
                <img 
                  src="/foto-instalacao.jpg" 
                  alt="Instalação de câmeras Barretos" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#141414] rounded-2xl p-6 border border-[#222] h-[320px] flex flex-col justify-between text-left group hover:border-[#cc0000]/30 transition-all duration-300">
              <div>
                <Shield className="h-7 w-7 text-[#cc0000] mb-3.5" />
                <h3 className="text-white text-[16px] font-bold mb-2">Honestidade e Transparência</h3>
                <p className="text-[#999] text-[13px] leading-[1.6]">
                  Compromisso com a verdade, orçamento justo e qualidade em cada detalhe.
                </p>
              </div>
              <div className="mt-5 bg-[#1e1e1e] rounded-[10px] h-[130px] w-full overflow-hidden border border-white/5 flex items-center justify-center group-hover:border-[#cc0000]/20 transition-colors duration-300">
                <img 
                  src="/foto-reuniao.jpg" 
                  alt="Compromisso e Transparência Barretos" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#141414] rounded-2xl p-6 border border-[#222] h-[320px] flex flex-col justify-between text-left group hover:border-[#cc0000]/30 transition-all duration-300">
              <div>
                <Headset className="h-7 w-7 text-[#cc0000] mb-3.5" />
                <h3 className="text-white text-[16px] font-bold mb-2">Atendimento Direto</h3>
                <p className="text-[#999] text-[13px] leading-[1.6]">
                  Fale diretamente com quem resolve. Sem filas, sem burocracia.
                </p>
              </div>
              <div className="mt-5 bg-[#1e1e1e] rounded-[10px] h-[130px] w-full overflow-hidden border border-white/5 flex items-center justify-center group-hover:border-[#cc0000]/20 transition-colors duration-300">
                <img 
                  src="/foto-atendente.jpg" 
                  alt="Atendimento Direto Barretos" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#141414] rounded-2xl p-6 border border-[#222] h-[320px] flex flex-col justify-between text-left group hover:border-[#cc0000]/30 transition-all duration-300">
              <div>
                <Settings className="h-7 w-7 text-[#cc0000] mb-3.5" />
                <h3 className="text-white text-[16px] font-bold mb-2">Equipamentos de Ponta</h3>
                <p className="text-[#999] text-[13px] leading-[1.6]">
                  Trabalhamos com as melhores marcas para garantir máxima proteção.
                </p>
              </div>
              <div className="mt-5 bg-[#1e1e1e] rounded-[10px] h-[130px] w-full overflow-hidden border border-white/5 flex items-center justify-center group-hover:border-[#cc0000]/20 transition-colors duration-300">
                <img 
                  src="/foto-equipamentos.jpg" 
                  alt="Equipamentos de Segurança Eletrônica Barretos" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>

          </div>

          {/* RODAPÉ DA SEÇÃO — barra horizontal */}
          <div className="mt-12 bg-[#111111] rounded-2xl p-7 px-9 flex flex-col md:flex-row items-center gap-8 border border-white/5">
            {/* À esquerda: logo da Barretos */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <img src="/Logo.png" alt="Barretos Logo" className="h-[44px] w-auto" />
              <div className="flex flex-col text-left">
                <span className="text-white font-extrabold text-lg tracking-wider leading-none">BARRETOS</span>
                <span className="text-[#aaa] font-normal text-[11px] tracking-wider leading-none mt-1">SEGURANÇA ELETRÔNICA</span>
              </div>
            </div>
            {/* Divisória vertical */}
            <div className="hidden md:block border-r border-[#333] h-12"></div>
            {/* À direita */}
            <div className="text-center md:text-left">
              <p className="text-white text-[14px] leading-[1.7]">Mais que equipamentos, entregamos tranquilidade.</p>
              <p className="text-white text-[14px] leading-[1.7]">Conte com quem realmente entende do assunto.</p>
            </div>
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
              Especialistas em sistemas de segurança eletrônica de última geração no modelo de comodato. Protegendo lares e comércios.
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
          <span>
            Desenvolvido por <a href="https://instagram.com/pedrogaamaribas" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors duration-200 font-semibold">Pedro Ribas</a>
          </span>
          </div>
      </footer>

    </div>
  );
}

export default App;
