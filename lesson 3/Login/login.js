import SignUp from "../SignUp/SignUp.js";

class Login extends SignUp {
  constructor(form, label, inputAcc, inputPass, btn) {
    super(form, label, inputAcc, inputPass, btn);

    this.label.innerHTML = "SIGN IN";
    this.forgotPassword = document.createElement("a");
    this.forgotPassword.innerHTML = "You do not have an account?";
    this.forgotPassword.href = "../index.html";
    this.form.addEventListener('submit', this.authen);
  }
  show(app) {
    this.form.appendChild(this.label);
    this.form.appendChild(this.inputAcc);
    this.form.appendChild(this.inputPass);
    this.form.appendChild(this.btn);
    this.form.appendChild(this.forgotPassword);

    app.appendChild(this.form);
  }
  authen() {
    let Signin = document.querySelector("form.form-SignUp");
    const acc = Signin["account"];
    const password = Signin["password"];

    const existUer = JSON.parse(localStorage.getItem('user'));

    existUer.map((item) => {
      if (acc.value == item.account && password.value == item.password) alert("Khoa dep trai")
      else alert("Khong co ai dep trai")
    })
  }

}

export default Login;

let app = document.querySelector("#app");

let login = new Login();
login.show(app);
