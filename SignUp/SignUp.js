class SignUp{
    constructor(){
        // khởi tạo thuộc tính form
        this.form = document.createElement('form');
        this.form.method = 'POST';
        this.form.type='submit';
        this.form.classList.add('form-signUp');
        this.form.addEventListener('submit',(e)=>{
                e.preventDefault();
        })

        // tạo thuộc tính lable
        this.label = document.createElement('h1');
        this.label.innerHTML = 'Đăng kí tài khoản';


        //khởi tạo thuộc tính input acc
        this.inputAcc = document.createElement('input');
        this.inputAcc.placeholder = 'Type your account';
        this.inputAcc.name = 'account';

        //Khởi tạo thuộc tính input pass
        this.inputpass = document.createElement('input');
        this.inputpass.placeholder = 'Type your password';
        this.inputpass.name = 'pass';
        this.inputpass.type = 'password'

        //Khởi tạo thuộc tính nhập lại pass
        this.inputRePass = document.createElement('input');
        this.inputRePass.placeholder = 'Re-Type your password';
        this.inputRePass.name = 'repass';
        this.inputRePass.type = 'password'

         //Khởi tạo thuộc tính button
        this.btnConfirm = document.createElement('button');
        this.btnConfirm.innerHTML = 'Đăng kí nè!'

        //Khởi tạo link sang trang signin
        this.redirect = document.createElement('a');
        this.redirect.innerHTML = 'Bấm đi nè'
        this.redirect.href = './Signin.html'
    }
    //METHOD CLASS
    renderForm(container){
        this.form.appendChild(this.label);
        this.form.appendChild(this.inputAcc);
        this.form.appendChild(this.inputpass);
        this.form.appendChild(this.inputRePass);
        this.form.appendChild(this.btnConfirm);
        this.form.appendChild(this.redirect);
        container.appendChild(this.form);
    }
}

export default SignUp;