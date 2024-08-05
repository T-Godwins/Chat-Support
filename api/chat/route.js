import { NextResponse } from "next/server"
export default Post(req){
    console.log("POST /chat/api")
    return NextResponse.json({message: "Hello from the Server!"})
}