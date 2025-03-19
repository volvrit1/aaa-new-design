// components/Breadcrumb.js
import Link from "next/link";

const Breadcrumb = ({ paths }: any) => {
  return (
    <nav className="flex items-center space-x-2 text-gray-50 mb-20">
      {paths.map((path: any, index: any) => (
        <div key={index} className="flex items-center space-x-2">
          {index < paths.length - 1 ? (
            <Link href={path.href}>
              <p className="font-[cabin] tracking-widest hover:text-blue-500">{path.label}</p>
            </Link>
          ) : (
            <span className="font-semibold">{path.label}</span>
          )}
          {index < paths.length - 1 && <span>/</span>}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
