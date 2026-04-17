import { Link } from "react-router-dom";

export default function Breadcrumb({ crumbs = [] }) {
  const isLong = crumbs.length > 2;

  return (
    <nav className="text-xs md:text-sm text-gray-500 flex items-center gap-1.5 mb-4 flex-wrap">
      
      {/* Home */}
      <Link to="/" className="hover:text-black transition whitespace-nowrap">
        Home
      </Link>

      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;

        // 👉 Hide middle items on mobile
        if (isLong && i > 0 && !isLast) {
          return (
            <span key={i} className="flex items-center gap-1.5">
              <span className="text-gray-400">/</span>
              <span className="hidden sm:inline">...</span>
            </span>
          );
        }

        return (
          <span key={i} className="flex items-center gap-1.5">
            <span className="text-gray-400">/</span>

            {crumb.href && !isLast ? (
              <Link
                to={crumb.href}
                className="hover:text-black transition whitespace-nowrap"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium break-words">
                {crumb.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}