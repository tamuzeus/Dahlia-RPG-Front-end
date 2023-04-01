import axios from "axios";

const BASE_URL = "http://localhost:4000/"

export function sendSignUpForm(email, password, isFlipped, setIsFlipped) {
    axios.post(BASE_URL, {
        email: email,
        password: password
    })
        .then(response => {
            console.log(response);
            alert('Bem vindo a Dahlia Academy!')
            setIsFlipped(!isFlipped);
        })
        .catch(error => {
            if (error.response && error.response.status === 409) {
                alert('Este email já está em uso!');
            } else {
                console.log(error);
                alert(error.message);
            }
        });
}

export function sendSignInForm(signInForm, navigate) {
    const { email, password } = signInForm;
    const requestBody = {
        email,
        password,
    };
    axios
        .post('http://localhost:4000/login', requestBody)
        .then(response => {
            console.log('Login successful:', response.data);
            if (typeof window !== 'undefined') {
                localStorage.setItem('token', response.data.session.token);
            }
            console.log(localStorage)
            navigate('/home');
        })
        .catch(error => {
            console.error('Login error:', error);
            alert('Verique se digitou as informações corretamente!');
        });
}