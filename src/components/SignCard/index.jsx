import { useState } from "react";
import FlipCard from "react-card-flip";
import logo from "../../assents/images/logo.webp"
import { Front, Body, Tittle, TittleText, Img, LoginArea, FormGroup, FormField, FormLabel, Button, ButtonText, SignUp, SignupArea, Back } from "./styled";
import { emailSchema, passwordSchema } from "../../schemas/login-schemas";
import { sendSignUpForm, sendSignInForm } from "../../services/loginApi";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [signUpForm, setSignUpForm] = useState({});
  const [signInForm, setSignInForm] = useState({});
  const navigate = useNavigate();

  //Card flip

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  //Sign-UP

  const handleInputChangeUp = (event) => {
    const { name, value } = event.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const signUpSendForm = () => {
    const passwordValidation = passwordSchema.validate(signUpForm.password);
    const emailValidation = emailSchema.validate(signUpForm.email);

    if (passwordValidation.error) {
      alert('Senha inválida! A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (emailValidation.error) {
      alert('email inválido! Verifique se não preencheu de forma incorreta!');
      return;
    }

    if (signUpForm.email === '' || signUpForm.email === ' ') {
      alert('Verifique seu email!');
      return;
    }

    if (signUpForm.password !== signUpForm.repeatpassword || signUpForm.password === '' || signUpForm.password === ' ') {
      alert('Verifique suas senhas!');
      return;
    }

    sendSignUpForm(signUpForm.email, signUpForm.password, isFlipped, setIsFlipped);
  }

  //Sign-IN

  const handleInputChangeIn = (event) => {
    const { name, value } = event.target;
    const nameChange = {
      "Loginemail": "email",
      "Loginpassword": "password"
    };

    const updatedName = nameChange[name] || name;
    setSignInForm({ ...signInForm, [updatedName]: value });
  };

  const handleSignInFormSubmit = event => {
    event.preventDefault();
    sendSignInForm(signInForm, navigate); 
  }

  return (
    <>
      <Body>
        <FlipCard isFlipped={isFlipped}>

          {/*Front card area -- LOGIN AREA*/}

          <Front>
            <Tittle>
              <Img
                src={logo}
                alt="Dahlia-Logo"
              />
              <TittleText>{"Dahlia"}</TittleText>
            </Tittle>

            <LoginArea>
              <FormGroup className="form__group field">
                <FormField
                  type="email"
                  className="form__field"
                  placeholder="Email"
                  name="Loginemail"
                  id="Login-email"
                  onChange={handleInputChangeIn}
                  required
                />
                <FormLabel htmlFor="Login-email" className="form__label">
                  Email
                </FormLabel>
              </FormGroup>

              <FormGroup className="form__group field">
                <FormField
                  type="password"
                  className="form__field"
                  placeholder="Password"
                  name="Loginpassword"
                  id="Login-password"
                  onChange={handleInputChangeIn}
                  required
                />
                <FormLabel htmlFor="Login-password" className="form__label">
                  Password
                </FormLabel>
              </FormGroup>
            </LoginArea>

            <Button type="submit" onClick={handleSignInFormSubmit}>
              <ButtonText>Login</ButtonText>
            </Button>

            <SignUp onClick={handleClick}>Sign-In</SignUp>
          </Front>

          {/*Back card area --- SIGN UP AREA*/}

          <Back>
            <Tittle>
              <Img
                src="https://1cd1ef4a95.cbaul-cdnwnd.com/e8c5b9933b741eb5018cd1f1d5863418/200000003-e637be637f/450/dahlia1-removebg-preview.webp?ph=1cd1ef4a95"
                alt="Dahlia-Logo"
              />
            </Tittle>

            <SignupArea>
              <FormGroup className="form__group field">
                <FormField
                  type="email"
                  className="form__field"
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={handleInputChangeUp}
                  required
                />
                <FormLabel htmlFor="email" className="form__label">
                  Email
                </FormLabel>
              </FormGroup>

              <FormGroup className="form__group field">
                <FormField
                  type="password"
                  className="form__field"
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={handleInputChangeUp}
                  required
                />
                <FormLabel htmlFor="password" className="form__label">
                  Password
                </FormLabel>
              </FormGroup>

              <FormGroup className="form__group field">
                <FormField
                  type="password"
                  className="form__field"
                  placeholder="repeatpassword"
                  name="repeatpassword"
                  id="repeatpassword"
                  onChange={handleInputChangeUp}
                  required
                />
                <FormLabel htmlFor="repeatpassword" className="form__label">
                  Repeat Password
                </FormLabel>
              </FormGroup>
            </SignupArea>

            <Button type="submit" onClick={signUpSendForm}>
              <ButtonText>OK!</ButtonText>
            </Button>

            <SignUp onClick={handleClick}>Sign-In</SignUp>
          </Back>

          {/*End card area*/}

        </FlipCard>
      </Body>
    </>
  );
}
