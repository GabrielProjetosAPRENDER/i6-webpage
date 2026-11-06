/**
 * EmailJS Configuration Keys
 * No painel do EmailJS, configure o destinatário do template para: atomicplays@hotmail.com
 */
const EMAILJS_SERVICE_ID: string = 'service_az2lhrc';
const EMAILJS_TEMPLATE_ID: string = 'template_lx52upm';
const EMAILJS_PUBLIC_KEY: string = 'qEHizmiFXN9NX4GFc';

export interface EmailPayload {
  form_type: 'Contato' | 'Solicitação de Demonstração';
  name: string;
  company?: string;
  role?: string;
  city?: string;
  phone?: string;
  email: string;
  message: string;
  websiteHoneypot?: string; // Invisible honeypot field
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
}

/**
 * Sanitiza entradas de texto para evitar injeções básicas de tags HTML
 */
function sanitizeInput(text: string | undefined): string {
  if (!text) return '';
  return text
    .trim()
    .replace(/<[^>]*>?/gm, '');
}

/**
 * Valida o formato de um endereço de e-mail
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Valida formatos básicos de telefone celular/fixo do Brasil
 */
function isValidPhone(phone: string | undefined): boolean {
  if (!phone) return true; // Opcional
  const numbersOnly = phone.replace(/\D/g, '');
  return numbersOnly.length >= 8 && numbersOnly.length <= 15;
}

/**
 * Detecta o nome amigável do navegador com base no User Agent
 */
function getBrowserName(ua: string): string {
  if (ua.includes('Chrome') && !ua.includes('Edg') && !ua.includes('OPR')) return 'Chrome';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('OPR') || ua.includes('Opera')) return 'Opera';
  return 'Navegador Desconhecido';
}

/**
 * Detecta o nome amigável do Sistema Operacional com base no User Agent
 */
function getOSName(ua: string): string {
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Macintosh') || ua.includes('Mac OS')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Sistema Desconhecido';
}

/**
 * Garante que nenhum valor de campo de string enviado seja vazio ou undefined, fornecendo fallback de "Não informado"
 */
function formatValue(value: string | undefined): string {
  if (!value || value.trim() === '') return 'Não informado';
  return value.trim();
}

/**
 * Serviço centralizado para envio de formulários via EmailJS REST API
 */
export async function sendContactEmail(payload: EmailPayload): Promise<SendEmailResponse> {
  // 1. Verificação de Honeypot contra robôs de spam
  if (payload.websiteHoneypot && payload.websiteHoneypot.trim() !== '') {
    console.warn('[SPAM detectado]: Envio interceptado pelo Honeypot.');
    return { success: true, message: 'Sua mensagem foi enviada com sucesso. Em breve nossa equipe entrará em contato.' };
  }

  // 2. Sanitização dos campos
  const sanitized = {
    name: sanitizeInput(payload.name),
    company: sanitizeInput(payload.company),
    role: sanitizeInput(payload.role),
    city: sanitizeInput(payload.city),
    phone: sanitizeInput(payload.phone),
    email: sanitizeInput(payload.email),
    message: sanitizeInput(payload.message),
  };

  // 3. Validação de campos obrigatórios
  if (!sanitized.name) {
    return { success: false, message: 'O nome é obrigatório.' };
  }
  if (!sanitized.email) {
    return { success: false, message: 'O e-mail é obrigatório.' };
  }
  if (!sanitized.message) {
    return { success: false, message: 'A mensagem é obrigatória.' };
  }

  // 4. Validação do formato de e-mail
  if (!isValidEmail(sanitized.email)) {
    return { success: false, message: 'Por favor, insira um endereço de e-mail válido.' };
  }

  // 5. Validação do formato do telefone
  if (sanitized.phone && sanitized.phone !== '' && !isValidPhone(sanitized.phone)) {
    return { success: false, message: 'Por favor, insira um número de telefone válido.' };
  }

  // 6. Limite de caracteres para a mensagem (1000 caracteres)
  if (sanitized.message.length > 1000) {
    return { success: false, message: 'A mensagem ultrapassou o limite de 1000 caracteres.' };
  }

  // 7. Geração de metadados técnicos dinâmicos
  const now = new Date();
  const dateStr = now.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' });
  
  const ua = navigator.userAgent;
  const browserStr = getBrowserName(ua);
  const osStr = getOSName(ua);
  const languageStr = navigator.language || 'pt-BR';
  const pageUrl = window.location.href;

  // 8. Assunto dinâmico com emojis e nomes formatados
  const formattedName = formatValue(sanitized.name);
  const formattedCompany = formatValue(sanitized.company);
  const subjectStr = payload.form_type === 'Contato'
    ? `📩 [Contato] ${formattedName} - ${formattedCompany}`
    : `🚀 [Solicitação de Demonstração] ${formattedName} - ${formattedCompany}`;

  // 9. Parâmetros padronizados enviados para o EmailJS
  const templateParams = {
    form_type: payload.form_type,
    subject: subjectStr,
    name: formattedName,
    company: formattedCompany,
    role: formatValue(sanitized.role),
    city: formatValue(sanitized.city),
    phone: formatValue(sanitized.phone),
    email: formatValue(sanitized.email),
    message: formatValue(sanitized.message),
    page: formatValue(pageUrl),
    date: dateStr,
    time: timeStr,
    browser: browserStr,
    os: osStr,
    language: languageStr,
    user_agent: ua,
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: templateParams,
      }),
    });

    console.log('EmailJS API Status:', response.status);

    if (response.ok) {
      const successText = await response.text();
      console.log('EmailJS API Response:', successText);
      return { success: true, message: 'Sua mensagem foi enviada com sucesso. Em breve nossa equipe entrará em contato.' };
    } else {
      const errText = await response.text();
      console.error('Erro retornado pelo EmailJS:', errText);
      return { success: false, message: `Erro do EmailJS (${response.status}): ${errText}` };
    }
  } catch (error: any) {
    console.error('Falha de rede ao conectar com EmailJS:', error);
    return { success: false, message: `Falha na conexão de rede: ${error?.message || 'Erro desconhecido'}` };
  }
}