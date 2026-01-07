// import { Coins, Ban, Shield, Target, MessageCircle, ThumbsUp, Eye, Sparkles, Fingerprint, DropletIcon, Car, Home, Smartphone, CassetteTape, Users, Handshake, Building } from 'lucide-react';

// function SectionD() {
//   return (
//     <section id='solutions' className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-20 lg:py-28">
//       <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center opacity-5"></div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           {/* <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-full mb-6">
//             <Sparkles className="w-6 h-6" />
//             <span className="font-semibold text-lg">OUR SOLUTION — CITIES APP</span>
//           </div> */}
//           <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
//             A city super-app
//           </h2>
//           <p className="text-xl lg:text-2xl text-gray-300">
//             enabling everyone to <span className="text-blue-400 font-semibold">earn</span>, <span className="text-blue-400 font-semibold">connect</span>, and <span className="text-cyan-400 font-semibold">transact safely</span>.
//           </p>
//         </div>

//         <div className="space-y-8">
//           <div className="bg-gradient-to-r from-blue-900/40 to-emerald-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 lg:p-10 hover:border-blue-400/60 transition-all">
//             <div className="flex items-start gap-6 mb-6">
//               <div className="flex-1">
//                 <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Earn Money Automatically</h3>
//                 <p className="text-gray-300 text-lg mb-6">Monetization from:</p>
//                 <div className="grid md:grid-cols-3 gap-4 mb-6">
//                   <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
//                     <MessageCircle className="w-6 h-6 text-blue-400" />
//                     <span className="text-gray-200">Total comments</span>
//                   </div>
//                   <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
//                     <ThumbsUp className="w-6 h-6 text-blue-400" />
//                     <span className="text-gray-200">Total likes</span>
//                   </div>
//                   <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
//                     <Eye className="w-6 h-6 text-blue-400" />
//                     <span className="text-gray-200">Total views</span>
//                   </div>
//                 </div>
//                 <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-5">
//                   <p className="text-xl font-semibold text-blue-300">Example:</p>
//                   <p className="text-xl text-white mt-2">
//                     3,000 comments + 30,000 likes → <span className="text-blue-400 font-bold">automatic earnings</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//              <div className="flex-1 bg-blue-900/40 py-4 px-10 px rounded-lg">
//                 <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">No Shadow Bans — Ever</h3>
//                 <p className="text-gray-300 text-xl">
//                   Our <span className="text-blue-300 font-semibold">AI Transparency Engine</span> ensures fair visibility for every user.
//                 </p>
//               </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="flex items-start gap-6 bg-blue-900/40 p-8 lg:p-10 rounded-lg">
//               <div className="flex-1">
//                 <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Content Protection</h3>
//                 <p className="text-gray-300 text-lg mb-4">Uses:</p>
//                 <div className="mb-4 space-y-6">
//                   <div className="flex items-center gap-3">
//                     <Fingerprint className="w-6 h-6 text-blue-400" />
//                     <span className="text-gray-200">AI fingerprinting</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <DropletIcon className="w-6 h-6 text-blue-400" />
//                     <span className="text-gray-200">Smart watermarking</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Ban className="w-6 h-6 text-blue-400" />
//                     <span className="text-gray-200">Repost-blocking technology</span>
//                   </div>
//                 </div>
//                 <p className="text-blue-400 mt-6 text-sm">To secure all user images & videos.</p>
//               </div>
//             </div>

//                      <div className="flex items-start gap-6 bg-blue-900/40 p-8 lg:p-10 rounded-lg">
//               <div className="flex-1">
//                 <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Escrow-Protected Marketplace</h3>
//                 <p className="text-gray-300 text-lg mb-6">Safe transactions for:</p>
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-3">
//                     <Car className="w-6 h-6 text-blue-400" />
//                     <span className="text-gray-200">Cars</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Home className="w-6 h-6 text-blue-400" />
//                     <span className="text-gray-200">Properties</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Smartphone className="w-6 h-6 text-blue-400" />
//                     <span className="text-gray-200">Electronics</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <CassetteTape className="w-6 h-6 text-blue-400" />
//                     <span className="text-gray-200">General Items</span>
//                   </div>
//                 </div>
//                   <p className="text-blue-400 mt-6 text-sm">Funds release only after buyer confirmation</p>
//               </div>
//             </div>
//                      <div className="flex items-start gap-6 bg-blue-900/40 p-8 lg:p-10 rounded-lg">
//               <div className="flex-1">
//     <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Befriend, Groups and City Communities</h3>
//     <p className="text-gray-300 text-lg mb-6">Smart suggestions connects users to:</p>
//     <div className="space-y-6">
//       <div className="flex items-center gap-3">
//         <Users className="w-6 h-6 text-blue-400" />
//         <span className="text-gray-200">Trusted Profiles</span>
//       </div>
//       <div className="flex items-center gap-3">
//         <Sparkles className="w-6 h-6 text-blue-400" />
//         <span className="text-gray-200">Local Creators</span>
//       </div>
//       <div className="flex items-center gap-3">
//         <Handshake className="w-6 h-6 text-blue-400" />
//         <span className="text-gray-200">Buyers and sellers</span>
//       </div>
//       <div className="flex items-center gap-3">
//         <Building className="w-6 h-6 text-blue-400" />
//         <span className="text-gray-200">Neighborhood groups</span>
//       </div>
//     </div>
//   </div>
//             </div>
//           </div>

//          <div className=" bg-blue-900/40 py-4 px-10 rounded-lg mb-6">
//                 <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Hyper-Local Advertising (90% cheaper)</h3>
//                 <p className="text-gray-300 text-xl">
//                   Businesses target <span className="text-blue-300 font-semibold">city groups</span>, not broad irrelevant audiences.
//                 </p>
//               </div>

//          <div className=" bg-blue-900/40 py-4 px-10 rounded-lg mb-6">
//                 <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Best Deals Engine</h3>
//                 <p className="text-gray-300 text-xl">
//                   AI compare prices across your city to show the <span className="text-blue-300 font-semibold">best available offer.</span>
//                 </p>
//               </div>
    
//         </div>

//         <div className="mt-16 text-center">
//           <div className="relative inline-block">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
//             <img
//               src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg"
//               alt="Connected city"
//               className="relative w-full max-w-4xl rounded-2xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SectionD;








import { Coins, Ban, Shield, Target, MessageCircle, ThumbsUp, Eye, Sparkles, Fingerprint, DropletIcon, Car, Home, Smartphone, CassetteTape, Users, Handshake, Building, DollarSign, TrendingUp, Megaphone, Search, Award, Lock, Heart } from 'lucide-react';
import imageTwo from '../assets/images/slide 2.jpeg';

function SectionD() {
  return (
    <section id='solutions' className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
       */}
       <div className={`absolute inset-0 bg-[url('https://media.istockphoto.com/id/1450574534/photo/black-woman-reading-a-text-message-on-her-mobile-phone.jpg?s=612x612&w=0&k=20&c=Np_kgvwot3ElqYgZBqkA_A72zjFQ0-dAFLzLJqwijPQ=')] bg-cover bg-center opacity-10`}></div>
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="font-medium text-blue-300">THE ULTIMATE CITY SUPER-APP</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              City Experience
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            One platform for everything: <span className="text-blue-400 font-semibold">earn money</span>,{' '}
            <span className="text-cyan-400 font-semibold">connect safely</span>, and{' '}
            <span className="text-purple-400 font-semibold">thrive locally</span>.
          </p>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left Column - Image/Visual */}
          <div className="relative group">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-600/30 z-10"></div>
              <img
                // src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                src={imageTwo}
                alt="City Super-App Interface"
                className="w-full h-auto object-cover aspect-[4/3] object-top"
              />
              
              {/* Floating elements overlay */}
              <div className="absolute top-6 left-6 bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-2xl shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-sm font-semibold">+$2,450</p>
                    <p className="text-xs opacity-90">This Week</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-2xl shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-sm font-semibold">+1,234</p>
                    <p className="text-xs opacity-90">New Connections</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            {/* Feature 1 - Earn Money */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Earn Money Automatically</h3>
                  <p className="text-gray-300">
                    Get paid for your content. Every like, comment, and view generates income. No complicated rules.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Safe Marketplace */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Safe Transactions</h3>
                  <p className="text-gray-300">
                    Escrow-protected marketplace. Buy and sell everything with guaranteed safety and zero fraud.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 - Community */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Local Community</h3>
                  <p className="text-gray-300">
                    Connect with neighbors, creators, and local businesses. Build meaningful relationships in your city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* Card 1 - No Shadow Bans */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">No Shadow Bans</h3>
            <p className="text-gray-300">
              Our AI Transparency Engine ensures fair visibility for every user. Grow your audience without limits.
            </p>
          </div>

          {/* Card 2 - Content Protection */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Content Protection</h3>
            <p className="text-gray-300">
              AI fingerprinting, smart watermarking, and repost-blocking to secure all your creative work.
            </p>
          </div>

          {/* Card 3 - Hyper-Local Ads */}
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Megaphone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Hyper-Local Ads</h3>
            <p className="text-gray-300">
              Target city groups directly for 90% cheaper. Reach actual customers, not irrelevant audiences.
            </p>
          </div>

          {/* Card 4 - Best Deals */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Best Deals Engine</h3>
            <p className="text-gray-300">
              AI compares prices across your city to show you the best available offers on everything.
            </p>
          </div>

          {/* Card 5 - Community */}
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6 hover:border-pink-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Smart Community</h3>
            <p className="text-gray-300">
              Connect with trusted profiles, local creators, and neighborhood groups that match your interests.
            </p>
          </div>

          {/* Card 6 - Verification */}
          <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 hover:border-orange-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Verification</h3>
            <p className="text-gray-300">
              Verified profiles and merchants. Build trust and increase transaction success rates.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-900/40 via-slate-900/50 to-purple-900/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">Trusted by Thousands</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join the fastest-growing city super-app transforming how people earn, connect, and transact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">50K+</div>
              <p className="text-gray-300">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">$2M+</div>
              <p className="text-gray-300">Paid to Creators</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">10K+</div>
              <p className="text-gray-300">Safe Transactions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">95%</div>
              <p className="text-gray-300">User Satisfaction</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your City Life?</h3>
              <p className="text-gray-300">Join thousands already earning, connecting, and thriving.</p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105">
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionD;
