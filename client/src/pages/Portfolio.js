/**
 * Portfolio Page
 * Display portfolio projects and previous work
 */

import React, { useState, useEffect } from 'react';
import { getPortfolio } from '../utils/api';
import Modal from '../components/Modal';
import Loading from '../components/Loading';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  // Fetch portfolio on component mount
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const response = await getPortfolio({ isActive: true });
      setPortfolio(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching portfolio:', err);
      setError('Failed to load portfolio. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handle project card click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Get unique categories
  const categories = ['all', ...new Set(portfolio.map(p => p.category))];

  // Filter portfolio based on selected category
  const filteredPortfolio = filter === 'all' 
    ? portfolio 
    : portfolio.filter(p => p.category === filter);

  // Format category name for display
  const formatCategory = (cat) => {
    const categoryNames = {
      'all': 'All',
      'website': 'Websites',
      'web-app': 'Web Apps',
      'ecommerce': 'E-Commerce',
      'mobile-app': 'Mobile Apps',
      'design': 'Design',
      'other': 'Other'
    };
    return categoryNames[cat] || cat;
  };

  if (loading) {
    return <Loading message="Loading portfolio..." />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              A collection of projects I've completed for my clients
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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

          {/* Portfolio Grid */}
          {filteredPortfolio.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects in this category currently.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map((project) => (
                <div
                  key={project._id}
                  className="card overflow-hidden cursor-pointer transform hover:-translate-y-2"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Image */}
                  {project.images && project.images.length > 0 && (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  {/* Project Info */}
                  <div className="p-6">
                    {project.isFeatured && (
                      <span className="inline-block bg-primary-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                        Featured
                      </span>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* View More */}
                    <div className="text-primary-600 font-medium hover:text-primary-700 transition duration-200 inline-flex items-center">
                      View Details
                      <svg 
                        className="h-4 w-4 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProject.title}
          size="lg"
        >
          <div>
            {/* Project Images */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{selectedProject.description}</p>
            </div>

            {/* Client */}
            {selectedProject.client && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Client</h3>
                <p className="text-gray-600">{selectedProject.client}</p>
              </div>
            )}

            {/* Technologies */}
            {selectedProject.technologies && selectedProject.technologies.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4">
              {selectedProject.projectUrl && (
                <a
                  href={selectedProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  Visit Website
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 text-center"
                >
                  View on GitHub
                </a>
              )}
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
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let me help you turn your idea into reality
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Contact Me Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
