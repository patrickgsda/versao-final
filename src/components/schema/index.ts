import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Digite seu nome de usuário"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória"),
    // .matches(
    //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%&*^-`?]).{8,}$/i,
    //   "Senha muito fraca"
    // ),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("E-mail necessário para efetuar login")
    .email("E-mail inválido"),
  password: yup.string().required("Senha necessária para efetuar login"),
});

