import React, { useEffect } from 'react';
import { Check, Download, ArrowLeft } from 'lucide-react';

export function PaymentSuccess() {
  useEffect(() => {
    // Automatically trigger download after 2 seconds
    const timer = setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/christian-dating-guide.pdf'; // This would be your actual PDF URL
      link.download = 'Christian-Dating-Guide.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
          <div className="px-6 py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h1>
            <p className="text-gray-600 mb-8">
              Your payment has been confirmed and your download will begin automatically.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="font-semibold mb-2">Order Details:</h2>
              <p>Christian Dating Guide - Digital Edition</p>
              <p className="font-bold">$9.99</p>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              If your download doesn't start automatically, click the button below:
            </p>
            
            <a
              href="/christian-dating-guide.pdf"
              download="Christian-Dating-Guide.pdf"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
