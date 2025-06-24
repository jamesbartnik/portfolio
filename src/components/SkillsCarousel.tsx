import { skills } from "../data/skills.ts";

export function SkillsCarousel() {
  return (
    <div className="relative overflow-hidden py-8">
      <div
        className="animate-scroll flex w-max"
        aria-label="Skills carousel"
        role="list"
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="mx-4 flex min-w-[64px] flex-shrink-0 flex-col items-center justify-center gap-1"
            title={skill.name}
            role="listitem"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xs text-gray-500">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
