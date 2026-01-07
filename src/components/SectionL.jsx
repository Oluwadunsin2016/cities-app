// import { Zap, Shield, ShoppingCart, Users, Globe } from 'lucide-react';

// function SectionL() {
//   const visionPoints = [
//     {
//       icon: Zap,
//       title: 'Earn from their engagement',
//       description: 'Creators and users directly monetize their content and influence',
//       color: 'from-yellow-500 to-amber-600',
//       bgColor: 'bg-yellow-100',
//       textColor: 'text-yellow-600'
//     },
//     {
//       icon: Shield,
//       title: 'Protect their content',
//       description: 'AI-powered protection against theft, plagiarism, and unauthorized use',
//       color: 'from-blue-500 to-cyan-600',
//       bgColor: 'bg-blue-100',
//       textColor: 'text-blue-600'
//     },
//     {
//       icon: ShoppingCart,
//       title: 'Buy & sell safely',
//       description: 'Escrow-protected transactions ensure fraud-proof commerce',
//       color: 'from-emerald-500 to-teal-600',
//       bgColor: 'bg-emerald-100',
//       textColor: 'text-emerald-600'
//     },
//     {
//       icon: Users,
//       title: 'Build trusted local communities',
//       description: 'Connect with verified neighbors and local entrepreneurs',
//       color: 'from-rose-500 to-pink-600',
//       bgColor: 'bg-rose-100',
//       textColor: 'text-rose-600'
//     },
//     {
//       icon: Globe,
//       title: 'Participate in a city-driven digital economy',
//       description: 'Be part of a revolutionary city-powered social ecosystem',
//       color: 'from-purple-500 to-indigo-600',
//       bgColor: 'bg-purple-100',
//       textColor: 'text-purple-600'
//     }
//   ];

//   return (
//     <section id='vision' className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
//         <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="text-center mb-20">
//           <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
//           <div className="inline-block">
//             <p className="text-lg md:text-2xl text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text font-bold">
//               To build the world's largest AI-powered city social economy
//             </p>
//           </div>
//           <p className="text-lg md:text-xl text-slate-300 mt-6">Where people can:</p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {visionPoints.map((point, index) => {
//             const Icon = point.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur-xl" style={{
//                   backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
//                 }}></div>

//                 <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 h-full">
//                   <div className={`flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br ${point.color} shadow-xl`}>
//                     <Icon className="w-8 h-8 text-white" />
//                   </div>

//                   <h3 className="text-xl font-bold text-white mb-3">
//                     {point.title}
//                   </h3>

//                   <p className="text-slate-300 leading-relaxed">
//                     {point.description}
//                   </p>

//                   <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-20 text-center">
//           <div className="inline-block bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/50 rounded-2xl px-8 py-6 backdrop-blur-xl">
//             <p className="text-slate-200 text-lg font-semibold">
//               Together, we're building the future of cities and their economies.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SectionL;






import { Zap, Shield, ShoppingCart, Users, Globe, Sparkles, Target, Heart, Building2, Rocket, Eye, TrendingUp, ArrowRight } from 'lucide-react';

function SectionL() {
  const visionPoints = [
    {
      icon: Zap,
      title: 'Earn From Engagement',
      description: 'Creators and users directly monetize their content, comments, likes, and influence in real-time.',
      color: 'yellow',
      gradient: 'from-yellow-500 to-amber-600',
      light: 'from-yellow-500/20 to-amber-600/20',
      stats: '+235% Creator Income',
      position: 'top'
    },
    {
      icon: Shield,
      title: 'Protected Content',
      description: 'AI-powered fingerprinting and watermarking protect against theft, plagiarism, and unauthorized use.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-600',
      light: 'from-blue-500/20 to-cyan-600/20',
      stats: '92% Protection Accuracy',
      position: 'middle'
    },
    {
      icon: ShoppingCart,
      title: 'Safe Transactions',
      description: 'Escrow-protected marketplace ensures fraud-proof commerce for cars, properties, and everything else.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-600',
      light: 'from-emerald-500/20 to-teal-600/20',
      stats: '6,500+ Safe Deals',
      position: 'bottom'
    },
    {
      icon: Users,
      title: 'Trusted Communities',
      description: 'Connect with verified neighbors, local creators, and entrepreneurs in your city ecosystem.',
      color: 'rose',
      gradient: 'from-rose-500 to-pink-600',
      light: 'from-rose-500/20 to-pink-600/20',
      stats: '20,000+ Early Users',
      position: 'top'
    },
    {
      icon: Globe,
      title: 'City Digital Economy',
      description: 'Participate in a revolutionary city-powered social ecosystem where value stays local.',
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-600',
      light: 'from-purple-500/20 to-indigo-600/20',
      stats: '50+ Cities Connected',
      position: 'middle'
    }
  ];

  const colorClasses = {
    yellow: { text: 'text-yellow-400', border: 'border-yellow-500/30' },
    blue: { text: 'text-blue-400', border: 'border-blue-500/30' },
    emerald: { text: 'text-emerald-400', border: 'border-emerald-500/30' },
    rose: { text: 'text-rose-400', border: 'border-rose-500/30' },
    purple: { text: 'text-purple-400', border: 'border-purple-500/30' }
  };

  return (
    <section id='vision' className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      {/* Background Effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl opacity-20"></div>
     
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div> */}

      <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/612f9b021a99060ac271ab9a/63d7c6fa2597a35976829663_og-computer-vision-facebook%20(1).webp')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Our Vision</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Building The World's Largest</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered City Economy
            </span>
          </h1>
          
          <div className="inline-block relative mb-12">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-50"></div>
            <p className="relative text-2xl md:text-3xl text-gray-300">
              A revolutionary social ecosystem where people can:
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-blue-300">Earn Meaningfully</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-emerald-300">Connect Safely</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-purple-300">Thrive Locally</span>
            </div>
          </div>
        </div>

        {/* Vision Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-20">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            const colors = colorClasses[point.color];
            const delay = index * 100;

            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${delay}ms` }}
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 ${point.light} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`}></div>
                
                <div className={`relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border ${colors.border} rounded-3xl p-8 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 hover:scale-[1.02]`}>
                  {/* Number badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  
                  {/* Icon with animated ring */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${point.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                    
                    {/* Animated ring */}
                    {/* <div className="absolute inset-0 rounded-2xl border-2 border-white/20 animate-ping"></div> */}
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold ${colors.text} mb-3 group-hover:scale-105 transition-transform duration-300 inline-block`}>
                    {point.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {point.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {point.stats}
                    </p>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/20 rounded-tr-2xl"></div>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-white/50" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-yellow-500/10 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-yellow-900/30 backdrop-blur-sm border border-white/20 rounded-3xl p-12 overflow-hidden">
            {/* Floating elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
                      <Eye className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-xl">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full mb-6">
                    <Heart className="w-5 h-5 text-rose-400" />
                    <span className="text-rose-300 font-semibold">Our Mission</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Together, We're Building The Future Of
                    <br />
                    <span className="bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Cities & Their Economies
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    We envision a world where every city becomes a thriving digital economy—where creators are rewarded, 
                    commerce is safe, and communities are connected through technology that serves everyone.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">City-First Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-300">AI-Powered Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300">Community-Led Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Impact */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Path Forward</h3>
            <p className="text-gray-400">The journey from vision to reality</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-500 via-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: '2023',
                  title: 'Vision Formed',
                  description: 'Identified the need for city-based social economies',
                  color: 'yellow'
                },
                {
                  year: '2024',
                  title: 'Platform Launched',
                  description: 'Beta version released in 5 major cities',
                  color: 'blue'
                },
                {
                  year: '2025',
                  title: 'Growth Acceleration',
                  description: 'Expanding to 50+ cities globally',
                  color: 'emerald'
                },
                {
                  year: '2026',
                  title: 'Global Economy',
                  description: 'Connecting 100+ city economies worldwide',
                  color: 'purple'
                }
              ].map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Year circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-16 h-16 rounded-full border-4 border-white/10 bg-gradient-to-br ${visionPoints[index]?.light.replace('/20', '/30')} flex items-center justify-center`}>
                      <span className="text-xl font-bold text-white">{milestone.year}</span>
                    </div>
                    {/* <div className={`absolute inset-0 rounded-full border-2 ${colorClasses[milestone.color]?.text} opacity-30 animate-ping`}></div> */}
                  </div>
                  
                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300`}>
                    <h4 className={`text-xl font-bold ${colorClasses[milestone.color]?.text} mb-2`}>
                      {milestone.title}
                    </h4>
                    <p className="text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block max-w-3xl mx-auto">
            {/* Glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-yellow-600/20 via-blue-600/20 to-purple-600/20 blur-3xl opacity-70"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900 to-gray-950 border border-white/20 rounded-3xl p-12 overflow-hidden">
              {/* Floating icons */}
              <div className="absolute top-6 left-6 opacity-10">
                <Building2 className="w-16 h-16 text-blue-400" />
              </div>
              <div className="absolute bottom-6 right-6 opacity-10">
                <Globe className="w-16 h-16 text-purple-400" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 mb-6">
                  <Rocket className="w-8 h-8 text-blue-400" />
                  <span className="text-2xl font-bold text-white">Join Our Vision</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Be Part Of The City Economy Revolution
                </h3>
                
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Whether you're a creator, business, investor, or city enthusiast, there's a place for you in building the future of urban digital ecosystems.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative px-8 py-4 font-bold text-white overflow-hidden rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-purple-500/50 shadow-lg hover:scale-105">
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      {/* Join Early Access */}
                      Invest Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="px-8 py-4 font-bold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105">
                    <span className="flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Watch Demo
                    </span>
                  </button>
                </div>
                
                <p className="mt-6 text-sm text-gray-400">
                  Limited spots available for our exclusive early access program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionL;
