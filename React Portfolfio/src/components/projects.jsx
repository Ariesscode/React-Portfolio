import React from 'react';
import ProjectCard from '../components/project-cards'; // Adjust the path

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
                                    imageUrl="path/to/your/image.jpg"
                                    title="Fully Responsive"
                                    description="This theme will look great on any device, no matter the size!"
                                    linkUrl="https://example.com/project1"
                                    linkName="name"
                                />


                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="bi-layers m-auto text-primary" />
                                </div>
                                <ProjectCard
                                    imageUrl="path/to/your/image.jpg"
                                    title="Fully Responsive"
                                    description="This theme will look great on any device, no matter the size!"
                                    linkUrl="https://example.com/project1"
                                    linkName="Note taker"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="bi-terminal m-auto text-primary" />
                                </div>
                                <ProjectCard
                                    imageUrl="path/to/your/image.jpg"
                                    title="Fully Responsive"
                                    description="This theme will look great on any device, no matter the size!"
                                    linkUrl="https://f2f-blog-ad8f414d0b59.herokuapp.com/"
                                    linkName="F2F Blog App"
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