import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';

export function useContactForm(formId: string = 'xzzeonwo') {
  const [formData, setFormData] = useState({ object: '', email: '', message: '' });
  const [isPending, setIsPending] = useState(false);
  const [isOpenFallback, setIsOpenFallback] = useState(false);
  const [messageFallback, setMessageFallback] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
  const [state, handleSubmit] = useForm(formId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    handleSubmit(e);
  };

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
  }, [state]);

  return {
    formData,
    handleChange,
    onSubmit,
    isPending,
    isOpenFallback,
    messageFallback,
    alertSeverity,
    closeFallback: () => setIsOpenFallback(false),
    state
  };
}
