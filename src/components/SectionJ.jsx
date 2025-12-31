import { BarChart3, Users as UsersIcon, TrendingUp } from 'lucide-react';

export default function SectionJ() {
  const revenueData = [
    { year: 'Year 1', value: '$3.8M' },
    { year: 'Year 2', value: '$12.4M' },
    { year: 'Year 3', value: '$42M' },
    { year: 'Year 4', value: '$96M' },
    { year: 'Year 5', value: '$215M' }
  ];

  const userData = [
    { year: 'Year 1', value: '500k' },
    { year: 'Year 5', value: '8.5M' }
  ];

  return (
    <section id='financial-projections' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-4">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">J. 5-YEAR FINANCIAL PROJECTIONS</span>
        </div> */}

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12">
          Explosive Growth Trajectory
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center space-x-2 mb-6">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Revenue Forecast</h3>
            </div>
            <div className="space-y-4">
              {revenueData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">{data.year}</span>
                  <div className="flex items-center space-x-3 flex-1 ml-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                        style={{ width: `${(index + 1) * 20}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-blue-600 text-lg min-w-fit">{data.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center space-x-2 mb-6">
              <UsersIcon className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">User Growth</h3>
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-700">Year 1</span>
                  <span className="font-bold text-green-600 text-lg">500K Users</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-700">Year 5</span>
                  <span className="font-bold text-green-600 text-lg">8.5M Users</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  <span className="text-green-600 text-lg">17x</span> user growth in 5 years
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Assumptions Behind Projections</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Gradual expansion from 1 to 15+ cities by Year 5</li>
                <li>• Organic user growth + network effects</li>
                <li>• Creator monetization ramps with engagement</li>
                <li>• Escrow transaction volume increases with platform trust</li>
                <li>• Local business advertising adoption accelerates</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Key Metrics Driving Revenue</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Creator payout volume (15% take rate)</li>
                <li>• Transaction escrow fees (2–4%)</li>
                <li>• Local ads spend per city ($20–$199/campaign)</li>
                <li>• Cities+ subscription adoption rate</li>
                <li>• Vendor commission partnerships (5–12%)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
