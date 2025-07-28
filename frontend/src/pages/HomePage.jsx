// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'; // Import icons for navigation

// Import your hero images
import Hero1 from '../images/Hero1.png';
import Hero2 from '../images/Hero2.png';
import Hero3 from '../images/Hero3.png';
import Hero4 from '../images/Hero4.png';
import Hero5 from '../images/Hero5.png';
import Hero6 from '../images/Hero6.png';
import sofa from '../images/sofa.jpeg';
import armchair from '../images/Panama-Armchair.jpg';
import livingRoom from '../images/Livingroom.png';
import bed from '../images/Modern Bedroom design.jpeg';
import dinign from '../images/Dining.jpeg';
import center from '../images/center.jpeg';
import wardrobe from '../images/wardrobe.jpeg';
import tv from '../images/TV unit.jpeg';
import carpet from '../images/carpets.jpeg';
import contempoeary from '../images/contemporary.jpeg';
import antique from '../images/antique.jpeg';
import bespoke from '../images/bespoke.jpeg';
import minimalist from '../images/minimalist.jpeg';
// import kitchen from '../images/kitchen.jpeg';
import home from '../images/home.jpeg';
import office from '../images/office.jpg';
import carbinets from '../images/carbinets.jpeg';
import interior from '../images/interior.jpg';
import toast from 'react-hot-toast';
import { axiosInstance } from '../lib/axios';
import { useProductsStore } from '../store/useProductsStore';
import { useCollectionStore } from '../store/useCollectionStore';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.jpg';
import project7 from '../images/project7.jpg';
import project8 from '../images/project8.jpg';
import project9 from '../images/project9.png';
import project10 from '../images/project10.jpg';
import project11 from '../images/project11.png';
import project12 from '../images/project12.jpg';
import project13 from '../images/project13.png';
import project14 from '../images/project14.jpg';
import project15 from '../images/project15.png';
import project16 from '../images/project16.jpg';
import project17 from '../images/project17.png';
import project18 from '../images/project18.jpg';
import project19 from '../images/project19.png';
import project20 from '../images/project20.jpg';
import project21 from '../images/project21.png';
import project22 from '../images/project22.jpg';
import project23 from '../images/project23.png';
import project24 from '../images/project24.jpg';
import project25 from '../images/project25.png';
import project26 from '../images/project26.jpg';
import project27 from '../images/project27.png';
import project28 from '../images/project28.jpg';
import project29 from '../images/project29.png';
import project30 from '../images/project30.jpg';
import project31 from '../images/project31.png';
import project32 from '../images/project32.jpg';
import project33 from '../images/project33.png';
import project34 from '../images/project34.png';

const HomePage = () => {
  // Array of hero images
  const heroImages = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6];
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index
  const slideIntervalTime = 5000; // Time in milliseconds for automatic slide transition (5 seconds)

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === heroImages.length - 1 ? 0 : prevSlide + 1
    );
  };
  // useEffect for automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, slideIntervalTime);

    // Clear the interval when the component unmounts or dependencies change
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]); // Re-run effect when currentSlide changes to reset timer

  const designs = [
    { id: '1', name: 'Modern', link: 'modern', image: sofa },
    {
      id: '2',
      name: 'Contemporary',
      link: 'contemporary',
      image: contempoeary,
    },
    { id: '3', name: 'Antique/Royal', link: 'antique%2Froyal', image: antique },
    { id: '4', name: 'Bespoke', link: 'bespoke', image: bespoke },
    { id: '5', name: 'Minimalist', link: 'minimalist', image: minimalist },
    { id: '6', name: 'Glam', link: 'glam', image: livingRoom }, // Using Hero1 as a placeholder for now
  ];

  //   const [uniqueCategories, setUniqueCategories] = useState([]);

  const { products, getProducts, isGettingProducts } = useProductsStore();
  const { collections, getCollections, isGettingCollections } =
    useCollectionStore();

  const promotionProducts = products.filter((products) => products.isPromo);

  const BestSeller = products.filter((products) => products.isBestSeller);

  //   console.log(promotionProducts);
  useEffect(() => {
    getProducts(1, 10, {}, false);
    getCollections(1, 10, {}, false);
  }, [getProducts, getCollections]);

  const categories = [
    { id: '1', name: 'Sofas', link: 'Living%20Room', image: sofa },
    { id: '2', name: 'Armchairs', link: 'Armchair', image: armchair },
    { id: '3', name: 'Living Rooms', link: 'Living%20Room', image: livingRoom },
    { id: '4', name: 'Bedrooms', link: 'Bedroom', image: bed },
    { id: '5', name: 'Dining Rooms', link: 'Dining%20Room', image: dinign },
    { id: '6', name: 'Center Tables', link: 'Center%20Table', image: center }, // Using Hero1 as a placeholder for now
    { id: '7', name: 'Wardrobe', link: 'Wardrobe', image: wardrobe },
    { id: '8', name: 'TV Unit', link: 'TV%20unit', image: tv },
    { id: '9', name: 'Carpets', link: 'Carpet', image: carpet }, // Using Hero2 as a placeholder for now
  ];

  const projects = [
  { id: 1, name: 'Project 1', image: project1 },
  { id: 2, name: 'Project 2', image: project2 },
  { id: 3, name: 'Project 3', image: project3 },
  { id: 4, name: 'Project 4', image: project4 },
  { id: 5, name: 'Project 5', image: project5 },
  { id: 6, name: 'Project 6', image: project6 },
  { id: 7, name: 'Project 7', image: project7 },
  { id: 8, name: 'Project 8', image: project8 },
  { id: 9, name: 'Project 9', image: project9 },
  { id: 10, name: 'Project 10', image: project10 },
  { id: 11, name: 'Project 11', image: project11 },
  { id: 12, name: 'Project 12', image: project12 },
  { id: 13, name: 'Project 13', image: project13 },
  { id: 14, name: 'Project 14', image: project14 },
  { id: 15, name: 'Project 15', image: project15 },
  { id: 16, name: 'Project 16', image: project16 },
  { id: 17, name: 'Project 17', image: project17 },
  { id: 18, name: 'Project 18', image: project18 },
  { id: 19, name: 'Project 19', image: project19 },
  { id: 20, name: 'Project 20', image: project20 },
  { id: 21, name: 'Project 21', image: project21 },
  { id: 22, name: 'Project 22', image: project22 },
  { id: 23, name: 'Project 23', image: project23 },
  { id: 24, name: 'Project 24', image: project24 },
  { id: 25, name: 'Project 25', image: project25 },
  { id: 26, name: 'Project 26', image: project26 },
  { id: 27, name: 'Project 27', image: project27 },
  { id: 28, name: 'Project 28', image: project28 },
  { id: 29, name: 'Project 29', image: project29 },
  { id: 30, name: 'Project 30', image: project30 },
  { id: 31, name: 'Project 31', image: project31 },
  { id: 32, name: 'Project 32', image: project32 },
  { id: 33, name: 'Project 33', image: project33 },
  { id: 34, name: 'Project 34', image: project34 },
];


  // const projectImages = [
  //   project1,
  //   project2,
  //   project3,
  //   project4,
  //   project5,
  //   project6,
  //   project7,
  //   project8,
  //   project9,
  //   project10,
  //   project11,
  //   project12,
  //   project13,
  //   project14,
  //   project15,
  //   project16,
  //   project17,
  //   project18,
  //   project19,
  //   project20,
  //   project21,
  //   project22,
  //   project23,
  //   project24,
  //   project25,
  //   project26,
  //   project27,
  //   project28,
  //   project29,
  //   project30,
  //   project31,
  //   project32,
  //   project33,
  //   project34,
  // ];

  const navigate = useNavigate();

  // const handleExploreLivingRoomsClick = () => {
  //   // Navigate to the shop page and pass 'Living Room' as a category query parameter
  //   navigate('/shop?category=Living%20Room');
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 10);
  // };

  const handleShopNow = () => {
    navigate('/shop');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  // const handleExploreDiningRoomsClick = () => {
  //   navigate('/shop?category=Dining%20Room');
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 10);
  // };

  // const handleExploreBedRoomsClick = () => {
  //   navigate('/shop?category=Bedroom');
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 10);
  // };

  // const handleExploreCornerSofasClick = () => {
  //   navigate('/shop?category=Corner%20Sofas');
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 10);
  // };

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${category}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handleProductClick = (Id) => {
    navigate(`/product/${Id}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handleStyleClick = (style) => {
    navigate(`/styles/${style}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handleCollectionClick = (Id) => {
    navigate(`/collection/${Id}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handleContatClick = () => {
    navigate(`/contact`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const { authUser } = useAuthStore();
  // console.log(authUser);
  const [formData, setFormData] = useState({
    name: authUser?.username || '',
    email: authUser?.email || '',
    phoneNumber: authUser?.phoneNumber || '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false); // Loading state for form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await axiosInstance.post('/contact', formData);
      toast.success(res.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error sending contact message:', error);
      toast.error(
        error.response?.data?.message ||
          'Failed to send message. Please try again.'
      );
    } finally {
      setIsSending(false);
    }
  };

  // console.log(promotionProducts);

  if (isGettingProducts || isGettingCollections) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="ml-2 text-lg">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="justify-center pb-30 items-start min-h-screen bg-base-100">
      <section className="lg:h-150 relative w-full overflow-hidden z-0">
        {/* This container will now dynamically take its height based on the images. */}
        {/* The 'invisible' image acts as a height placeholder for the 'relative' parent. */}
        <div className="w-full">
          {/* Invisible placeholder image to define the container's height based on its aspect ratio */}
          {/* This ensures the parent div has a height even when children are absolute */}
          <img
            src={heroImages[0]}
            alt=""
            className="w-full  h-100 max-h-screen object-cover invisible"
            aria-hidden="true"
          />

          {/* All images are absolutely positioned to allow for smooth opacity transitions */}
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero Slide ${index + 1}`}
              className={`absolute lg:pt-16 top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                            ${
                              index === currentSlide
                                ? 'opacity-100'
                                : 'opacity-0'
                            }`}
            />
          ))}

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 items-end">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-7 h-0.5 transition-colors duration-300
                                ${
                                  index === currentSlide
                                    ? 'bg-primary h-1'
                                    : 'bg-gray-300 hover:bg-gray-200'
                                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="absolute flex flex-col items-start justify-end pb-22 bottom-0 left-1/2 bg-black/30 h-full -translate-x-1/2 font-black text-3xl sm:text-4xl md:text-6xl w-full px-6 sm:px-10 lg:px-15 text-base-100 text-shadow-lg ">
            <div>Finish. Furnish. Flourish.</div>
            {/* <div>Elevating Lives.</div> */}
          </div>
          <div className="absolute flex space-x-2 bottom-8 left-1/2 -translate-x-1/2 font-black text-3xl sm:text-4xl md:text-6xl w-full px-6 sm:px-10 lg:px-15 text-base-100 text-shadow-lg">
            <button
              onClick={() => handleShopNow()}
              className="btn sm:w-50 bg-primary text-white border-0 shadow-none rounded-full"
            >
              Shop Now!
            </button>
            <button
              onClick={() => handleContatClick()}
              className="btn sm:w-50 bg-accent text-white border-0 shadow-none rounded-full"
            >
              {' '}
              Contact Us
            </button>
          </div>
        </div>
      </section>
      {/* <section className="h-25 bg-primary flex items-center justify-center space-x-7 sm:space-x-25 md:space-x-35 lg:space-x-45">
        <div className="text-white space-y-1 text-xxs sm:text-sm font-[montserrat] items-center flex flex-col">
          <img src={shipping} alt="" className="size-12" />
          <h1>World Wide Shipping</h1>
        </div>

        <div className="text-white space-y-1 text-xxs font-[montserrat] items-center flex flex-col">
          <img src={quality} alt="" className="size-12" />
          <h1>Quality Assurance</h1>
        </div>

        <div className="text-white space-y-1 text-xxs font-[montserrat] items-center flex flex-col">
          <img src={installation} alt="" className="size-12" />
          <h1>Free Installation</h1>
        </div>
      </section> */}
      <section className="my-10 pl-4 sm:pl-8 lg:pl-16">
        <h2 className="text-2xl font-bold mb-4 font-[poppins]">
          Featured Projects
        </h2>
        <div
          className="flex space-x-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((category) => (
            <div key={category.id}>
              <button className="relative flex-shrink-0 w-70 h-100 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </button>
              <div className="p-1">
                {/* <h3 className="text-accent text-sm font-[poppins]">
                  {category.name}
                </h3> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-10 pl-4 sm:pl-8 lg:pl-16">
        <h2 className="text-2xl font-bold mb-4 font-[poppins]">
          Featured Products
        </h2>
        <div
          className="flex space-x-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className="relative flex-shrink-0 w-60 h-60 rounded-2xl overflow-hidden shadow-md group"
              onClick={() => handleCategoryClick(category.link)}
            >
              {/* Image with object-cover to maintain aspect ratio and fill container */}
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay for text and subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end p-4">
                <div className="">
                  <h3 className="text-white text-xl font-semibold font-[poppins]">
                    {category.name}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {promotionProducts.length !== 0 ? (
        <section className="pl-4 sm:pl-8 lg:pl-16">
          <h2 className="text-2xl font-bold mb-4 font-[poppins]">Promotions</h2>
          <div
            className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {promotionProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-75 md:w-90 lg:w-100 rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <button
                    className="w-full h-full"
                    onClick={() => handleProductClick(product._id)}
                  >
                    <img
                      src={product?.images[0].url}
                      alt={product.name}
                      className="w-full h-50 md:h-60 lg:h-70 rounded-lg object-cover rounded-t-lg"
                    />
                  </button>
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white font-bold text-sm px-3 py-1.5 rounded-full shadow-md">
                    {product.price && product.discountedPrice
                      ? `${Math.round(
                          ((product.price - product.discountedPrice) /
                            product.price) *
                            100
                        )}% OFF`
                      : ''}
                  </div>
                </div>
                <div className="mt-1">
                  <h3 className="text-lg font-medium truncate font-[poppins]">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-red-600 font-bold text-lg">
                      ₦{product.discountedPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-500 line-through text-sm">
                      ₦{product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full h-full py-20 lg:py-30">
              <button
                onClick={() => handleShopNow()}
                className="btn bg-primary text-white rounded-full mx-4 w-30 font-semibold"
              >
                Shop Now
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {BestSeller.length !== 0 ? (
        <section className="pl-4 sm:pl-8 lg:pl-16">
          <h2 className="text-2xl font-bold mb-4 font-[poppins]">
            Best Sellers
          </h2>
          <div
            className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {BestSeller.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-75 md:w-90 lg:w-100 rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <button
                    className="w-full h-full"
                    onClick={() => handleProductClick(product._id)}
                  >
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      className="w-full h-50 md:h-60 lg:h-70 rounded-lg object-cover rounded-t-lg"
                    />
                  </button>
                </div>
                <div className="mt-1">
                  <h3 className="text-lg font-medium truncate font-[poppins]">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className=" text-gray-500">
                      ₦{product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full h-full py-20 lg:py-30">
              <button
                onClick={() => handleShopNow()}
                className="btn bg-primary text-white rounded-full mx-4 w-30 font-semibold"
              >
                Shop Now
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {collections.length !== 0 ? (
        <section className="pl-4 sm:pl-8 lg:pl-16">
          <h2 className="text-2xl font-bold mb-4 font-[poppins]">
            Collections
          </h2>
          <div
            className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {collections.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-75 md:w-90 lg:w-100 rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <button
                    className="w-full h-full"
                    onClick={() => handleCollectionClick(product._id)}
                  >
                    <img
                      src={product.coverImage.url}
                      alt={product.name}
                      className="w-full h-50 md:h-60 lg:h-70 rounded-lg object-cover rounded-t-lg"
                    />
                  </button>
                </div>
                <div className="mt-1">
                  <h3 className="text-lg font-medium truncate font-[poppins]">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className=" text-gray-500">
                      ₦{product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full h-full py-20 lg:py-30">
              <button
                onClick={() => handleShopNow()}
                className="btn bg-primary text-white rounded-full mx-4 w-30 font-semibold"
              >
                Shop Now
              </button>
            </div>
          </div>
        </section>
      ) : null}

      <section className="my-10 pl-4 sm:pl-8 lg:pl-16">
        <h2 className="text-2xl font-bold mb-4 font-[poppins]">
          Featured Styles
        </h2>
        <div
          className="flex space-x-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {designs.map((category) => (
            <button
              key={category.id}
              className="relative flex-shrink-0 w-60 h-60 rounded-2xl overflow-hidden shadow-md group"
              onClick={() => handleStyleClick(category.link)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay for text and subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end p-4">
                <div className="">
                  <h3 className="text-white text-xl font-semibold font-[poppins]">
                    {category.name}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      <section className="my-10 px-4 sm:px-8 lg:px-16">
        <div className="w-full flex justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[poppins]">
            Our Services
          </h2>
        </div>

        <div className="md:flex md:items-center md:space-x-8 lg:space-x-16">
          {' '}
          {/* Increased space-x for larger screens */}
          <div className="md:flex-1 h-70 lg:h-100 mb-6 md:mb-0">
            {' '}
            {/* Added bottom margin for mobile, removed for desktop */}
            <img
              src={home} // Use the imported image
              alt="Luxurious Living Room"
              className="w-full h-full rounded-lg object-cover" // Added rounded corners and shadow
            />
          </div>
          <div className="md:flex-1 md:items-startmd:text-left">
            {' '}
            {/* Text alignment responsive */}
            <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold font-[poppins] mb-4">
              {' '}
              {/* Responsive font sizes */}
              <span className="text-accent">Home</span> Finishing
            </div>
            <div className="font-[montserrat] text-base lg:text-lg mb-6">
              {' '}
              {/* Responsive font size and bottom margin */}
              Home finishing is the final touch that transforms a building into
              a personal sanctuary. From smooth walls and elegant floors to
              perfectly placed lighting and refined details, it’s the stage
              where structure meets style — setting the tone for comfort,
              beauty, and lasting impressions in every room.
            </div>
            {/* <button
              className="btn border-0 shadow-none text-lg btn-primary text-white w-full rounded-full px-8 py-3"
              onClick={handleExploreLivingRoomsClick} // NEW: Add onClick handler
            >
              Explore Living Rooms
              
            </button> */}
          </div>
        </div>
      </section>
      <section className="my-10 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16">
          {/* 🟨 TEXT SECTION (comes second on mobile, first on desktop) */}
          <div className="md:flex-1">
            <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold font-[poppins] mb-4">
              <span className="text-accent">Interior</span> Design
            </div>
            <div className="font-[montserrat] text-base mb-6">
              Interior design is where function meets beauty — shaping the mood,
              flow, and personality of a space. Through color, texture,
              lighting, and thoughtful arrangement, it turns empty rooms into
              expressive, comfortable, and inspiring environments that reflect
              your unique taste and lifestyle.
            </div>
            {/* <button
              className="btn border-0 shadow-none text-lg btn-primary text-white w-full rounded-full px-8 py-3"
              onClick={handleExploreDiningRoomsClick}
            >
              Explore Dining Rooms
            </button> */}
          </div>

          {/* 🟩 IMAGE SECTION (comes first on mobile, second on desktop) */}
          <div className="md:flex-1 h-70 lg:h-100 mb-6 md:mb-0">
            <img
              src={interior}
              alt="Luxurious Living Room"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      <section className="my-10 px-4 sm:px-8 lg:px-16">
        <div className="md:flex md:items-center md:space-x-8 lg:space-x-16">
          {' '}
          {/* Increased space-x for larger screens */}
          <div className="md:flex-1 h-70 lg:h-100 mb-6 md:mb-0">
            {' '}
            {/* Added bottom margin for mobile, removed for desktop */}
            <img
              src={office} // Use the imported image
              alt="Luxurious Living Room"
              className="w-full h-full rounded-lg object-cover" // Added rounded corners and shadow
            />
          </div>
          <div className="md:flex-1 md:items-startmd:text-left">
            {' '}
            {/* Text alignment responsive */}
            <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold font-[poppins] mb-4">
              {' '}
              {/* Responsive font sizes */}
              <span className="text-accent">Office</span> Furnishing
            </div>
            <div className="font-[montserrat] text-base lg:text-lg mb-6">
              {' '}
              {/* Responsive font size and bottom margin */}
              Office furnishing goes beyond filling a space — it sets the
              foundation for productivity, comfort, and brand identity. With the
              right blend of functionality and style, it creates environments
              where ideas thrive, teams collaborate, and professionalism is felt
              at every corner.
            </div>
            {/* <button
              className="btn border-0 shadow-none text-lg btn-primary text-white w-full rounded-full px-8 py-3"
              onClick={handleExploreBedRoomsClick}
            >
             
              Explore Bed Rooms
            </button> */}
          </div>
        </div>
      </section>
      <section className="my-10 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16">
          {/* 🟨 TEXT SECTION (comes second on mobile, first on desktop) */}
          <div className="md:flex-1">
            <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold font-[poppins] mb-4">
              <span className="text-accent">Kitchen</span> Carbinets
            </div>
            <div className="font-[montserrat] text-base mb-6">
              Kitchen cabinets are the heart of an organized and stylish kitchen
              — blending storage, function, and design. From sleek modern
              finishes to classic woodwork, they define the look and feel of the
              space while keeping everything within easy reach for daily living
              and culinary creativity.
            </div>
            {/* <button
              className="btn border-0 shadow-none text-lg btn-primary text-white w-full rounded-full px-8 py-3"
              onClick={handleExploreCornerSofasClick}
            >
              Explore Corner Sofas
            </button> */}
          </div>

          {/* 🟩 IMAGE SECTION (comes first on mobile, second on desktop) */}
          <div className="md:flex-1 h-70 lg:h-100 mb-6 md:mb-0">
            <img
              src={carbinets}
              alt="Luxurious Living Room"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      {/* <section className="items-center justify-center flex px-4 sm:px-8 lg:px-16">
        <div className="max-w-5xl text-center">
          <h1 className="font-bold text-xl sm:text-5xl font-[poppins]">
            The Epitome of Luxury & Craftsmanship
          </h1>
          <p className="font-[montserrat] pt-2">
            At EM Group Limited, we redefine elegance by blending exceptional
            craftsmanship, timeless design, and the finest materials to create
            luxury furniture and interior solutions that transform spaces into
            breathtaking havens. With a deep-rooted passion for aesthetics and
            functionality, we specialize in bespoke, handcrafted furniture,
            ensuring that every piece reflects sophistication, durability, and
            comfort. Each creation is meticulously crafted by master artisans,
            using only premium wood, rich fabrics, and exquisite finishes,
            making every piece a statement of prestige.
          </p>
        </div>
      </section> */}
      <div className="items-center justify-center flex flex-col px-8 mt-10 sm:px-8 lg:px-16 w-full">
        <div className="w-full flex justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[poppins]">
            Contact Us
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-5xl">
          <div>
            <label htmlFor="name" className="label">
              <span className="label-text text-base-content">Your Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name Surname"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="label">
              <span className="label-text text-base-content">Your Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-full"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="label">
              <span className="label-text text-base-content">
                Your Phone Number
              </span>
            </label>
            <input
              type="tel"
              className="input input-bordered w-full rounded-full"
              required
              placeholder="Phone"
              name="phoneNumber"
              pattern="[0-9]*"
              minlength="10"
              maxlength="14"
              title="Must be at least 10 digits"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject" className="label">
              <span className="label-text text-base-content">Subject</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g Inquiry about products"
              className="input input-bordered w-full rounded-full"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="label">
              <span className="label-text text-base-content">Your Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="textarea textarea-bordered h-32 w-full rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn bg-primary text-white w-full rounded-full"
            disabled={isSending}
          >
            {isSending ? (
              <Loader2 className="animate-spin mr-2" />
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
