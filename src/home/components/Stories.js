import React from 'react';

const Stories = () => {

    return (
        <React.Fragment>
             <section class="section-stories">
                <div class="bg-video">
                    <video class="bg-video__content" autoplay muted loop>
                        <source src="img/video.mp4" type="video/mp4" />
                        <source src="img/video.webm" type="video/webm" />
                        Your browser is not supported!
                    </video> 
                </div>

                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div> 
                <div class="row">
                    <div class="story">
                        <figure class="story__shape"> 
                            <img src="img/nat-8.jpg" alt="Satisfied customer" class="story__img" />
                            <figcaption class="story__caption">
                                Mary Smith
                            </figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                My home confort and was improved a lot with automation
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vitae, labore perspiciatis cumque odio ipsa ad eos cum temporibus porro repellendus, 
                                consequuntur quis provident sit.
                            </p>
                        </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="story">
                        <figure class="story__shape"> 
                            <img src="img/nat-9.jpg" alt="Satisfied customer" class="story__img" />
                            <figcaption class="story__caption">
                                Jack Wilson
                            </figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                My home confort and was improved a lot with automation
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vitae, labore perspiciatis cumque odio ipsa ad eos cum temporibus porro repellendus, 
                                consequuntur quis provident sit.
                            </p>
                        </div>
                    </div>
                </div> 

                <div class="u-center-text u-margin-top-huge">
                    <a href="" class="btn-text">Read all stories &rarr;</a>
                </div>
            </section> 
        </React.Fragment>
    );
};

export default Stories;