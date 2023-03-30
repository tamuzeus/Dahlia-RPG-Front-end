import { useState } from "react";
import FlipCard from "react-card-flip";
import logo from "../../assents/images/logo.webp"
import { Front, Body, Tittle, TittleText, Img, LoginArea, FormGroup, FormField, FormLabel, Button, ButtonText, SignUp, SignupArea, Back } from "./styled";

export default function SignIn() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Body>
        <FlipCard isFlipped={isFlipped}>

          {/*Front card area*/}

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

          {/*Back card area*/}

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

              <FormGroup className="form__group field">
                <FormField
                  type="repeatpassword"
                  className="form__field"
                  placeholder="repeatpassword"
                  name="repeatpassword"
                  id="repeatpassword"
                  required
                />
                <FormLabel htmlFor="repeatpassword" className="form__label">
                  Repeat Password
                </FormLabel>
              </FormGroup>
            </SignupArea>

            <Button type="submit">
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
