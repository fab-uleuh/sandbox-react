import React from 'react';
import { FileExplorer } from './FileExplorer';

const App = () => {
  const files = [
    {
      name: 'Dossier 1',
      type: 'folder',
      content: [
        {

          name: 'Dossier 1',
          type: 'folder',
          content: [
            {
              name: 'video1.mp4',
              type: 'video',
              url: 'http://localhost:8000/test.mov',
              mimeType: 'video/mp4',
            },
          ],
        },
        {
          name: 'video1.mp4',
          type: 'video',
          url: 'http://localhost:8000/test.mov',
          mimeType: 'video/mp4',
        },
      ],
    },
    {
      name: 'video2.mp4',
      type: 'video',
      url: 'http://localhost:8000/test.mov',
      mimeType: 'video/mp4',
    },
  ];

  return (
    <div>
      <h1>Explorateur de fichiers</h1>
      <FileExplorer files={files} />
    </div>
  );
};

export default App;
