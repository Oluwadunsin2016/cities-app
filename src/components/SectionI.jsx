import { TrendingUp, AlertCircle, Lightbulb, Users } from 'lucide-react';

export default function SectionI() {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'Creator economy demand is at an all-time high',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: AlertCircle,
      title: 'Local businesses need affordable, precise ads',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Marketplace fraud is rising globally',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Communities want local trust & transparency',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Lightbulb,
      title: 'AI now makes fair, fraud-resistant social platforms possible',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id='why' className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-4">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">I. WHY NOW?</span>
        </div> */}

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12">
          Perfect Timing. Perfect Market. Perfect Gap.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${reason.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}>
                <IconComponent className="w-8 h-8 mb-4 opacity-90" />
                <p className="font-semibold text-sm leading-relaxed">
                  {reason.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-600 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            The Convergence is Now
          </h3>
          <p className="text-lg text-gray-700 mb-2">
            Creators want earnings. Businesses want local reach. Buyers want safety. Communities want trust.
          </p>
          <p className="text-xl font-bold text-blue-600">
            Cities App is the answer to all four needs simultaneously.
          </p>
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
