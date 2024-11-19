import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/food-bg.jpg" // Add your food background image to public folder
          alt="Food Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Navbar */}
      <nav className="bg-black/30 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-yellow-400">
              Snacksters
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/menu" className="text-white hover:text-yellow-400 transition">Menu</Link>
              <Link href="/about" className="text-white hover:text-yellow-400 transition">About</Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 transition">Contact</Link>
            </div>
            <Link href={"/menu"} >
            <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
              Order Now
            </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Delicious Food
            <span className="text-yellow-400"> Delivered</span> To Your Door
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Experience the best food delivery service in town. Fresh, fast, and flavorful.
          </p>
          <div className="space-x-4">
            <Link href={"/menu"} >
             <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg hover:bg-red-700 transition">
              Order Now
            </button>
            </Link>
            <Link href={"/menu"} >
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg hover:bg-yellow-500 transition">
              View Menu
            </button>
            </Link>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Pizza', 'Burgers', 'Momos'].map((category) => (
            <div key={category} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition cursor-pointer">
              <h3 className="text-yellow-400 text-xl font-bold mb-2">{category}</h3>
              <p className="text-white">Explore our delicious {category.toLowerCase()} selection</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-yellow-400 text-3xl font-bold mb-4">Snacksters</h3>
              <p>Delivering happiness to your doorstep</p>
              <p>Delivery Timings : 10:00 AM - 5:00 PM</p>
            </div>
            <div>
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/menu" className="hover:text-yellow-400 transition">Menu</Link></li>
                <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Contact Us</h3>
              <p>Email: snacksters@gmail.com</p>
              <p>Phone: +91 7379215521</p>
              <p>Contact Developer : adityamishr957@gmail.com</p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p>&copy; 2024 Snacksters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
