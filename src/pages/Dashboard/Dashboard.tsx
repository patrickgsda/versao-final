import React, { useEffect } from "react";
import Lottie from "react-lottie";
import unlockAnimation from "./imgs/unlock.json";
import { Button, Container, Typography } from "@material-ui/core";

const Dashboard = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: unlockAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const loggedUser = JSON.parse(localStorage.getItem("user")!);

  useEffect(() => {
    if (!loggedUser) {
      window.location.href = "/login";
    }
  }, [loggedUser]);

  return (
    <Container>
      <Lottie options={lottieOptions} height={400} width={400} />{" "}
      <Typography variant="h2">
        {loggedUser ? loggedUser.name : "Você"} está logado.
      </Typography>
      <Button
        fullWidth
        color="primary"
        variant="contained"
        onClick={() => window.location.href = "/login"}
      >
        Sair
      </Button>
    </Container>
  );
};

export default Dashboard;
