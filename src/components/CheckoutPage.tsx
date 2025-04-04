import React from 'react';
import { Book, ArrowLeft } from 'lucide-react';

export function CheckoutPage() {
  const handlePayPalCheckout = () => {
    // Initialize PayPal payment
    window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL_EMAIL&item_name=Christian+Dating+Guide&amount=9.99&currency_code=USD&return=${encodeURIComponent(window.location.origin + '/payment-success')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to main page
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            
            <div className="flex items-start space-x-6 mb-8">
              <div className="flex-shrink-0 bg-purple-100 p-4 rounded-lg">
                <Book className="h-12 w-12 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Christian Dating Guide</h2>
                <p className="text-gray-600">Digital Download (PDF Format)</p>
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <div className="flex justify-between mb-2">
                <span>Price:</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>$9.99</span>
              </div>
            </div>

            <button 
              onClick={handlePayPalCheckout}
              className="block w-full bg-[#0070BA] text-white text-center text-xl font-bold py-4 px-6 rounded-lg hover:bg-[#003087] transition-colors mb-6"
            >
              Purchase & Download Now
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Secure Payment Methods:</p>
              <img 
                src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppmcvdam.png" 
                alt="PayPal Accepted Payment Methods"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
