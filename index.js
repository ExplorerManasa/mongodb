const express=require("express")
const app=express()
const port=4000;
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerSchema.js")

app.use(bodyParser.urlencoded({
	extended:true 
}))


app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://Manasaexplorer:manasa2002@cluster0.pvezxaj.mongodb.net/firstdb?retryWrites=true&w=majority")
		.then(()=>{
			console.log("connection established")
		})
		.catch((err)=>{
			console.log(err)
		})

app.get("/",(req,res)=>{
			res.send("chinni")
	})

app.post("/register",(req,res)=>{
	const email="user1@gmail.com",passcode="7654"
	const newFrontendUser=new Register({
		username:email,
		password:passcode
	})
	newFrontendUser.save()
})





app.listen(port,()=>console.log("server is running on port 4000"))
