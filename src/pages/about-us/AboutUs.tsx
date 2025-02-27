import aboutUs from "../../assets/aboutUs.jpg";
import wcu1 from "../../assets/1.jpg";
const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#ff5733] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Your trusted destination for premium motorcycles, top-notch service,
            and an unrivaled riding experience.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
        <p className="text-gray-600 mt-4">
          Founded with a deep passion for motorcycles, our shop has been
          delivering high-performance bikes and accessories for years. We
          believe that every rider deserves a machine that matches their
          adrenaline, speed, and adventure. Whether you're a seasoned biker or a
          beginner, we're here to provide the best motorcycles for your needs.
        </p>
        <img
          src={aboutUs}
          alt="Motorcycle ride"
          className="mt-6 max-h-96 mx-auto rounded-lg shadow-lg"
        />
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#ff5733]">
                🏍️ Passion for Motorcycles
              </h3>
              <p className="text-gray-600 mt-2">
                We live and breathe motorcycles—riding is not just a hobby, it’s
                a way of life.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#ff5733]">
                ⚡ High Performance
              </h3>
              <p className="text-gray-600 mt-2">
                Every bike we sell is tested for speed, endurance, and power to
                ensure a thrilling ride.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#ff5733]">
                🌍 Community & Sustainability
              </h3>
              <p className="text-gray-600 mt-2">
                We support responsible riding and eco-friendly bike innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-600 mt-4">
          We offer more than just motorcycles—we provide an experience that
          guarantees quality, performance, and customer satisfaction.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <img
              src={wcu1}
              alt="Wide Range of Bikes"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-[#ff5733]">
              🔥 Wide Range of Motorcycles
            </h3>
            <p className="text-gray-600 mt-2">
              From high-speed sports bikes to comfortable cruisers, we have it
              all.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <img
              src="https://images.prismic.io/riders-sharecom/0fa1d8f8-fa97-4fed-b2f6-ea295d2bad19_1+-+feature.jpg?auto=compress,format"
              alt="Expert Support"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-[#ff5733]">
              🔧 Expert Maintenance & Support
            </h3>
            <p className="text-gray-600 mt-2">
              Our professional team offers top-notch servicing, repairs, and
              expert advice.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKZAV9n88V7CScI0iZU1zHO9Zt050qeQpKw&s"
              alt="Performance Guarantee"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-[#ff5733]">
              🏁 Performance Guarantee
            </h3>
            <p className="text-gray-600 mt-2">
              We test every bike to ensure maximum speed, durability, and
              efficiency.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDG8EshrIC7izepW-FsFEeR13w2wL4VKws12u9D2y3lpyGwy3vaZX46jZ7vnbFKMgqp0&usqp=CAU"
              alt="Best Prices"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-[#ff5733]">
              💰 Best Price & Warranty
            </h3>
            <p className="text-gray-600 mt-2">
              Competitive prices with unbeatable warranties—guaranteeing value
              for money.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#ff5733] text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Join the Ride Today!</h2>
        <p className="mt-4 text-lg">
          Explore our latest collection and take your motorcycle experience to
          the next level.
        </p>
        <button className="mt-6 bg-white text-[#ff5733] px-6 py-3 font-semibold rounded-lg hover:bg-gray-200">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
