'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const CheckoutPage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const items = JSON.parse(decodeURIComponent(searchParams.get('items') || '[]'))
  const [deliveryLocation, setDeliveryLocation] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    tableNumber: '',
    transactionId: ''
  })

  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendEmail = async (orderDetails) => {
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'hiitechyt@gmail.com', // Replace with your email
          customer_name: orderDetails.name,
          delivery_location: orderDetails.deliveryLocation,
          address: orderDetails.address || 'N/A',
          phone: orderDetails.phone || 'N/A',
          table_number: orderDetails.tableNumber || 'N/A',
          payment_method: orderDetails.paymentMethod,
          transaction_id: orderDetails.transactionId || 'N/A',
          order_items: orderDetails.items.map(item => 
            `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`
          ).join('\n'),
          total_amount: `₹${orderDetails.totalAmount}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', response)
      return true
    } catch (error) {
      console.error('Failed to send email:', error)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!deliveryLocation || !paymentMethod) {
      alert('Please select delivery location and payment method')
      return
    }

    if (deliveryLocation === 'home') {
      if (!formData.name || !formData.address || !formData.phone) {
        alert('Please fill in all required fields')
        return
      }
    }

    if (deliveryLocation === 'desk' && !formData.tableNumber) {
      alert('Please enter table number')
      return
    }

    if (paymentMethod === 'upi' && !formData.transactionId) {
      alert('Please enter transaction ID')
      return
    }

    // Prepare order details
    const orderDetails = {
      name: formData.name,
      deliveryLocation,
      address: formData.address,
      phone: formData.phone,
      tableNumber: formData.tableNumber,
      paymentMethod,
      transactionId: formData.transactionId,
      items,
      totalAmount,
      orderDate: new Date().toLocaleString()
    }

    // Show loading state
    try {
      // Initialize EmailJS
      emailjs.init('7_1EKJU0xd6QiYHfx') // Replace with your public key

      // Send email
      const emailSent = await sendEmail(orderDetails)
      
      if (emailSent) {
        // If email sent successfully, redirect to thank you page
        router.push('/thankyou')
      } else {
        alert('Failed to process order. Please try again.')
      }
    } catch (error) {
      console.error('Order processing error:', error)
      alert('An error occurred while processing your order. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-neutral-800 mb-6">Order Summary</h1>
          
          {/* Items List */}
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              item.quantity > 0 && (
                <div key={item.id} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="font-medium text-lg text-neutral-800">{item.name}</h3>
                    <p className="text-neutral-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{item.price * item.quantity}</p>
                    <p className="text-sm text-neutral-500">₹{item.price} each</p>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Total Amount */}
          <div className="border-t pt-4 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-neutral-800">Total Amount:</span>
              <span className="text-2xl font-bold text-red-600">₹{totalAmount}</span>
            </div>
            <span className='text-xl font-bold text-yellow-400  ' >Free Delivery</span>
          </div>

          {/* Deliver to section */}
          <div className="border-t-4 pt-4 mb-8"></div>
          <div>
            <h1 className="text-3xl font-bold text-neutral-800 mb-6">Deliver to </h1>
            <div className='flex gap-4'>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="deliveryLocation" 
                  value="home"
                  checked={deliveryLocation === 'home'}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                  className="form-radio text-red-600 focus:ring-red-500"
                />
                <span className="text-neutral-800">At home</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="deliveryLocation" 
                  value="desk"
                  checked={deliveryLocation === 'desk'}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                  className="form-radio text-red-600 focus:ring-red-500" 
                />
                <span className="text-neutral-800">On desk</span>
              </label>
            </div>

            {/* Conditional rendering based on selection */}
            {deliveryLocation === 'home' && (
              <div className="space-y-4 mt-6">
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                  type="text" 
                  placeholder='Enter your Name'
                  required
                />
                <input 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  type="text" 
                  placeholder='Enter your Address'
                  required
                />
                <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  type="tel" 
                  placeholder='Enter your Phone number'
                  maxLength="10"
                  required
                />
              </div>
            )}

            {deliveryLocation === 'desk' && (
              <div className="mt-6">
                <input 
                  name="tableNumber"
                  value={formData.tableNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  type="number"
                  min="1"
                  placeholder='Enter Table number'
                  required
                />
              </div>
            )}
          </div>

            {/* payment option */}

            <div className="border-t-4 pt-4 mb-8 mt-10"></div>
            <div>
            <h1 className="text-3xl font-bold text-neutral-800 mb-6">Payment Options </h1>
            <div>
              <div className="space-y-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-red-600 focus:ring-red-500"
                  />
                  <span className="text-neutral-800">Cash on Delivery (suggested)* </span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio"
                    name="paymentMethod" 
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-red-600 focus:ring-red-500"
                  />
                  <span className="text-neutral-800">UPI Payment</span>
                </label>

                {/* UPI QR Code - Only shown when UPI is selected */}
                {paymentMethod === 'upi' && (
                  <div className="mt-4 transition-all duration-300 ease-in-out">
                    <div className="upi-qr-container">
                      <img
                        src="/scan.png" 
                        alt="UPI QR Code"
                        className="w-48 h-48 mx-auto"
                      />
                      <p className="text-center text-sm text-neutral-600 mt-2">
                        Scan QR code to pay via UPI
                      </p>
                      <input 
                        name="transactionId"
                        value={formData.transactionId}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 mt-4 text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                        ${formData.transactionId && formData.transactionId.length !== 23 ? 'border-red-500' : 'border-gray-300'}`}
                        type="text" 
                        placeholder='Enter transaction ID'
                        required
                      />
                      {formData.transactionId && formData.transactionId.length !== 23 && (
                        <p className="mt-1 text-sm text-red-500">
                          Invalid transaction ID.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
            

          {/* Update the Actions buttons to show only when both delivery and payment are selected */}
          {deliveryLocation && paymentMethod && (
            <div className="flex gap-4 mt-8">
              <Link href="/menu" 
                className="px-6 py-3 bg-neutral-200 text-neutral-800 rounded-lg 
                hover:bg-neutral-300 transition-colors duration-300"
              >
                Back to Menu
              </Link>
              <button 
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg 
                hover:bg-red-700 transition-colors duration-300"
              >
                Place Order
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default CheckoutPage