import React from 'react';

import img1 from '../../img/automation-1-small.jpg';
import img2 from '../../img/automation-2-small.jpg';
import img3 from '../../img/automation-3-small.jpg';


const About = () => {

    return (
        <React.Fragment>
             <section class="section-about">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Visit our exciting automation projects
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-2">
                        <h3 class="heading-tertiary u-margin-bottom-small">See some of our work</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus maiores, ipsam eligendi harum itaque molestias 
                            reprehenderit? Facilis sequi perspiciatis quos 
                            accusantium, velit eum, tempora debitis, 
                            quo laudantium et exercitationem impedit.
                        </p>
                        <h3 class="heading-tertiary u-margin-bottom-small">See some of our work</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus maiores, ipsam eligendi harum itaque molestias 
                            reprehenderit? Facilis sequi perspiciatis quos 
                            accusantium, velit eum, tempora debitis, 
                            quo laudantium et exercitationem impedit.
                        </p>
                        <a href="#" class="btn-text">Learn more &rarr;</a>
                    </div>
                    <div class="col-1-of-2">
                        <div class="composition">
                            <img src={img1} alt="Photo 1" class="composition__photo composition__photo--p1" />
                            <img src={img2} alt="Photo 2" class="composition__photo composition__photo--p2" />
                            <img src={img3} alt="Photo 3" class="composition__photo composition__photo--p3" />
                        </div>
                    </div>
                </div>
           </section>  
        </React.Fragment>
    );
};

export default About;