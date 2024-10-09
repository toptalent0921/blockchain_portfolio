import React from "react";
import WebsiteProjects from "./smallComponent/websiteProjects";
import BlockchainProjects from "./smallComponent/blockchainProjects";

const Projects = () => {
    return (
        <div>
            <WebsiteProjects />
            <BlockchainProjects />
        </div>
    );
};

export default Projects;
