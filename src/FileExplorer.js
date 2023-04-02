import React, { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { VideoModal } from './VideoModal';

export const FileExplorer = ({ files }) => {
  const [currentPath, setCurrentPath] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const navigateTo = (path) => {
    setCurrentPath(path);
  };

  const navigateUp = () => {
    setCurrentPath(currentPath.slice(0, -1));
  };

  const openVideoModal = (file) => {
    setSelectedVideo(file);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const renderFiles = () => {
    const pathFiles = currentPath.reduce((acc, cur) => acc[cur].content, files);

    return pathFiles.map((file, index) => {
      if (file.type === 'folder') {
        return (
          <div key={index} onClick={() => navigateTo([...currentPath, index])}>
            <i className="fas fa-folder"></i> {file.name}
          </div>
        );
      } else if (file.type === 'video') {
        return (
          <div key={index} onClick={() => openVideoModal(file)}>
            <VideoPlayer file={file} />
          </div>
        );
      }
    });
  };

  return (
    <div>
      {currentPath.length > 0 && (
        <button onClick={navigateUp}>Retour</button>
      )}
      <div>{renderFiles()}</div>
      {selectedVideo && (
        <VideoModal file={selectedVideo} closeModal={closeVideoModal} />
      )}
    </div>
  );
};
