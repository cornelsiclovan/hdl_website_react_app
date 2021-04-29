import React from 'react';

const Auth = () => {

    return (
       <React.Fragment>
           <section class="section-book">
                <div class="row">
                    <div class="book">
                        <div class="book__form">
                            <form action="#" class="form">
                                <div class="u-margin-bottom-medium">
                                    <h2 class="heading-secondary">
                                        Partener account 
                                    </h2>   
                                </div>  
                                <div class="form__group">
                                    <input type="text" class="form__input" placeholder="Full Name" id="name" required />
                                    <label for="name" class="form__label">Full Name</label>
                                </div>
                                <div class="form_group">
                                    <input type="email" class="form__input" placeholder="Email address" id="email" required />
                                    <label for="email" class="form__label">Email</label>
                                </div>
                                <div class="form__group u-margin-bottom-medium">
                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="login" name="account" />
                                        <label for="login" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Login
                                        </label>
                                    </div>
                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="new" name="account" />
                                        <label for="new" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Signup
                                        </label>
                                    </div>
                                </div>
                                <div class="form__group">
                                    <button class="btn btn--mov">
                                        Login 
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
       </React.Fragment>
    );
};

export default Auth;