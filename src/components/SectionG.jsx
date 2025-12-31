import { Users, Building2, ShieldCheck, DollarSign, Target } from 'lucide-react';

function SectionG() {
  const stats = [
    {
      icon: Users,
      number: '20,000',
      label: 'early user signups',
      color: 'blue'
    },
    {
      icon: Building2,
      number: '480+',
      label: 'verified businesses on waitlist',
      color: 'emerald'
    },
    {
      icon: ShieldCheck,
      number: '6,500',
      label: 'escrow-protected test transactions',
      color: 'amber'
    },
    {
      icon: DollarSign,
      number: '$25–$200',
      label: 'Beta creators earning per month',
      color: 'rose'
    },
    {
      icon: Target,
      number: '92%',
      label: 'content protection accuracy (AI fingerprinting)',
      color: 'cyan'
    }
  ];

  const colorClasses = {
    blue: { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-600' },
    emerald: { gradient: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-600' },
    amber: { gradient: 'from-amber-500 to-amber-600', bg: 'bg-amber-50', text: 'text-amber-600' },
    rose: { gradient: 'from-rose-500 to-rose-600', bg: 'bg-rose-50', text: 'text-rose-600' },
    cyan: { gradient: 'from-cyan-500 to-cyan-600', bg: 'bg-cyan-50', text: 'text-cyan-600' }
  };

  return (
    <section id='traction' className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoLThWMTZoOHpNMTYgMzZ2OGgtOHYtOGg4em0yMCAwdjhoLTh2LThoOHpNMTYgMTZ2OGgtOHYtOGg4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Traction</h2>
          <p className="text-lg md:text-xl text-slate-300">Proven validation and growing momentum</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = colorClasses[stat.color];

            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                <p className="text-slate-300 text-base leading-relaxed">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 shadow-2xl">
            <p className="text-white text-2xl font-bold">
              Strong early validation across all key metrics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionG;
