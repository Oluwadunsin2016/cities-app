import { Globe, Target, TrendingUp } from 'lucide-react';

function SectionE() {
  return (
    <section id='market-size' className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Market Size</h2>
          <p className="text-lg md:text-xl text-slate-600">Massive opportunity in the creator economy</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div className="mb-4">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">TAM</span>
              <h3 className="text-xl md:text-3xl font-bold text-slate-900 mt-2">$2.1 Trillion</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Global creator economy + social media + local commerce
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
            <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-xl mb-6">
              <Target className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="mb-4">
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">SAM</span>
              <h3 className="text-xl md:text-3xl font-bold text-slate-900 mt-2">$210 Billion</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Local ads + local marketplace verticals
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
            <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-xl mb-6">
              <TrendingUp className="w-8 h-8 text-amber-600" />
            </div>
            <div className="mb-4">
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">SOM</span>
              <h3 className="text-xl md:text-3xl font-bold text-slate-900 mt-2">$1.5 Billion</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Target share in 5 years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionE;
