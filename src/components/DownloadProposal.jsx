import React from 'react';
import Button from '@mui/material/Button';

const DownloadProposal = () => {
  const handleEmailButtonClick = () => {
    const cvUrl = '/David_Ninan_Research_Proposal.pdf'; // Ensure this file is in your public folder
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'David_Ninan_Research_Proposal.pdf';
    link.click();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleEmailButtonClick}>
      Download Proposal
    </Button>
  );
};

export default DownloadProposal;
