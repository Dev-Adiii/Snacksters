import React from 'react'
import Link from 'next/link'

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-600 mb-4">Your order has been successfully placed.</p>
          {/* <p className="text-sm text-gray-500 mb-6">
            A confirmation email has been sent to your email address.
          </p> */}
        </div>

        <div className="space-y-4">
          {/* <Link 
            href="/orders" 
            className="block w-full py-3 px-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-150"
          >
            View Order Status
          </Link> */}
          <Link 
            href="/" 
            className="block w-full py-3 px-4 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition duration-150"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage