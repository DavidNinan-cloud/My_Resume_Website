import React from 'react';
import Button from '@mui/material/Button';

const ResearchWebsiteButton = () => {
  const handleEmailButtonClick = () => {
    const email = 'davidsninan@gmail.com';
    const subject = 'Subject of the email';
    const body = 'Body of the email';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleEmailButtonClick}>
      Research Website
    </Button>
  );
};

export default ResearchWebsiteButton;
