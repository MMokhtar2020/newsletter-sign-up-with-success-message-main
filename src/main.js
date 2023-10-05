import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/utils.css';

let email_Btn = document.getElementById('email--btn');
let dismiss_Btn = document.getElementById('dismiss--btn');


email_Btn.onclick = () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let email = document.getElementById('email--input');
    let result = document.getElementById('email--p');
    let dyn_Email = document.getElementById('dyn--email');

    if (email.value.match(pattern)) {
        document.getElementById('main').style.display = 'none';
        document.getElementById('card').style.display = 'flex';
    } else {
        result.innerHTML = "Valid email required";
        email.style.backgroundColor = '#ff000020';
        email.style.borderColor = '#ff000060';
    };

    dyn_Email.innerHTML = email.value;
};

dismiss_Btn.onclick = () => {
    document.getElementById('main').style.display = '';
    document.getElementById('card').style.display = '';
}