import { Router } from 'express';
import multer from '../config'; // Adjust the path as necessary
import uploadFile from '../handlers';

const router = Router();

// API endpoints
router.post('/upload', multer.upload.single('photo'), uploadFile.uploadFileHandler);
router.get('/photo/:uuid', uploadFile.servePhotoHandler);

export default router;
