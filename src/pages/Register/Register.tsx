import { Container, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/schema";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import registerAnimation from "./imgs/register.json";

const Register = () => {
  const navigate = useNavigate();
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: registerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(schema) });

  const createUser = (data: any) => {
    const newData = {
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmPassword,
      name: data.name,
    };

    localStorage.setItem("user", JSON.stringify(newData));
    toast.success("Conta criada com sucesso!");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <>
      <Container>
        <Lottie options={lottieOptions} height={400} width={400} />{" "}
        <FormContainer>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(createUser)}>
            <Input
              data-cy="name/register"
              placeholder="Nome"
              name="name"
              type="text"
              maxLength={15}
              register={register}
              error={`${errors.name?.message}`}
            />
            <Input
              data-cy="email/register"
              placeholder="E-mail"
              name="email"
              type="email"
              register={register}
              error={`${errors.email?.message}`}
            />
            <Input
              data-cy="password/register"
              placeholder="Senha"
              name="password"
              type="password"
              register={register}
              error={`${errors.password?.message}`}
            />
            <Input
              data-cy="confirmpassword/register"
              placeholder="Confirmar Senha"
              name="confirmPassword"
              type="password"
              register={register}
              error={`${errors.confirmPassword?.message}`}
            />
            <Button fullWidth color="primary" variant="contained" type="submit">
              Registrar
            </Button>
            <p>
              Já possui um cadastro? <Link to="/login">faça seu login</Link>
            </p>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
