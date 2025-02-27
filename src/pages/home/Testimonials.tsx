import avater1 from "../../assets/1m.png";
import avater2 from "../../assets/3m.jpeg";
import avater3 from "../../assets/5m.png";
const testimonials = [
  {
    name: "Khalid Al Dawsy",
    review:
      "Amazing bike! The quality and performance exceeded my expectations.",
    image: avater1,
    rating: 5,
  },
  {
    name: "Sara Ahmed",
    review:
      "The ride is smooth, and the bike looks fantastic. Highly recommend!",
    image: avater2,
    rating: 4.5,
  },
  {
    name: "John Doe",
    review:
      "Superb experience! The service was great, and the bike is top-notch.",
    image: avater3,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 mb-8">
          Hear from our satisfied customers! Their feedback helps us deliver
          exceptional quality.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-100 shadow-md rounded-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 mx-auto rounded-full mb-4"
              />
              <p className="text-lg italic">"{testimonial.review}"</p>
              <p className="font-semibold mt-3">{testimonial.name}</p>
              <p className="text-yellow-500">⭐ {testimonial.rating}/5</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
