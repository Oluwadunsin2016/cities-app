import { TrendingUp, Lock, Building2, Zap, ArrowRight } from 'lucide-react';

function SectionM() {
  const features = [
    {
      icon: TrendingUp,
      text: 'Engagement becomes income',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Lock,
      text: 'Transactions are fraud-proof',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Building2,
      text: 'Cities become connected economies',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Zap,
      text: 'AI ensures fairness and security',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id='closing' className="py-32 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Cities App is not another social platform.
          </h2>
          <p className="text-2xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text mb-8">
            It is the future of cities digital economy.
          </p>
        </div>

        <div className="mb-20">
          <p className="text-center text-slate-300 mb-12 text-lg">A platform where:</p>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-300 blur-xl`}></div>

                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-xl hover:border-white/40 transition-all duration-300">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <p className="ml-5 text-2xl font-bold text-white leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="text-4xl lg:text-5xl font-black text-white mb-8">
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
              Where Your City Becomes Your Economy.
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-lg text-white overflow-hidden rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 hover:shadow-2xl hover:shadow-cyan-500/50 shadow-xl">
            <span className="relative z-10 flex items-center">
              Invest Now & Get Equity
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="px-10 py-5 font-bold text-lg text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">
            Click the investor link and get started
          </p>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="text-center">
            <p className="text-slate-400 font-semibold uppercase tracking-wider mb-2">
              Ready to join the revolution?
            </p>
            <p className="text-white text-xl">
              Be part of the world's largest AI-powered city social economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionM;
