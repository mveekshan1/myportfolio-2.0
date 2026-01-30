import { useState } from 'react';
import { Shield, ExternalLink, CheckCircle2, Lock, Key, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  mode: string;
  description: string;
  credentialUrl: string;
  verified: boolean;
}

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certifications: Certification[] = [
    {
      id: 'cisco',
      title: 'Junior Cybersecurity Analyst Career Path',
      issuer: 'Cisco Networking Academy',
      issueDate: 'May 2025',
      mode: 'Blended Learning',
      description: 'Foundational training in cybersecurity concepts including threat analysis, network security, and security monitoring.',
      credentialUrl: 'https://www.credly.com/badges/e510a8ff-7c03-4ad5-b563-9f98a23dda63/public_url',
      verified: true,
    },
    {
      id: 'google',
      title: 'Google Cloud Computing Foundations',
      issuer: 'Google Cloud',
      issueDate: 'Jul 2025',
      mode: 'Online',
      description: 'Hands-on foundational training in cloud computing concepts, virtual machines, and networking basics.',
      credentialUrl: 'https://www.skills.google/public_profiles/a3350b93-b5fe-4849-afc0-efeaf9951c98',
      verified: true,
    },
    {
      id: 'oracle',
      title: 'OCI 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      issueDate: 'Dec 2025',
      mode: 'Online',
      description: 'Foundational certification covering core concepts of artificial intelligence and machine learning.',
      credentialUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=C50CA37FE11F63A0C9373F73D50A6AAFAA51B8571E053E5C70F4F909B6DC881D',
      verified: true,
    },
  ];

  const getIssuerColor = (issuer: string) => {
    if (issuer.includes('Cisco')) return 'text-info';
    if (issuer.includes('Google')) return 'text-success';
    if (issuer.includes('Oracle')) return 'text-destructive';
    return 'text-primary';
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-4">
            <Lock className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-muted-foreground">SECURITY_VAULT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Verified <span className="text-primary">Credentials</span>
          </h2>
        </div>

        {/* Vault Container */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {/* Vault Header */}
          <div className="p-6 border-b border-border bg-muted/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Key className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Credential Vault</h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    {certifications.length} verified certificates
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/30">
                <Shield className="w-4 h-4 text-success" />
                <span className="text-xs font-mono text-success">ALL_VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
                  className={`relative p-5 rounded-lg border cursor-pointer transition-all duration-300 animate-fade-in ${
                    selectedCert === cert.id
                      ? 'bg-primary/5 border-primary/30 glow-cyan'
                      : 'bg-muted/30 border-border hover:border-primary/30 hover:bg-muted/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Verified Badge */}
                  <div className="absolute top-3 right-3">
                    {cert.verified && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 border border-success/30">
                        <CheckCircle2 className="w-3 h-3 text-success" />
                        <span className="text-xs text-success font-mono">VERIFIED</span>
                      </div>
                    )}
                  </div>

                  {/* Issuer Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}>
                    <Award className={`w-6 h-6 ${getIssuerColor(cert.issuer)}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <p className={`text-xs font-mono ${getIssuerColor(cert.issuer)}`}>
                      {cert.issuer}
                    </p>
                    <h4 className="font-semibold text-foreground text-sm leading-snug">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{cert.issueDate}</span>
                      <span>•</span>
                      <span>{cert.mode}</span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {selectedCert === cert.id && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                      <p className="text-sm text-muted-foreground mb-4">
                        {cert.description}
                      </p>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button size="sm" variant="outline" className="w-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Credential
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Vault Footer */}
          <div className="p-6 border-t border-border bg-muted/30">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  Blockchain-verified credentials
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Industry-recognized certifications
                </span>
              </div>
              <p className="text-xs font-mono text-muted-foreground">
                Last audit: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
