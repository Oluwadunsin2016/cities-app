import { Zap, Percent, Target, Users, Briefcase, PieChart } from 'lucide-react';

function SectionK() {
  const fundingBreakdown = [
    { label: 'Engineering & AI Development', percentage: 40, color: 'from-blue-500 to-blue-600' },
    { label: 'Marketing & Multi-City Expansion', percentage: 25, color: 'from-emerald-500 to-emerald-600' },
    { label: 'Escrow + Financial Compliance', percentage: 15, color: 'from-amber-500 to-amber-600' },
    { label: 'Cloud Infrastructure', percentage: 10, color: 'from-purple-500 to-purple-600' },
    { label: 'Operations & Key Hiring', percentage: 10, color: 'from-rose-500 to-rose-600' }
  ];

  const investmentTiers = [
    { amount: '$25,000', investor: 'Angel Investors', icon: Users },
    { amount: '$150,000', investor: 'Syndicates', icon: Briefcase },
    { amount: '$500,000', investor: 'Institutions / Funds', icon: Target },
    { amount: '$500-1,000', investor: 'Early Investor', icon: Zap }
  ];

  return (
    <section id='terms' className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Investment Terms</h2>
          <p className="text-lg md:text-xl text-slate-600">Seed Round - $5 Million Raise</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <Zap className="w-5 h-5 text-blue-600 mr-3" />
                Raise Details
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide">Raise Amount</p>
                  <p className="text-3xl font-bold text-slate-900 mt-1">$5,000,000</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide">Instrument</p>
                  <p className="text-xl font-bold text-slate-900 mt-1">SAFE</p>
                  <p className="text-sm text-slate-600 mt-1">(Simple Agreement for Future Equity)</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide">Valuation Cap</p>
                  <p className="text-xl font-bold text-slate-900 mt-1">$35M – $45M</p>
                  <p className="text-sm text-slate-600 mt-1">(Negotiable depending on lead investor)</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide">Discount</p>
                  <p className="text-3xl font-bold text-slate-900 mt-1">7.5%</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <Target className="w-5 h-5 text-emerald-600 mr-3" />
                Minimum Check Sizes
              </h3>
              <div className="space-y-3">
                {investmentTiers.map((tier, index) => {
                  const Icon = tier.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div className="flex items-center">
                        <Icon className="w-5 h-5 text-emerald-600 mr-3" />
                        <span className="text-slate-700 font-medium">{tier.investor}</span>
                      </div>
                      <span className="font-bold text-emerald-600">{tier.amount}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <a
              href="#"
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Click the investor link and get started
            </a>
          </div>

          <div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 sticky top-8">
              <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center">
                <PieChart className="w-5 h-5 text-slate-700 mr-3" />
                Use of Funds
              </h3>

              <div className="space-y-4">
                {fundingBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-slate-900">{item.label}</p>
                      <span className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                <p className="text-sm text-slate-700">
                  <span className="font-bold text-blue-600">EBITDA Positive by Year 3</span>
                </p>
              </div>
            </div>
          </div>
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

export default SectionK;
