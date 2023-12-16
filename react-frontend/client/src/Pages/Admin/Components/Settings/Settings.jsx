import React from 'react';
import './Settings.css';
//import styling from 'bootstrap/dist/css/bootstrap.min.css';


function Settings() {
	return (
		<div>
			<div class="container bootstrap snippets bootdey">
      <h1 class="text-primary">Edit Profile</h1>
      <hr/>
	<div class="row">
      
      <div class="setting-info">
        <div class="text-center">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="avatar img-circle img-thumbnail" alt="avatar"/>
          <h6>Upload a different photo...</h6>
          
          <input type="file" class="form-control"/>
        </div>
      </div>
      
      
      <div class="personal-info">
        <form class="form-horizontal" >
          <div class="form-group">
            <div class="col-lg-8">
              <input class="form-control" type="text" placeholder='Enter First Name'/>
            </div>
          </div>
          <div class="form-group" style={{marginTop:'1rem'}}>
            <div class="col-lg-8">
              <input class="form-control" type="text" placeholder='Enter Last Name'/>
            </div>
          </div>
          <div class="form-group" style={{marginTop:'1rem'}}>
            <div class="col-lg-8">
              <input class="form-control" type="text" placeholder='Change Company'/>
            </div>
          </div>
          <div class="form-group" style={{marginTop:'1rem', marginBottom:'2rem'}}>
            <div class="col-lg-8">
              <input class="form-control" type="text" placeholder='Change Email Address'/>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>
<hr/>
		</div>
	);
}
export default Settings;