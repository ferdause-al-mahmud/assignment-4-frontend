const blogs = [
  {
    title: "Top 5 Bikes for 2024",
    description:
      "Explore the latest and most innovative bikes hitting the market in 2024.",
    image:
      "https://media.zigcdn.com/media/content/2024/Dec/cover_67664ec770e35.jpg",
  },
  {
    title: "How to Maintain Your Bike",
    description:
      "Essential tips and tricks to keep your bike running smoothly.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwOWuBYD56CwyyBWDcyFzkr3qYBHdznJyRg&s",
  },
  {
    title: "Best Electric Bikes of the Year",
    description:
      "A deep dive into the best electric bikes available this year.",
    image:
      "https://robbreport.com/wp-content/uploads/2020/01/ke709849.jpg?w=1000",
  },
  {
    title: "Mountain vs Road Bikes: Which One to Choose?",
    description:
      "Comparing the pros and cons of different bike types to help you choose.",
    image:
      "https://blog.karlrock.com/wp-content/uploads/2024/03/img_1090-1-1200x675.jpg",
  },
  {
    title: "Bike Safety Features You Must Have",
    description:
      "Learn about the latest safety technologies that can protect you.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4FX1yLYYXduiXAdDwJoYiLWN4K0xOarAtw&s",
  },
  {
    title: "Top Budget-Friendly Bikes in 2024",
    description:
      "A list of the best affordable bikes that offer great value for money.",
    image: "https://i.ytimg.com/vi/DyjlrNWoI4o/maxresdefault.jpg",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Latest blogs</h2>
        <p className="text-gray-600 mb-8">
          Stay updated with expert blogs on the latest bike releases,
          maintenance tips, and trends.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-4 flex flex-col flex-grow gap-2">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-500 text-sm flex-grow">
                  {blog.description}
                </p>
                <div className="mt-auto">
                  <button className="text-blue-600 font-semibold hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
