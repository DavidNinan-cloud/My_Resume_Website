import React from 'react';
import Button from '@mui/material/Button';
import { IoMdDownload } from "react-icons/io";

const DownloadCVButton = () => {
  const handleEmailButtonClick = () => {
    const cvUrl = '/Full-CV.pdf'; // Ensure this file is in your public folder
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Full-CV.pdf';
    link.click();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleEmailButtonClick}>
      <span className='hidden sm:block'>Download &nbsp;</span> CV <span className='block sm:hidden'> <IoMdDownload /> </span>
    </Button>
  );
};

export default DownloadCVButton;
