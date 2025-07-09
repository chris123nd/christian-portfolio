"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin, Award, Users, Trophy, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "leadership", "certifications", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      category: "Frontend",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      category: "Backend",
    },
    {
      name: "Laravel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      category: "Backend",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Backend",
    },
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      category: "Mobile",
    },
    {
      name: "Dart",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      category: "Mobile",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      category: "Design & Tools",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "Design & Tools",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Database",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Database",
    },
    {
      name: "Tableau",
      logo: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png",
      category: "Database",
    },
    {
      name: "Excel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
      category: "Database",
    },
    {
      name: "Hadoop",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg",
      category: "Database",
    },
    {
      name: "Cassandra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg",
      category: "Database",
    },
  ];

  const projects = [
    {
      title: "Mobile E-Commerce Application – Rumah Kreatif Toba",
      period: "Jan 2025 - Jul 2025",
      description: "Developed a comprehensive mobile e-commerce application with user authentication, real-time chat, product catalog, and flexible checkout process.",
      technologies: ["Flutter", "Dart", "Laravel", "PHP", "MySQL"],
      features: [
        "User authentication system",
        "Real-time chat between buyers and sellers",
        "Product catalog with search and filters",
        "Shopping cart and flexible checkout",
        "Order history and product reviews",
        "Admin dashboard and seller management",
      ],
      githubUrl: "https://github.com/christiansimangunsong/rumah-kreatif-toba",
    },
    {
      title: "Corn Leaf Disease Identification Using Machine Learning",
      period: "Aug 2024 - Dec 2024",
      description: "Built a machine learning web application for detecting corn leaf diseases using CNN with Transfer Learning (DenseNet121).",
      technologies: ["Python", "TensorFlow", "Flask", "CNN", "DenseNet121"],
      features: [
        "Convolutional Neural Network implementation",
        "Transfer Learning with DenseNet121",
        "Image preprocessing and data augmentation",
        "Real-time disease diagnosis",
        "Web interface with Flask",
        "Model evaluation with accuracy metrics",
      ],
      githubUrl: "https://github.com/christiansimangunsong/corn-leaf-disease-detection",
    },
    {
      title: "Church Information Management System - HKBP Parparean",
      period: "Jan 2024 - Jun 2024",
      description: "Developed a web-based information system for church management with user registration, news, and service scheduling.",
      technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      features: ["User registration and management", "News and announcements system", "Service scheduling functionality", "Responsive admin interface", "Content management system", "Member management tools"],
      githubUrl: "https://github.com/christiansimangunsong/hkbp-parparean-system",
    },
    {
      title: "Rumata Coffee Digital Marketing Website",
      period: "Jan 2023 - Jun 2023",
      description: "Created a digital marketing platform to promote Rumata Coffee products with automated content management.",
      technologies: ["Native PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: ["Multi-level user role system", "Automated content management", "Product catalog and image uploads", "Customer feedback system", "Google Maps integration", "WhatsApp API integration"],
      githubUrl: "https://github.com/christiansimangunsong/rumata-coffee-website",
    },
  ];

  const leadership = [
    {
      organization: "Student Executive Board (BEM) - Del Institut of Technology",
      position: "Treasurer of Religious and Social Department",
      period: "Nov 2024 - Present",
      description: "Managing department budgeting and organizing spiritual and social programs.",
      responsibilities: [
        "Organizing weekly student worship and reflections",
        "Managing department budgeting and financial records",
        "Supporting charity events and religious celebrations",
        "Promoting campus values through meaningful activities",
      ],
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      organization: "Student Executive Board (BEM) - Del Institut of Technology",
      position: "Member of Religious and Social Department",
      period: "Nov 2023 - Nov 2024",
      description: "Assisted in planning and executing spiritual and social programs.",
      responsibilities: [
        "Assisted in planning spiritual and social programs",
        "Collaborated with team in coordinating logistics",
        "Promoted campus values through inclusive programs",
        "Supported volunteer involvement for department activities",
      ],
      icon: <Users className="w-6 h-6" />,
    },
    {
      organization: "Google Developer Student Clubs (GDSC) - Del Institut of Technology",
      position: "Member",
      period: "Sep 2023 - Present",
      description: "Collaborating on team-based projects using Google technologies.",
      responsibilities: [
        "Participated in practical workshops and coding sessions",
        "Collaborated on projects addressing real-world problems",
        "Enhanced technical proficiency through hands-on development",
        "Contributed to community learning initiatives",
      ],
      icon: <Users className="w-6 h-6" />,
    },
    {
      organization: "Association of Software Engineering Technology Students (HIMAPRO) - Del Institut of Technology",
      position: "Member",
      period: "Sep 2022 - Present",
      description: "Active participation in Software Engineering Technology Student Association.",
      responsibilities: ["Participated in organizational activities and events", "Supported events through coordination and collaboration", "Contributed to student community development", "Engaged in professional development activities"],
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const certifications = [
    {
      title: "Programming Logic 101",
      issuer: "Dicoding",
      year: "2025",
      description: "Fundamental programming logic and problem-solving concepts",
      image: "/certificates/dicoding-programming-logic.jpg", // Ganti dengan file Anda
    },
    {
      title: "Python Programming",
      issuer: "Dicoding",
      year: "2025",
      description: "Comprehensive Python programming fundamentals and applications",
      image: "/certificates/dicoding-python.jpg", // Ganti dengan file Anda
    },
    {
      title: "SQL Fundamentals",
      issuer: "Dicoding",
      year: "2025",
      description: "Database management and SQL query optimization",
      image: "/certificates/dicoding-sql.jpg", // Ganti dengan file Anda
    },
    {
      title: "Data Visualization",
      issuer: "Dicoding",
      year: "2025",
      description: "Creating effective data visualizations and dashboards",
      image: "/certificates/dicoding-data-viz.jpg", // Ganti dengan file Anda
    },
    {
      title: "AI Fundamentals",
      issuer: "Dicoding",
      year: "2025",
      description: "Introduction to artificial intelligence and machine learning concepts",
      image: "/certificates/dicoding-ai.jpg", // Ganti dengan file Anda
    },
    {
      title: "Git & GitHub",
      issuer: "Dicoding",
      year: "2025",
      description: "Version control systems and collaborative development",
      image: "/certificates/dicoding-git.jpg", // Ganti dengan file Anda
    },
    {
      title: "Software Development",
      issuer: "Dicoding",
      year: "2025",
      description: "Learn the initial stages in developing software",
      image: "/certificates/dicoding-software-development.jpg", // Ganti dengan file Anda
    },
    {
      title: "Python for Data Analysis",
      issuer: "MySkill",
      year: "2025",
      description: "Advanced Python techniques for data analysis and manipulation",
      image: "/certificates/myskill-python-analysis.jpg", // Ganti dengan file Anda
    },
    {
      title: "JavaScript Intermediate",
      issuer: "Sololearn",
      year: "2025",
      description: "Advanced JavaScript concepts and modern development practices",
      image: "/certificates/sololearn-javascript.jpg", // Ganti dengan file Anda
    },
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkMode ? "bg-gray-900/95 border-gray-800" : "bg-white/95 border-gray-100"} backdrop-blur-sm border-b`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`text-xl font-semibold transition-colors ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Christian Simangunsong
            </motion.div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {["About", "Skills", "Leadership", "Certifications", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === item.toLowerCase() ? "text-blue-600" : isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {/* Theme Toggle Button */}
              <button onClick={toggleTheme} className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`} aria-label="Toggle theme">
                {isDarkMode ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Soft Profile Effects */}
      <section id="hero" className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Photo with Soft Effects */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex-shrink-0 relative">
              {/* Soft Glowing Rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className={`w-80 h-80 rounded-full ${isDarkMode ? "bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20" : "bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-pink-300/30"} blur-xl`} />
              </motion.div>

              {/* Second Ring */}
              <motion.div
                className="absolute inset-4 rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className={`w-72 h-72 rounded-full ${isDarkMode ? "bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15" : "bg-gradient-to-r from-blue-400/25 via-purple-400/25 to-pink-400/25"} blur-lg`} />
              </motion.div>

              {/* Floating Soft Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-3 h-3 rounded-full ${isDarkMode ? "bg-blue-400/40" : "bg-blue-500/50"} blur-sm`}
                  style={{
                    top: `${20 + Math.sin(i * 60) * 30}%`,
                    left: `${20 + Math.cos(i * 60) * 30}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Main Profile Photo - UPDATE: Ganti dengan foto profil Anda */}
              <div className="relative z-10">
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-700/50 shadow-2xl backdrop-blur-sm"
                >
                  <img
                    src="/profile.jpg"
                    alt="Christian Yohanes Simangunsong"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=256&width=256";
                    }}
                  />
                  {/* Soft Overlay */}
                  <motion.div
                    className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-t from-transparent via-transparent to-blue-500/10" : "bg-gradient-to-t from-transparent via-transparent to-blue-400/15"}`}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex-1 text-center lg:text-left">
              <h1 className={`text-4xl lg:text-6xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Christian Yohanes <span className="text-blue-600">Simangunsong</span>
              </h1>
              <p className={`text-xl lg:text-2xl mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Software Engineering Student | Full-Stack Developer | UI/UX Designer</p>
              <p className={`text-lg mb-8 max-w-2xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                I'm a Software Engineering Technology student with a strong passion for Frontend Development and UI/UX Design. I'm always eager to learn and collaborate on creative digital experiences. Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => {
                    // Create a temporary link element to trigger download
                    const link = document.createElement("a");
                    link.href = "/christian-cv.pdf"; // UPDATE: Pastikan file CV ada di folder public
                    link.download = "Christian_Simangunsong_CV.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Download CV
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className={`${isDarkMode ? "border-gray-600 text-gray-300 hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}>
                  Get In Touch
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Hi👋, I'm Christian, a 6th semester student of Software Engineering Technology Study Program at Del Institute of Technology. I have a strong interest in frontend and backend software development, as well as UI/UX design.
                </p>
                <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  I have experience in developing websites and mobile applications, and designing user interfaces that meet project needs through various academic and organizational projects.
                </p>
                <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  In the future, I would like to continue honing my skills in full-stack development and UI/UX to prepare myself for the professional world.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-6">
              <Card className={`${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
                <CardContent className="p-6">
                  <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-blue-600 w-5 h-5" />
                      <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>christiansimangunsong2018@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-blue-600 w-5 h-5" />
                      <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>082294880042</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-blue-600 w-5 h-5" />
                      <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Toba, Sumatera Utara, Indonesia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin className="text-blue-600 w-5 h-5" />
                      <a
                        href="https://www.linkedin.com/in/christiansimangunsong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors`}
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
                <CardContent className="p-6">
                  <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Education</h3>
                  <div>
                    <h4 className={`${isDarkMode ? "text-white" : "text-gray-900"} font-medium`}>Institut Teknologi Del</h4>
                    <p className="text-blue-600">Bachelor of Applied Software</p>
                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>Aug 2022 - Sep 2026 (Expected)</p>
                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>GPA: 3.08/4.00</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simplified Skills Section with Icons */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg max-w-2xl mx-auto`}>Here are the technologies and tools I work with to bring ideas to life.</p>
          </motion.div>

          <div className="space-y-12">
            {["Frontend", "Backend", "Mobile", "Design & Tools", "Database"].map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <motion.div key={category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                  <h3 className={`text-2xl font-semibold mb-6 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>{category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categorySkills.map((skill, index) => (
                      <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
                        <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} text-center hover:shadow-lg transition-all duration-300`}>
                          <CardContent className="p-6">
                            <div className="w-12 h-12 mx-auto mb-3">
                              <img
                                src={skill.logo || "/placeholder.svg"}
                                alt={`${skill.name} logo`}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  // Fallback to placeholder if logo fails to load
                                  e.currentTarget.src = "/placeholder.svg?height=48&width=48";
                                }}
                              />
                            </div>
                            <h4 className={`${isDarkMode ? "text-white" : "text-gray-900"} font-medium text-sm`}>{skill.name}</h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Organizations Section */}
      <section id="leadership" className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Leadership & Organizations</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg max-w-2xl mx-auto`}>My involvement in various organizations and leadership roles that have shaped my professional development.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className={`${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} hover:shadow-lg transition-shadow duration-300`}>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg text-blue-600">{item.icon}</div>
                      <div className="flex-1">
                        <CardTitle className={`${isDarkMode ? "text-white" : "text-gray-900"} text-lg mb-1`}>{item.organization}</CardTitle>
                        <CardDescription className="text-blue-600 text-lg font-medium mb-2">{item.position}</CardDescription>
                        <div className="flex items-center space-x-2">
                          <Calendar className="text-gray-500 w-4 h-4" />
                          <span className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>{item.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>{item.description}</p>
                    <div>
                      <h4 className={`${isDarkMode ? "text-white" : "text-gray-900"} font-medium mb-2`}>Key Responsibilities:</h4>
                      <ul className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} space-y-2`}>
                        {item.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Certifications & Achievements</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg max-w-2xl mx-auto`}>Professional certifications and achievements that demonstrate my commitment to continuous learning.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }}>
                <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} hover:shadow-lg transition-all duration-300 h-full`}>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback jika gambar sertifikat tidak ditemukan
                        e.currentTarget.src = "/placeholder.svg?height=200&width=300";
                      }}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className={`${isDarkMode ? "text-white" : "text-gray-900"} text-lg`}>{cert.title}</CardTitle>
                        <CardDescription className="text-blue-600 font-medium">{cert.issuer}</CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="text-yellow-500 w-5 h-5" />
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          {cert.year}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className={`${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} h-full hover:shadow-lg transition-shadow duration-300 flex flex-col`}>
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className={`${isDarkMode ? "text-white" : "text-gray-900"} text-lg leading-tight mb-2`}>{project.title}</CardTitle>
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="text-gray-500 w-4 h-4" />
                      <span className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>{project.period}</span>
                    </div>
                    <CardDescription className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="mb-4">
                      <h4 className={`${isDarkMode ? "text-white" : "text-gray-900"} font-medium mb-2 text-sm`}>Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6 flex-grow">
                      <h4 className={`${isDarkMode ? "text-white" : "text-gray-900"} font-medium mb-2 text-sm`}>Key Features:</h4>
                      <ul className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} space-y-1 text-sm`}>
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-600 mr-2 text-xs">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.open(project.githubUrl, "_blank")}>
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Let's Connect</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg max-w-2xl mx-auto`}>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                <CardHeader>
                  <CardTitle className={`${isDarkMode ? "text-white" : "text-gray-900"} text-2xl`}>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <Mail className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className={`${isDarkMode ? "text-white" : "text-gray-900"} font-medium`}>Email</p>
                      <a href="mailto:christiansimangunsong2018@gmail.com" className={`${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors`}>
                        christiansimangunsong2018@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <Phone className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className={`${isDarkMode ? "text-white" : "text-gray-900"} font-medium`}>Phone</p>
                      <a href="tel:082294880042" className={`${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors`}>
                        082294880042
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <Linkedin className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className={`${isDarkMode ? "text-white" : "text-gray-900"} font-medium`}>LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/christiansimangunsong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors`}
                      >
                        christiansimangunsong
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <MapPin className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className={`${isDarkMode ? "text-white" : "text-gray-900"} font-medium`}>Location</p>
                      <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Toba, Sumatera Utara, Indonesia</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                <CardHeader>
                  <CardTitle className={`${isDarkMode ? "text-white" : "text-gray-900"} text-2xl`}>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.open("mailto:christiansimangunsong2018@gmail.com", "_blank")}>
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>

                  <Button
                    variant="outline"
                    className={`w-full ${isDarkMode ? "border-gray-600 text-gray-300 hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => window.open("https://www.linkedin.com/in/christiansimangunsong", "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>

                  <Button variant="outline" className={`w-full ${isDarkMode ? "border-gray-600 text-gray-300 hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`} onClick={() => window.open("tel:082294880042", "_blank")}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>

                  <Button
                    variant="outline"
                    className={`w-full ${isDarkMode ? "border-gray-600 text-gray-300 hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => window.open("https://maps.google.com/?q=Toba,+Sumatera+Utara,+Indonesia", "_blank")}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View Location
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t transition-all duration-300 ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={`transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>© 2025 Christian Yohanes Simangunsong. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
