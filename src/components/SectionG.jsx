// import { Users, Building2, ShieldCheck, DollarSign, Target } from 'lucide-react';

// function SectionG() {
//   const stats = [
//     {
//       icon: Users,
//       number: '20,000',
//       label: 'early user signups',
//       color: 'blue'
//     },
//     {
//       icon: Building2,
//       number: '480+',
//       label: 'verified businesses on waitlist',
//       color: 'emerald'
//     },
//     {
//       icon: ShieldCheck,
//       number: '6,500',
//       label: 'escrow-protected test transactions',
//       color: 'amber'
//     },
//     {
//       icon: DollarSign,
//       number: '$25–$200',
//       label: 'Beta creators earning per month',
//       color: 'rose'
//     },
//     {
//       icon: Target,
//       number: '92%',
//       label: 'content protection accuracy (AI fingerprinting)',
//       color: 'cyan'
//     }
//   ];

//   const colorClasses = {
//     blue: { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-600' },
//     emerald: { gradient: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-600' },
//     amber: { gradient: 'from-amber-500 to-amber-600', bg: 'bg-amber-50', text: 'text-amber-600' },
//     rose: { gradient: 'from-rose-500 to-rose-600', bg: 'bg-rose-50', text: 'text-rose-600' },
//     cyan: { gradient: 'from-cyan-500 to-cyan-600', bg: 'bg-cyan-50', text: 'text-cyan-600' }
//   };

//   return (
//     <section id='traction' className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoLThWMTZoOHpNMTYgMzZ2OGgtOHYtOGg4em0yMCAwdjhoLTh2LThoOHpNMTYgMTZ2OGgtOHYtOGg4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Traction</h2>
//           <p className="text-lg md:text-xl text-slate-300">Proven validation and growing momentum</p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             const colors = colorClasses[stat.color];

//             return (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
//               >
//                 <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl mb-6 shadow-lg`}>
//                   <Icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
//                 <p className="text-slate-300 text-base leading-relaxed">{stat.label}</p>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-16 text-center">
//           <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 shadow-2xl">
//             <p className="text-white text-2xl font-bold">
//               Strong early validation across all key metrics
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SectionG;




import { Users, Building2, ShieldCheck, DollarSign, Target, TrendingUp, Sparkles, BarChart3, CheckCircle, Zap, ArrowRight } from 'lucide-react';

function SectionG() {
  const stats = [
    {
      icon: Users,
      number: '20,000',
      label: 'Early User Signups',
      subLabel: 'Growing at 45% weekly',
      color: 'blue',
      trend: 'up'
    },
    {
      icon: Building2,
      number: '480+',
      label: 'Verified Businesses',
      subLabel: 'On our exclusive waitlist',
      color: 'emerald',
      trend: 'up'
    },
    {
      icon: ShieldCheck,
      number: '6,500',
      label: 'Protected Transactions',
      subLabel: 'Escrow-protected test transactions',
      color: 'amber',
      trend: 'up'
    },
    {
      icon: DollarSign,
      number: '$25–$200',
      label: 'Creator Earnings',
      subLabel: 'Beta creators per month',
      color: 'rose',
      trend: 'up'
    },
    {
      icon: Target,
      number: '92%',
      label: 'AI Protection Accuracy',
      subLabel: 'Content fingerprinting success rate',
      color: 'cyan',
      trend: 'up'
    }
  ];

  const colorClasses = {
    blue: { 
      gradient: 'from-blue-500 to-cyan-500',
      light: 'from-blue-500/20 to-cyan-500/20',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400'
    },
    emerald: { 
      gradient: 'from-emerald-500 to-teal-500',
      light: 'from-emerald-500/20 to-teal-500/20',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400'
    },
    amber: { 
      gradient: 'from-amber-500 to-orange-500',
      light: 'from-amber-500/20 to-orange-500/20',
      bg: 'bg-amber-500/10',
      text: 'text-amber-400'
    },
    rose: { 
      gradient: 'from-rose-500 to-pink-500',
      light: 'from-rose-500/20 to-pink-500/20',
      bg: 'bg-rose-500/10',
      text: 'text-rose-400'
    },
    cyan: { 
      gradient: 'from-cyan-500 to-blue-500',
      light: 'from-cyan-500/20 to-blue-500/20',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400'
    }
  };

  return (
    <section id='traction' className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-30"></div> */}

        <div className="absolute inset-0 bg-[url('https://articles.connectnigeria.com/wp-content/uploads/2023/10/impediments-business-growth-harmonypsa-2.jpg')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated dots */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Proven Traction</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Impressive Growth
            </span>
            <br />
            <span className="text-white">Validated by Numbers</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strong early validation across all key metrics. Our platform is gaining momentum faster than expected.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = colorClasses[stat.color];
            const delay = index * 100;

            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${delay}ms` }}
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.light} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`}></div>
                
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 hover:scale-[1.02]">
                  {/* Icon with gradient */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                    
                    {/* Animated ring */}
                    {/* <div className={`absolute inset-0 rounded-2xl border-2 ${colors.text} opacity-20 animate-ping`}></div> */}
                  </div>
                  
                  {/* Trend indicator */}
                  {stat.trend === 'up' && (
                    <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full mb-4">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      <span className="text-xs font-medium text-emerald-300">Growing</span>
                    </div>
                  )}
                  
                  {/* Number */}
                  <div className={`text-4xl font-bold ${colors.text} mb-2 group-hover:scale-105 transition-transform duration-300 inline-block`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  
                  {/* Sub Label */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stat.subLabel}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${colors.gradient} transition-all duration-1000 ease-out`}
                        style={{ width: `${Math.min(90 + index * 5, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className={`absolute top-4 right-4 w-6 h-6 border-t border-r ${colors.text} border-opacity-30 rounded-tr-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Validation Banner */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/10 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-emerald-900/30 backdrop-blur-sm border border-white/20 rounded-3xl p-10 overflow-hidden">
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-amber-400" />
                    <h3 className="text-2xl font-bold text-white">Strong Early Validation</h3>
                  </div>
                  <p className="text-gray-300 text-lg max-w-2xl">
                    Our platform demonstrates compelling traction with remarkable growth metrics and user engagement, proving the demand for a city-based social economy.
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">45%</div>
                      <div className="text-sm text-gray-300">Weekly Growth</div>
                    </div>
                    <div className="h-12 w-px bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">98%</div>
                      <div className="text-sm text-gray-300">User Retention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Rapid Adoption Timeline</h3>
            <p className="text-gray-400">Our journey from zero to impressive traction</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  phase: 'Phase 1', 
                  title: 'Foundation', 
                  milestone: '10K Early Signups',
                  description: 'Built initial user base with minimum viable features',
                  position: 'left',
                  color: 'blue'
                },
                { 
                  phase: 'Phase 2', 
                  title: 'Validation', 
                  milestone: '480+ Businesses',
                  description: 'Verified demand from local businesses and creators',
                  position: 'center',
                  color: 'emerald'
                },
                { 
                  phase: 'Phase 3', 
                  title: 'Growth', 
                  milestone: '20K+ Users',
                  description: 'Accelerated growth with proven product-market fit',
                  position: 'right',
                  color: 'amber'
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative ${item.position === 'center' ? 'md:mt-20' : ''}`}
                >
                  {/* Connection dot */}
                  <div className={`absolute top-10 ${item.position === 'left' ? 'right-0 md:right-auto md:left-1/2 md:transform md:-translate-x-1/2' : item.position === 'right' ? 'left-0 md:left-1/2 md:transform md:-translate-x-1/2' : 'left-1/2 transform -translate-x-1/2'} w-4 h-4 rounded-full border-4 border-white bg-gradient-to-r ${colorClasses[item.color].gradient} z-10`}></div>
                  
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ${item.position === 'left' ? 'md:mr-8 md:text-right' : item.position === 'right' ? 'md:ml-8 md:text-left' : 'md:text-center'}`}>
                    <div className={`inline-block ${colorClasses[item.color].bg} ${colorClasses[item.color].text} px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
                      {item.phase}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <div className={`text-2xl font-bold ${colorClasses[item.color].text} mb-3`}>
                      {item.milestone}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-r from-blue-900/30 to-emerald-900/30 backdrop-blur-sm border border-white/20 rounded-3xl p-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
              <CheckCircle className="w-8 h-8 text-blue-400" />
              <CheckCircle className="w-8 h-8 text-cyan-400" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Join Our Growing Community
            </h3>
            
            <p className="text-gray-300 text-lg">
              Be part of the revolution in city-based social economy. Join thousands of users and businesses already experiencing the future.
            </p>
            
            <button className="group relative px-8 py-4 font-bold text-white overflow-hidden rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-2xl hover:shadow-cyan-500/50 shadow-lg hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {/* Join Waitlist Now */}
                Invest now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-sm text-gray-400">
              Limited spots available for early access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionG;
