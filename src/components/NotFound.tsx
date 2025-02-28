const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
        alt="404 Not Found"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl"
      />
      <h1 className="text-4xl font-bold text-[#ff5733] mt-6">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mt-2 text-center">
        The page you’re looking for doesn’t exist. It might have been moved or
        deleted.
      </p>
      <a
        href="/"
        className="mt-6 bg-[#ff5733] text-white px-6 py-3 font-semibold rounded-lg hover:bg-[#e64d2e] transition duration-300"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
