import { Check, X, Facebook, Instagram, MapPin } from 'lucide-react';

function SectionH() {
  const platforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      monetization: false,
      contentProtection: true,
      localMarketplace: true,
      escrow: false,
      noShadowBan: false
    },
    {
      name: 'TikTok',
      icon: null,
      subtitle: '(creators only)',
      monetization: true,
      contentProtection: false,
      localMarketplace: false,
      escrow: false,
      noShadowBan: false
    },
    {
      name: 'Instagram',
      icon: Instagram,
      monetization: false,
      contentProtection: false,
      localMarketplace: false,
      escrow: false,
      noShadowBan: false
    },
    {
      name: 'Nextdoor',
      icon: MapPin,
      monetization: false,
      contentProtection: false,
      localMarketplace: true,
      escrow: false,
      noShadowBan: false
    },
    {
      name: 'Cities App',
      icon: null,
      subtitle: '(Everyone)',
      monetization: true,
      contentProtection: true,
      localMarketplace: true,
      escrow: true,
      noShadowBan: true,
      highlight: true
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
    <section id='landscape' className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Competitive Landscape</h2>
          <p className="text-lg md:text-xl text-slate-600">The only true full-stack city-powered ecosystem</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-100 to-slate-50">
                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">
                    Platform
                  </th>
                  {features.map((feature) => (
                    <th key={feature.key} className="px-6 py-5 text-center text-sm font-bold text-slate-700 uppercase tracking-wider">
                      {feature.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {platforms.map((platform, index) => (
                  <tr
                    key={index}
                    className={`${platform.highlight ? 'bg-gradient-to-r from-blue-50 to-cyan-50' : 'bg-white'} hover:bg-slate-50 transition-colors`}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center">
                        {platform.icon && (
                          <div className="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-lg mr-3">
                            <platform.icon className="w-5 h-5 text-slate-600" />
                          </div>
                        )}
                        <div>
                          <div className={`font-bold ${platform.highlight ? 'text-blue-600 text-lg' : 'text-slate-900'}`}>
                            {platform.name}
                          </div>
                          {platform.subtitle && (
                            <div className="text-sm text-slate-500">{platform.subtitle}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    {features.map((feature) => (
                      <td key={feature.key} className="px-6 py-5 text-center">
                        {platform[feature.key] ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                              <Check className="w-5 h-5 text-emerald-600" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <X className="w-5 h-5 text-red-600" />
                            </div>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl px-8 py-4 shadow-lg">
            <p className="text-white text-lg font-bold">
              Cities App is the only true full-stack city-powered ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionH;
