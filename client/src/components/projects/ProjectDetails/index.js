import React from 'react'; 

const ProjectDetails = (props) => {
    const {id} = props.match.params
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <h3 className="card-title">Project Title - {id}</h3>
                    <p>lorem epsum</p>
                </div>
                <div className="card-action ligten-darken-4 grey-text">
                    <p>
                        Posted by the net ninja
                    </p>
                     <p>
                        3rd September, 2am
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;