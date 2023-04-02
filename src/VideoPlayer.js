import React from 'react';

export const VideoPlayer = ({ file }) => {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src={file.url} type={file.mimeType} />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      <p>{file.name}</p>
    </div>
  );
};
