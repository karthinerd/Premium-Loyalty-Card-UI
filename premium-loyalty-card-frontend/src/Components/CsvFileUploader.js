import React, { useState } from "react";

const CsvUploader = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const allowedTypes = ["text/csv"];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(null);
      onUpload(selectedFile);
    } else {
      setFile(null);
      setError("Please select a CSV file");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".csv" />
      {error && <div className="error">{error}</div>}
      {file && <div className="success">{file.name} uploaded successfully!</div>}
    </div>
  );
};

export default CsvUploader;
