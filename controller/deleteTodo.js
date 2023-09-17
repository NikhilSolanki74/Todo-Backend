const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res)=>{
try{
    const {id} = req.params;
    // const data= Todo.findById({_id:id});
    // if(!data){
    //     res.status(404).json({
    //         success:false,
    //         message:"Attached data with given id is NOt Found"
    
    // })}

    await Todo.findByIdAndDelete(id);
    
    
    
    res.json({
        success:true,
        message:"Attached data with given id has been deleted"

})
    
}

catch(err){
    console.error(err);
    console.log(err);
    res.status(500).json({
     success:false,
     message:"there is an error in the given request"
    })
}
}