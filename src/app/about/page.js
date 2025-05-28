import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
  

      {/* Main Content */}
      <main className="flex-grow">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="w-full h-[max(25vw,256px)] ">
              <img
                src="https://images.pexels.com/photos/3965549/pexels-photo-3965549.jpeg"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Welcome to <span className="font-semibold">Clothify</span>, where fashion meets passion. Since our inception, we've been committed to bringing you the latest trends with unparalleled quality.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with a simple idea: to make stylish clothing accessible to everyone. Today, we pride ourselves on our diverse collection that caters to all fashion enthusiasts.
              </p>
              <p className="text-gray-600">
                Join us as we continue to redefine fashion, one outfit at a time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default page;
