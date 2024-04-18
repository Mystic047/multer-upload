import { Request, Response } from 'express';
import  handleFileUpload from '../useCases';

const uploadFileHandler = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'No file provided!' });
      return;
    }
    await handleFileUpload.handleFileUploadLogic(req.file);
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export default uploadFileHandler;
