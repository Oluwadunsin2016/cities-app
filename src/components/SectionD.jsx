import { Coins, Ban, Shield, Target, MessageCircle, ThumbsUp, Eye, Sparkles, Fingerprint, DropletIcon, Car, Home, Smartphone, CassetteTape, Users, Handshake, Building } from 'lucide-react';

function SectionD() {
  return (
    <section id='solutions' className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-6 h-6" />
            <span className="font-semibold text-lg">OUR SOLUTION — CITIES APP</span>
          </div> */}
          <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            A city super-app
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300">
            enabling everyone to <span className="text-blue-400 font-semibold">earn</span>, <span className="text-blue-400 font-semibold">connect</span>, and <span className="text-cyan-400 font-semibold">transact safely</span>.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-900/40 to-emerald-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 lg:p-10 hover:border-blue-400/60 transition-all">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Earn Money Automatically</h3>
                <p className="text-gray-300 text-lg mb-6">Monetization from:</p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">Total comments</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                    <ThumbsUp className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">Total likes</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                    <Eye className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">Total views</span>
                  </div>
                </div>
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-5">
                  <p className="text-xl font-semibold text-blue-300">Example:</p>
                  <p className="text-xl text-white mt-2">
                    3,000 comments + 30,000 likes → <span className="text-blue-400 font-bold">automatic earnings</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

             <div className="flex-1 bg-blue-900/40 py-4 px-10 px rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">No Shadow Bans — Ever</h3>
                <p className="text-gray-300 text-xl">
                  Our <span className="text-blue-300 font-semibold">AI Transparency Engine</span> ensures fair visibility for every user.
                </p>
              </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-6 bg-blue-900/40 p-8 lg:p-10 rounded-lg">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Content Protection</h3>
                <p className="text-gray-300 text-lg mb-4">Uses:</p>
                <div className="mb-4 space-y-6">
                  <div className="flex items-center gap-3">
                    <Fingerprint className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">AI fingerprinting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DropletIcon className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">Smart watermarking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ban className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">Repost-blocking technology</span>
                  </div>
                </div>
                <p className="text-blue-400 mt-6 text-sm">To secure all user images & videos.</p>
              </div>
            </div>

                     <div className="flex items-start gap-6 bg-blue-900/40 p-8 lg:p-10 rounded-lg">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Escrow-Protected Marketplace</h3>
                <p className="text-gray-300 text-lg mb-6">Safe transactions for:</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Car className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">Cars</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">Properties</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">Electronics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CassetteTape className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">General Items</span>
                  </div>
                </div>
                  <p className="text-blue-400 mt-6 text-sm">Funds release only after buyer confirmation</p>
              </div>
            </div>
                     <div className="flex items-start gap-6 bg-blue-900/40 p-8 lg:p-10 rounded-lg">
              <div className="flex-1">
    <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Befriend, Groups and City Communities</h3>
    <p className="text-gray-300 text-lg mb-6">Smart suggestions connects users to:</p>
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="w-6 h-6 text-blue-400" />
        <span className="text-gray-200">Trusted Profiles</span>
      </div>
      <div className="flex items-center gap-3">
        <Sparkles className="w-6 h-6 text-blue-400" />
        <span className="text-gray-200">Local Creators</span>
      </div>
      <div className="flex items-center gap-3">
        <Handshake className="w-6 h-6 text-blue-400" />
        <span className="text-gray-200">Buyers and sellers</span>
      </div>
      <div className="flex items-center gap-3">
        <Building className="w-6 h-6 text-blue-400" />
        <span className="text-gray-200">Neighborhood groups</span>
      </div>
    </div>
  </div>
            </div>
          </div>

         <div className=" bg-blue-900/40 py-4 px-10 rounded-lg mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Hyper-Local Advertising (90% cheaper)</h3>
                <p className="text-gray-300 text-xl">
                  Businesses target <span className="text-blue-300 font-semibold">city groups</span>, not broad irrelevant audiences.
                </p>
              </div>

         <div className=" bg-blue-900/40 py-4 px-10 rounded-lg mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Best Deals Engine</h3>
                <p className="text-gray-300 text-xl">
                  AI compare prices across your city to show the <span className="text-blue-300 font-semibold">best available offer.</span>
                </p>
              </div>
    
        </div>

        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
            <img
              src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg"
              alt="Connected city"
              className="relative w-full max-w-4xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionD;
