import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led migration of legacy infrastructure to AWS, reducing costs by 40%',
        'Implemented GitOps workflows using ArgoCD and Kubernetes',
        'Built comprehensive monitoring stack with Prometheus and Grafana',
        'Mentored junior engineers and established DevOps best practices',
      ],
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudFirst Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: [
        'Designed and implemented CI/CD pipelines for microservices architecture',
        'Automated infrastructure provisioning using Terraform and Ansible',
        'Reduced deployment time from hours to minutes using containerization',
        'Implemented security scanning and compliance automation',
      ],
    },
    {
      title: 'Cloud Infrastructure Engineer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2019 - 2020',
      description: [
        'Built scalable cloud infrastructure from scratch on AWS',
        'Implemented automated backup and disaster recovery solutions',
        'Optimized cloud costs through resource right-sizing and scheduling',
        'Established monitoring and alerting for 99.9% uptime SLA',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A track record of delivering scalable infrastructure solutions and driving DevOps transformation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-primary-500 to-transparent"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-800"></div>
              
              <div className="ml-16 glass-effect rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center text-primary-400 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-400">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-primary-400 mr-2 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
