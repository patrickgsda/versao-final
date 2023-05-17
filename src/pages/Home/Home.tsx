import React from "react";
import Typography from "@material-ui/core/Typography";
import Lottie from "react-lottie";
import groovyWalkAnimation from "./imgs/groovy-walk-cycle.json";

const Home = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: groovyWalkAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 64px)",
        }}
      >
        <Lottie options={lottieOptions} height={400} width={400} />{" "}
        <Typography variant="h3" gutterBottom>
          Seja muito bem-vinda Prof!
        </Typography>
        <Typography variant="h6">
          Esse trabalho foi feito com muito carinho e dedicação.
        </Typography>
        <Typography variant="h6">
          Espero que goste! ❤️
        </Typography>
      </div>
    </div>
  );
};

export default Home;
