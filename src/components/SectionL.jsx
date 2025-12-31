import { Zap, Shield, ShoppingCart, Users, Globe } from 'lucide-react';

function SectionL() {
  const visionPoints = [
    {
      icon: Zap,
      title: 'Earn from their engagement',
      description: 'Creators and users directly monetize their content and influence',
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Protect their content',
      description: 'AI-powered protection against theft, plagiarism, and unauthorized use',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: ShoppingCart,
      title: 'Buy & sell safely',
      description: 'Escrow-protected transactions ensure fraud-proof commerce',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600'
    },
    {
      icon: Users,
      title: 'Build trusted local communities',
      description: 'Connect with verified neighbors and local entrepreneurs',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-600'
    },
    {
      icon: Globe,
      title: 'Participate in a city-driven digital economy',
      description: 'Be part of a revolutionary city-powered social ecosystem',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <section id='vision' className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
          <div className="inline-block">
            <p className="text-lg md:text-2xl text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text font-bold">
              To build the world's largest AI-powered city social economy
            </p>
          </div>
          <p className="text-lg md:text-xl text-slate-300 mt-6">Where people can:</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur-xl" style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                }}></div>

                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br ${point.color} shadow-xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {point.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {point.description}
                  </p>

                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/50 rounded-2xl px-8 py-6 backdrop-blur-xl">
            <p className="text-slate-200 text-lg font-semibold">
              Together, we're building the future of cities and their economies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionL;
