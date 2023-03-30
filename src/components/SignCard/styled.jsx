import styled from "styled-components";

export const Front = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Back = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  background-color: #111;
  width: 35%;
  height: 450px;
  border-radius: 20px;

  @media only screen and (max-width: 670px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const Tittle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 25%;
`;

export const Img = styled.img`
    width: 150px;
    height: 120px;
    margin-top: 20px;
`

export const TittleText = styled.div`
    font-family: GreatVibes, cursive;
    color: #ffffff;
    display: flex;
    justify-content: center;
    font-size: 60px;
    margin-top: 5px;
    width: 100%;
`;

export const LoginArea = styled.div`
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

export const SignupArea = styled.div`
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

export const Button = styled.button`
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

export const ButtonText = styled.div`
    font-family: cursive, GreatVibes;
    font-size: 24px;
`;

export const SignUp = styled.div`
    color: white;
    font-family: cursive, GreatVibes;
    font-size: 20px;
    margin-top: 19px;
    text-decoration: underline;
    cursor: pointer;
    transition: 1s;

    &:hover{
        color: #ef38e9;
    }

`

export const colors = {
  primary: '#11998e',
  secondary: '#38ef7d',
  white: '#fff',
  gray: '#9b9b9b'
}

export const FormGroup = styled.div`
    position: relative;
    padding: 15px 0 0;
    margin-top: 5px;
    width: 70%;

    @media only screen and (max-width: 670px) {
    width: 90%;
  }
`;

export const FormField = styled.input`
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

export const FormLabel = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${colors.gray};
`;

