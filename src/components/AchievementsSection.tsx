import { useEffect, useState } from "react";
import { Award, Users } from "lucide-react";

/* Hack4SDG images */
const hack4sdgImages = [
  "/hackathons/hack4sdg/Certificate-HACK4SDG.jpg",
  "/hackathons/hack4sdg/TeamPhoto.jpg",
  "/hackathons/hack4sdg/Recognizing.jpg",
];

/* Hack-N-Win images */
const hackNWinImages = [
  "/hackathons/hacknwin/stage.jpg",
  "/hackathons/hacknwin/certificate.png",
];

const AchievementsSection = () => {
  const [hack4Index, setHack4Index] = useState(0);
  const [hackNWinIndex, setHackNWinIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setHack4Index((prev) => (prev + 1) % hack4sdgImages.length);
        setHackNWinIndex((prev) => (prev + 1) % hackNWinImages.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
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

        {/* ================= HACKATHON ACHIEVEMENTS ================= */}
        <div className="mb-20">
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-foreground">
              Hackathon Achievements
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Competitive hackathon recognitions demonstrating applied
              problem-solving, teamwork, and technical execution.
            </p>
          </div>

          {/* Unified Hackathon Card */}
          <div
            className="relative bg-card border border-border rounded-xl p-6
                       shadow-md shadow-black/30
                       transition-all duration-500
                       hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
          >
            <div className="relative grid md:grid-cols-2 gap-8">

              {/* Hack4SDG */}
              <div className="space-y-4">
                <div
                  className="relative h-64 w-full flex items-center justify-center
                             overflow-hidden rounded-lg border border-border
                             bg-muted/40"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <img
                    src={hack4sdgImages[hack4Index]}
                    alt="Hack4SDG Achievement"
                    className={`h-full w-full object-contain p-4
                      transition-opacity duration-500
                      ${fade ? "opacity-100" : "opacity-0"}
                    `}
                  />
                </div>

                <div className="pt-1">
                  <h4 className="text-lg font-semibold text-foreground">
                    Honourable Mention – Hack4SDG
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    IIT Hyderabad · AIESEC · 2024
                  </p>
                </div>
              </div>

              {/* Hack-N-Win */}
              <div className="space-y-4">
                <div
                  className="relative h-64 w-full flex items-center justify-center
                             overflow-hidden rounded-lg border border-border
                             bg-muted/40"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <img
                    src={hackNWinImages[hackNWinIndex]}
                    alt="Hack-N-Win Achievement"
                    className={`h-full w-full object-contain p-4
                      transition-opacity duration-500
                      ${fade ? "opacity-100" : "opacity-0"}
                    `}
                  />
                </div>

                <div className="pt-1">
                  <h4 className="text-lg font-semibold text-foreground">
                    3rd Place – Hack-N-Win
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Microsoft Hackathon · MRCE · 2024
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= VOLUNTEERING ================= */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-foreground">
            Volunteering
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Technical leadership and peer mentoring activities.
          </p>
        </div>

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
            peers with cybersecurity and machine learning concepts.
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
