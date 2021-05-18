import React from 'react';


const ChangePasswordMain = () => {
    
    return (
        <React.Fragment>
            <div class="continue-shopping"> 
               

               <h1 style={{color: "black"}}>Change password</h1>
           </div>

           <form action="#" class="form">
               <div class="form_group">
                   <input type="text" class="form__input" placeholder="Your existing password" id="existing_password" required />
                   <label for="city" class="form__label">Your existing password</label>
               </div>   
               <div class="form_group">
                   <input type="text" class="form__input" placeholder="New password" id="new_password" required />
                   <label for="new_password" class="form__label">New password</label>
               </div> 

               <div class="form_group">
                   <input type="text" class="form__input" placeholder="Confirm password" id="confirm_password" required />
                   <label for="confirm_password" class="form__label">Confirm password</label>
               </div>   

               <center>
                   <button style={{marginTop: 1+"rem"}} class="btn btn--mov">
                       Change password 
                   </button>
               </center>
           </form>
           <br/>
           <br/>
        </React.Fragment>
    );
}

export default ChangePasswordMain;