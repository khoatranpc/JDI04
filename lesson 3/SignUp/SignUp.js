class SignUp {
    constructor() {
        this.form = document.createElement("form");
        this.form.method = 'POST';
        this.form.type = 'submit'
        this.form.classList.add('form-SignUp')
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.register();
        })

        this.label = document.createElement("label");
        this.label.innerHTML = 'SIGN UP'
        this.label.classList.add('label')


        this.inputAcc = document.createElement("input");
        this.inputAcc.placeholder = 'Type your account'
        this.inputAcc.name = 'account';
        this.accError = document.createElement('div')
        this.accError.classList.add('accError')


        this.inputPass = document.createElement("input");
        this.inputPass.placeholder = 'Enter your password'
        this.inputPass.name = 'password';
        this.inputPass.type = 'password';
        this.passError = document.createElement('div')
        this.passError.classList.add('passError')



        this.inputRePass = document.createElement("input");
        this.inputRePass.placeholder = 'Re-enter your password'
        this.inputRePass.type = 'password';
        this.inputRePass.name = 'rePassword';
        this.rePassError = document.createElement('div')
        this.rePassError.classList.add('rePassError')



        this.btn = document.createElement("button")
        this.btn.innerText = 'Enter'


        this.alreadyHaveAcc = document.createElement("a")
        this.alreadyHaveAcc.innerHTML = 'You already have an account?'
        this.alreadyHaveAcc.href = './Login/login.html'

    }
    renderForm(container) {
        this.form.appendChild(this.label)
        this.form.appendChild(this.inputAcc)
        this.form.appendChild(this.accError)
        this.form.appendChild(this.inputPass)
        this.form.appendChild(this.passError)
        this.form.appendChild(this.inputRePass)
        this.form.appendChild(this.rePassError)
        this.form.appendChild(this.btn)
        this.form.appendChild(this.alreadyHaveAcc)
        container.appendChild(this.form)
    }
    register() {
        const form = document.querySelector('form.form-SignUp');
        const account = form["account"];
        const password = form["password"];
        const repassword = form["rePassword"];
        try {
            if (account.value == '') throw new Error("Tài khoản chưa nhập")
            if (password.value !== repassword.value) throw new Error("Không khớp mật khẩu!")

            let existListUser = JSON.parse(localStorage.getItem('user'));
            let user = new Array();
            if (existListUser) { user.push(...existListUser); }
            const userAcc = {
                account: account.value,
                password: password.value
            }
            user.push(userAcc);
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            location.assign('../Login/login.html');

        } catch (error) {
            console.log(error.message);
        }


    }


}

export default SignUp