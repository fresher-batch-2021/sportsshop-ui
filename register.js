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

    let userObj = {

      "firstName": name,
      "email": email,
      "password": pwd,
      "cpwd": cpwd,
    };

    let url = "https://product-mock-api.herokuapp.com/sportsshopapp/api/v1/auth/register";
    let formData = {
      name: name,
      email: email,
      password: pwd
    }

    axios.post(url, formData).then(res => {
      let data = res.data;
      console.log(data);
      console.log(userObj);

      alert("Registration Successfull");
      window.location.href = "login.html";

    }).catch(err => {
      console.error(err);
      alert("Unable to register");
    });

  }