export const uploadImage = async(req, res) => {
    try {

        if(!req.file) {
            return res.status(400).json({message : "File is required"})
        }

        res.status(201).json({ImageUrl : req.file.path})



    } catch(err) {
        console.log("Error in uploadImage controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}