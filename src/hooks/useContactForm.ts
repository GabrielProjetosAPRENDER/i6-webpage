import { useState } from 'react';
import { sendContactEmail } from '../services/emailService';

export interface FormFields {
  name: string;
  email: string;
  message: string;
  company?: string;
  role?: string;
  city?: string;
  phone?: string;
  websiteHoneypot?: string;
}

export const useContactForm = (
  formType: 'Contato' | 'Solicitação de Demonstração',
  onSuccess?: () => void
) => {
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const submitForm = async (fields: FormFields) => {
    setIsSending(true);
    setErrorMsg('');

    try {
      const response = await sendContactEmail({
        ...fields,
        form_type: formType,
      });

      if (response.success) {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        setErrorMsg(response.message);
      }
    } catch (error: any) {
      console.error('Erro ao submeter formulário:', error);
      setErrorMsg('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.');
    } finally {
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return {
    isSending,
    isSubmitted,
    errorMsg,
    submitForm,
    resetForm,
    setErrorMsg,
  };
};