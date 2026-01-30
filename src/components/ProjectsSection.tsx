import { useState } from 'react';
import { ExternalLink, Github, Activity, AlertTriangle, CheckCircle2, ArrowRight, X, Zap, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  period: string;
  technologies: string[];
  github?: string;
  live?: string;
  metrics: { label: string; value: string }[];
  details: {
    overview: string;
    features: string[];
    architecture?: string[];
  };
}

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'ddos',
      title: 'Semi-Supervised ML for DDoS Attack Detection',
      shortTitle: 'DDoS Attack Detection',
      description: 'Academic mini-project focused on detecting Distributed Denial-of-Service attacks using network traffic data and semi-supervised machine learning techniques.',
      period: 'Mar 2025 – Jun 2025',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/mveekshan1/ddos-attack-detection-ml.git',
      metrics: [
        { label: 'Accuracy', value: '95%+' },
        { label: 'Features', value: '40+' },
        { label: 'Dataset', value: '100K+' },
      ],
      details: {
        overview: 'A machine learning-based system for detecting DDoS attacks in network traffic using semi-supervised learning techniques. The project focuses on distinguishing between normal and attack traffic patterns.',
        features: [
          'Network traffic data preprocessing and feature extraction',
          'Semi-supervised classification model training',
          'Anomaly detection for identifying attack patterns',
          'Experimental visualization and evaluation metrics',
          'Real-time traffic pattern analysis simulation',
        ],
        architecture: [
          'Data ingestion → Traffic capture and normalization',
          'Feature engineering → Statistical and flow-based features',
          'Model training → Semi-supervised classification',
          'Evaluation → Precision, Recall, F1-Score metrics',
        ],
      },
    },
    {
      id: 'meme',
      title: 'Desi Meme Generator – Streamlit Multilingual App',
      shortTitle: 'Multilingual Meme Generator',
      description: 'A Streamlit-based multilingual meme generator with AI-assisted caption suggestions and translation using open-source models.',
      period: 'May 2025 – Jun 2025',
      technologies: ['Python', 'Streamlit', 'AI/ML APIs', 'PIL', 'REST API'],
      live: 'https://desimemegen.streamlit.app/',
      metrics: [
        { label: 'Languages', value: '10+' },
        { label: 'Templates', value: '50+' },
        { label: 'Response', value: '<2s' },
      ],
      details: {
        overview: 'A user-friendly web application for generating multilingual memes with AI-powered caption suggestions. Focused on usability and lightweight performance for low-bandwidth environments.',
        features: [
          'AI-assisted caption generation and suggestions',
          'Multi-language translation support',
          'User-generated content handling',
          'Lightweight performance optimization',
          'Template-based meme creation',
        ],
        architecture: [
          'User request → Input validation and sanitization',
          'AI processing → Caption generation/translation',
          'Image rendering → Template overlay and export',
          'Response delivery → Optimized image output',
        ],
      },
    },
  ];

  const TrafficVisualization = () => (
    <div className="bg-muted/30 rounded-lg p-4 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-4 h-4 text-primary" />
        <span className="font-mono text-xs text-muted-foreground">TRAFFIC_ANALYSIS</span>
      </div>
      <div className="space-y-3">
        {/* Normal Traffic */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Normal Traffic</span>
            <span className="text-success">CLEAN</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-success/60 rounded-full animate-pulse-subtle" />
          </div>
        </div>
        {/* Attack Traffic */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">DDoS Attack</span>
            <span className="text-destructive">BLOCKED</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-destructive/60 rounded-full" />
          </div>
        </div>
        {/* Detection Rate */}
        <div className="pt-2 border-t border-border mt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Detection Rate</span>
            <span className="text-primary font-mono text-sm">95.7%</span>
          </div>
        </div>
      </div>
    </div>
  );

  const PipelineVisualization = () => (
    <div className="bg-muted/30 rounded-lg p-4 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-4 h-4 text-accent" />
        <span className="font-mono text-xs text-muted-foreground">REQUEST_PIPELINE</span>
      </div>
      <div className="space-y-2">
        {[
          { label: 'Request', status: 'complete', icon: Globe },
          { label: 'Processing', status: 'complete', icon: Activity },
          { label: 'AI Generation', status: 'complete', icon: Zap },
          { label: 'Response', status: 'complete', icon: CheckCircle2 },
        ].map((step, index) => (
          <div key={step.label} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
              <step.icon className="w-4 h-4 text-primary" />
            </div>
            <ArrowRight className="w-3 h-3 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{step.label}</span>
            <CheckCircle2 className="w-4 h-4 text-success ml-auto" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-4">
            <AlertTriangle className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-muted-foreground">PROJECT_ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Left: Project Info */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary">
                          {project.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <p className="text-xl font-bold text-primary">{metric.value}</p>
                          <p className="text-xs text-muted-foreground font-mono">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="glow-cyan">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Visualization */}
                  <div className="flex items-center">
                    {project.id === 'ddos' ? <TrafficVisualization /> : <PipelineVisualization />}
                  </div>
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="w-full mt-6 pt-4 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {expandedProject === project.id ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Hide Technical Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      View Technical Details
                    </>
                  )}
                </button>
              </div>

              {/* Expanded Details */}
              {expandedProject === project.id && (
                <div className="border-t border-border bg-muted/30 p-6 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Overview */}
                    <div>
                      <h4 className="font-mono text-sm text-primary mb-3">OVERVIEW</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.details.overview}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-mono text-sm text-primary mb-3">KEY_FEATURES</h4>
                      <ul className="space-y-2">
                        {project.details.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture */}
                    {project.details.architecture && (
                      <div className="md:col-span-2">
                        <h4 className="font-mono text-sm text-primary mb-3">ARCHITECTURE</h4>
                        <div className="flex flex-wrap items-center gap-2">
                          {project.details.architecture.map((step, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <span className="px-3 py-2 text-xs bg-muted rounded border border-border text-muted-foreground">
                                {step}
                              </span>
                              {index < project.details.architecture!.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
