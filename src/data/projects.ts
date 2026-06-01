import resumeImage from '../assets/E-resume.png'
import ecommerceImage from '../assets/E-commerce.png'
import shoeEcommerceImage from '../assets/shoe ecommerce.png'
import weatherAppImage from '../assets/weath app.png'

export const projects = [
  {
    id: 'resume-generator',
    title: 'Resume Generator',
    headline: 'Interactive Resume Building Made Simple',
    description: 'A web app that allows users to quickly create polished, professional resumes without formatting hassles — just fill in your details and download.',
    client: 'Personal Project',
    year: '2024',
    service: 'Frontend Development, UI/UX',
    overview: [
      'Users needed a quick and easy way to generate professional resumes without struggling with formatting or design. This web app was built to solve that problem — providing a clean, interactive interface where you fill in your details and instantly get a beautifully formatted, ready-to-download resume.',
      'I handled the full frontend development, focusing on making the experience smooth and intuitive. The interface was designed to feel natural, with real-time preview so you can see exactly what your resume will look like as you type.',
      'The application provided users with a flexible, easy-to-use platform, allowing them to create professional resumes in minutes rather than hours.'
    ],
    whatIdid: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
    image: resumeImage,
    github: 'https://github.com/mourice-dev/ResumeGeneretor-react',
    live: 'https://eresume-generator.vercel.app/',
  },
  {
    id: 'express-ecommerce',
    title: 'E-commerce Platform',
    headline: 'Full-Stack Shopping Experience with Secure Authentication',
    description: 'A complete e-commerce platform built from the ground up — handling products, carts, user sessions, and secure checkout flows.',
    client: 'Personal Project',
    year: '2025',
    service: 'Fullstack Development, Database Design',
    overview: [
      'This project was born from a desire to understand how real e-commerce platforms work end-to-end. The application features a seamless shopping experience with product browsing, cart management, user authentication, and session-based security — all built with a modern React frontend and a robust Express.js backend.',
      'I designed and built everything: the responsive product catalog, the cart system with real-time updates, the authentication flow with secure session handling, and the MySQL database architecture powering it all.',
      'The website provided a complete, production-ready e-commerce platform that handles the full shopping lifecycle, from browsing to checkout.'
    ],
    whatIdid: ['React', 'Express.js', 'MySQL', 'Authentication', 'REST API'],
    image: ecommerceImage,
    github: 'https://github.com/mourice-dev/Express-Ecommerce-FE',
    live: 'https://orangeshop-fe.vercel.app/',
  },
  {
    id: 'shoe-ecommerce',
    title: 'Shoe E-commerce',
    headline: 'Dynamic Footwear Shopping Experience',
    description: 'A modern footwear e-commerce website for shoes, built with React and Tailwind CSS, featuring type-safe components and interactive filters.',
    client: 'Personal Project',
    year: '2025',
    service: 'Frontend Development, UI/UX Design',
    overview: [
      'Designed and developed a highly interactive footwear store interface utilizing Tailwind CSS for sleek modern animations and glassmorphism styling. The application integrates advanced product filtering, shopping cart functionality, and responsive layouts for optimal viewing on any device.',
      'Leveraged TypeScript to enforce strict typing across product models, shopping cart states, and page navigation components, ensuring high maintainability and fewer bugs.',
      'Created an aesthetically pleasing shopping experience optimized for engagement and smooth transitions.'
    ],
    whatIdid: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    image: shoeEcommerceImage,
    github: 'https://github.com/mourice-dev/-e-commerce-shoes-tailwindcss-typescript',
    live: '#',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    headline: 'Real-Time Global Weather Insights',
    description: 'A clean, intuitive weather forecasting application built with React and Tailwind CSS, fetching live weather details from a public API.',
    client: 'Personal Project',
    year: '2025',
    service: 'Frontend Development, API Integration',
    overview: [
      'Developed a lightweight, premium-designed weather application that provides real-time weather forecasts, humidity, wind speed, and temperature statistics for locations worldwide.',
      'Integrated external weather API endpoints to fetch, parse, and render live data dynamically. Built beautiful visual backdrops and custom icons that adapt depending on the weather conditions.',
      'Implemented search caching and smooth fade-in animations to deliver a seamless, high-performance user experience.'
    ],
    whatIdid: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    image: weatherAppImage,
    github: 'https://github.com/mourice-dev/weath-app-react-tailwindcss',
    live: '#',
  },
  {
    id: 'xauusd-calculator',
    title: 'XAUUSD Lot Size Calculator',
    headline: 'Precision Trading Tool for Gold Market Analysis',
    description: 'A specialized financial calculator for forex traders to compute optimal lot sizes for XAUUSD (Gold) trades based on risk management parameters.',
    client: 'Personal Project',
    year: '2025',
    service: 'Frontend Development, Financial Tools',
    overview: [
      'Forex traders needed a reliable, fast calculator specifically designed for gold (XAUUSD) trading. This tool helps traders determine the optimal position size based on their account balance, risk percentage, and stop-loss distance.',
      'Built as a clean, single-page application with a focus on accuracy and speed. The calculator provides instant results with pip value calculations and includes a trade history feature for tracking past calculations.',
      'The tool empowers traders to make informed position sizing decisions, reducing emotional trading and improving risk management discipline.'
    ],
    whatIdid: ['React', 'TypeScript', 'CSS', 'Financial Logic'],
    image: null,
    github: 'https://github.com/mourice-dev',
    live: '#',
  },
]
