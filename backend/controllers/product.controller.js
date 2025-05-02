import Product from "../models/product.model.js"

export const createProduct = async(req, res) => {
    try {
        const {
            name, description, price, discountPrice,
            countInStock, category, brand, sizes, colors,
            collections, material, gender, images, isFeatured, 
            isPublished, tags, dimensions, weight, sku
        } = req.body

        if(
            !name || !description || !price || !discountPrice ||
            !countInStock || !category || !brand || !sizes || !colors ||
            !collections || !material || !gender || !images || !isFeatured ||
            !isPublished || !tags || !dimensions || !weight || !sku
        ) return res.status(400).json({message : "All fields are required!"})

        const newProduct = await Product.create({...req.body, user : req.user._id})

        res.status(200).json({
            product : newProduct, 
            message : "Product created successfully!"
        })

    } catch(err) {
        console.log("Error in createProduct controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const updateProduct = async(req, res) => {
    try {
        const updates = req.body
        const productId = req.params.id

        const product = await Product.findById(productId)
        if(!product) {
            return res.status(404).json({message : "Product not found!"})
        }

        const updatedProduct = await Product.findByIdAndUpdate(productId, updates, {
            new : true, runValidators : true
        })
        res.status(200).json({updatedProduct, message : "Product updated successfully!"})

    } catch(err) {
        console.log("Error in updateProduct controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const deleteProduct = async(req, res) => {
    try {
        const productId = req.params.id
        const product = await Product.findById(productId)

        if(product) {
            await product.deleteOne()
            res.status(200).json({message : "Product deleted successfully!"})
        } else {
            return res.status(404).json({message : "Product not found!"})
        }

    } catch(err) {
        console.log("Error in deleteProduct controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const getProducts = async(req, res) => {
    try {
        const { collection, size, color, gender, minPrice, maxPrice, sortBy, search, category, material, brand, limit } = req.query

        const query = {}

        if(collection && collection.toLocaleLowerCase() !== "all"){
            query.collection = collection
        }
        if(category && category.toLocaleLowerCase() !== "all"){
            query.category = category
        }
        if(material){
            query.material = {$in : material.split(", ")}
        }
        if(brand){
            query.brand = {$in : brand.split(", ")}
        }
        if(size){
            query.sizes = {$in : size.split(", ")}
        }
        if(color) {
            query.colors = {$in : [color]}
        }
        if(gender) {
            query.gender = gender
        }
        if(minPrice || maxPrice){
            query.price = {}
            if(minPrice) query.price.$gte = Number(minPrice)
            if(maxPrice) query.price.$lte = Number(maxPrice)
        }

        if(search) {
            query.$or = [
                { name : {$regex : search, $options : "i"} },
                { description : {$regex : search, $options : "i"} }
            ]
        }

        let sort = {}
        if(sortBy) {
            switch (sortBy) {
                case "priceAsc" :
                    sort = {price : 1}
                    break
                case "priceDesc" :
                    sort = {price : -1}
                    break
                case "popularity" :
                    sort = {rating : -1}
                    break
                default :
                    break
            }
        }

        let products = await Product.find(query)
            .sort(sort)
            .limit(Number(limit) || 0)
        
        res.status(200).json(products)
    } catch(err) {
        console.log("Error in getProducts controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const getProduct = async(req, res) => {
    try {
        const productId = req.params.id
        if(!productId) return res.status(400).json({message : "Product ID is not provided!"})

        const product = await Product.findById(productId)
        if(!product) {
            return res.status(404).json({message : "Product not found!"})
        }

        res.status(200).json(product)

    } catch(err) {
        console.log("Error in getProduct controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const similarProducts = async(req, res) => {
    try {
        const productId = req.params.id
        if(!productId) return res.status(400).json({message : "Product ID is not provided!"})

        const product = await Product.findById(productId)
        if(!product) {
            return res.status(404).json({message : "Product not found!"})
        }

        const similarProducts = await Product.find({
            _id : {$ne : productId},
            gender : product.gender,
            category : product.category
        }).limit(4)

        res.status(200).json(similarProducts)

    } catch(err) {
        console.log("Error in similarProducts controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const bestSeller = async(req, res) => {
    try {

        const bestSellerProduct = await Product.findOne().sort({rating : -1})

        if(!bestSellerProduct) {
            return res.status(404).json({message : "No best seller product found!"})
        }

        res.status(200).json({bestSellerProduct})

    } catch(err) {
        console.log("Error in bestSeller controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const newArrivals = async(req, res)  => {
    try {
        const newArrivals = await Product.find({}).sort({createdAt : -1}).limit(8)
        if(!newArrivals) {
            return res.status(404).json({message : "No new arrivals!"})
        }

        res.status(200).json({newArrivals})

    } catch(err) {
        console.log("Error in deleteProduct controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}