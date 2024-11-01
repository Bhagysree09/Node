exports.manager=async(req,res,next)=>{
    console.log(req.user.work);
    
    if(req.user.work=== 'manager' ){
        next();
    }
    else{
        return res.json({
            status:-1,
            message:`You dont have access`
        })
    }
}

exports.Notwaiter=async(req,res,next)=>{
    if(req.user.work === 'waiter'){
        return res.json({
            status:-1,
            message:`You dont have access`
        })
    } else {
        next();
    }
}
