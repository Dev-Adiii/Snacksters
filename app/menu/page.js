'use client'
import { useState } from 'react'

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const menuItems = [
    {
      id: 1,
      name: "Classic Burger",
      category: "burgers",
      price: 12.99,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/burger.jpg"
    },
    {
      id: 2,
      name: "Classic Pizza",
      category: "pizzas",
      price: 12.99,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/menu1.jpg"
    },
    {
      id: 3,
      name: "Classic Momos",
      category: "momos",
      price: 12.99,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/momos.jpg"
    },
    {
      id: 4,
      name: "Classic Desserts",
      category: "dessert",
      price: 12.99,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/dessert.jpg"
    },
    {
      id: 5,
      name: "Classic Drinks",
      category: "drinks",
      price: 12.99,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/drinks.jpg"
    },
    {
      id: 6,
      name: "Classic Chowmein",
      category: "chowmein",
      price: 12.99,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/chowmein.jpg"
    },

    // Add more menu items as needed
  ]

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'dessert', name: 'Dessert' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'momos', name: 'Momos' },
    { id: 'chowmein', name: 'Chowmein' },


  ]

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <div className="relative bg-red-600 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-600 opacity-90"></div>
          <img
            src="/menu1.jpg"
            alt="Menu background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-md">
            Our Menu
          </h1>
          <p className="text-white text-center mt-6 text-xl max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with love and premium ingredients
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-10 mb-12 mt-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300
                  ${activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-md transform scale-105'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-yellow-400 hover:text-white'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-red-600 font-bold px-4 py-2 rounded-full">
                  ${item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                  {item.name}
                </h3>
                <p className="text-neutral-600 mb-6">{item.description}</p>
                <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium
                  hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuPage
