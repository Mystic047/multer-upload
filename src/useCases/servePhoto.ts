// src/useCases/servePhoto.ts

import fs from 'fs';
import path from 'path';

const uploadsDir = path.join(__dirname, '../../uploads');

const findPhotoByUUID = (uuid: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readdir(uploadsDir, (err, files) => {
          if (err) {
            return reject('Server error when reading uploads directory');
          }
    
          const file = files.find(f => f.startsWith(uuid));
          if (!file) {
            return reject('Image not found');
          }
    
          resolve(path.join(uploadsDir, file));
        });
      });
};

export default findPhotoByUUID;
