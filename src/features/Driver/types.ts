export interface NewDriverModalProps {
  onClose: () => void;
  onSubmit?: (newDriver: Driver) => void
}

export interface Driver{
  fullName: string;
  email: string;
  chf: string;
  shift: "manha" | "tarde" | "noite" | "";
  overtime: boolean;
}