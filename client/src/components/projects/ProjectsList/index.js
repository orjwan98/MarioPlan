import React from 'react'; 
import ProjectSummary from '../ProjectSummary'

const ProjectsList = () => {
    return (
        <div className="projects-list section">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary/>
        </div>
        
    )
}

export default ProjectsList;