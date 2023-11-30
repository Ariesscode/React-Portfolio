import React from 'react';
import ProjectCard from '../components/project-cards'; // Adjust the path
import projectImage from '../../../Assets/project2.png';
import projectImage2 from '../../../Assets/project1.png';
import projectImage3 from '../../../Assets/project3.png';


import '../styles/projects.css';

function Projects() {
    return (
        <div className="container pt-4">

            <section className="features-icons bg-light text-center m-4">
                <div className="container">
                    <div className="row p-2">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="bi-window m-auto text-primary" />
                                </div>

                                <ProjectCard
                                    imageUrl={projectImage2}
                                    title="CMS Blog App"
                                    description="Create an account, share posts with friends using all CRUD operations!"
                                    linkUrl="https://cmsblog-app-616ab098b945.herokuapp.com/"
                                    linkName="CMS Blog"
                                    repoLink="https://github.com/Ariesscode/CMS-Blog"
                                />


                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="bi-layers m-auto text-primary" />
                                </div>
                                <ProjectCard
                                    imageUrl={projectImage3}
                                    title="Note Taker App"
                                    description="Can't remember something? Take notes App is here to rescue!"
                                    linkUrl="https://takenotes0923-7072b42b7aee.herokuapp.com/"
                                    linkName="Note taker"
                                    repoLink="https://github.com/Ariesscode/Take-Notes0923"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="bi-terminal m-auto text-primary" />
                                </div>
                                <ProjectCard
                                    imageUrl={projectImage}
                                    title="F2F Blog App"
                                    description="Social app for web developers to share their ideas, snippets of code, and add resources!"
                                    linkUrl="https://f2f-blog-ad8f414d0b59.herokuapp.com/"
                                    linkName="F2F Blog"
                                    repoLink="https://github.com/newprice247/F2F-Blog"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
                impedit suscipit sed magnam alias in, repellat expedita hic explicabo
                architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Velit voluptate exercitationem quaerat pariatur
                mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
                nostrum temporibus ad omnis nam rerum eligendi.
            </p>
        </div>

    );
}
export default Projects;