// import { TrendingUp, Lock, Building2, Zap, ArrowRight } from 'lucide-react';

// function SectionM() {
//   const features = [
//     {
//       icon: TrendingUp,
//       text: 'Engagement becomes income',
//       color: 'from-emerald-500 to-teal-600'
//     },
//     {
//       icon: Lock,
//       text: 'Transactions are fraud-proof',
//       color: 'from-blue-500 to-cyan-600'
//     },
//     {
//       icon: Building2,
//       text: 'Cities become connected economies',
//       color: 'from-amber-500 to-orange-600'
//     },
//     {
//       icon: Zap,
//       text: 'AI ensures fairness and security',
//       color: 'from-purple-500 to-pink-600'
//     }
//   ];

//   return (
//     <section id='closing' className="py-32 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8">
//             Cities App is not another social platform.
//           </h2>
//           <p className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text mb-8">
//             It is the future of cities digital economy.
//           </p>
//         </div>

//         <div className="mb-20">
//           <p className="text-center text-slate-300 mb-12 text-lg">A platform where:</p>

//           <div className="grid md:grid-cols-2 gap-6">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group relative"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-300 blur-xl`}></div>

//                   <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-xl hover:border-white/40 transition-all duration-300">
//                     <div className="flex items-start">
//                       <div className={`flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
//                         <Icon className="h-7 w-7 text-white" />
//                       </div>
//                       <p className="ml-5 text-2xl font-bold text-white leading-relaxed">
//                         {feature.text}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="text-center mb-16">
//           <p className="text-4xl lg:text-5xl font-black text-white mb-8">
//             <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
//               Where Your City Becomes Your Economy.
//             </span>
//           </p>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
//           <button className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-lg text-white overflow-hidden rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 hover:shadow-2xl hover:shadow-cyan-500/50 shadow-xl">
//             <span className="relative z-10 flex items-center">
//               Invest Now & Get Equity
//               <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </button>

//           <button className="px-10 py-5 font-bold text-lg text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300">
//             Learn More
//           </button>
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-slate-400 text-sm">
//             Click the investor link and get started
//           </p>
//         </div>

//         <div className="mt-24 pt-12 border-t border-white/10">
//           <div className="text-center">
//             <p className="text-slate-400 font-semibold uppercase tracking-wider mb-2">
//               Ready to join the revolution?
//             </p>
//             <p className="text-white text-xl">
//               Be part of the world's largest AI-powered city social economy.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SectionM;



import { TrendingUp, Lock, Building2, Zap, ArrowRight, Sparkles, Users, Globe, Target, Shield, Heart, Rocket, Star, CheckCircle, Award, TrendingDown } from 'lucide-react';

function SectionM() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Engagement Becomes Income',
      description: 'Every interaction translates to real earnings. Grow your community and watch your income grow with it.',
      color: 'from-emerald-500 to-teal-600',
      gradient: 'bg-gradient-to-r from-emerald-500/20 to-teal-600/20',
      stats: '+235% Avg. Creator Income'
    },
    {
      icon: Shield,
      title: 'Fraud-Proof Transactions',
      description: 'Advanced escrow protection ensures every transaction is secure. Buy and sell with 100% confidence.',
      color: 'from-blue-500 to-cyan-600',
      gradient: 'bg-gradient-to-r from-blue-500/20 to-cyan-600/20',
      stats: '99.8% Fraud-Free Rate'
    },
    {
      icon: Users,
      title: 'Connected City Economies',
      description: 'Transform your city into a thriving digital economy where local businesses and creators prosper together.',
      color: 'from-amber-500 to-orange-600',
      gradient: 'bg-gradient-to-r from-amber-500/20 to-orange-600/20',
      stats: '50+ Cities Connected'
    },
    {
      icon: Zap,
      title: 'AI-Powered Fairness',
      description: 'Our AI ensures equal opportunities for all users. No shadow bans, only transparent growth.',
      color: 'from-purple-500 to-pink-600',
      gradient: 'bg-gradient-to-r from-purple-500/20 to-pink-600/20',
      stats: 'Zero Shadow Bans'
    }
  ];

  const stats = [
    { label: 'Cities Connected', value: '50+', change: '+12%', icon: Globe, color: 'text-blue-400' },
    { label: 'Active Users', value: '250K+', change: '+45%', icon: Users, color: 'text-emerald-400' },
    { label: 'Transactions Secured', value: '$10M+', change: '+78%', icon: Shield, color: 'text-purple-400' },
    { label: 'Creator Earnings', value: '$2.5M+', change: '+235%', icon: TrendingUp, color: 'text-amber-400' }
  ];

  return (
    <section id='closing' className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl opacity-30"></div>
      
      {/* Particle dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-40 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-40 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300 uppercase tracking-wider">The Future is Here</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Cities App Isn't Just Another</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Social Platform
            </span>
          </h1>
          
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-xl opacity-50"></div>
            <p className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              It's Your City's <span className="text-cyan-400">Digital Economy</span>
            </p>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color} border border-white/10`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-2xl text-gray-300 mb-4">A revolutionary platform where...</p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Everyone Wins
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute inset-0 ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  
                  <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <p className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        {feature.stats}
                      </p>
                    </div>
                    
                    {/* Corner accent */}
                    <div className={`absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 rounded-tr-2xl ${index === 0 ? 'border-emerald-500/50' : ''} ${index === 1 ? 'border-blue-500/50' : ''} ${index === 2 ? 'border-amber-500/50' : ''} ${index === 3 ? 'border-purple-500/50' : ''}`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-r from-emerald-900/30 via-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 px-6 py-3 rounded-full mb-8">
              <Target className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-300 font-semibold">Our Mission</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Where Your City Becomes<br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Your Economy
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're building the world's largest AI-powered city social economy—a place where every interaction creates value, every transaction builds trust, and every community thrives together.
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Community-First Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>AI-Powered Fairness</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block max-w-3xl mx-auto">
            {/* Glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-emerald-600/30 via-cyan-600/30 to-blue-600/30 blur-3xl opacity-70"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900 to-gray-950 border border-white/20 rounded-3xl p-12">
              <div className="space-y-8">
                <div className="text-left">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Join the <span className="text-emerald-400">Revolution</span>
                  </h3>
                  <p className="text-gray-400">
                    Be among the first to invest in the future of city economies
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative px-8 py-4 font-bold text-white overflow-hidden rounded-xl transition-all duration-300 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:shadow-2xl hover:shadow-cyan-500/50 shadow-lg hover:scale-105">
                    <span className="relative z-10 flex items-center gap-2">
                      Invest Now & Get Equity
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="px-8 py-4 font-bold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105">
                    <span className="flex items-center gap-2">
                      <Rocket className="w-5 h-5" />
                      Launch Tour
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Stats row */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">24H</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">$50K</div>
                  <div className="text-sm text-gray-400">Minimum Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">100+</div>
                  <div className="text-sm text-gray-400">Early Investors</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer note */}
          <div className="mt-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">Rated 4.9/5 by Early Adopters</span>
            </div>
            
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Click the investor link to join the next wave of city digital transformation
            </p>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-pink-500" />
              <Award className="w-6 h-6 text-amber-500" />
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
            
            <p className="text-slate-400 font-semibold uppercase tracking-wider mb-4">
              Ready to Transform Your City?
            </p>
            <p className="text-2xl font-bold text-white mb-6">
              Join the world's largest AI-powered city social economy.
            </p>
            
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 font-semibold hover:bg-blue-600/30 hover:border-blue-400/50 hover:text-white transition-all duration-300">
              {/* Schedule a Demo → */}
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionM;

