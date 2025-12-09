import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cloud, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Architecture',
      description: 'Expert in AWS, Azure, and GCP cloud platforms with scalable infrastructure design.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and Ansible for automated infrastructure management.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'CI/CD Pipelines',
      description: 'Jenkins, GitLab CI, GitHub Actions for seamless deployment automation.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Monitoring',
      description: 'Implementing security best practices and comprehensive monitoring solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate DevOps Engineer with 5+ years of experience in building and maintaining 
            scalable cloud infrastructure. I specialize in automation, containerization, and 
            implementing robust CI/CD pipelines that enable teams to deliver software faster and more reliably.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-primary-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
