import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    // Fetch the repositories from the GitHub API
    fetch("https://api.github.com/users/pudiish/repos")
      .then((response) => response.json())
      .then((data) => {
        // Filter and sort the repositories
        const sortedRepos = data.sort((a, b) => {
          const isJavaScriptOrReact = (repo) =>
            repo.language === "JavaScript" || repo.name.toLowerCase().includes("react");

          if (isJavaScriptOrReact(a) && !isJavaScriptOrReact(b)) {
            return -1;
          } else if (!isJavaScriptOrReact(a) && isJavaScriptOrReact(b)) {
            return 1;
          } else {
            // If both are the same type (or neither is JS/React), sort by the most recently updated
            return new Date(b.updated_at) - new Date(a.updated_at);
          }
        });

        // Set the state to only the top 4 projects
        setRepos(sortedRepos.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  }, []);

  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my GitHub</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Top Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="p-4">
                <h3 className="text-lg font-bold">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </h3>
                <p className="mt-1 mb-5 text-sm">{repo.description || "No description available."}</p>
                <p className="text-sm font-medium">Language: {repo.language || "N/A"}</p>
                <p className="text-xs text-gray-500">Last updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button
            className="btn btn-outline"
            onClick={() => window.open("https://github.com/pudiish?tab=repositories", "_blank")}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
