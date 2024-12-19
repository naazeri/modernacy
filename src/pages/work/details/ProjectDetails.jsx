import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { projectId } = useParams();

  // Fetch project details based on projectId
  // For simplicity, we'll use a static example
  const project = {
    id: projectId,
    title: `Project ${projectId}`,
    description: `This is the details of project ${projectId}.`,
  };

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetails;
