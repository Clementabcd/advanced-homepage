import React, { useState, useEffect } from 'react';
import { Search, Chrome, Mail, Github, Youtube, Twitter, Linkedin, Instagram, Facebook, Music, ShoppingCart, Calendar, FileText, Cloud, Sparkles } from 'lucide-react';

const BrowserHome = () => {
  const [currentApp, setCurrentApp] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [appSearchQuery, setAppSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const welcomeMessages = [
    "Ravi de vous revoir !",
    "Prêt à explorer ?",
    "Belle journée pour commencer !",
    "Quelle sera votre prochaine découverte ?",
    "L'inspiration commence ici",
    "Bienvenue dans votre espace",
    "Que l'aventure commence !",
    "Votre créativité n'attend que vous"
  ];

  const apps = [
    { name: 'Gmail', icon: Mail, url: 'https://mail.google.com', gradient: 'from-red-400 via-pink-500 to-rose-600', shadow: 'shadow-red-500/50' },
    { name: 'GitHub', icon: Github, url: 'https://github.com', gradient: 'from-gray-700 via-gray-800 to-slate-900', shadow: 'shadow-gray-700/50' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', gradient: 'from-red-500 via-rose-600 to-pink-600', shadow: 'shadow-red-600/50' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', gradient: 'from-sky-400 via-blue-500 to-cyan-600', shadow: 'shadow-blue-500/50' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', gradient: 'from-blue-600 via-indigo-700 to-blue-800', shadow: 'shadow-blue-700/50' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', gradient: 'from-purple-500 via-pink-500 to-orange-500', shadow: 'shadow-pink-500/50' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', gradient: 'from-blue-500 via-indigo-600 to-blue-700', shadow: 'shadow-blue-600/50' },
    { name: 'Spotify', icon: Music, url: 'https://spotify.com', gradient: 'from-green-400 via-emerald-500 to-teal-600', shadow: 'shadow-green-500/50' },
    { name: 'Amazon', icon: ShoppingCart, url: 'https://amazon.fr', gradient: 'from-orange-400 via-amber-500 to-yellow-600', shadow: 'shadow-orange-500/50' },
    { name: 'Calendar', icon: Calendar, url: 'https://calendar.google.com', gradient: 'from-indigo-500 via-purple-500 to-pink-500', shadow: 'shadow-purple-500/50' },
    { name: 'Notion', icon: FileText, url: 'https://notion.so', gradient: 'from-slate-600 via-gray-700 to-zinc-800', shadow: 'shadow-slate-700/50' },
    { name: 'Drive', icon: Cloud, url: 'https://drive.google.com', gradient: 'from-yellow-400 via-amber-400 to-orange-500', shadow: 'shadow-yellow-500/50' },
  ];

  useEffect(() => {
    setWelcomeMessage(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentApp((prev) => (prev + 1) % apps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [apps.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleWebSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      window.open(`https://duckduckgo.com/?q=${encodeURIComponent(searchQuery)}`, '_blank');
      setSearchQuery('');
    }
  };

  const filteredApps = appSearchQuery 
    ? apps.filter(app => app.name.toLowerCase().includes(appSearchQuery.toLowerCase()))
    : [];

  const formatTime = () => {
    return currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = () => {
    return currentTime.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  const currentAppData = apps[currentApp];
  const Icon = currentAppData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-indigo-100 to-blue-100 overflow-hidden">
      {/* Particules décoratives animées */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        {/* En-tête compact */}
        <div className="text-center mb-8 space-y-3">
          <div className="flex items-center justify-center gap-2 animate-in fade-in slide-in-from-top duration-700">
            <Sparkles className="w-6 h-6 text-violet-500 animate-pulse" />
            <p className="text-lg text-indigo-600 font-medium">{welcomeMessage}</p>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-in fade-in slide-in-from-top duration-700 delay-100">
            {formatTime()}
          </h1>
          <p className="text-base text-indigo-500 font-medium capitalize animate-in fade-in slide-in-from-top duration-700 delay-200">
            {formatDate()}
          </p>
        </div>

        {/* Barres de recherche compactes */}
        <div className="grid grid-cols-2 gap-3 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-top duration-700 delay-300">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-indigo-400 transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleWebSearch}
              placeholder="DuckDuckGo..."
              className="w-full pl-11 pr-4 py-2.5 text-sm rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 focus:bg-white/60 transition-all text-gray-800 placeholder-gray-500"
            />
          </div>

          <div className="relative group">
            <Chrome className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-violet-400 transition-colors" />
            <input
              type="text"
              value={appSearchQuery}
              onChange={(e) => setAppSearchQuery(e.target.value)}
              placeholder="Applications..."
              className="w-full pl-11 pr-4 py-2.5 text-sm rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-200 focus:bg-white/60 transition-all text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Résultats de recherche */}
        {appSearchQuery && (
          <div className="rounded-3xl bg-white/40 backdrop-blur-lg border border-white/60 shadow-xl p-5 mb-8 max-w-3xl mx-auto animate-in fade-in zoom-in duration-300">
            <div className="grid grid-cols-6 gap-3">
              {filteredApps.map((app, index) => {
                const AppIcon = app.icon;
                return (
                  <a
                    key={index}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/50 hover:bg-white/70 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className={`bg-gradient-to-br ${app.gradient} p-2.5 rounded-xl ${app.shadow} shadow-lg`}>
                      <AppIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{app.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Carrousel raffiné */}
        <div className="flex items-center justify-center mb-10 animate-in fade-in zoom-in duration-1000 delay-500">
          <a
            href={currentAppData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            {/* Halo lumineux animé */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentAppData.gradient} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse`}></div>
            
            {/* Cercle principal */}
            <div className="relative w-80 h-80 rounded-full bg-white/50 backdrop-blur-2xl border-2 border-white/80 shadow-2xl flex flex-col items-center justify-center gap-6 group-hover:scale-105 group-hover:border-white transition-all duration-500">
              {/* Icône */}
              <div className={`relative bg-gradient-to-br ${currentAppData.gradient} p-10 rounded-full ${currentAppData.shadow} shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                <Icon className="w-20 h-20 text-white" />
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
              </div>
              
              {/* Nom */}
              <h2 className="text-3xl font-bold text-gray-800 group-hover:scale-105 transition-transform duration-300">
                {currentAppData.name}
              </h2>
            </div>

            {/* Anneaux orbitaux */}
            <div className="absolute inset-0 rounded-full border border-violet-400/20 animate-spin" style={{animationDuration: '15s'}}></div>
            <div className="absolute inset-0 rounded-full border border-indigo-400/20 animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
          </a>
        </div>

        {/* Navigation par points */}
        <div className="flex justify-center gap-2 mb-10 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
          {apps.map((app, index) => (
            <button
              key={index}
              onClick={() => setCurrentApp(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentApp 
                  ? `h-2.5 w-10 bg-gradient-to-r ${app.gradient} shadow-lg` 
                  : 'h-2.5 w-2.5 bg-indigo-300/60 hover:bg-indigo-400 hover:w-6'
              }`}
            />
          ))}
        </div>

        {/* Grille compacte */}
        <div className="rounded-3xl bg-white/35 backdrop-blur-xl border border-white/60 shadow-xl p-6 animate-in fade-in slide-in-from-bottom duration-700 delay-900">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
            {apps.map((app, index) => {
              const AppIcon = app.icon;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentApp(index)}
                  className="group flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/40 hover:bg-white/70 hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${app.gradient} p-2.5 rounded-xl ${app.shadow} shadow-lg group-hover:scale-110 transition-transform`}>
                    <AppIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{app.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserHome;