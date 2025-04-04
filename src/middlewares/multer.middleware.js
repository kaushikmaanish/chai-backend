import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});

//multer ki help se hum user se file lenge
//or apne local server pe temporary uss file ko rakh lenge phir
//uske baad hum local server se file lenge
// or use cloudinary ke server p daal denge

//usne bola ki original name hi rkh kste hain file ka middleware
//ke temporary server mein kyuki thodi der m uss
//file ko delete hi kr denge pr vo ho kahan rhi h delete
