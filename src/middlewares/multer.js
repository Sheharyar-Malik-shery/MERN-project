import multer from 'multer';

const storage = multer.diskStorage({    
    destination: (req, file, cb) => {
        cb(null, './public/temp'); // Specify the directory to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Use a unique filename
    }
});

const upload = multer({ storage: storage })
export {upload}
// const upload = multer({ 
//     storage: storage,
//     limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
//     fileFilter: (req, file, cb) => {
//         const allowedTypes = /jpeg|jpg|png|gif/; // Allowed file types
//         const extname = allowedTypes.test(file.mimetype);
//         if (extname) {
//             return cb(null, true);
//         } else {
//             cb(new Error('Only images are allowed'));
//         }
//     }
// });
