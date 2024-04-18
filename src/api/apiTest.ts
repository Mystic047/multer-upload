import { Router } from 'express';
import multer from '../config/multerConfig';
import uploadFile from '../handlers';

const router = Router();

// API endpoints
router.post('/upload', multer.single('photo'), uploadFile.uploadFileHandler);
router.get('/photo/:uuid', uploadFile.servePhotoHandler);

export default router;
