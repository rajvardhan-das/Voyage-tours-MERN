import Tour from '../models/Tour.js'

export const createTour = async(req,res) =>{
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        res.status(200).json({success:true , message:"Successfully created", data:savedTour})
    } catch (error) {
        res.status(500).json({success:false , message:"Failed to create"})
    }
}

//update tours

export const updateTour = async(req,res)=>{
    try {
        const id = req.params.id
        const updatedTour =await Tour.findByIdAndUpdate(id,{
            $set:req.body
        }, {new:true})
        res.status(200).json({success:true , message:"Successfully updated", data:updatedTour})

        
    } catch (err) {
        res.status(500).json({success:false , message:"Failed to update"})  
    }
}
export const deleteTour = async(req,res)=>{
    try {
        const id = req.params.id
        await Tour.findByIdAndDelete(id)
        res.status(200).json({success:true , message:"Successfully deleted"})        
    } catch (err) {
        res.status(500).json({success:false , message:"Failed to delete"})  
    }
}
export const getSingleTour = async(req,res)=>{
    try {
        const id = req.params.id
        const tour = await Tour.findById(id).populate('reviews')
        res.status(200).json({success:true , message:"Details retrieved", data:tour})        
    } catch (err) {
        res.status(404).json({success:false , message:"Not found"})  
    }
}
export const getAllTour = async(req,res)=>{
    const page = parseInt(req.query.page)
    
    
    try {
        const tours = await Tour.find({}).populate('reviews').skip(page*8).limit(8);
        
        res.status(200).json({success:true ,count:tours.length, message:"Details retrieved", data:tours})
    } catch (err) {
        res.status(404).json({success:false , message:"Not found"}) 
    }
}

export const getTourBySearch = async(req,res)=>{

const city = new RegExp(req.query.city,'i')
const distance = parseInt(req.query.distance)
const maxGroupSize =parseInt(req.query.maxGroupSize)

try {
    const tours = await Tour.find({city, distance:{$gte:distance}, maxGroupSize : {$gte:maxGroupSize}}).populate('reviews')
    res.status(200).json({success:true , message:"Details retrieved", data:tours})
    console.log(page)

} catch (error) {
    res.status(404).json({success:false , message:"Not found"}) 
}

}
export const getFeaturedTour = async(req,res)=>{
    const page = parseInt(req.query.page)
    
    console.log(page)
    try {
        const tours = await Tour.find({featured:true}).populate('reviews')
        
        res.status(200).json({success:true ,message:"Details retrieved", data:tours})
    } catch (err) {
        res.status(404).json({success:false , message:"Not found"}) 
    }
}

export const getTourCount = async(req,res)=>{

    try {
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({success:true ,message:"Details retrieved", data:tourCount})
    } catch (err) {
        res.status(500).json({success:false , message:"Failed to retrieve"}) 
    }
}