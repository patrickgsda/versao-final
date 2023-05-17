import { useState } from "react";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import Lottie from "react-lottie";
import loginAnimation from "./imgs/login.json";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user")!);
    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      toast.success("Logado com sucesso!");
      setTimeout(() => navigate("/dashboard"), 2000);
      setEmail("");
      setPassword("");
    } else {
      toast.error("E-mail ou senha invalidos!");
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Lottie options={lottieOptions} height={400} width={400} />{" "}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="E-mail"
                type="email"
                variant="outlined"
                value={email}
                onChange={(event: any) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default Login;
