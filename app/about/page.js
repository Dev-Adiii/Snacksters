import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/restaurant-hero1.jpg" // Add your hero image
          alt="Restaurant atmosphere"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Serving happiness since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe in delivering not just food, but memorable dining experiences. 
            Our commitment to quality ingredients, exceptional service, and culinary 
            innovation sets us apart in the world of food delivery.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl text-black   font-bold mb-4">Quality Food</h3>
              <p className="text-gray-600">
                Carefully selected ingredients and partnered restaurants
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-black  mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Lightning-fast delivery to your doorstep
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold text-black mb-4">Best Service</h3>
              <p className="text-gray-600">
                Customer satisfaction is our top priority
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member Cards */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/team-member1.jpg" // Add team member image
                alt="Team Member"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Aditya</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/team-member2.jpg" // Add team member image
                alt="Team Member"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Ashutosh</h3>
            <p className="text-gray-600">Head Chef</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/team-member3.jpg" // Add team member image
                alt="Team Member"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Priyanshu</h3>
            <p className="text-gray-600">Operations Manager</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About