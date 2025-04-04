import React from 'react';
import { Heart, Book, Users, Target, CheckCircle } from 'lucide-react';
import { SalePopup } from './components/SalePopup';
import { Testimonials } from './components/Testimonials';
import { CheckoutPage } from './components/CheckoutPage';
import { PaymentSuccess } from './components/PaymentSuccess';

function App() {
  const path = window.location.pathname;
  
  // Route handling
  if (path === '/checkout') {
    return <CheckoutPage />;
  }
  
  if (path === '/payment-success') {
    return <PaymentSuccess />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section - Awareness */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-semibold">Christian Dating Guide</span>
            </div>
            <a href="#pricing" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - Continued */}
        <div className="relative">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80")',
              opacity: '0.3'
            }}
          ></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Overcoming Challenges in Christian Online Dating for Singles Over 30
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find meaningful connections while staying true to your faith. Our comprehensive guide helps you navigate the modern dating landscape with Christian values.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-red-600 text-white text-xl px-8 py-4 rounded-full hover:bg-red-700 transition-colors transform hover:scale-105"
            >
              Transform Your Dating Life Today
            </a>
          </div>
        </div>

        {/* Benefits Section - Interest */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why This Guide Is Different</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Book className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Biblical Wisdom</h3>
                <p className="text-gray-600">Scripture-based guidance for modern dating challenges</p>
              </div>
              <div className="text-center p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real Success Stories</h3>
                <p className="text-gray-600">Proven strategies from successful Christian couples</p>
              </div>
              <div className="text-center p-6">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Practical Steps</h3>
                <p className="text-gray-600">Actionable advice for finding your perfect match</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - Desire */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Creating an authentic Christian dating profile",
                "Setting healthy boundaries in online relationships",
                "Identifying red flags while maintaining grace",
                "Navigating faith differences in potential matches",
                "Moving from online to meaningful offline connections",
                "Keeping God at the center of your dating journey"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <Testimonials />
        </div>

        {/* Pricing Section - Action */}
        <div id="pricing" className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Start Your Journey Today</h2>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-8 py-12">
                <h3 className="text-2xl font-bold mb-4">DOWNLOAD THE COMPLETE DATING GUIDE TODAY</h3>
                <div className="text-4xl font-bold mb-6">$19.99</div>
                <ul className="text-left mb-8 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>50+ pages of expert guidance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Practical exercises and worksheets</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Real success stories and examples</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Lifetime access to updates</span>
                  </li>
                </ul>
                <a
                  href="/checkout"
                  className="block w-full bg-red-600 text-white text-xl font-bold py-4 px-6 rounded-xl hover:bg-red-700 transition-colors transform hover:scale-105"
                >
                  GET YOUR COPY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">&copy; 2025 Christian Dating Guide. All rights reserved.</p>
          <div className="text-sm">
            <a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a>
            <span className="mx-2">|</span>
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>

      <SalePopup />
    </div>
  );
}

export default App;
