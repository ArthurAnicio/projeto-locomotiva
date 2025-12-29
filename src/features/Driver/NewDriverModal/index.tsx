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
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { driverSchema } from "@/features/Driver/driverSchema";
import { NewDriverModalProps } from "../types";
import { initialValues } from "../constants";

export function NewDriverModal({ onClose }: NewDriverModalProps) {
  const formik = useFormik({
    initialValues,
    validationSchema: driverSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      alert(`Maquinista cadastrado:\n${JSON.stringify(values, null, 2)}`);
      setSubmitting(false);
      resetForm();
      onClose();
    },
  });

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };

  const handleChfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };

  const handleShiftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };

  const handleOvertimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };

  const fullNameError = formik.touched.fullName && Boolean(formik.errors.fullName);
  const emailError = formik.touched.email && Boolean(formik.errors.email);
  const chfError = formik.touched.chf && Boolean(formik.errors.chf);
  const shiftError = formik.touched.shift && Boolean(formik.errors.shift);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.modal}>
        <Box sx={styles.header}>
          Cadastrar Maquinista
          <Button sx={styles.close} onClick={onClose}>
            <CloseIcon />
          </Button>
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <Box sx={styles.form}>
            <TextField
              label="Nome completo"
              name="fullName"
              fullWidth
              value={formik.values.fullName}
              onChange={handleFullNameChange}
              onBlur={formik.handleBlur}
              error={fullNameError}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />

            <TextField
              label="Email corporativo"
              name="email"
              type="email"
              fullWidth
              value={formik.values.email}
              onChange={handleEmailChange}
              onBlur={formik.handleBlur}
              error={emailError}
              helperText={formik.touched.email && formik.errors.email}
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
              value={formik.values.chf}
              onChange={handleChfChange}
              onBlur={formik.handleBlur}
              error={chfError}
              helperText={formik.touched.chf && formik.errors.chf}
            />

            <TextField
              label="Turno preferencial"
              name="shift"
              select
              fullWidth
              value={formik.values.shift}
              onChange={handleShiftChange}
              onBlur={formik.handleBlur}
              error={shiftError}
              helperText={formik.touched.shift && formik.errors.shift}
            >
              <MenuItem value="manha">Manhã</MenuItem>
              <MenuItem value="tarde">Tarde</MenuItem>
              <MenuItem value="noite">Noite</MenuItem>
            </TextField>

            <FormControlLabel
              control={
                <Checkbox
                  name="overtime"
                  checked={formik.values.overtime}
                  onChange={handleOvertimeChange}
                  onBlur={formik.handleBlur}
                />
              }
              sx={{ color: "var(--black)" }}
              label="Disponível para hora extra"
            />

            <Box sx={styles.actions}>
              <Button
                type="submit"
                variant="contained"
                disabled={formik.isSubmitting}
                sx={styles.signUp}
              >
                Salvar
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
