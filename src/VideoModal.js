import React from 'react';

export const VideoModal = ({ file, closeModal }) => {
  return (
    <div className="video-modal">
      <div className="video-modal-content">
        <button onClick={closeModal}>Fermer</button>
        <video width="100%" height="auto" controls>
          <source src={file.url} type={file.mimeType} />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <p>{file.name}</p>
      </div>
    </div>
  );
};