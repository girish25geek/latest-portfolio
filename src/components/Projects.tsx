import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Server, Cloud, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Multi-Cloud Kubernetes Platform',
      description: 'Built a unified Kubernetes platform spanning AWS, Azure, and GCP with automated failover and cross-cloud networking.',
      technologies: ['Kubernetes', 'Terraform', 'ArgoCD', 'Istio', 'Prometheus'],
      icon: <Cloud className="w-8 h-8" />,
      github: '#',
      demo: '#',
      highlights: [
        '99.99% uptime across multiple cloud providers',
        'Automated disaster recovery and failover',
        'Cost optimization through intelligent workload placement',
      ],
    },
    {
      title: 'GitOps CI/CD Pipeline',
      description: 'Implemented a complete GitOps workflow with automated testing, security scanning, and progressive deployment strategies.',
      technologies: ['GitLab CI', 'ArgoCD', 'Helm', 'SonarQube', 'Vault'],
      icon: <Zap className="w-8 h-8" />,
      github: '#',
      demo: '#',
      highlights: [
        'Reduced deployment time by 80%',
        'Automated security and compliance checks',
        'Zero-downtime deployments with canary releases',
      ],
    },
    {
      title: 'Infrastructure Monitoring Stack',
      description: 'Designed comprehensive monitoring and observability solution for microservices architecture with custom dashboards and alerting.',
      technologies: ['Prometheus', 'Grafana', 'Jaeger', 'ELK Stack', 'PagerDuty'],
      icon: <Server className="w-8 h-8" />,
      github: '#',
      demo: '#',
      highlights: [
        'Real-time monitoring of 100+ microservices',
        'Custom alerting rules and runbooks',
        'Distributed tracing and log aggregation',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of complex infrastructure projects and DevOps implementations that drive business value.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
              
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary-400 mb-3">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-primary-400 mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  <span>Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
