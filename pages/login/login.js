import app from "../../app.js"
import Register from "./register.js";
import {getAuth, signInWithEmailAndPassword}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
class Login{
    constructor(){
        //set title of html file 
        document.getElementsByTagName("title")[0].innerHTML = "Login";

    }

    initRender(cointainer){
        let title_form = document.createElement("div");
        title_form.id = "form_layout";
        let title_form_header = document.createElement("div");
        title_form_header.classList.add("form-title");
        let header_text = document.createElement("div");
        header_text.classList.add("title");
        header_text.innerText = "Login";
        title_form_header.appendChild(header_text)
        title_form_header.appendChild(document.createElement("hr"));

        let ava = document.createElement("div");
        ava.classList.add("avatar");
        let img = document.createElement("img");
        img.src = "https://harunmudak.com/wp-content/uploads/2020/12/deep-quotes-7.jpg";
        img.alt = "avatar";
        ava.appendChild(img);

        let loginForm = document.createElement("form");
        loginForm.innerHTML =`
        <div class="input-group mb-3">
            <span class="input-group-text" id="email-header">
              <i class="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              id="email"
              aria-describedby="basic-email-header"
            />
          </div>
  
          <div class="input-group mb-3">
            <span class="input-group-text" id="password-header">
              <i class="fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              id="pass"
              aria-describedby="password-header"
            />
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        `;
        let link_div = document.createElement("div");
        link_div.classList.add("other-link");
        link_div.innerText = "Haven't got an account? ";
        let link = document.createElement("a");
        link.id = "other-link"
        link.innerText = "Register";
        //add event for a 
        link.addEventListener("click",this.gotoRegister.bind(this));
        link_div.appendChild(link)

        title_form.appendChild(title_form_header)
        title_form.appendChild(ava);
        title_form.appendChild(loginForm);
        title_form.appendChild(link_div);

        cointainer.appendChild(title_form)
    


    }

    getLogin(e){
        //chặn phần di chuyển tự động của form 
        e.preventDefault();
        //get data
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        //sign in by firebase 
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            localStorage.setItem("current",JSON.stringify(user));
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //
            alert(errorMessage)
        });

        

    }

    gotoRegister(){
        const Register = new Register();
        app.changeActiveScreen(register);
    }

}
export default Login;