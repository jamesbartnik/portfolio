import { Link } from "@tanstack/react-router";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  href: string;
}

export const ProjectCard = ({
  title,
  subtitle,
  image,
  tags,
  href,
}: ProjectCardProps) => {
  return (
    <Link
      to={href}
      className="group block overflow-hidden rounded-lg shadow transition hover:shadow-xl"
    >
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="bg-gray-100 p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded bg-gray-300 px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
