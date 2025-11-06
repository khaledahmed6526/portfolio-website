/**
 * Home Page
 * Landing page with hero section, features, and CTA
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Feature cards data
  const features = [
    {
      icon: '⚡',
      title: 'Fast & Efficient',
      description: 'Optimized performance and lightning-fast load times for the best user experience.'
    },
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Beautiful, clean interfaces built with the latest design principles and trends.'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Perfect experience across all devices - desktop, tablet, and mobile.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Built with security best practices and rock-solid reliability in mind.'
    },
    {
      icon: '⚙️',
      title: 'Easy to Customize',
      description: 'Well-structured code that is easy to understand and modify for your needs.'
    },
    {
      icon: '💡',
      title: 'Support & Updates',
      description: 'Ongoing support and regular updates to keep your project current.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Dream Website
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Professional web development services with modern technologies.
              Let's bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-subtitle">
              We deliver exceptional results with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card p-6 text-center animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
