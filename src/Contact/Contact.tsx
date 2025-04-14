import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    object: '',
    email: '',
    message: ''
  });

  const [isPending, setIsPending] = useState<boolean>(false);
  const [isOpenFallback, setIsOpenFallback] = useState(false);
  const [messageFallback, setMessageFallback] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');

  const [state, handleSubmit] = useForm("xzzeonwo"); // Remplace par ton ID Formspree

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    handleSubmit(e);
  };

  // ⬇️ Observer les changements dans l’état de Formspree
  useEffect(() => {
    if (state.succeeded) {
      setAlertSeverity('success');
      setMessageFallback('Message envoyé avec succès !');
      setIsOpenFallback(true);
      setFormData({ object: '', email: '', message: '' });
      setIsPending(false);
    } else if (state.errors && state.errors.getAllFieldErrors().length > 0) {
      setAlertSeverity('error');
      setMessageFallback('Erreur lors de l’envoi du message.');
      console.error('Formspree errors:', state.errors);
      setIsOpenFallback(true);
      setIsPending(false);
    }
  }, [state.succeeded, state.errors]);

  const onCloseFallback = () => {
    setIsOpenFallback(false);
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        maxWidth: 500,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mt: 4,
        mb: 4
      }}
    >
      <Typography variant="h5" component="h2" textAlign="center">
        Contactez-moi
      </Typography>

      <TextField
        disabled={isPending}
        label="Votre email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <TextField
        label="Objet"
        name="object"
        disabled={isPending}
        value={formData.object}
        onChange={handleChange}
        required
        type="text"
        fullWidth
      />

      <TextField
        label="Message"
        name="message"
        disabled={isPending}
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        required
        fullWidth
      />

      <Button type="submit" variant="outlined" color="primary" disabled={isPending}>
        {isPending ? 'Envoi en cours...' : 'Envoyer'}
      </Button>

      <Snackbar
        open={isOpenFallback}
        autoHideDuration={5000}
        onClose={onCloseFallback}
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 1,
          outline: "none",
        }}
      >
        <Alert
          onClose={onCloseFallback}
          severity={alertSeverity}
          variant="outlined"
          sx={{
            width: '100%',
            border: 'none',
            outline: 'none',
          }}
        >
          {messageFallback}
        </Alert>
      </Snackbar>
    </Box>
  );
}
