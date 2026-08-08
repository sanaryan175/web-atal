import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Mail, FileText, ChevronRight, 
  ExternalLink, Target, Laptop, Award, 
  CheckCircle, Users, User
} from 'lucide-react';

// --- LOGO IMPORTS ---
import aicteLogo from '@assets/aicte_logo_1784650128753.png';
import pictLogo from '@assets/pict_logo_1784650156382.png';
import atalLogo from '@assets/atal_logo_1784650128753.png';

// --- BROCHURE PDF ---
import brochureUrl from '@assets/Final Atal FDP Brochure.pdf?url';


function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'objectives', 'schedule', 'registration', 'contact'];
      
      let currentSection = sections[0];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold - check if top is near viewport top (like below navbar)
          if (rect.top <= 160) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for the sticky header
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About FDP' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'registration', label: 'Registration' },
    { id: 'contact', label: 'Contact' },
  ];

  const [selectedDay, setSelectedDay] = React.useState(0);

  type SlotKind = 'session' | 'special' | 'activity' | 'lunch' | 'hands-on' | 'assessment';
  interface Slot {
    time: string;
    kind: SlotKind;
    label?: string;
    sessionNo?: number;
    topic?: string;
    expert?: string;
    designation?: string;
    experience?: string;
  }
  interface DaySchedule { day: string; date: string; slots: Slot[]; }

  const scheduleData: DaySchedule[] = [
    {
      day: 'Day 1', date: 'Oct 5, 2026',
      slots: [
        { time: '9:00 AM – 9:30 AM', kind: 'special', label: 'Inaugural Session' },
        { time: '9:30 AM – 12:00 PM', kind: 'session', sessionNo: 1,
          topic: 'Introduction to Applied AI and Current Landscape',
          expert: 'Dr. Bhushan Garware', designation: 'AI Consultant at Google', experience: '15 years' },
        { time: '12:00 PM – 1:00 PM', kind: 'activity', label: 'Article Summary' },
        { time: '1:00 PM – 2:00 PM', kind: 'lunch', label: 'Lunch Break' },
        { time: '2:00 PM – 4:30 PM', kind: 'session', sessionNo: 2,
          topic: 'Emerging Trends in AI',
          expert: 'Dr. Bhushan Garware', designation: 'AI Consultant at Google', experience: '15 years' },
        { time: '4:30 PM – 5:30 PM', kind: 'hands-on', label: 'Hands-on: Generative AI – Text Generation' },
      ],
    },
    {
      day: 'Day 2', date: 'Oct 6, 2026',
      slots: [
        { time: '9:30 AM – 12:00 PM', kind: 'session', sessionNo: 3,
          topic: 'Agentic AI and Intelligent Systems',
          expert: 'Mr. Amol Ujagare', designation: 'Founder & Lead Trainer, AI Training Institute', experience: '10 years' },
        { time: '12:00 PM – 1:00 PM', kind: 'activity', label: 'Article Summary' },
        { time: '1:00 PM – 2:00 PM', kind: 'lunch', label: 'Lunch Break' },
        { time: '2:00 PM – 4:30 PM', kind: 'session', sessionNo: 4,
          topic: 'Multimodal AI Applications',
          expert: 'Mr. Amol Ujagare', designation: 'Founder & Lead Trainer, AI Training Institute', experience: '10 years' },
        { time: '4:30 PM – 5:30 PM', kind: 'hands-on', label: 'Hands-on: Build a Simple AI Agent' },
      ],
    },
    {
      day: 'Day 3', date: 'Oct 7, 2026',
      slots: [
        { time: '9:30 AM – 12:00 PM', kind: 'session', sessionNo: 5,
          topic: 'Digital Twin Development for Safety-Critical Systems',
          expert: 'Dr. Lalit Singh', designation: 'Nuclear Scientist, NPCIL (BARC)', experience: '24 years' },
        { time: '12:00 PM – 1:00 PM', kind: 'activity', label: 'Article Summary' },
        { time: '1:00 PM – 2:00 PM', kind: 'lunch', label: 'Lunch Break' },
        { time: '2:00 PM – 4:30 PM', kind: 'session', sessionNo: 6,
          topic: 'Applied AI for Societal Application',
          expert: 'Dr. Girish Palshikar', designation: 'Industry Expert', experience: '33 years' },
        { time: '4:30 PM – 5:30 PM', kind: 'hands-on', label: 'Hands-on: Build an AI Model' },
      ],
    },
    {
      day: 'Day 4', date: 'Oct 8, 2026',
      slots: [
        { time: '9:30 AM – 12:00 PM', kind: 'session', sessionNo: 7,
          topic: 'AI Model Deployment: Enterprise Document Intelligence with Gen AI',
          expert: 'Mr. Yogesh Saraf', designation: 'Associate Vice President & Regional Commercial Head – Tech Mahindra', experience: '30 years' },
        { time: '12:00 PM – 1:00 PM', kind: 'activity', label: 'Article Summary' },
        { time: '1:00 PM – 2:00 PM', kind: 'lunch', label: 'Lunch Break' },
        { time: '2:00 PM – 4:30 PM', kind: 'session', sessionNo: 8,
          topic: 'Ethical AI and Responsible Innovation',
          expert: 'Dr. Preeti Mulay', designation: 'Founder, Weekend Forever', experience: '28 years' },
        { time: '4:30 PM – 5:30 PM', kind: 'hands-on', label: 'Hands-on: Build a Recommender' },
      ],
    },
    {
      day: 'Day 5', date: 'Oct 9, 2026',
      slots: [
        { time: '9:30 AM – 12:00 PM', kind: 'special', label: 'Industrial Visit – C-DAC AIRAWAT' },
        { time: '1:00 PM – 2:00 PM', kind: 'lunch', label: 'Lunch Break' },
        { time: '2:00 PM – 4:30 PM', kind: 'session', sessionNo: 9,
          topic: 'Machine Learning & Deep Learning in Practice',
          expert: 'Dr. S. C. Dharmadhikari', designation: 'HOD, AI&DS Department, PICT', experience: '24 years' },
        { time: '4:30 PM – 5:30 PM', kind: 'hands-on', label: 'Hands-on: Research Assistant using AI' },
      ],
    },
    {
      day: 'Day 6', date: 'Oct 10, 2026',
      slots: [
        { time: '9:30 AM – 12:00 PM', kind: 'session', sessionNo: 10,
          topic: 'Indian Values / NEP / Research Methodology',
          expert: 'Dr. S. P. Kallurkar', designation: 'Chief Executive Officer at Level Up Pune', experience: '18 years' },
        { time: '12:00 PM – 1:00 PM', kind: 'activity', label: 'Article Summary' },
        { time: '1:00 PM – 2:00 PM', kind: 'lunch', label: 'Lunch Break' },
        { time: '2:00 PM – 4:30 PM', kind: 'assessment', label: 'MCQs and Feedback' },
        { time: '4:00 PM – 5:00 PM', kind: 'special', label: 'Valedictory Session' },
      ],
    },
  ];

  return (
    <div className="min-h-[100dvh] w-full flex flex-col font-sans text-slate-800 bg-white">
      
      {/* Header Section */}
      <header className="bg-white py-8 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex justify-center items-center gap-3 xs:gap-4 sm:gap-12 md:gap-20 mb-8 w-full px-4">
            <img src={aicteLogo} alt="AICTE Logo" className="w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain flex-shrink-0" />
            <img src={pictLogo} alt="PICT Logo" className="w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain flex-shrink-0" />
            <img src={atalLogo} alt="ATAL Logo" className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain flex-shrink-0" />
          </div>
          
          <div className="text-center max-w-4xl">
            <h2 className="text-[#8B1A1A] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">Society for Computer Technology & Research's</h2>
            <h1 className="font-serif text-[1.4rem] sm:text-4xl md:text-5xl font-bold text-[#1a2744] leading-tight mb-2 text-balance">
              Pune Institute of Computer Technology
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mb-1 font-medium">
              (An Autonomous Institute Affiliated to Savitribai Phule Pune University)
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mb-8">
              Approved by AICTE Government of Maharashtra &nbsp;|&nbsp; Accredited by NAAC (A+) &amp; NBA [All eligible UG Programs]
            </p>
            
            <p className="text-gray-900 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">
              Department of Artificial Intelligence & Data Science
            </p>
            <h2 className="font-serif text-[2rem] sm:text-5xl font-bold text-[#1e3a5f] mt-4 mb-4 text-balance">
              AICTE-ATAL FDP
            </h2>
            <p className="text-[#8B1A1A] font-bold text-lg sm:text-xl border-b-[3px] border-[#D4870A] inline-block pb-1 px-4 mb-2">
              5–10 October 2026
            </p>
          </div>
        </div>
      </header>

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#1a2744] shadow-md border-b border-blue-900/50 w-full">
        <div className="max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap items-center overflow-x-auto sm:overflow-visible hide-scrollbar px-1 sm:px-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`whitespace-nowrap w-1/3 sm:w-auto sm:flex-1 px-2 sm:px-3 md:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${
                activeSection === link.id
                  ? 'bg-[#8B1A1A] text-white border-[#8B1A1A]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5 border-transparent'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 flex flex-col">
        
        {/* Hero Section */}
        <section className="bg-[#1e3a5f] text-white pt-14 sm:pt-20 flex flex-col items-center relative overflow-hidden">
          {/* Subtle overlay gradients for depth */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-400 to-transparent blur-3xl" />
            <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-[#8B1A1A] to-transparent blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
            <div className="bg-[#D4870A]/20 border border-[#D4870A]/50 text-[#D4870A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              AICTE Training & Learning (ATAL) Academy Sponsored
            </div>
            
            <p className="text-blue-200 font-semibold mb-6 uppercase tracking-[0.2em] text-xs sm:text-sm">
              6-Day Offline Basic FDP
            </p>
            
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-8 sm:mb-12 drop-shadow-md px-4 text-balance">
              Applied AI: Emerging Trends, Tools, and Societal Applications
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
              <a href="https://atalacademy.aicte-india.org/signups" target="_blank" rel="noopener noreferrer" className="bg-[#8B1A1A] hover:bg-[#6e1313] text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-2 transition-all shadow-lg">
                REGISTER NOW <ExternalLink className="w-5 h-5" />
              </a>
              <a href={brochureUrl} target="_blank" rel="noopener noreferrer" className="border border-white hover:bg-white hover:text-[#1e3a5f] text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-2 transition-all shadow-lg">
                VIEW BROCHURE <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Stats Strip */}
          <div className="w-full bg-[#15233d] border-t border-white/10 mt-12 sm:mt-20 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-sm">
              <div className="p-6 sm:p-8 flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
                <span className="text-white/60 font-semibold tracking-wider text-xs">DURATION</span>
                <span className="text-white font-medium">October 5–10, 2026</span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
                <span className="text-white/60 font-semibold tracking-wider text-xs">VENUE</span>
                <span className="text-white font-medium">PICT Pune</span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
                <span className="text-white/60 font-semibold tracking-wider text-xs">REGISTRATION</span>
                <span className="text-[#D4870A] font-bold">Free of Cost</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 px-4 md:px-8 scroll-mt-24 sm:scroll-mt-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-10 sm:mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a2744] text-center mb-4 text-balance">About the Programme</h2>
              <div className="w-24 h-1.5 bg-[#8B1A1A] rounded-full"></div>
            </div>

            <div className="space-y-16">
              {/* PICT & Dept block */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">About PICT</h3>
                  <div className="w-16 h-1 bg-[#D4870A] mb-6"></div>
                  <p className="text-gray-700 leading-relaxed text-left md:text-justify">
                    Pune Institute of Computer Technology (PICT) is an elite academic Institute located in Pune, "The Oxford of the East." Since its establishment in 1983, PICT has been revolutionizing the education sector by nurturing skilled and industry-ready engineers. PICT believes in value-based quality education in Information and Communication Technology (ICT). PICT constantly endeavours to achieve higher levels of technical ingenuity through undergraduate (UG) programmes in CE, E&TE, IT, ECE, and AI&DS. Postgraduate (PG) programmes in Computer Engineering, Data Science, Electronics & Communication (Wireless Communication Technology), and Information Technology promote a high-quality research environment in emerging technological domains.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">About AI&DS Department</h3>
                  <div className="w-16 h-1 bg-[#D4870A] mb-6"></div>
                  <p className="text-gray-700 leading-relaxed text-left md:text-justify">
                    The Bachelor Degree Programme in Artificial Intelligence & Data Science (AI & DS) started in the academic year 2023-2024 with an intake capacity of 60. The department of AI & DS has been established with the vision to impart and strengthen core as well as technological knowledge base in all dimensions of this emerging area. Bridging computing fundamentals with emerging technologies, the department ensures professional excellence through interactive workshops and practical application. This experimental methodology builds industry-relevant skills, empowering graduates to lead as AI-integrated professionals in any modern sector.
                  </p>
                </div>
              </div>

              {/* Preamble & ATAL */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                <div className="bg-blue-50/70 p-8 md:p-10 rounded-2xl border border-blue-100 h-full flex flex-col">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">Preamble</h3>
                  <div className="w-16 h-1 bg-[#8B1A1A] mb-6"></div>
                  <p className="text-gray-700 leading-relaxed text-left md:text-justify flex-1">
                    The Faculty Development Programme (FDP) on Applied Artificial Intelligence aims to equip educators, researchers, and industry professionals with practical insights into the rapidly evolving landscape of AI/ML tools. This program addresses the need to enhance knowledge regarding AI-driven problem-solving techniques, data preprocessing, and modeling. By focusing on hands-on applications — including Computer Vision, Data Science, and Predictive Analysis.
                  </p>
                </div>

                <div className="bg-[#1a2744] p-8 md:p-10 rounded-2xl text-white shadow-xl h-full flex flex-col relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
                  
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">About ATAL Academy</h3>
                  <div className="w-16 h-1 bg-[#D4870A] mb-6 relative z-10"></div>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed relative z-10">
                    The main objectives of the ATAL Academy are:
                  </p>
                  <ul className="space-y-3 text-sm text-blue-50 mb-8 relative z-10 flex-1">
                    {[
                      "To plan and help in imparting quality technical education in the country.",
                      "To support technical institutions in fostering research, innovation and entrepreneurship through training in various emerging areas.",
                      "To stress upon empowering technical teachers, technicians using Information & Communication Technology.",
                      "To provide a variety of opportunities for training and exchange of experiences such as workshops, Orientations, learning communities, peer mentoring and other faculty development programmes.",
                      "To support policy makers for incorporating training as per requirements."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-[#D4870A] shrink-0 mt-0.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-start gap-4 relative z-10">
                    <Award className="w-8 h-8 text-[#D4870A] shrink-0" />
                    <p className="text-sm font-medium text-white leading-relaxed">
                      E-Certificate will be awarded subject to a minimum of 80% attendance and successful completion of the assignments and capstone project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="py-16 sm:py-24 px-4 md:px-8 scroll-mt-24 sm:scroll-mt-20 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-10 sm:mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a2744] text-center mb-4 text-balance">Objectives & Outcomes</h2>
              <div className="w-24 h-1.5 bg-[#8B1A1A] rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Block 1 */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="w-14 h-14 bg-blue-50 text-[#1e3a5f] rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1a2744] mb-6">Programme Objectives</h3>
                <ul className="space-y-4 flex-1">
                  {[
                    "To understand emerging trends in Applied AI.",
                    "To bridge the gap between theory and practice by focusing on real-world AI applications across domains such as healthcare, education, agriculture, and smart cities.",
                    "To equip faculty with hands-on skills in modern AI tools and frameworks.",
                    "To explore responsible and ethical AI practices, including fairness, transparency, and data privacy."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                      <span className="text-[#8B1A1A] shrink-0 mt-1"><ChevronRight className="w-5 h-5" /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Block 2 */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="w-14 h-14 bg-blue-50 text-[#1e3a5f] rounded-xl flex items-center justify-center mb-6">
                  <Laptop className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1a2744] mb-6">Mode of Conduct</h3>
                <ul className="space-y-4 flex-1">
                  {[
                    "Instructor-led live coding and real-time technical demonstrations.",
                    "Direct practical implementation of AI tools.",
                    "Project-based learning with continuous guidance and industry-relevant scenarios."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                      <span className="text-[#8B1A1A] shrink-0 mt-1"><ChevronRight className="w-5 h-5" /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Block 3 */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="w-14 h-14 bg-blue-50 text-[#1e3a5f] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1a2744] mb-6">Expected Outcomes</h3>
                <ul className="space-y-4 flex-1">
                  {[
                    "Explain key concepts and trends in Applied AI, including Generative AI and Agentic systems.",
                    "Identify suitable AI techniques and tools for solving domain-specific real-world problems.",
                    "Develop and implement basic AI models using contemporary frameworks and platforms.",
                    "Apply AI tools for data analysis, prediction, and automation tasks in practical scenarios.",
                    "Evaluate AI systems based on performance, ethical considerations, and societal impact."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                      <span className="text-[#8B1A1A] shrink-0 mt-1"><ChevronRight className="w-5 h-5" /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-16 sm:py-24 px-4 md:px-8 scroll-mt-24 sm:scroll-mt-20 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-6">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a2744] text-center mb-4 text-balance">Programme Schedule</h2>
              <div className="w-24 h-1.5 bg-[#8B1A1A] rounded-full mb-6"></div>
              {/* Meta info strip */}
              <div className="w-full bg-[#1a2744] rounded-xl px-5 sm:px-6 py-4 flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-2 text-sm text-white mb-10">
                <span><span className="text-[#D4870A] font-bold">Thrust Area:</span> Artificial Intelligence &amp; Applications</span>
                <span><span className="text-[#D4870A] font-bold">Mode:</span> Offline</span>
                <span><span className="text-[#D4870A] font-bold">Duration:</span> Oct 5 – Oct 10, 2026</span>
              </div>
            </div>

            {/* Day tabs */}
            <div className="flex overflow-x-auto gap-2 mb-8 pb-1">
              {scheduleData.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDay(i)}
                  className={`flex-shrink-0 flex flex-col items-center px-5 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                    selectedDay === i
                      ? 'bg-[#1a2744] border-[#1a2744] text-white shadow-md'
                      : 'bg-white border-gray-200 text-gray-500 hover:border-[#1a2744] hover:text-[#1a2744]'
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-70">{d.day}</span>
                  <span className="text-sm mt-0.5">{d.date}</span>
                </button>
              ))}
            </div>

            {/* Timeline for selected day */}
            <div className="relative hidden sm:block">
              {/* Continuous vertical line: at 110px (time) + 6px (half dot) = 116px */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-gray-200" style={{ left: '116px' }} />

              <div className="space-y-0">
                {scheduleData[selectedDay].slots.map((slot, j) => {
                  const isSession = slot.kind === 'session';
                  const isLunch   = slot.kind === 'lunch';
                  const isHandsOn = slot.kind === 'hands-on';
                  const isAssess  = slot.kind === 'assessment';
                  const isSpecial = slot.kind === 'special';
                  const isActivity = slot.kind === 'activity';

                  const dotColor = isSession ? 'bg-[#1a2744]'
                    : isHandsOn ? 'bg-[#D4870A]'
                    : isSpecial ? 'bg-[#8B1A1A]'
                    : isAssess  ? 'bg-purple-600'
                    : 'bg-gray-300';

                  return (
                    <div key={j} className="flex items-start">
                      {/* Time column */}
                      <div className="w-[110px] shrink-0 flex flex-col items-end gap-0.5 pt-2.5">
                        {(() => {
                          const parts = slot.time.split(' – ');
                          return (
                            <>
                              <span className="text-xs text-gray-500 font-medium leading-tight font-mono tabular-nums">{parts[0]}</span>
                              <span className="text-xs text-gray-300 font-medium leading-tight font-mono tabular-nums">{parts[1]}</span>
                            </>
                          );
                        })()}
                      </div>

                      {/* Dot on vertical line */}
                      <div className="w-3 shrink-0 flex justify-center pt-2">
                        <span className={`w-3 h-3 rounded-full border-2 border-white shadow ${dotColor} z-10 relative`} />
                      </div>

                      {/* Card */}
                      <div className={`flex-1 rounded-xl border px-5 py-4 mb-3 ml-3 ${
                        isSession  ? 'bg-white border-gray-200 shadow-sm'
                        : isLunch  ? 'bg-gray-50 border-dashed border-gray-200'
                        : isHandsOn ? 'bg-amber-50 border-amber-200'
                        : isSpecial ? 'bg-red-50 border-red-200'
                        : isAssess  ? 'bg-purple-50 border-purple-200'
                        : 'bg-blue-50 border-blue-100'
                      }`}>
                        {isSession ? (
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#1a2744] px-2.5 py-0.5 rounded-full">
                                Session {slot.sessionNo}
                              </span>
                            </div>
                            <p className="font-serif font-bold text-[#1a2744] text-base md:text-lg leading-snug mb-3">{slot.topic}</p>
                            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 border-t border-gray-100 pt-3">
                              <span><span className="font-semibold text-gray-700">Expert:</span> {slot.expert}</span>
                              <span><span className="font-semibold text-gray-700">Organisation:</span> {slot.designation}</span>
                              <span><span className="font-semibold text-gray-700">Experience:</span> {slot.experience}</span>
                            </div>
                          </div>
                        ) : isLunch ? (
                          <p className="text-gray-400 font-semibold text-sm italic">{slot.label}</p>
                        ) : isHandsOn ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full shrink-0">Hands-on</span>
                            <p className="font-semibold text-amber-900 text-sm">{slot.label?.replace('Hands-on: ', '')}</p>
                          </div>
                        ) : isAssess ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full shrink-0">Assessment</span>
                            <p className="font-semibold text-purple-900 text-sm">{slot.label}</p>
                          </div>
                        ) : isActivity ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-full shrink-0">Activity</span>
                            <p className="font-semibold text-blue-900 text-sm">{slot.label}</p>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8B1A1A] bg-red-100 px-2.5 py-0.5 rounded-full shrink-0">Special</span>
                            <p className="font-bold text-[#8B1A1A] text-sm">{slot.label}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile timeline (no horizontal connectors) */}
            <div className="relative sm:hidden">
              <div className="space-y-3">
                {scheduleData[selectedDay].slots.map((slot, j) => {
                  const isSession = slot.kind === 'session';
                  const isLunch   = slot.kind === 'lunch';
                  const isHandsOn = slot.kind === 'hands-on';
                  const isAssess  = slot.kind === 'assessment';
                  const isSpecial = slot.kind === 'special';
                  const isActivity = slot.kind === 'activity';

                  const dotColor = isSession ? 'bg-[#1a2744]'
                    : isHandsOn ? 'bg-[#D4870A]'
                    : isSpecial ? 'bg-[#8B1A1A]'
                    : isAssess  ? 'bg-purple-600'
                    : 'bg-gray-300';

                  return (
                    <div key={j}>
                      {/* Mobile-only time */}
                      <p className="text-xs text-gray-400 font-medium mb-1">{slot.time}</p>
                      <div className={`rounded-xl border px-5 py-4 ${
                        isSession  ? 'bg-white border-gray-200 shadow-sm'
                        : isLunch  ? 'bg-gray-50 border-dashed border-gray-200'
                        : isHandsOn ? 'bg-amber-50 border-amber-200'
                        : isSpecial ? 'bg-red-50 border-red-200'
                        : isAssess  ? 'bg-purple-50 border-purple-200'
                        : 'bg-blue-50 border-blue-100'
                      }`}>
                        {isSession ? (
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#1a2744] px-2.5 py-0.5 rounded-full">
                                Session {slot.sessionNo}
                              </span>
                            </div>
                            <p className="font-serif font-bold text-[#1a2744] text-base leading-snug mb-3">{slot.topic}</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 border-t border-gray-100 pt-3">
                              <span><span className="font-semibold text-gray-700">Expert:</span> {slot.expert}</span>
                              <span><span className="font-semibold text-gray-700">Organisation:</span> {slot.designation}</span>
                              <span><span className="font-semibold text-gray-700">Experience:</span> {slot.experience}</span>
                            </div>
                          </div>
                        ) : isLunch ? (
                          <p className="text-gray-400 font-semibold text-sm italic">{slot.label}</p>
                        ) : isHandsOn ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full shrink-0">Hands-on</span>
                            <p className="font-semibold text-amber-900 text-sm">{slot.label?.replace('Hands-on: ', '')}</p>
                          </div>
                        ) : isAssess ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full shrink-0">Assessment</span>
                            <p className="font-semibold text-purple-900 text-sm">{slot.label}</p>
                          </div>
                        ) : isActivity ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-full shrink-0">Activity</span>
                            <p className="font-semibold text-blue-900 text-sm">{slot.label}</p>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8B1A1A] bg-red-100 px-2.5 py-0.5 rounded-full shrink-0">Special</span>
                            <p className="font-bold text-[#8B1A1A] text-sm">{slot.label}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="registration" className="py-16 sm:py-24 px-4 md:px-8 scroll-mt-24 sm:scroll-mt-20 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-10 sm:mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a2744] text-center mb-4 text-balance">Registration & Guidelines</h2>
              <div className="w-24 h-1.5 bg-[#8B1A1A] rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-8">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-8 flex items-center gap-4">
                    <CheckCircle className="w-8 h-8 text-[#D4870A]" /> Eligibility & Rules
                  </h3>
                  <ul className="space-y-5">
                    {[
                      "Open to faculty from AICTE-approved institutions, PG/research scholars, and industry professionals.",
                      "Number of participants is limited to 50.",
                      "There is no course fee.",
                      "Selection of the participants will be based on the first come first serve basis.",
                      "TA to external participants will be provided as per AICTE ATAL guidelines.",
                      "Attendance for sessions is mandatory as per AICTE ATAL guidelines. Exam will be conducted for certification."
                    ].map((rule, idx) => (
                      <li key={idx} className="flex gap-4 text-gray-700">
                        <span className="text-[#8B1A1A] shrink-0 mt-1"><ChevronRight className="w-5 h-5" /></span>
                        <span className="leading-relaxed font-medium">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[#1e3a5f] text-white p-8 md:p-10 rounded-2xl shadow-lg border-l-8 border-[#D4870A]">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">How to Register</h3>
                  <p className="mb-8 text-blue-100 text-lg leading-relaxed">
                    Registration is free of cost and has to be done exclusively through the ATAL Academy portal.
                  </p>
                  <a href="https://atalacademy.aicte-india.org/signups" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center bg-[#8B1A1A] hover:bg-red-800 text-white font-bold py-4 px-8 rounded-lg transition-colors gap-3 shadow-md mb-6">
                    REGISTER ON ATAL PORTAL <ExternalLink className="w-5 h-5" />
                  </a>
                  <p className="text-sm text-blue-200">For FAQs, kindly visit: <a href="https://atalacademy.aicte-india.org/FAQs" target="_blank" rel="noopener noreferrer" className="underline hover:text-white font-semibold">ATAL FAQs</a></p>
                </div>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-8 flex items-center gap-4">
                  <Users className="w-8 h-8 text-[#D4870A]" /> Organizing Committee
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-[#8B1A1A] uppercase tracking-wider text-sm mb-3">Chief Patron</h4>
                    <ul className="text-gray-800 space-y-2 font-medium">
                      <li>• Hon. Shri. R. S. Kothavale, Managing Trustee, SCTR, Pune</li>
                      <li>• Shri. S. M. Sirsikar, Secretary, SCTR, Pune</li>
                    </ul>
                  </div>
                  
                  <div className="h-px bg-gray-200 w-full" />
                  
                  <div>
                    <h4 className="font-bold text-[#8B1A1A] uppercase tracking-wider text-sm mb-3">Patron</h4>
                    <ul className="text-gray-800 space-y-2 font-medium">
                      <li>• Dr. P. T. Kulkarni, Director, PICT</li>
                      <li>• Dr. S. T. Gandhe, Principal, PICT</li>
                    </ul>
                  </div>
                  
                  <div className="h-px bg-gray-200 w-full" />
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-[#8B1A1A] uppercase tracking-wider text-sm mb-2">Convener</h4>
                      <p className="text-gray-800 font-bold text-lg">Dr. Shweta Dharmadhikari<br/><span className="text-sm font-medium text-gray-500">HoD-AI&DS, PICT</span></p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#8B1A1A] uppercase tracking-wider text-sm mb-2">Coordinator</h4>
                      <p className="text-gray-800 font-bold text-lg">Ms. Deepa Mane<br/><span className="text-sm font-medium text-gray-500">Assistant Professor-AI&DS, PICT</span></p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gray-200 w-full" />
                  
                  <div>
                    <h4 className="font-bold text-[#8B1A1A] uppercase tracking-wider text-sm mb-3">Organizing Committee Members</h4>
                    <ul className="text-gray-800 space-y-2 font-medium">
                      <li>• Ms. A. A. Deshpande</li>
                      <li>• Mrs. M. V. Raut</li>
                      <li>• Mrs. T. S. Mulla</li>
                      <li>• Ms. D. S. Chechani</li>
                      <li>• Mrs. B. S. Kulkarni</li>
                      <li>• Mrs. A. A. Kadam</li>
                      <li>• Mrs. Deepika Kumari</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 px-4 md:px-8 scroll-mt-24 sm:scroll-mt-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-10 sm:mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a2744] text-center mb-4 text-balance">Contact & Venue</h2>
              <div className="w-24 h-1.5 bg-[#8B1A1A] rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {/* Contact Card 1 */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1e3a5f] shadow-sm mb-6 border border-gray-100">
                    <User className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-[#1a2744] mb-1">Ms. Deepa Mane</h4>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-6">Coordinator</p>
                  <div className="space-y-4 text-gray-700">
                    <p className="flex items-center gap-3 font-medium hover:text-[#8B1A1A] transition-colors cursor-pointer min-w-0 [overflow-wrap:anywhere]">
                      <Phone className="w-5 h-5 text-[#8B1A1A]"/> 8149122625
                    </p>
                    <p className="flex items-center gap-3 font-medium hover:text-[#8B1A1A] transition-colors cursor-pointer min-w-0 [overflow-wrap:anywhere]">
                      <Mail className="w-5 h-5 text-[#8B1A1A]"/> dbmane@pict.edu
                    </p>
                  </div>
                </div>
                
                {/* Contact Card 2 */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1e3a5f] shadow-sm mb-6 border border-gray-100">
                    <User className="w-6 h-6" />
                  </div>
                   <h4 className="font-bold text-xl text-[#1a2744] mb-1">Ms. Anjali Deshpande</h4>
                   <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-6">Coordinator</p>
                  <div className="space-y-4 text-gray-700">
                    <p className="flex items-center gap-3 font-medium hover:text-[#8B1A1A] transition-colors cursor-pointer min-w-0 [overflow-wrap:anywhere]">
                      <Phone className="w-5 h-5 text-[#8B1A1A]"/> 8379814795
                    </p>
                    <p className="flex items-center gap-3 font-medium hover:text-[#8B1A1A] transition-colors cursor-pointer min-w-0 [overflow-wrap:anywhere]">
                      <Mail className="w-5 h-5 text-[#8B1A1A]"/> aadeshpande@pict.edu
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1a2744] p-10 md:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4870A]/10 rounded-tr-full pointer-events-none" />
                
                <h3 className="font-serif text-3xl font-bold mb-8 flex items-center gap-4 relative z-10">
                  <MapPin className="w-8 h-8 text-[#D4870A]" /> Event Venue
                </h3>
                
                <div className="space-y-8 text-blue-50 relative z-10">
                  <div>
                    <h4 className="text-blue-200 font-bold mb-3 uppercase tracking-wider text-sm">Location</h4>
                    <p className="font-serif text-2xl leading-relaxed text-white">
                      Pune Institute of Computer Technology,<br/>
                      Survey No. 27, Near Trimurti Chowk,<br/>
                      Dhankawadi, Pune - 411043
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/10 inline-flex px-6 py-3 rounded-xl border border-white/20">
                    <span className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80] animate-pulse"></span>
                    <span className="font-bold tracking-widest uppercase">Mode: OFFLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#15233d] text-white py-12 px-4 md:px-8 border-t border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <img src={pictLogo} alt="PICT Logo" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
            <div>
              <h4 className="font-bold text-lg md:text-xl font-serif">Pune Institute of Computer Technology</h4>
              <p className="text-[#D4870A] font-bold text-sm mt-1">Department of Artificial Intelligence & Data Science</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 mb-4">&copy; {new Date().getFullYear()} PICT. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 justify-center md:justify-end text-sm font-medium text-gray-300">
              <button onClick={() => scrollTo('about')} className="py-2.5 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollTo('schedule')} className="py-2.5 hover:text-white transition-colors">Schedule</button>
              <button onClick={() => scrollTo('registration')} className="py-2.5 hover:text-white transition-colors">Registration</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;