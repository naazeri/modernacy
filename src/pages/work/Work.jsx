import { Link } from 'react-router-dom';

function Work() {
  // Example list of projects
  const projects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
  ];

  return (
    <div>
      <h1>Work Page</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/work/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Work;
