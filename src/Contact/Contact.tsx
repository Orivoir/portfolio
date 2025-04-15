import { Box, Button, Typography, Snackbar, Alert } from '@mui/material';
import { ValidationError } from '@formspree/react';
import { useContactForm } from './../hooks/use-contact-form';
import { ContactInput } from './ContactInput';
import { ContactTextarea } from './ContactTextarea';

export default function Contact() {
  const {
    formData,
    handleChange,
    onSubmit,
    isPending,
    isOpenFallback,
    messageFallback,
    alertSeverity,
    closeFallback,
    state
  } = useContactForm();

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ maxWidth: 500, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2, mt: 4, mb: 4 }}>
      <Typography variant="h5" component="h2" textAlign="center">
        Contactez-moi
      </Typography>

      <ContactInput
        name="email"
        label="Votre email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        disabled={isPending}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <ContactInput
        name="object"
        label="Objet"
        value={formData.object}
        onChange={handleChange}
        disabled={isPending}
      />

      <ContactTextarea
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        disabled={isPending}
      />

      <Button type="submit" variant="outlined" color="primary" disabled={isPending}>
        {isPending ? 'Envoi en cours...' : 'Envoyer'}
      </Button>

      <Snackbar open={isOpenFallback} autoHideDuration={5000} onClose={closeFallback}>
        <Alert onClose={closeFallback} severity={alertSeverity} variant="outlined" sx={{ width: '100%' }}>
          {messageFallback}
        </Alert>
      </Snackbar>
    </Box>
  );
}
