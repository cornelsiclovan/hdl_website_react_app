import React from 'react';

const AccountMain = () => {
    return (
        <React.Fragment>
            <div class="continue-shopping"> 

                <h1 style={{color: 'black'}}>Your account</h1>
            </div>

            <form action="#" class="form">
                <div class="form__group">
                <input type="text" class="form__input" placeholder="Full Name" id="name" required />
                <label for="name" class="form__label">Full Name</label>
                </div>
                <div class="form_group">
                <input type="email" class="form__input" placeholder="Email address" id="email" required/>
                <label for="email" class="form__label">Email</label>
                </div>   
                <div class="form_group">
                <input type="text" class="form__input" placeholder="Phone" id="phone" required />
                <label for="text" class="form__label">Phone</label>
                </div>   
                <div class="continue-shopping">  

                <h1 style={{color: 'black'}}>Company details</h1>
                </div>
                <div class="form_group">
                <input type="text" class="form__input" placeholder="Company" id="company" required />
                <label for="company" class="form__label">Company</label>
                </div>   
                <div class="form_group">
                <input type="text" class="form__input" placeholder="Organization ID" id="org_id" required />
                <label for="org_id" class="form__label">Organization ID</label>
                </div>   
                <div class="form_group">
                <input type="text" class="form__input" placeholder="Tax Registration ID" id="tax_reg_id" required />
                <label for="tax_reg_id" class="form__label">Tax Registration ID</label>
                </div>
                <div class="continue-shopping"> 

                <h1 style={{color: 'black'}}>Billing address</h1>
                </div>
                <div class="form_group">
                <input type="text" class="form__input" placeholder="Address" id="billing_address" required />
                <label for="billing_address" class="form__label">Address</label>
                </div>   
                <div class="form_group">
                <input type="text" class="form__input" placeholder="Address line" id="billing_address_line" required />
                <label for="billing_address_line" class="form__label">Address line</label>
                </div>   
                <div class="form_group">
                <input type="text" class="form__input" placeholder="Address line 2" id="billing_address_line2" required />
                <label for="billing_address_line2" class="form__label">Address line 2</label>
                </div>    
                <div class="form_group">
                <input type="text" class="form__input" placeholder="City" id="city" required />
                <label for="city" class="form__label">City</label>
                </div>   
                <div class="form_group">
                <input type="text" class="form__input" placeholder="Postal code" id="postal_code" required />
                <label for="postal_code" class="form__label">Postal code</label>
                </div> 
                <div class="form_group">
                <input type="text" class="form__input" placeholder="Country" id="country" required />
                <label for="country" class="form__label">Country</label>
                </div>   

                <div class="continue-shopping"> 

                <h1 style={{color: 'black'}}>Currency</h1>
                </div>
                <div class="form_group">
                <input type="text" class="form__input" placeholder="Currency" id="currency" required />
                <label for="currency" class="form__label">Currency</label>
                </div>   
                <center>
                <button style={{marginTop:  1+ "rem"}} class="btn btn--mov">
                    Modify 
                </button>
                </center>

            </form> 
            <br/>
            <br/>
        </React.Fragment>
    );
}

export default AccountMain;