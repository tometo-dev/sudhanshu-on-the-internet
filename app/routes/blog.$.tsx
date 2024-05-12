import { Link } from "@remix-run/react";

// it would be better to throw 404 from the loader function
// and catch the error in a custom error boundary in the layout itself

export default function BlogSplat() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        {/* investigate why some tailwindcss classes are not working */}
        <div className="mx-auto">404 - page not found.</div>
        <p>
          You may visit <Link to="/blogs">/blogs</Link> for the list of blogs
          and then open any specific blog.
        </p>
      </div>
    </div>
  );
}
