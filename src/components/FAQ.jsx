import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  // WhatsApp number - replace with your actual number
  const whatsappNumber = '+14707845525'; // Format: country code + number (without + sign)
  // const whatsappNumber = '1234567890'; // Format: country code + number (without + sign)
  const whatsappMessage = encodeURIComponent('Hello! I have a question about Cities App.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const faqs = [
    {
      question: 'How do creators earn money on Cities App?',
      answer: 'Creators earn automatically based on their engagement metrics: total comments, likes, and views. For example, 3,000 comments + 30,000 likes generates automatic earnings. No minimum thresholds - you start earning from day one.'
    },
    {
      question: 'Is my content protected on Cities App?',
      answer: 'Yes! We use AI fingerprinting, smart watermarking, and repost-blocking technology to secure all user images and videos. Our content protection accuracy is 92%, ensuring your creative work stays yours.'
    },
    {
      question: 'How does the escrow protection work?',
      answer: 'Cities Secure Escrow™ holds funds from buyers until they confirm the transaction. For cars, properties, electronics, and general items, funds are released only after buyer confirmation, protecting both parties from fraud.'
    },
    {
      question: 'What is the Cities App super-app?',
      answer: 'It\'s an all-in-one platform combining creator monetization, hyper-local commerce, safe escrow-protected transactions, and AI-powered city communities. Everything you need to earn, connect, and transact safely within your city.'
    },
    {
      question: 'Why is it called hyper-local advertising?',
      answer: 'Instead of paying for broad, irrelevant audiences, businesses on Cities App target city groups directly for just $20–$199 per campaign—90% cheaper than traditional ads. You reach actual customers in your city.'
    },
    {
      question: 'What is the AI Transparency Engine?',
      answer: 'Our proprietary AI system ensures fair visibility for every user, preventing shadow bans. Every creator has equal opportunity to grow, with transparent, algorithmic fairness built into the platform.'
    },
    {
      question: 'Can local businesses use Cities App?',
      answer: 'Absolutely! Businesses can advertise hyper-locally, access a local customer marketplace, and even become vendors with our partnership fees (5–12% commission). You connect directly with city-based customers.'
    },
    {
      question: 'What is the Cities+ subscription?',
      answer: 'For just $4.99/month, Cities+ gives you premium access to advanced features, priority support, and exclusive community benefits to maximize your growth on the platform.'
    },
    {
      question: 'How does AI verification work?',
      answer: 'We offer AI verification services for users and merchants (just $0.99–$2.99) to build trust. Verified profiles get a badge, helping you stand out and increasing transaction success rates.'
    },
    {
      question: 'Is my data safe on Cities App?',
      answer: 'Yes. We use enterprise-grade security, AI-powered fraud detection, and escrow protection. All transactions are verified, all content is protected, and all data follows strict privacy standards.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700">
            Everything you need to know about Cities App
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

{/* invest@cittis.cc */}

     {/* <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-lg opacity-90 mb-6">
            Get in touch with our team for more information about Cities App
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            Contact Us
          </button>
        </div> */}

        {/* <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-lg opacity-90 mb-6">
            Get in touch with our team for more information about Cities App
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us on WhatsApp
          </a>
          <p className="mt-4 text-sm opacity-80">
            We typically respond within a few minutes
          </p>
        </div> */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-lg opacity-90 mb-6">
            Get in touch with our team for more information about Cities App
          </p>
          <a
            href='mailto:invest@cittis.cc'
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us via Email
          </a>
          {/* <p className="mt-4 text-sm opacity-80">
            We typically respond within a few minutes
          </p> */}
        </div>
      </div>
    </section>
  );
}