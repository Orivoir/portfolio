import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function Contact() {
  const [formData, setFormData] = useState({
    object: '',
    email: '',
    message: ''
  });

  const [isPending, setIsPending] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 Ajoute ici ta logique d'envoi (ex: appel à une API, emailjs, etc.)
    console.log('Données envoyées :', formData);

    setIsPending(true)

    // send data ->
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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


      <TextField
        label="Objet"
        name="object"
        disabled={isPending}
        value={formData.object}
        onChange={handleChange}
        required
        type='text'
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

      <Button type="submit" loading={isPending} variant="outlined" color="primary">
        Envoyer
      </Button>
    </Box>
  );
}
