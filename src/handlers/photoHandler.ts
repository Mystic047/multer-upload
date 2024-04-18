// src/handlers/photoHandler.ts

import { Request, Response } from 'express';
import findPhotoByUUID from '../useCases/servePhoto';

const servePhotoHandler = (req: Request, res: Response) => {
    const { uuid } = req.params;

    if (!uuid.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
      return res.status(400).send('Invalid UUID format');
    }
  
    findPhotoByUUID(uuid)
      .then(filePath => {
        res.sendFile(filePath);
      })
      .catch(error => {
        if (error === 'Image not found') {
          res.status(404).send(error);
        } else {
          console.error(error);
          res.status(500).send(error);
        }
      });
};

export default servePhotoHandler;
