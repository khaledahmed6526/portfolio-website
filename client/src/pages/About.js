/**
 * About Page
 * Company information, team, mission, and values
 */

import React from 'react';

const About = () => {
  // Team members data
  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/150?img=1',
      description: 'Visionary leader with 10+ years of experience in tech industry.'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Designer',
      image: 'https://i.pravatar.cc/150?img=5',
      description: 'Creative designer passionate about user experience and beautiful interfaces.'
    },
    {
      name: 'Mike Johnson',
      role: 'Senior Developer',
      image: 'https://i.pravatar.cc/150?img=3',
      description: 'Full-stack developer specializing in modern web technologies.'
    },
    {
      name: 'Sarah Williams',
      role: 'Project Manager',
      image: 'https://i.pravatar.cc/150?img=9',
      description: 'Expert at delivering projects on time and exceeding expectations.'
    }
  ];

  // Company values
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering top-quality results.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared goals and success.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly exploring new technologies and creative solutions.'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'Delivering results quickly without compromising on quality.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Building the future, one project at a time
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                We are a team of passionate developers, designers, and strategists 
                dedicated to creating exceptional digital experiences. Our mission is 
                to help businesses thrive in the digital age by providing cutting-edge 
                web solutions.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                With over a decade of combined experience, we've helped hundreds of 
                clients achieve their goals through innovative technology and creative 
                problem-solving.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">10+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-gray-600 text-sm">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">300+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-8 h-96 flex items-center justify-center">
              <div className="text-6xl">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            We're always looking for exciting new projects and partnerships
          </p>
          <a
            href="/contact"
            className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
