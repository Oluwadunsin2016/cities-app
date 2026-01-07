// import { Check, X, Facebook, Instagram, MapPin } from 'lucide-react';

// function SectionH() {
//   const platforms = [
//     {
//       name: 'Facebook',
//       icon: Facebook,
//       monetization: false,
//       contentProtection: true,
//       localMarketplace: true,
//       escrow: false,
//       noShadowBan: false
//     },
//     {
//       name: 'TikTok',
//       icon: null,
//       subtitle: '(creators only)',
//       monetization: true,
//       contentProtection: false,
//       localMarketplace: false,
//       escrow: false,
//       noShadowBan: false
//     },
//     {
//       name: 'Instagram',
//       icon: Instagram,
//       monetization: false,
//       contentProtection: false,
//       localMarketplace: false,
//       escrow: false,
//       noShadowBan: false
//     },
//     {
//       name: 'Nextdoor',
//       icon: MapPin,
//       monetization: false,
//       contentProtection: false,
//       localMarketplace: true,
//       escrow: false,
//       noShadowBan: false
//     },
//     {
//       name: 'Cities App',
//       icon: null,
//       subtitle: '(Everyone)',
//       monetization: true,
//       contentProtection: true,
//       localMarketplace: true,
//       escrow: true,
//       noShadowBan: true,
//       highlight: true
//     }
//   ];

//   const features = [
//     { key: 'monetization', label: 'Monetization' },
//     { key: 'contentProtection', label: 'Content Protection' },
//     { key: 'localMarketplace', label: 'Local Marketplace' },
//     { key: 'escrow', label: 'Escrow' },
//     { key: 'noShadowBan', label: 'No Shadow Ban' }
//   ];

//   return (
//     <section id='landscape' className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Competitive Landscape</h2>
//           <p className="text-lg md:text-xl text-slate-600">The only true full-stack city-powered ecosystem</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gradient-to-r from-slate-100 to-slate-50">
//                   <th className="px-6 py-5 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">
//                     Platform
//                   </th>
//                   {features.map((feature) => (
//                     <th key={feature.key} className="px-6 py-5 text-center text-sm font-bold text-slate-700 uppercase tracking-wider">
//                       {feature.label}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200">
//                 {platforms.map((platform, index) => (
//                   <tr
//                     key={index}
//                     className={`${platform.highlight ? 'bg-gradient-to-r from-blue-50 to-cyan-50' : 'bg-white'} hover:bg-slate-50 transition-colors`}
//                   >
//                     <td className="px-6 py-5">
//                       <div className="flex items-center">
//                         {platform.icon && (
//                           <div className="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-lg mr-3">
//                             <platform.icon className="w-5 h-5 text-slate-600" />
//                           </div>
//                         )}
//                         <div>
//                           <div className={`font-bold ${platform.highlight ? 'text-blue-600 text-lg' : 'text-slate-900'}`}>
//                             {platform.name}
//                           </div>
//                           {platform.subtitle && (
//                             <div className="text-sm text-slate-500">{platform.subtitle}</div>
//                           )}
//                         </div>
//                       </div>
//                     </td>
//                     {features.map((feature) => (
//                       <td key={feature.key} className="px-6 py-5 text-center">
//                         {platform[feature.key] ? (
//                           <div className="flex justify-center">
//                             <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
//                               <Check className="w-5 h-5 text-emerald-600" />
//                             </div>
//                           </div>
//                         ) : (
//                           <div className="flex justify-center">
//                             <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
//                               <X className="w-5 h-5 text-red-600" />
//                             </div>
//                           </div>
//                         )}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="mt-12 text-center">
//           <div className="inline-block bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl px-8 py-4 shadow-lg">
//             <p className="text-white text-lg font-bold">
//               Cities App is the only true full-stack city-powered ecosystem
//             </p>
//           </div>
//         </div>

//         <div className='mt-10 flex items-center justify-center'>
//            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg rounded-full hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105">
//             <span className="flex items-center gap-2">
//               Invest now
//               <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </span>
//           </button>
// </div>
//       </div>
//     </section>
//   );
// }

// export default SectionH;











import { Check, X, Facebook, Instagram, MapPin } from 'lucide-react';
import { useRef } from 'react';

// Import the Cities App logo from assets
import citiesAppLogo from '../assets/images/cities_logo.jpeg'; // Adjust the path as needed

// TikTok Logo SVG Component
const TikTokLogo = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

function SectionH() {
  const platforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      iconColor: 'text-[#1877F2]',
      bgColor: 'bg-[#1877F2]/10',
      monetization: false,
      contentProtection: true,
      localMarketplace: true,
      escrow: false,
      noShadowBan: false,
      brandColor: '#1877F2'
    },
    {
      name: 'TikTok',
      icon: TikTokLogo,
      iconColor: 'text-black dark:text-white',
      bgColor: 'bg-black/10 dark:bg-white/10',
      subtitle: '(creators only)',
      monetization: true,
      contentProtection: false,
      localMarketplace: false,
      escrow: false,
      noShadowBan: false,
      brandColor: '#000000'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      iconColor: 'text-[#E4405F]',
      bgColor: 'bg-[#E4405F]/10',
      monetization: false,
      contentProtection: false,
      localMarketplace: false,
      escrow: false,
      noShadowBan: false,
      brandColor: '#E4405F'
    },
    {
      name: 'Nextdoor',
      icon: MapPin,
      iconColor: 'text-[#00B246]',
      bgColor: 'bg-[#00B246]/10',
      monetization: false,
      contentProtection: false,
      localMarketplace: true,
      escrow: false,
      noShadowBan: false,
      brandColor: '#00B246'
    },
    {
      name: 'Cities App',
      icon: 'image', // This will be handled specially
      iconColor: 'text-[#3B82F6]',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      subtitle: '(Everyone)',
      monetization: true,
      contentProtection: true,
      localMarketplace: true,
      escrow: true,
      noShadowBan: true,
      highlight: true,
      brandColor: '#3B82F6'
    }
  ];

  const features = [
    { key: 'monetization', label: 'Monetization' },
    { key: 'contentProtection', label: 'Content Protection' },
    { key: 'localMarketplace', label: 'Local Marketplace' },
    { key: 'escrow', label: 'Escrow' },
    { key: 'noShadowBan', label: 'No Shadow Ban' }
  ];

  return (
    <section id='landscape' className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6 dark:border-blue-400/30">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Competitive Analysis
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-400">
              The Complete Solution
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Compare Cities App against traditional platforms. We're the only true full-stack city-powered ecosystem.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg shadow border border-gray-200/50 dark:border-gray-800/50 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                  <th className="px-8 py-6 text-left">
                    <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
                      Platform
                    </span>
                  </th>
                  {features.map((feature) => (
                    <th
                      key={feature.key}
                      className="px-6 py-6 text-center"
                    >
                      <span className="text-lg font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        {feature.label}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50 dark:divide-gray-800/50">
                {platforms.map((platform, index) => (
                  <tr
                    key={index}
                    className={`${
                      platform.highlight
                        ? 'bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-900/30 dark:to-cyan-900/30'
                        : 'bg-white/50 dark:bg-gray-900/50'
                    } hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-300 group`}
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center w-14 h-14 ${platform.bgColor} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {platform.icon === 'image' ? (
                            // Render the imported image for Cities App
                            <img
                              src={citiesAppLogo}
                              alt="Cities App"
                              className="w-8 h-8 object-contain"
                            />
                          ) : (
                            // Render Lucide icon for other platforms
                            <platform.icon className={`w-7 h-7 ${platform.iconColor}`} />
                          )}
                        </div>
                        <div>
                          <div className={`flex items-center gap-2 ${
                            platform.highlight
                              ? 'text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text dark:from-blue-400 dark:to-cyan-400 text-2xl font-bold'
                              : 'text-gray-800 dark:text-gray-200 text-xl font-semibold'
                          }`}>
                            {platform.name}
                            {/* {platform.highlight && (
                              <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                ★ BEST
                              </span>
                            )} */}
                          </div>
                          {platform.subtitle && (
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {platform.subtitle}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    
                    {features.map((feature) => (
                      <td key={feature.key} className="px-6 py-6 text-center">
                        <div className="flex justify-center">
                          {platform[feature.key] ? (
                            <div className="relative">
                              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                                <Check className="w-5 h-5 text-white" />
                              </div>
                              {/* <div className="absolute -top-1 -right-1 w-5 h-5 bg-white dark:bg-gray-900 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                              </div> */}
                            </div>
                          ) : (
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center shadow-lg opacity-50">
                              <X className="w-5 h-5 text-white" />
                            </div>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Table Footer */}
          <div className="border-t border-gray-200/50 dark:border-gray-800/50 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-900/20 dark:to-cyan-900/20 px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  Summary
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Cities App is the only platform offering all essential features
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Not Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4">
              <div className="w-6 h-6 text-white">✓</div>
            </div>
            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              All-in-One Platform
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Only Cities App combines social, commerce, and monetization in a single ecosystem.
            </p>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mb-4">
              <div className="w-6 h-6 text-white">✓</div>
            </div>
            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Creator-First Economy
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Direct monetization for all users, not just creators with millions of followers.
            </p>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4">
              <div className="w-6 h-6 text-white">✓</div>
            </div>
            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              City-Focused Design
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Built specifically for local communities and city-based economies.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-emerald-600/10 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-10 text-center overflow-hidden">
            {/* Floating elements - using the imported image */}
            <div className="absolute bottom-6 right-6 opacity-20">
              <div className="w-16 h-16 rounded-full border-4 border-white"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join The Future of City Ecosystems
              </h3>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Invest in the only platform that combines social networking, local commerce, 
                and creator economy into one seamless city experience.
              </p>
              
              <button className="group relative px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-full shadow transition-all duration-300">
                <span className="flex items-center gap-3">
                  Invest Now
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div> */}
              </button>
              
              <p className="mt-6 text-sm text-white/70">
                Limited early investor positions available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionH;
