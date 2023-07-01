const products = [
  {
    name: 'Apple Vision Pro',
    image: '/images/visionpro.jpg',
    description:
      'Welcome to Spatial computing, the next generation of technology. The Apple Vision Pro is the most advanced  ever created. With a 6.7 inch screen, 5G, and a 12 megapixel camera, this phone is the best on the market. Hybrid reality is here.',
    brand: 'Apple',
    category: 'Electronics',
    price: 3200.0,
    countInStock: 100,
    rating: 4.5,
    numReviews: 98,
    model: '2024',
  },
  {
    name: 'Lenovo Thinkvision M15',
    image: '/images/m15.jpeg',
    description:
      'The Lenovo Thinkvision M15 is the most advanced  ever created. With a 15 inch screen, 5G, and a 12 megapixel camera, this phone is the best on the market. Hybrid reality is here.',
    brand: 'Lenovo',
    category: 'Electronics',
    price: 550.0,
    countInStock: 20,
    rating: 4,
    numReviews: 18,
    model: '2022',
  },
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    model: '2016',
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    model: '2019',
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
    model: '2020',
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
    model: '2018',
  },

  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
    model: '2019',
  },
  {
    name: 'Amazon Echo Dot 4th Generation',
    image: '/images/alexa2.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 54.99,
    countInStock: 4,
    rating: 4,
    numReviews: 12,
    model: '2022',
  },
  {
    name: 'Google Home Mini',
    image: '/images/google.jpg',
    description:
      'Introducing Google Home Mini - a smart speaker with the Google Assistant built-in. It can answer questions, play music, and control smart devices in your home.',
    brand: 'Google',
    category: 'Electronics',
    price: 29.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 8,
    model: '2023',
  },
  {
    name: 'Apple iPhone 12 Pro',
    image: '/images/iphone.jpg',
    description:
      'The iPhone 12 Pro features a stunning design and advanced camera system. It comes with a Super Retina XDR display and is powered by the A14 Bionic chip.',
    brand: 'Apple',
    category: 'Electronics',
    price: 999.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 20,
    model: '2021',
  },
  {
    name: 'Samsung Galaxy S21 Ultra',
    image: '/images/galaxy.jpg',
    description:
      'Experience the ultimate in smartphone technology with the Samsung Galaxy S21 Ultra. It boasts a large Dynamic AMOLED 2X display and a powerful Exynos 2100 processor.',
    brand: 'Samsung',
    category: 'Electronics',
    price: 1199.99,
    countInStock: 3,
    rating: 4.8,
    numReviews: 15,
    model: '2023',
  },
  {
    name: 'Sony PlayStation 5',
    image: '/images/ps5.jpeg',
    description:
      'Get ready for the next generation of gaming with the Sony PlayStation 5. It features ultra-fast loading times, ray tracing, and an immersive DualSense controller.',
    brand: 'Sony',
    category: 'Electronics',
    price: 499.99,
    countInStock: 2,
    rating: 4.9,
    numReviews: 25,
    model: '2023',
  },
  {
    name: 'Apple MacBook Pro',
    image: '/images/macbook.jpg',
    description:
      'The Apple MacBook Pro is a high-performance laptop with a sleek design. It offers a brilliant Retina display, a fast processor, and a spacious storage capacity.',
    brand: 'Apple',
    category: 'Electronics',
    price: 1999.99,
    countInStock: 10,
    rating: 4.8,
    numReviews: 35,
    model: '2018',
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    model: '2022',
  },
  {
    name: 'Samsung Galaxy S21 Ultra',
    image: '/images/galaxy.jpeg',
    description:
      'Experience the ultimate in smartphone technology with the Samsung Galaxy S21 Ultra. It boasts a large Dynamic AMOLED 2X display and a powerful Exynos 2100 processor.',
    brand: 'Samsung',
    category: 'Electronics',
    price: 1199.99,
    countInStock: 3,
    rating: 4.8,
    numReviews: 15,
    model: '2023',
  },
  {
    name: 'Dell XPS 15',
    image: '/images/xps15.jpg',
    description:
      'The Dell XPS 15 is a powerful laptop with a stunning InfinityEdge display. It features a fast processor, ample storage, and a sleek design.',
    brand: 'Dell',
    category: 'Electronics',
    price: 1899.99,
    countInStock: 8,
    rating: 4.7,
    numReviews: 28,
    model: '2021',
  },
  {
    name: 'HP Spectre x360',
    image: '/images/spectre.jpeg',
    description:
      'The HP Spectre x360 is a versatile 2-in-1 laptop with a premium design. It boasts a vibrant touchscreen display, excellent performance, and a long battery life.',
    brand: 'HP',
    category: 'Electronics',
    price: 1699.99,
    countInStock: 12,
    rating: 4.6,
    numReviews: 42,
    model: '2022',
  },
  {
    name: 'Lenovo ThinkPad X1 Carbon',
    image: '/images/thinkpad.jpg',
    description:
      'The Lenovo ThinkPad X1 Carbon is a lightweight and durable business laptop. It offers impressive performance, a comfortable keyboard, and extensive connectivity options.',
    brand: 'Lenovo',
    category: 'Electronics',
    price: 1799.99,
    countInStock: 5,
    rating: 4.9,
    numReviews: 37,
    model: '2023',
  },
  {
    name: 'PlayStation 5 DualSense Controller',
    image: '/images/ps5-controller.jpg',
    description:
      'The PlayStation 5 DualSense Controller offers immersive haptic feedback, adaptive triggers, and precise controls for an enhanced gaming experience. It features a built-in microphone and a rechargeable battery.',
    brand: 'Sony',
    category: 'Electronics',
    price: 69.99,
    countInStock: 25,
    rating: 4.9,
    numReviews: 52,
    model: '2021',
  },
  {
    name: 'Steam Deck',
    image: '/images/steamdeck.jpeg',
    description:
      'The Steam Deck is a handheld gaming device that allows you to play your entire Steam library on the go. It features a powerful processor, a high-resolution display, and customizable controls for a seamless gaming experience.',
    brand: 'Valve',
    category: 'Electronics',
    price: 399.99,
    countInStock: 15,
    rating: 4.7,
    numReviews: 23,
    model: '2022',
  },
]

export default products
