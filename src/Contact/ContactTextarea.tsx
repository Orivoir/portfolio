import { TextField } from '@mui/material';

interface ContactTextareaProps {
  name: string;
  label: string;
  value: string;
  disabled: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export function ContactTextarea({ name, label, value, disabled, onChange }: ContactTextareaProps) {
  return (
    <TextField
      name={name}
      label={label}
      multiline
      rows={4}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required
      fullWidth
    />
  );
}
