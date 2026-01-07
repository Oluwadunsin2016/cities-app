import { TrendingUp, Globe, DollarSign, Users, Lock, Shield, Sparkles } from 'lucide-react';

import imageOne from '../assets/images/slide 1.jpeg';

function SectionC() {
  return (
    <section id='opportunity' className="relative min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-20 lg:py-28">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg')] bg-cover bg-center opacity-10"></div>
<div className='mx-auto px-6 max-w-7xl'>
       <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full mb-6">
            <TrendingUp className="w-6 h-6" />
            <span className="font-semibold text-lg">THE OPPORTUNITY</span>
          </div> */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
            A Massive Untapped Market
          </h2>
        </div>
  <div className='flex flex-col lg:flex-row-reverse gap-6'>
  <div className="relative flex-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                // src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                // src="https://mldvwwasb8tu.i.optimole.com/cb:7ZGO.6206b/w:1100/h:734/q:90/f:best/ig:avif/https://travelaway.me/wp-content/uploads/2013/04/cochem-town-germany.jpg"
                src={imageOne}
                alt="City connections"
                className="w-full h-auto object-cover object-center aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
          </div>

    <div className="relative flex-1">
           {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-2xl p-10 mb-16"> */}
           <div className="rounded-2xl mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              {/* <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Yet <span className="text-red-600 italic">no platform</span> allows users to:
              </h3> */}
              <ul className="space-y-4">
                {[
                  '4.8+ billion global social media users',
                  'Creators earning $480B by 2028',
                  'Local commerce + social media marketplace worth $2.1T',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-blue-300 rounded-2xl p-10 mb-16"> */}
        <div className="rounded-2xl mb-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Yet <span className="text-blue-600 italic">no platform</span> allows users to:
              </h3>
              <ul className="space-y-4">
                {[
                  'Own & monetize their engagement',
                  'Safely transact with local escrow',
                  'Connect based on real cities',
                  'Protect content automatically'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
          <div className="relative mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-6 text-center shadow-2xl">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-yellow-300 animate-pulse" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Cities App is the first
            </h3>
            <p className="text-2xl lg:text-3xl font-semibold text-cyan-100">
              AI-powered, city-based social economy.
            </p>
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

export default SectionC;
