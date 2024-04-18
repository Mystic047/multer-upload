import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const DIR = './uploads/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName);
  }
});

const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
      cb(null, true); 
      console.log('File Accepted');
    } else {
      cb(null, false);
      console.log('File not Accepted');
    }
};

const upload = multer({ storage, fileFilter });

export default upload;
