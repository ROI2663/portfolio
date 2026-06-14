import BreakableJaText from "@/components/BreakableJaText";
import FadeIn from "@/components/FadeIn";
import { profile } from "@/lib/data";

export default function Profile() {
  return (
    <section id="profile" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">プロフィール</h2>
        </FadeIn>
        <FadeIn delay={0.1} className="glass-card mt-8 rounded-3xl border p-6 md:p-10">
          <p className="text-sm text-[var(--color-accent)]">代表 / AI活用コンサルタント</p>
          <h3 className="mt-2 text-3xl font-black">{profile.name}</h3>
          <p className="mt-4 text-xl font-semibold">{profile.heading}</p>
          <p className="mt-5 leading-8 text-[var(--color-muted)]">
            <BreakableJaText text={profile.career} className="card-copy" />
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/20 px-4 py-1 text-sm text-[var(--color-muted)]"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mt-7 leading-8 text-[var(--color-muted)]">
            <BreakableJaText text={profile.message} className="card-copy" />
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
