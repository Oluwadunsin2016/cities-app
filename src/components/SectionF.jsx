import { DollarSign, Shield, Megaphone, Star, Handshake, CheckCircle } from 'lucide-react';

function SectionF() {
  const revenueStreams = [
    {
      icon: DollarSign,
      title: 'Engagement Monetization Fees',
      percentage: '15%',
      description: 'Cities App retains 15% of creator payout volume',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Escrow Fees',
      items: [
        '2% general items',
        '4% vehicles',
        '0.8% property transactions'
      ],
      color: 'emerald'
    },
    {
      icon: Megaphone,
      title: 'Local Business Advertising',
      description: '$20–$199 per targeted city campaign',
      color: 'amber'
    },
    {
      icon: Star,
      title: 'Cities+ Subscription',
      description: '$4.99/month premium access',
      color: 'rose'
    },
    {
      icon: Handshake,
      title: 'Local Vendor Partnership Fees',
      description: '5–12% commission',
      color: 'cyan'
    },
    {
      icon: CheckCircle,
      title: 'AI Verification Services',
      description: '$0.99–$2.99 per user or merchant verification',
      color: 'violet'
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
    rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-200' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-200' },
    violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-200' }
  };

  return (
    <section id='model' className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Business Model</h2>
          <p className="text-lg md:text-xl text-slate-600">Multiple revenue streams for sustainable growth</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon;
            const colors = colorClasses[stream.color];

            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border-2 ${colors.border} hover:shadow-lg transition-all duration-300`}
              >
                <div className={`flex items-center justify-center w-14 h-14 ${colors.bg} rounded-lg mb-4`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{stream.title}</h3>
                {stream.percentage && (
                  <div className={`text-3xl font-bold ${colors.text} mb-2`}>{stream.percentage}</div>
                )}
                {stream.description && (
                  <p className="text-slate-600 text-sm leading-relaxed">{stream.description}</p>
                )}
                {stream.items && (
                  <ul className="space-y-2">
                    {stream.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`inline-block w-1.5 h-1.5 ${colors.bg} rounded-full mt-2 mr-2`}></span>
                        <span className="text-slate-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className='mt-10 flex items-center justify-center'>
           <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg rounded-full hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105">
            <span className="flex items-center gap-2">
              Invest now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
</div>
      </div>
    </section>
  );
}

export default SectionF;
