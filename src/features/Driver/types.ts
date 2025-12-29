export interface NewDriverModalProps {
  onClose: () => void;
}

export interface DriverFormValues {
  fullName: string;
  email: string;
  chf: string;
  shift: "manha" | "tarde" | "noite" | "";
  overtime: boolean;
}