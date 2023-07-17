import fs from "fs"
import {join} from "path"

export const config={
    api:{
        bodyParser:{
            sizeLimit:'50mb',
        }
    }
}

export default function handler(req,res){
    if(req.method==="GET"){
        return res.json({
            data:"ok"
        })
    }
    else if(req.method==="POST"){
        try {
            const file = req.body.selectedImage;
            // console.log(file)
            if (!file) {
                return res.status(400).json({ message: 'No image file uploaded' });
            }

            const base64Data = file.replace(/^data:image\/\w+;base64,/, '');
            const dataBuffer = Buffer.from(base64Data, 'base64');
            const fileName = Date.now().toString() + '.png'; // Example: Generate a unique file name
            const filePath = join(process.cwd()+"/pages/api/images",fileName);
            console.log(filePath)
            // console.log(process.cwd())
            fs.writeFile(filePath, dataBuffer, (error) => {
                if (error) {
                    console.error(error);
                    return res.status(200).json({ message: 'Failed to upload file' });
                }
              // File upload successful
                    return res.status(200).json({ message: 'File uploaded successfully',filepath: filePath });
            });
        } 
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server Error' });
        }
    }
}