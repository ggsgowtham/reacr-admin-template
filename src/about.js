import React, { useEffect, useContext,useState } from 'react';
import SideNavPage from './sidebar/sidebar';
import {useLocation} from 'react-router-dom';

const About = () => {
    const [form, setForm] = useState({id: '', email: '', first_name: '', last_name: ''});
    const location = useLocation();

    const userDetails = {
      id: location.state.person.id,
      first_name: location.state.person.first_name,
      last_name: location.state.person.last_name,
      email: location.state.person.email,
    }

    const handleChange = (evt) => {
        evt.preventDefault();
       setForm({
         ...userDetails,
         [evt.target.name]: evt.target.value
       }) 
    };
    
    const validation = () => {
      let err = {};
      if(!form.email) {
        err.email = 'Email is not correct required' 
      }
    };

    const showError = (errObj) => {
      let errMsg = '';
      for(let err in errObj) {
        errMsg += `${errObj[err]}. `;
      }
        alert(`Error: ${errMsg}`);
    };

    //Post the data updated in the form

    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validation();
      if(!errors) {
        console.log(form);
      }else{
        showError(errors);
      }
    }
    //console.log(form);
    return (  
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
              <SideNavPage />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">  
            <div style = {{ marginTop: 20 }}>
              <form action="" onSubmit={handleSubmit} >
                <fieldset>
                    <div className="form-group">
                      <label>ID</label>
                      <input type="text" 
                        className="form-control" 
                        id="id"  
                        name="id"
                        defaultValue={userDetails.id}
                        placeholder="ID" 
                        onChange={handleChange}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" 
                            className="form-control" 
                            id="exTitle"  
                            name="email"
                            defaultValue={userDetails.email}
                            placeholder="Enter email" 
                            onChange={handleChange}
                        />
                    </div>


                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" 
                            className="form-control" 
                            id="first_name"  
                            name="first_name"
                            defaultValue={userDetails.first_name}
                            placeholder="First Name" 
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" 
                            className="form-control" 
                            id="last_name"  
                            name="last_name"
                            defaultValue={userDetails.last_name}
                            placeholder="Last Name" 
                            onChange={handleChange}    
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
              </form>
          </div>
        </div> 
      </div>
    </div>
  );
     
}

export default About;
