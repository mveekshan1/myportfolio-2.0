import { GraduationCap, MapPin, Mail, Globe, Linkedin, Calendar } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Malla Reddy College of Engineering",
      location: "Hyderabad, India",
      period: "2022 – Present",
      grade: "CGPA: 7.53 / 10",
      details: "Core coursework in Computer Networks, Operating Systems, DBMS, Algorithms, Software Engineering, with focus on Machine Learning and AI.",
    },
    {
      degree: "Intermediate (12th)",
      field: "Science (MPC)",
      institution: "Excellencia Junior College",
      location: "Shamirpet, India",
      period: "2020 – 2022",
      grade: "59.5%",
      details: "Mathematics, Physics, and Chemistry with emphasis on analytical reasoning.",
    },
    {
      degree: "Secondary School Certificate (10th)",
      field: "General Education",
      institution: "Meridian High School",
      location: "Siddipet, India",
      period: "2019 – 2020",
      grade: "GPA: 10.0",
      details: "Core secondary education with focus on mathematics and science.",
    },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "merugu.veekshangoud@gmail.com", href: "mailto:merugu.veekshangoud@gmail.com" },
    { icon: MapPin, label: "Location", value: "Siddipet, Telangana, India", href: null },
    { icon: Linkedin, label: "LinkedIn", value: "mveekshangoud", href: "https://www.linkedin.com/in/mveekshangoud" },
    { icon: Globe, label: "Portfolio", value: "myportfolio-veekshan", href: "https://myportfolio-veekshan.netlify.app/" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-4">
            <span className="font-mono text-sm text-muted-foreground">&gt; PROFILE_ANALYSIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">MV</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Merugu Veekshan Goud</h3>
                <p className="text-sm text-muted-foreground font-mono mt-1">CS Undergraduate</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm">
                    <item.icon className="w-4 h-4 text-primary shrink-0" />
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors truncate"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground truncate">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-mono text-xs text-muted-foreground mb-3">LANGUAGES</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Telugu</span>
                    <span className="text-primary">Native</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">English</span>
                    <span className="text-primary">C1/B2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-mono text-lg text-foreground">Education & Training</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-6 pb-6 last:pb-0 border-l-2 border-border last:border-transparent"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary border-2 border-background" />
                    
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <span className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-primary text-sm">{edu.field}</p>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Text */}
            <div className="bg-card border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground leading-relaxed">
                Computer Science and Engineering undergraduate with a strong academic foundation in 
                computer networks, operating systems, databases, and algorithms, with focused interest 
                in <span className="text-primary">cybersecurity</span> and <span className="text-primary">machine learning</span>. 
                Hands-on academic experience includes a semi-supervised machine learning project for 
                DDoS attack detection using network traffic analysis. Seeking a Master's degree in 
                Cybersecurity / Computer Science in Italy to develop advanced system-level and 
                security-oriented expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
