// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'; // Import icons for navigation

// Import your hero images
// import Hero1 from '../images/Hero1.png';
// import Hero2 from '../images/Hero2.png';
// import Hero3 from '../images/Hero3.png';
// import Hero4 from '../images/Hero4.png';
// import Hero5 from '../images/Hero5.png';
// import Hero6 from '../images/Hero6.png';
// import sofa from '../images/sofa.jpeg';
// import armchair from '../images/Panama-Armchair.jpg';
// import livingRoom from '../images/Livingroom.png';
// import bed from '../images/Modern Bedroom design.jpeg';
// import dinign from '../images/Dining.jpeg';
// import center from '../images/center.jpeg';
// import wardrobe from '../images/wardrobe.jpeg';
// import tv from '../images/TV unit.jpeg';
// import carpet from '../images/carpets.jpeg';
// import contempoeary from '../images/contemporary.jpeg';
// import antique from '../images/antique.jpeg';
// import bespoke from '../images/bespoke.jpeg';
// import minimalist from '../images/minimalist.jpeg';
// import kitchen from '../images/kitchen.jpeg';
// import home from '../images/home.jpeg';
// import office from '../images/office.jpg';
// import carbinets from '../images/carbinets.jpeg';
// import interior from '../images/interior.jpg';
import toast from 'react-hot-toast';
import { axiosInstance } from '../lib/axios';
import { useProductsStore } from '../store/useProductsStore';
import { useCollectionStore } from '../store/useCollectionStore';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useProjectsStore } from '../store/useProjectsStore';
import ProjectCard from '../components/projectCard';

const HomePage = () => {
  // Array of hero images
  const heroImages = [
    'https://res.cloudinary.com/dqe64m85c/image/upload/v1753726979/Hero1_btyphr.jpg',
    'https://res.cloudinary.com/dqe64m85c/image/upload/v1753726810/Hero2_txhvzy.jpg',
    'https://res.cloudinary.com/dqe64m85c/image/upload/v1753726811/Hero3_sdnk2c.jpg',
    'https://res.cloudinary.com/dqe64m85c/image/upload/v1753726811/Hero4_pxtqll.jpg',
    'https://res.cloudinary.com/dqe64m85c/image/upload/v1753726804/Hero5_dphmig.jpg',
    'https://res.cloudinary.com/dqe64m85c/image/upload/v1753726982/Hero6_o9jnqk.jpg',
  ];
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
    {
      id: '1',
      name: 'Modern',
      link: 'modern',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784168/sofa_lww1bb.jpg',
    },
    {
      id: '2',
      name: 'Contemporary',
      link: 'contemporary',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784190/contemporary_vezfdh.jpg',
    },
    {
      id: '3',
      name: 'Antique/Royal',
      link: 'antique%2Froyal',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784182/antique_msdpct.jpg',
    },
    {
      id: '4',
      name: 'Bespoke',
      link: 'bespoke',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784183/bespoke_valowk.jpg',
    },
    {
      id: '5',
      name: 'Minimalist',
      link: 'minimalist',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784165/minimalist_rgwxgp.jpg',
    },
    {
      id: '6',
      name: 'Glam',
      link: 'glam',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784162/Livingroom_ssrkcv.png',
    }, // Using Hero1 as a placeholder for now
  ];

  //   const [uniqueCategories, setUniqueCategories] = useState([]);

  const { products, getProducts, isGettingProducts } = useProductsStore();
  const { collections, getCollections, isGettingCollections } =
    useCollectionStore();
  const {
    fetchProjects,
    loading: LoadingProjects,
    projects,
  } = useProjectsStore();

  const promotionProducts = products.filter((products) => products.isPromo);

  const BestSeller = products.filter((products) => products.isBestSeller);

  //   console.log(promotionProducts);
  useEffect(() => {
    if (products.length === 0) {
      getProducts(1, 10, {}, false);
    }
    if (collections.length === 0) {
      getCollections(1, 10, {}, false);
    }
    if (projects.length === 0) {
      fetchProjects(1, 10);
    }
  }, [
    getProducts,
    getCollections,
    fetchProjects,
    products.length,
    collections.length,
    projects.length,
  ]);

  console.log(projects);

  const categories = [
    {
      id: '1',
      name: 'Sofas',
      link: 'Living%20Room',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784168/sofa_lww1bb.jpg',
    },
    {
      id: '2',
      name: 'Armchairs',
      link: 'Armchair',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784171/Panama-Armchair_kizbg7.jpg',
    },
    {
      id: '3',
      name: 'Living Rooms',
      link: 'Living%20Room',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784162/Livingroom_ssrkcv.png',
    },
    {
      id: '4',
      name: 'Bedrooms',
      link: 'Bedroom',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784166/Modern_Bedroom_design_zyf9tl.jpg',
    },
    {
      id: '5',
      name: 'Dining Rooms',
      link: 'Dining%20Room',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784192/Dining_y2yemv.jpg',
    },
    {
      id: '6',
      name: 'Center Tables',
      link: 'Center%20Table',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784189/center_dsigr2.jpg',
    }, // Using Hero1 as a placeholder for now
    {
      id: '7',
      name: 'Wardrobe',
      link: 'Wardrobe',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784176/wardrobe_igtjff.jpg',
    },
    {
      id: '8',
      name: 'TV Unit',
      link: 'TV%20unit',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784172/TV_unit_yucufm.jpg',
    },
    {
      id: '9',
      name: 'Carpets',
      link: 'Carpet',
      image:
        'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784187/carpets_bt8xqb.jpg',
    }, // Using Hero2 as a placeholder for now
  ];

  // const projects = [
  //   {
  //     id: 1,
  //     name: 'Project 1',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725614/Screenshot_20250728-190635_2_kiu2b3.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'Project 2',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725613/Screenshot_20250728-190616_2_nsuxs0.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Project 3',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725613/Screenshot_20250728-190533_2_igxzjn.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Project 4',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725611/Screenshot_20250728-190500_2_mhm33e.png',
  //   },
  //   {
  //     id: 5,
  //     name: 'Project 5',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725610/Screenshot_20250728-190436_2_mhlvtj.png',
  //   },
  //   {
  //     id: 6,
  //     name: 'Project 6',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725609/IMG-20250728-WA0032_z1ybda.jpg',
  //   },
  //   {
  //     id: 7,
  //     name: 'Project 7',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725609/Screenshot_20250728-185739_3_ugjzlk.jpg',
  //   },
  //   {
  //     id: 8,
  //     name: 'Project 8',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725609/Screenshot_20250728-185752_3_ejmvtj.jpg',
  //   },
  //   {
  //     id: 9,
  //     name: 'Project 9',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725608/IMG-20250728-WA0034_3_e3h9fu.jpg',
  //   },
  //   {
  //     id: 10,
  //     name: 'Project 10',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725608/IMG-20250728-WA0030_2_hkrwde.jpg',
  //   },
  //   {
  //     id: 11,
  //     name: 'Project 11',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725608/IMG-20250728-WA0029_hopcg7.jpg',
  //   },
  //   {
  //     id: 12,
  //     name: 'Project 12',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725607/IMG-20250728-WA0023_ook6bl.jpg',
  //   },
  //   {
  //     id: 13,
  //     name: 'Project 13',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725607/IMG-20250728-WA0024_2_htqvv5.jpg',
  //   },
  //   {
  //     id: 14,
  //     name: 'Project 14',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725607/IMG-20250728-WA0026_2_zm8ijc.jpg',
  //   },
  //   {
  //     id: 15,
  //     name: 'Project 15',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725607/Screenshot_20250728-190708_2_mo01cy.png',
  //   },
  //   {
  //     id: 16,
  //     name: 'Project 16',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725607/IMG-20250728-WA0022_oqu3mc.jpg',
  //   },
  //   {
  //     id: 17,
  //     name: 'Project 17',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725607/Screenshot_20250728-190818_cyejjr.png',
  //   },
  //   {
  //     id: 18,
  //     name: 'Project 18',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725607/IMG-20250728-WA0013_2_tdeb3s.jpg',
  //   },
  //   {
  //     id: 19,
  //     name: 'Project 19',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725606/Screenshot_20250728-190858_ec63tg.png',
  //   },
  //   {
  //     id: 20,
  //     name: 'Project 20',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725606/IMG-20250728-WA0020_nhlpgq.jpg',
  //   },
  //   {
  //     id: 21,
  //     name: 'Project 21',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725606/Screenshot_20250728-190801_bb5gyo.png',
  //   },
  //   {
  //     id: 22,
  //     name: 'Project 22',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725605/Screenshot_20250728-190730_2_wiylm1.png',
  //   },
  //   {
  //     id: 23,
  //     name: 'Project 23',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725604/Screenshot_20250728-190912_fijoua.png',
  //   },
  //   {
  //     id: 24,
  //     name: 'Project 24',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725604/Screenshot_20250728-190650_2_jdpvhk.png',
  //   },
  //   {
  //     id: 25,
  //     name: 'Project 25',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725603/Screenshot_20250728-190837_i1oztr.png',
  //   },
  //   {
  //     id: 26,
  //     name: 'Project 26',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725600/IMG-20250728-WA0004_psvl0o.jpg',
  //   },
  //   {
  //     id: 27,
  //     name: 'Project 27',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725600/IMG-20250728-WA0003_ahimza.jpg',
  //   },
  //   {
  //     id: 28,
  //     name: 'Project 28',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725600/IMG-20250728-WA0002_kbgj2n.jpg',
  //   },
  //   {
  //     id: 29,
  //     name: 'Project 29',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725600/IMG-20250728-WA0001_2_bpqlkk.jpg',
  //   },
  //   {
  //     id: 30,
  //     name: 'Project 30',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725430/project1_3_o3h8bk.jpg',
  //   },
  //   {
  //     id: 31,
  //     name: 'Project 31',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725429/project1_2_l1bmkg.jpg',
  //   },
  //   {
  //     id: 32,
  //     name: 'Project 32',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725429/project1_1_xov9a5.jpg',
  //   },
  //   {
  //     id: 33,
  //     name: 'Project 33',
  //     image:
  //       'https://res.cloudinary.com/dqe64m85c/image/upload/v1753725429/project1_4_rzjimi.jpg',
  //   },
  // ];

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

  if (isGettingProducts || isGettingCollections || LoadingProjects) {
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
      <section className="my-10 px-4 sm:pl-8 lg:pl-16">
        {projects.length > 0 ? ( // Correct conditional check: use ? instead of (
          <>
            {' '}
            {/* Use a React Fragment to wrap multiple elements */}
            <div className="w-full flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold font-[poppins]">
                Featured Projects
              </h2>
              <a
                href="/projects"
                className="font-[montserrat] text-primary font-medium"
              >
                View More
              </a>
            </div>
            <div
              className="flex space-x-4 overflow-x-auto pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Map over the 'projects' array. Ensure you use a unique 'key' prop. */}
              {projects.map((project) => (
                <ProjectCard
                  key={project._id} // Assuming projects have a unique _id
                  project={project}
                />
              ))}
            </div>
          </>
        ) : null}
      </section>
      <section className="my-10 px-4 sm:pl-8 lg:pl-16">
        <div className="w-full flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold font-[poppins]">
            Featured Products
          </h2>
          <a
            href="/shop"
            className="font-[montserrat] text-primary font-medium"
          >
            View More
          </a>
        </div>
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
          <div className="w-full flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold font-[poppins]">Collections</h2>
            <a
              href="/shop"
              className="font-[montserrat] text-primary font-medium"
            >
              View More
            </a>
          </div>
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
              src={
                'https://res.cloudinary.com/dqe64m85c/image/upload/v1753727796/home_cbpusd.jpg'
              } // Use the imported image
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
              src={
                'https://res.cloudinary.com/dqe64m85c/image/upload/v1753728075/0339d51a-ea31-4b76-9a8f-f56d20de75ee_exnszd.jpg'
              }
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
              src={
                'https://res.cloudinary.com/dqe64m85c/image/upload/v1753728078/From_Chaos_To_Calm__How_To_Design_A_Minimalist_sd2pdx.jpg'
              } // Use the imported image
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
              src={
                'https://res.cloudinary.com/dqe64m85c/image/upload/v1753727847/carbinets_kinrvk.jpg'
              }
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
