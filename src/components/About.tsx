import { Award, FlaskConical, ShieldCheck, GraduationCap, Scissors, Clock, MapPin, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { HIGHLIGHTS, SALON, ABOUT_IMAGE, TEAM, type TeamMember } from '@/data/salon';

const ICONS: Record<string, LucideIcon> = {
  Award,
  FlaskConical,
  ShieldCheck,
  GraduationCap,
  Scissors,
};

function TeamCard({ member, idx }: { member: TeamMember; idx: number }) {
  return (
    <Reveal delay={((idx % 4) + 1) as 1 | 2 | 3 | 4} variant="scale">
      <div className="group relative rounded-2xl overflow-hidden border border-gold-500/15 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-2">
        <div className="relative h-80 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full glass-card text-[10px] font-light text-gold-200 tracking-wide">
            {member.experience}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-lg font-semibold text-white mb-0.5">{member.name}</h3>
          <p className="text-xs text-gold-300 font-light mb-1.5">{member.role}</p>
          <p className="text-xs text-neutral-400 font-light">{member.specialty}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-rose-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">
          <Reveal variant="left" className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/15 to-rose-500/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/20 group">
              <img
                src={ABOUT_IMAGE}
                alt="Hair Lounge Salon premium interior"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-ink-950" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Open Every Day</p>
                    <p className="text-gold-300 font-light text-sm">{SALON.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal variant="right">
              <span className="text-xs font-light tracking-[0.4em] text-gold-400/70 uppercase mb-3 block">
                Why Choose Us
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                The Lounge <span className="text-gradient-gold italic">Difference</span>
              </h2>
              <p className="text-neutral-400 font-light mb-10 leading-relaxed">
                We blend luxury with accessibility. Whether you're a college student looking
                for a fresh cut between classes or a professional seeking a complete
                makeover, our salon delivers a premium experience without the intimidating
                price tag.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {HIGHLIGHTS.map((highlight, idx) => {
                const Icon = ICONS[highlight.icon];
                return (
                  <Reveal key={highlight.title} delay={(idx + 1) as 1 | 2 | 3 | 4}>
                    <div className="group h-full rounded-2xl glass-card p-5 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-1">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mb-3 group-hover:from-gold-500/30 group-hover:to-gold-600/20 transition-all">
                        {Icon && <Icon className="w-5 h-5 text-gold-300" />}
                      </div>
                      <h3 className="font-display text-base font-semibold text-white mb-1.5">
                        {highlight.title}
                      </h3>
                      <p className="text-sm font-light text-neutral-400 leading-relaxed">
                        {highlight.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={3}>
              <div className="mt-6 flex items-center gap-2 text-sm text-neutral-400 font-light">
                <MapPin className="w-4 h-4 text-gold-400" />
                {SALON.address.line2}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="text-center mb-12">
          <span className="text-xs font-light tracking-[0.4em] text-gold-400/70 uppercase mb-3 block">
            Meet The Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Our Expert <span className="text-gradient-gold italic">Stylists</span>
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            Talented, passionate, and trained to deliver exactly the look you want.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6">
          {TEAM.map((member, idx) => (
            <TeamCard key={member.name} member={member} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
