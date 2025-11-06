/**
 * Services Page
 * Displays all services/products fetched from the backend
 * Includes filtering and modal for detailed view
 */

import React, { useState, useEffect } from 'react';
import { getServices } from '../utils/api';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Loading from '../components/Loading';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  // Fetch services on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await getServices({ isActive: true });
      setServices(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError('Failed to load services. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handle service card click - open modal with details
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  // Get unique categories
  const categories = ['all', ...new Set(services.map(s => s.category))];

  // Filter services based on selected category
  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(s => s.category === filter);

  // Format category name for display
  const formatCategory = (cat) => {
    return cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  if (loading) {
    return <Loading message="Loading services..." />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-md`}
              >
                {formatCategory(category)}
              </button>
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-8">
              {error}
            </div>
          )}

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No services found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card
                  key={service._id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  features={service.features}
                  onClick={() => handleServiceClick(service)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedService.title}
          size="md"
        >
          <div>
            <div className="text-6xl mb-4">{selectedService.icon}</div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{selectedService.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pricing</h3>
              <p className="text-primary-600 text-2xl font-bold">
                {selectedService.price}
              </p>
            </div>

            {selectedService.features && selectedService.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Features</h3>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg 
                        className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4">
              <a
                href="/contact"
                className="btn-primary flex-1 text-center"
              >
                Get Started
              </a>
              <button
                onClick={handleCloseModal}
                className="btn-secondary flex-1"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We can create tailored solutions specific to your business needs
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
