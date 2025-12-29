import * as Yup from "yup";

export const driverSchema = Yup.object({
  fullName: Yup.string()
    .required("Nome completo é obrigatório")
    .min(10, "Informe nome e sobrenome"),
  email: Yup.string()
    .required("Email corporativo é obrigatório")
    .email("Email inválido"),
  chf: Yup.string()
    .required("CHF é obrigatório")
    .matches(/^[A-Z]{2}\d{6}$/, "Formato inválido. Use algo como SP123456"),
  shift: Yup.string()
    .oneOf(["manha", "tarde", "noite"], "Turno inválido")
    .required("Turno preferencial é obrigatório"),
  overtime: Yup.bool().default(false),
});
