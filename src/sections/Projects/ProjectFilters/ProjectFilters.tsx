import type { ProjectCategory } from "../../../data/projects";

interface ProjectFiltersProps {
  activeCategory?: ProjectCategory;
  onCategoryChange?: (category: ProjectCategory) => void;
}

const categories: ProjectCategory[] = [
  "All",
  "Residential",
  "Commercial",
  "Civil",
  "Renovation",
];

const ProjectFilters = ({
  activeCategory = "All",
  onCategoryChange,
}: ProjectFiltersProps) => {
  return (
    <div className="fixed top-17 w-full z-30 border-b border-black/10 bg-white/90 text-black backdrop-blur-sm ">
      <div className="mx-auto flex max-w-7xl items-center justify-center overflow-x-auto px-6 lg:px-8">
        <div className="flex min-w-max">
          {categories.map((category) => {
            const active = category === activeCategory;

            return (
              <button
                key={category}
                onClick={() => onCategoryChange?.(category)}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  overflow-hidden
                  px-6
                  py-5
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  transition-colors
                  duration-500
                  ${
                    active
                      ? "bg-[#111111] text-white"
                      : "text-black/85 hover:bg-[#111111] hover:text-white"
                  }
                `}
              >
                {/* <span
                  className={`
                    relative
                    transition-colors
                    duration-500
                    ${
                      active
                        ? "text-yellow"
                        : "text-black/20 group-hover:text-yellow"
                    }
                  `}
                >
                  0{index + 1}
                </span> */}

                <span className="relative">{category}</span>

                {/* Yellow underline indicator */}
                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-full
                    origin-left
                    bg-yellow
                    transition-transform
                    duration-300
                    ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;