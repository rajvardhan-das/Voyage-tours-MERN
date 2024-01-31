import jwt from 'jsonwebtoken'

const verifytoken = (req,res,next)=>{
    const token = req.cookies.accessToken

    if(!token){
        return res.status(401).send({auth:false,message:"You are not authorized"})
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
        if(err){
        return res.status(401).send({auth:false,message:"Token is invalid"})
        }
        req.user=user
        next()
    })
    
} 

export const verifyUser =(req,res,next)=>{
    verifytoken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.role ==="admin"){
            next()

        }
        else{
            return res.status(401).send({auth:false,message:"You are not authenticated"})

        }
    })

}

export const verifyAdmin =(req,res,next)=>{
    verifytoken(req,res,next,()=>{
        if(req.user.role ==="admin"){
            next()
    
        }
        else{
            return res.status(401).send({auth:false,message:"You are not authorized"})
    
        }
    })
    
    }