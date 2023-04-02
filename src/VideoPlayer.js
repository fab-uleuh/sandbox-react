import React from 'react';

export const VideoPlayer = ({ file }) => {
  return (
    <div>
      <img
        src={"http://localhost:8000/test.png"}
        alt={file.name}
        width="320"
        height="240"
      />
      <p>{file.name}</p>
    </div>
  );
};
