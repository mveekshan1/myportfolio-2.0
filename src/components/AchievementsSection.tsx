import { useEffect, useState } from "react";
import { Award, Users } from "lucide-react";

const images = [
  "/hackathons/hack4sdg/Certificate-HACK4SDG.jpg",
  "/hackathons/hack4sdg/Recognizing.jpg",
  "/hackathons/hack4sdg/TeamPhoto.jpg",
];

const AchievementsSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER (matches Projects style) */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              ACHIEVEMENTS_ARCHIVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Technical <span className="text-primary">Achievements</span>
          </h2>
        </div>

        {/* HACKATHON ACHIEVEMENT */}
        <div className="bg-card border border-border rounded-lg p-6 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* IMAGE SLIDER */}
            <div
              className="relative h-80 lg:h-96 flex items-center justify-center overflow-hidden rounded-lg border border-border bg-background"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <img
                src={images[index]}
                alt="Hack4SDG Achievement"
                className={`max-h-full max-w-full object-contain transition-all duration-500 ease-in-out
                  ${fade ? "opacity-100 scale-100" : "opacity-0 scale-100"}
                `}
              />
            </div>

            {/* TEXT */}
            <div className="space-y-4">
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary">
                Hackathon Achievement
              </span>

              <h3 className="text-xl font-semibold text-foreground">
                Honourable Mention – Hack4SDG (IIT Hyderabad)
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Recognized for SDG-focused innovation at Hack4SDG, IIT Hyderabad,
                emphasizing sustainability-driven problem solving, teamwork,
                and real-world impact.
              </p>

              <p className="text-xs text-muted-foreground font-mono">
                2024
              </p>
            </div>
          </div>
        </div>

        {/* TECHNICAL VOLUNTEERING */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-muted-foreground">
              TECHNICAL_VOLUNTEERING
            </span>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-2">
            Technical and Student Lead – Techie-Hub CSE
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Active contributor and student lead in Techie-Hub CSE, supporting
            technical mentoring, peer learning, and departmental initiatives.
            Played a role in organizing intra-college hackathons and assisting
            peers with cybersecurity and machine learning concepts under
            faculty guidance.
          </p>

          <p className="mt-3 text-xs text-muted-foreground font-mono">
            Hyderabad, India · 2023 – 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
