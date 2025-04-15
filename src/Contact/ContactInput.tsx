import { TextField } from '@mui/material';

interface ContactInputProps {
  name: string;
  label: string;
  type?: string;
  value: string;
  disabled: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function ContactInput({ name, label, type = 'text', value, disabled, onChange }: ContactInputProps) {
  return (
    <TextField
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required
      fullWidth
    />
  );
}
