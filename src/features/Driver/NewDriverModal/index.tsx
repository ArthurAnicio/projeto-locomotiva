"use client";
import { styles } from "./NewDriverModal.styles";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Formik, Form } from "formik";
import { driverSchema } from "@/features/Driver/driverSchema";

interface NewDriverModalProps {
  close: () => void;
}

interface DriverFormValues {
  fullName: string;
  email: string;
  chf: string;
  shift: "manha" | "tarde" | "noite" | "";
  overtime: boolean;
}

const initialValues: DriverFormValues = {
  fullName: "",
  email: "",
  chf: "",
  shift: "",
  overtime: false,
};

export function NewDriverModal({ close }: NewDriverModalProps) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.modal}>
        <Box sx={styles.header}>
          Cadastrar Maquinista
          <Button sx={styles.close} onClick={close}>
            X
          </Button>
        </Box>

        <Formik
          initialValues={initialValues}
          validationSchema={driverSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("Novo maquinista:", values);
            alert(`Maquinista cadastrado:\n${JSON.stringify(values, null, 2)}`);
            setSubmitting(false);
            resetForm();
            close();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <Box sx={styles.form}>
                <TextField
                  label="Nome completo"
                  name="fullName"
                  fullWidth
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.fullName && Boolean(errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
                />
                <TextField
                  label="Email corporativo"
                  name="email"
                  type="email"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="CHF (ex: SP123456)"
                  name="chf"
                  fullWidth
                  value={values.chf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.chf && Boolean(errors.chf)}
                  helperText={touched.chf && errors.chf}
                />
                <TextField
                  label="Turno preferencial"
                  name="shift"
                  select
                  fullWidth
                  value={values.shift}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.shift && Boolean(errors.shift)}
                  helperText={touched.shift && errors.shift}
                >
                  <MenuItem value="manha">Manhã</MenuItem>
                  <MenuItem value="tarde">Tarde</MenuItem>
                  <MenuItem value="noite">Noite</MenuItem>
                </TextField>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="overtime"
                      checked={values.overtime}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  }
                  sx={{color:'var(--black)'}}
                  label="Disponível para hora extra"
                />

                <Box sx={styles.actions}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={styles.signUp}
                  >
                    Salvar
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
