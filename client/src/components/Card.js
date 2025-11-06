/**
 * Card Component
 * Reusable card component for displaying services, products, etc.
 * Supports custom styling and click handlers
 */

import React from 'react';

const Card = ({ 
  icon, 
  title, 
  description, 
  price, 
  features = [], 
  onClick,
  className = '' 
}) => {
  return (
    <div 
      className={`card p-6 cursor-pointer transform hover:-translate-y-2 ${className}`}
      onClick={onClick}
    >
      {/* Icon */}
      {icon && (
        <div className="text-5xl mb-4">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        {description}
      </p>

      {/* Price */}
      {price && (
        <div className="mb-4">
          <span className="text-primary-600 font-bold text-lg">
            {price}
          </span>
        </div>
      )}

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <svg 
                className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" 
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
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Learn More Link */}
      <div className="mt-auto">
        <span className="text-primary-600 font-medium hover:text-primary-700 transition duration-200 inline-flex items-center">
          Learn More
          <svg 
            className="h-4 w-4 ml-1" 
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
        </span>
      </div>
    </div>
  );
};

export default Card;
