//api for add  member

const addMember =async(req,res)=>{
    try {
        const {name,email,password,mobile,age,profession,address,floor,room,sharing,pay} = req.body

        const imageFile=req.file
        console.log({name,email,password,mobile,age,profession,address,floor,room,sharing,pay},imageFile)
    } catch (error) {
        
    }

}

export {addMember}