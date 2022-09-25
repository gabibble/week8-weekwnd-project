import React, { useState } from "react";
import firebase from "firebase/app";
import { useSigninCheck } from "reactfire";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  Container,
  Button,
  Typography,
  Snackbar,
  Alert as MUIAlert,
  AlertProps,
  AlertTitle,
  CircularProgress,
  Stack,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Input } from "../sharedComponents/Input";
import { NavBar } from "../NavBar";

const signinStyles = {
//   googleButton: {
//     backgroundColor: "rgb(66,133,244)",
//     margin: "2em",
//     padding: "0",
    // color: "white",
//     height: "50px",
//     width: "240px",
//     border: "none",
//     textAlign: "center",
//     boxShadow: "rgb(0 0 0 / 25%) 0px 2px 4px 0px",
//     fontSize: "16px",
//     lineHeight: "48px",
//     display: "block",
//     borderRadius: "1px",
//     fontFamily: "Roboto, arial, sans-serif",
//     cursor: "pointer",
//   },
  googleLogo: {
    width: "48px",
    height: "48px",
    display: "block",
  },
  typographyStyle: {
    // fontFamily: "Roboto, arial, sans-serif;",
    // textAlign: "center",
    fontSize: "2em",
  },
  containerStyle: {
    marginTop: "6em",
  },
  snackBar: {
    color: "white",
    backgroundColor: "#4caf50",
  },
};





// Functional components to be used inside of SignIn Component
const Alert = (props: AlertProps) => {
  return <MUIAlert elevation={6} variant="filled" />;
};

interface buttonProps {
  open?: boolean;
  onClick?: () => void;
  text: string;
}

// Functional component to conditionally render Google SignIn Button
export const GoogleButton = (props: buttonProps) => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.email);
    }
  });

  const signIn = async () => {
    await signInWithGoogle();
    navigate("/dashboard");
  };

  const signUsOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (loading) {
    return <CircularProgress />;
  }
  if (auth.currentUser) {
    return (
      <Button variant="contained" color="info" onClick={signUsOut}>
        Sign Out
      </Button>
    );
  } else {
    return (
      <Button variant="contained" color="secondary" onClick={signIn}>
        {props.text}
      </Button>
    );
  }
};









export const SignIn = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSnackOpen = () => {
    setOpen(true);
  };
  const handleSnackClose = () => {
    setOpen(false);
    navigate("/dashboard");
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="sm" sx={signinStyles.containerStyle}>
        <Typography sx={signinStyles.typographyStyle}>Sign In Below</Typography>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <Input name="email" placeholder="place email here" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              placeholder="place password here"
              type="password"
            />
          </div>
          <Box mt={2}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <GoogleButton open={open} onClick={handleSnackClose} text="Sign in with Google"/>
            </Stack>
          </Box>
        </form>

        <Snackbar message="Success" open={open} autoHideDuration={3000}>
          <Alert severity="success">
            <AlertTitle>
              Successful Sign In --- Redirect in 3 seconds
            </AlertTitle>
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};
