import { useState } from "react";
import FlipCard from "react-card-flip";
import styled from "styled-components";

export default function SignIn() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Body>
        <FlipCard isFlipped={isFlipped}>
          <Front>
            <Tittle>
              <Img
                src="https://1cd1ef4a95.cbaul-cdnwnd.com/e8c5b9933b741eb5018cd1f1d5863418/200000003-e637be637f/450/dahlia1-removebg-preview.webp?ph=1cd1ef4a95"
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
                  name="email"
                  id="email"
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
                  required
                />
                <FormLabel htmlFor="password" className="form__label">
                  Password
                </FormLabel>
              </FormGroup>
            </LoginArea>

            <Button type="submit">
              <ButtonText>Login</ButtonText>
            </Button>

            <SignUp onClick={handleClick}>Sign-Up</SignUp>
          </Front>

          <Back>
           
            <h1>Cadastre-se</h1>
            <button onClick={handleClick}>Voltar</button>
          </Back>
        </FlipCard>
      </Body>
    </>
  );
}


const Front = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Back = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;  

const Body = styled.div`
  background-color: #111;
  width: 35%;
  height: 450px;
  border-radius: 20px;

  @media only screen and (max-width: 670px) {
    width: 100%;
    border-radius: 0;
  }
`;

const Tittle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 25%;
`;

const Img = styled.img`
    width: 150px;
    height: 120px;
    margin-top: 20px;
`

const TittleText = styled.div`
    font-family: GreatVibes;
    color: #ffffff;
    display: flex;
    justify-content: center;
    font-size: 60px;
    margin-top: 5px;
    width: 100%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
    padding: 15px 0 0;
    width: 100%;
    margin-bottom: 15px;

    @media only screen and (max-width: 670px) {
        width: 100%
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-top: 10px;
    height: 35px;
    width: 80px;
    
    &:before {
        content: "";
        background: linear-gradient(
            45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000
        );
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        -webkit-filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing-button 20s linear infinite;
        transition: opacity 0.3s ease-in-out;
        border-radius: 10px;
    }

    @keyframes glowing-button{
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }

    &:after {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #222;
        left: 0;
        top: 0;
        border-radius: 10px;
    }
`;

const ButtonText = styled.div`
    font-family: cursive;
    font-size: 24px;
`;

const SignUp = styled.div`
    color: white;
    font-family: cursive;
    font-size: 20px;
    margin-top: 19px;
    text-decoration: underline;
    cursor: pointer;
    transition: 2s;

    &:hover{
        color: #38ef7d;
    }

`

const colors = {
    primary: '#11998e',
    secondary: '#38ef7d',
    white: '#fff',
    gray: '#9b9b9b'
}

const FormGroup = styled.div`
    position: relative;
    padding: 15px 0 0;
    margin-top: 5px;
    width: 70%;

    @media only screen and (max-width: 670px) {
    width: 90%;
  }
`;

const FormField = styled.input`
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${colors.gray};
    outline: 0;
    font-size: 16px;
    color: ${colors.white};
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }

    &:focus {
        ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: ${colors.primary};
        font-weight:700;
        }
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, ${colors.primary},${colors.secondary});
        border-image-slice: 1;
    }

    &:required,
    &:invalid {
        box-shadow:none;
  }
`;

const FormLabel = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${colors.gray};
`;