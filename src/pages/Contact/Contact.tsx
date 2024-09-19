import React from 'react';

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  return (
    <div>
      <h1>{language === 'pt' ? 'Contato' : 'Contact'}</h1>
      <p>{language === 'pt' ? 'Entre em contato comigo através deste formulário.' : 'Get in touch with me through this form.'}</p>
    </div>
  );
};

export default Contact;
