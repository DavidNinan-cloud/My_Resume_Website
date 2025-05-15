import React from 'react';
import Button from '@mui/material/Button';

const DownloadCVButton = () => {
  const handleEmailButtonClick = () => {
    const cvUrl = '/DavidNinan-CV.pdf'; // Ensure this file is in your public folder
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'DavidNinan-CV.pdf';
    link.click();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleEmailButtonClick}>
      Download CV
    </Button>
  );
};

export default DownloadCVButton;
