import { ShoppingBag, Zap, Smartphone, CheckCircle, Star, ArrowRight, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-16 sm:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 lg:mt-24 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left lg:mx-0">
                  <div className="mb-6">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      #1 E-commerce Platform
                    </span>
                  </div>
                  <h1 className="text-5xl tracking-tight font-bold text-gray-900 sm:text-6xl lg:text-7xl">
                    <span className="block">Shop the</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Future Today
                    </span>
                  </h1>
                  <p className="mt-6 text-xl text-gray-600 sm:mt-8 sm:text-2xl sm:max-w-xl sm:mx-auto lg:mx-0 leading-relaxed">
                    Experience next-generation e-commerce with lightning-fast performance, 
                    stunning design, and seamless user experience.
                  </p>
                  <div className="mt-10 sm:mt-12 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                      href="/products"
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Explore Products
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                    <a
                      href="/add-product"
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-lg font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                    >
                      Sell Products
                    </a>
                  </div>
                </div>
                <div className="mt-16 sm:mt-20 lg:mt-0 lg:col-span-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-6">
                          <ShoppingBag className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Experience</h3>
                        <p className="text-gray-600 mb-6">Join thousands of satisfied customers</p>
                        <div className="flex justify-center space-x-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">4.9/5 from 2,847 reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">50K+</div>
              <div className="mt-2 text-lg text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100K+</div>
              <div className="mt-2 text-lg text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">99.9%</div>
              <div className="mt-2 text-lg text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="mt-2 text-lg text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-4">
              Platform Features
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Built for Modern Commerce
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with intuitive design 
              to deliver an exceptional shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="group">
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h4>
                <p className="text-gray-600 text-lg leading-7">
                  Built with Next.js and optimized for speed. Experience sub-second 
                  page loads and seamless navigation.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Mobile First</h4>
                <p className="text-gray-600 text-lg leading-7">
                  Fully responsive design that adapts perfectly to any device. 
                  Shop seamlessly on mobile, tablet, or desktop.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Easy Management</h4>
                <p className="text-gray-600 text-lg leading-7">
                  Intuitive dashboard for managing products, orders, and customers. 
                  Full CRUD operations with real-time updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join our community of successful sellers and start building your online business today.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-xl text-blue-600 bg-white hover:bg-gray-50 transition-all duration-200"
              >
                Start Shopping
              </a>
              <a
                href="/add-product"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-xl text-white hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Start Selling
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <ShoppingBag className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">ModernShop</span>
            </div>
            <p className="text-gray-400">
              © 2025 ModernShop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}