'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const MenuPage = () => {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('all')
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Classic Burger",
      category: "burgers",
      price: 60,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/burger.jpg",
      quantity: 0
    },
    {
      id: 2,
      name: "Classic Pizza",
      category: "pizzas",
      price: 149,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/menu1.jpg",
      quantity: 0
    },
    {
      id: 3,
      name: "Classic Momos",
      category: "momos",
      price: 60,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/momos.jpg",
      quantity: 0
    },
    {
      id: 4,
      name: "Classic Desserts",
      category: "dessert",
      price: 80,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/dessert.jpg",
      quantity: 0
    },
    {
      id: 5,
      name: "Classic Drinks",
      category: "drinks",
      price: 60,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/drinks.jpg",
      quantity: 0
    },
    {
      id: 6,
      name: "Classic Chowmein",
      category: "chowmein",
      price: 70,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image: "/chowmein.jpg",
      quantity: 0
    },

    // Add more menu items as needed
  ])

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
    ? items 
    : items.filter(item => item.category === activeCategory)

  const handleCheckout = () => {
    const selectedItems = items.filter(item => item.quantity > 0)
    if (selectedItems.length === 0) return
    
    const encodedItems = encodeURIComponent(JSON.stringify(selectedItems))
    router.push(`/checkout?items=${encodedItems}`)
  }

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
                ₹{item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                  {item.name}
                </h3>
                <p className="text-neutral-600 mb-6">{item.description}</p>
                <div className="flex items-center justify-between w-full">
                  <button 
                    onClick={() => item.quantity > 0 && setItems(prev => 
                      prev.map(i => i.id === item.id ? {...i, quantity: i.quantity - 1} : i)
                    )}
                    className="bg-red-600 text-white h-10 w-10 rounded-lg font-bold text-xl
                    hover:bg-yellow-400 transition-colors duration-300 
                    focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    disabled={item.quantity <= 0}
                  >
                    -
                    
                  </button>
                  {/* quantity of the item  */}
                  <span className="text-xl font-medium text-neutral-800">{item.quantity}</span>    
                  <button
                    onClick={() => setItems(prev => 
                      prev.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i)
                    )}
                    className="bg-red-600 text-white h-10 w-10 rounded-lg font-bold text-xl
                    hover:bg-yellow-400 transition-colors duration-300
                    focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>   {/*end of the items*/}
      </div>

      {/* Floating Checkout Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={handleCheckout}
          className="px-6 py-2 bg-black/70 backdrop-blur-sm text-white text-sm md:text-base 
          font-medium rounded-full hover:bg-black/80 transition-all duration-300 
          shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 
          focus:ring-red-500 focus:ring-opacity-50 flex items-center gap-2"
          disabled={items.reduce((sum, item) => sum + item.quantity, 0) === 0}
        >
          <span>Checkout</span>
          {items.reduce((sum, item) => sum + item.quantity, 0) > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

export default MenuPage
