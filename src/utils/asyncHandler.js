const asyncHandle = (requestHandler) =>{
    (req , res , next) =>{
        Promise.resolve(requestHandler(req , res , next)).
        catch((error)=> next(error))
    }
}




export {asyncHandler}



// const aysncHandler = (fn) => async (req , res , next) => {
//     try{
//         await fn(req , res , next)
//     }
//     catch(error){
//         resizeTo.status(error.code || 500).json({
//         success:false,
//         message:error.message
//         })
//     }
// }
