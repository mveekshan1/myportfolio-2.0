import { useState } from 'react';
import { Shield, Brain, Code, Database, CheckCircle2, Activity } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  status: 'active' | 'learning' | 'certified';
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: Skill[];
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('security');

  const skillCategories: SkillCategory[] = [
    {
      id: 'security',
      title: 'Cybersecurity & Networking',
      icon: Shield,
      description: 'Network defense, threat detection, and security analysis',
      skills: [
        { name: 'DDoS Attack Detection', level: 85, status: 'active' },
        { name: 'Network Security', level: 80, status: 'active' },
        { name: 'Network Traffic Analysis', level: 85, status: 'active' },
        { name: 'Cybersecurity Fundamentals', level: 90, status: 'certified' },
        { name: 'Linux Systems', level: 75, status: 'active' },
        { name: 'Security Monitoring', level: 70, status: 'learning' },
      ],
    },
    {
      id: 'ml',
      title: 'Machine Learning for Security',
      icon: Brain,
      description: 'AI-powered threat detection and classification',
      skills: [
        { name: 'Classification Algorithms', level: 80, status: 'active' },
        { name: 'Feature Selection', level: 85, status: 'active' },
        { name: 'Data Preprocessing', level: 90, status: 'active' },
        { name: 'Semi-Supervised Learning', level: 75, status: 'active' },
        { name: 'Anomaly Detection', level: 80, status: 'active' },
        { name: 'Python ML Libraries', level: 85, status: 'active' },
      ],
    },
    {
      id: 'tech',
      title: 'Systems & Web Technologies',
      icon: Code,
      description: 'Programming languages and development tools',
      skills: [
        { name: 'Python', level: 90, status: 'active' },
        { name: 'Java', level: 75, status: 'active' },
        { name: 'JavaScript', level: 70, status: 'learning' },
        { name: 'Django', level: 65, status: 'learning' },
        { name: 'Bash Scripting', level: 70, status: 'active' },
        { name: 'Web Development', level: 75, status: 'active' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: Database,
      description: 'Development and cloud infrastructure',
      skills: [
        { name: 'Git Version Control', level: 85, status: 'active' },
        { name: 'Google Cloud', level: 70, status: 'certified' },
        { name: 'Firebase', level: 65, status: 'active' },
        { name: 'GitLab', level: 75, status: 'active' },
        { name: 'Apache', level: 60, status: 'learning' },
        { name: 'Streamlit', level: 80, status: 'active' },
      ],
    },
  ];

  const activeSkillCategory = skillCategories.find(c => c.id === activeCategory);

  const getStatusColor = (status: Skill['status']) => {
    switch (status) {
      case 'active':
        return 'text-success bg-success/10';
      case 'certified':
        return 'text-primary bg-primary/10';
      case 'learning':
        return 'text-accent bg-accent/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusLabel = (status: Skill['status']) => {
    switch (status) {
      case 'active':
        return 'ACTIVE';
      case 'certified':
        return 'CERTIFIED';
      case 'learning':
        return 'LEARNING';
      default:
        return 'UNKNOWN';
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-4">
            <Activity className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">SKILL_MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Technical <span className="text-primary">Capabilities</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <p className="font-mono text-xs text-muted-foreground px-3 mb-4">MODULES</p>
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    activeCategory === category.id
                      ? 'bg-primary/10 border border-primary/30 text-primary'
                      : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <category.icon className={`w-5 h-5 ${
                    activeCategory === category.id ? 'text-primary' : ''
                  }`} />
                  <span className="text-sm font-medium">{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            {activeSkillCategory && (
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3 mb-2">
                    <activeSkillCategory.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {activeSkillCategory.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {activeSkillCategory.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeSkillCategory.skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="p-4 rounded-lg bg-muted/30 border border-border/50 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-success" />
                            <span className="font-medium text-foreground text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-xs font-mono px-2 py-0.5 rounded ${getStatusColor(skill.status)}`}>
                            {getStatusLabel(skill.status)}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-1">
                          <Progress value={skill.level} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground font-mono">
                            <span>Proficiency</span>
                            <span>{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Stats */}
                <div className="p-6 border-t border-border bg-muted/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        {activeSkillCategory.skills.filter(s => s.status === 'active').length}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">ACTIVE</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">
                        {activeSkillCategory.skills.filter(s => s.status === 'learning').length}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">LEARNING</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-success">
                        {activeSkillCategory.skills.filter(s => s.status === 'certified').length}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">CERTIFIED</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
