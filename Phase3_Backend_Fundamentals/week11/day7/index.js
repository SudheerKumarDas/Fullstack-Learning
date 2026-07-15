import fs from "fs"

// fs.writeFile("message.txt","Hello web development course",(error)=>{
//     if(error) throw error;
//     console.log("The file has been saved")
// })

fs.readFile('message.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});