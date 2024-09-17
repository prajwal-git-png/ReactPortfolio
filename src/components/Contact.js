 // Start of Selection
 import React from 'react';


 const Contact = () => {
   return (
     <section id="form">
       <h2 style={{ textAlign: 'start' }}>Contact</h2>

       <div className="form-container">
         <form className="form" action="https://api.web3forms.com/submit" method="POST">
           {/* Hidden access key for submission */}
           <input type="hidden" name="access_key" value="03554d9c-dba4-4aff-92f9-fd1f0f51abf9" />

           {/* Name field */}
           <div className="form-group">
             <label htmlFor="name">Name</label>
             <input
               type="text"
               id="name"
               name="name"
               placeholder="Your full name"
               required
             />
           </div>

           <div className="form-group">
             <label htmlFor="email">Your Email</label>
             <input
               type="email"
               id="email"
               name="email"
               placeholder="company@example.com"
               required
             />
           </div>

           <div className="form-group">
             <label htmlFor="textarea">How Can We Help You?</label>
             <textarea
               id="textarea"
               name="message"
               cols="50"
               rows="10"
               placeholder="Your message here..."
               required
             ></textarea>
           </div>

           <button type="submit" className="form-submit-btn">Submit</button>
         </form>
       </div>
     </section>
   );
 };

 export default Contact;

