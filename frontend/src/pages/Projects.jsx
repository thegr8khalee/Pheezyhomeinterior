import React, { useEffect } from 'react';
import { useProjectsStore } from '../store/useProjectsStore';
import { Loader2 } from 'lucide-react';
import ProjectCard from '../components/projectCard';

const Projects = () => {
  const {
    fetchProjects,
    loading: LoadingProjects,
    projects,
  } = useProjectsStore();

  useEffect(() => {
    fetchProjects(1, 20);
  }, [fetchProjects]);

  if (LoadingProjects) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="ml-2 text-lg">Loading data...</p>
      </div>
    );
  }
  return (
    <div className="py-16">
      <div className="relative">
        <img
          src={
            'https://res.cloudinary.com/dqe64m85c/image/upload/v1753726979/Hero1_btyphr.jpg'
          }
          alt=""
          className="object-cover h-40 w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 mt-0 w-full mb-6 text-3xl font-bold text-center text-base-100 font-[poppins]">
            Projects
          </h1>
        </div>
      </div>
      <section className="my-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.length > 0 ? ( // Correct conditional check: use ? instead of (
          <>
            {' '}
            {/* Use a React Fragment to wrap multiple elements */}
            <div
              className="flex space-x-4 overflow-x-auto pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Map over the 'projects' array. Ensure you use a unique 'key' prop. */}
              {projects.map((project) => (
                <ProjectCard
                  key={project._id} // Assuming projects have a unique _id
                  project={project}
                />
              ))}
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
};

export default Projects;
