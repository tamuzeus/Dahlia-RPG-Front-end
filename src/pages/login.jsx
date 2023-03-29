import styled from "styled-components";
import Singin from "../components/SignCard/sign-in";

export default function Login() {
    return (
        <>
            <LoginStyle>
                <Singin />
            </LoginStyle>
        </>
    );
}

const LoginStyle = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
`;
