import React from 'react';
import Button from '@mui/material/Button';

const EmailButton = () => {
  const handleEmailButtonClick = () => {
    const email = 'davidsninan@gmail.com';
    const subject = 'Subject of the email';
    const body = 'Body of the email';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Button variant="contained" color="primary" onClick={handleEmailButtonClick}>
      Email Me
    </Button>
  );
};

export default EmailButton;
