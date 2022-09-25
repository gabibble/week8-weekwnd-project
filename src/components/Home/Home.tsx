import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import home from "../../assets/images/home.jpg";
import { NavBar } from "../NavBar";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { GoogleButton } from "../SignIn";

interface Props {
  title: string;
}
//nav bar is separate component
const Root = styled("div")({
  padding: 0,
  margin: 0,
});
const Main = styled("main")({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(15, 20, 80, .9)), url(${home});`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "absolute",
});
const MainText = styled("div")({
  textAlign: "center",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
});

export const Home = (props: Props) => {
  const auth = getAuth();
  if (auth.currentUser) {
    return (
      <Root>
        <NavBar />
        <Main>
          <MainText className="main-home">
            <h1>{props.title}</h1>
            <p> Start Trippin'.</p>
            <br />
            <Button
              color="secondary"
              variant="contained"
              component={Link}
              to="/dashboard"
            >
              Plan a trip
            </Button>
          </MainText>
        </Main>
      </Root>
    );
  } else {
    return (
      <Root>
        <NavBar />
        <Main>
          <MainText className="main-home">
            <h1>{props.title}</h1>
            <p> Start Trippin'.</p>
            <br />
            <Button
              color="secondary"
              variant="contained"
              component={Link}
              to="/signin"
            >
              Plan a trip
            </Button>
          </MainText>
        </Main>
      </Root>
    );
  }
};
