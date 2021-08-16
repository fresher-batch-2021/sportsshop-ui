function register() {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    console.log(name);
    if (name == null || name == "" || name.trim() == "") {
      alert("invalid name");
      return false;
    }

    const email = document.querySelector("#email").value;
    console.log(email);
    if (email == null) {
      alert("invalid email");
      return false;
    }

    const pwd = document.querySelector("#pswd").value;
    console.log(pwd);
    if (pwd == "") {
      alert("invalid password");
      return false;
    }

    const cpwd = document.querySelector("#cpswd").value;
    console.log(cpwd);
    if (pwd != cpwd) {
      alert("password doesn't match");
      return false;
    }


    let formData = {
      name: name,
      email: email,
      password: pwd,
      cpwd:cpwd
    }

    const dbusername = 'apikey-v2-1b9ybx2cx524ah258208o3jmatpq40vhw2s5oby211dw';
    const dbpassword = 'cd8a50d86762e2f6d802820e730df6d4';
    const basicAuth = 'Basic ' + btoa(dbusername + ':' + dbpassword);

    const url ="https://09662a37-ebfa-4134-9465-fbd6ae4fc14f-bluemix.cloudantnosqldb.appdomain.cloud/sportsshop_user";
    axios.post(url, formData,{headers:{'Authorization': basicAuth}}).then(res => {
      let data = res.data;
      console.log(data);

      alert("Registration Successfull");
      window.location.href = "login.html";

    }).catch(err => {
      console.error(err.response.data);
      alert("Unable to register");
    });

    passing_username();
    
  }

  function passing_username(){    
    var userName = document.querySelector("#name").value;    
    let username_data = {
        "username": userName,        
    };
    console.log(username_data);        
    localStorage.setItem('user',JSON.stringify(username_data));    
}


