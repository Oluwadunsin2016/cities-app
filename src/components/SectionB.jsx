import { AlertTriangle, Ban, DollarSign, ShoppingBag, Users, Building2, MapPin, Check } from 'lucide-react';

function SectionB() {
  return (
    <section id='problems' className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 py-3 rounded-full mb-6">
            <AlertTriangle className="w-6 h-6" />
            <span className="font-semibold text-lg">THE PROBLEMS</span>
          </div> */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Today's digital platforms <span className="text-blue-400">do not serve</span>
          </h2>
          <p className="text-xl lg:text-2xl font-semibold text-gray-700">
            real cities, counties and community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-orange-500" />
              <h3 className="text-xl font-bold text-gray-900">Creators</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Earn nothing from the engagement they generate</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Suffer silent <span className="font-semibold text-gray-900">shadow bans</span> without explanation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Watch their images & videos stolen or reposted</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900">Local businesses</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Pay for <span className="font-semibold text-gray-900">expensive, broad ads</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Cannot target actual city-based customers</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-bold text-gray-900">Buyers & Sellers</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Face high fraud risks</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">No escrow protection</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">No identity or content verification</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-cyan-500" />
              <h3 className="text-xl font-bold text-gray-900">Cities</h3>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-lg mb-4">
                There is <span className="font-bold text-blue-400">no platform</span> that unites a city's:
              </p>
              <ul className="space-y-3">
                {['People', 'Creators', 'Businesses', 'Marketplace', 'Local economy'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-500" />
                    <span className="text-gray-700 text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-slate-800 rounded-3xl p-10 text-center shadow-2xl">
          <p className="text-2xl lg:text-3xl font-bold text-white mb-2">
            All in one <span className="text-blue-400">safe, AI-protected</span> digital ecosystem.
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

export default SectionB;
