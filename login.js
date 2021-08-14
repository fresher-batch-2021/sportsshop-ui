function login() {
    event.preventDefault();
    const email1 = document.querySelector("#email").value;
    if (email1 == "" || email1 == null) {
      alert("Enter Your Email");
      return false;
    }
    const password1 = document.querySelector("#pswd").value;
    if (password1 == "" || password1 == null) {
      alert("Enter password");
      return false;
    }

    let url = "https://product-mock-api.herokuapp.com/sportsshopapp/api/v1/auth/login";
    let formData = {
      email: email1,
      password: password1
    }

    axios.post(url, formData).then(res => {
      let data = res.data;
      console.log(data);
      alert("Successfully Login");
      window.location.href = "home.html";
    }).catch(err => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      alert("Error-" + errorMessage);
    });

  }
