import { object, string, ref } from "yup";

export const signupSchema = object().shape({
  email: string().required("Email Es Requerido").email("Email no Valido"),
  password: string()
    .required("Calve requerida")
    .min(6, "La clave debe ser de al menos 6 caracteres"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Las claves deben coincidir")
    .required(),
});
