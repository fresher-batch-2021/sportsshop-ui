function login() {
  event.preventDefault();
  const email1 = document.querySelector("#email").value;
  const password1 = document.querySelector("#pswd").value;
  if (email1 == "" || email1 == null) {
    alert("Enter Your Email");
    return false;
  }

  else if (password1 == "" || password1 == null) {
    alert("Enter password");
    return false;
  }

  else {

    const dbUsername = 'apikey-v2-1b9ybx2cx524ah258208o3jmatpq40vhw2s5oby211dw';
    const dbPassword = 'cd8a50d86762e2f6d802820e730df6d4';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = "https://09662a37-ebfa-4134-9465-fbd6ae4fc14f-bluemix.cloudantnosqldb.appdomain.cloud/sportsshop_user/_find"

    const loginData = {
      selector: {
        email: email1,
        password: password1
      }, fields: ['_id', 'email']

    }
    const usernameobj = {
      "email": email
    }
    console.log(usernameobj);
    localStorage.setItem('nameform', JSON.stringify(usernameobj));

    axios.post(url, loginData, { headers: { 'Authorization': basicAuth } }).then(res => {
      let data = res.data.docs;
      console.log(data);
      if (data.length == 0) {
        alert("invalid Login credentials");
      } else {
        const users = data[0];
        console.log(loginData);
        alert("successfull Login")
       window.location.href = "home.html";
      }
    }).catch(err => {
      console.log(err.response.data);
      alert(" invalid details");
    });
  }
}