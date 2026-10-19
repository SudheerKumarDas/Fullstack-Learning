// import { prisma } from "./lib/prisma.js";

// async function main() {
//   // Create a new user with a post
// //   const user = await prisma.user.create({
// //     data: {
// //       name: "Alice",
// //       email: "alice@prisma.io",
// //       posts: {
// //         create: {
// //           title: "Hello World",
// //           content: "This is my first post!",
// //           published: true,
// //         },
// //       },
// //     },
// //     include: {
// //       posts: true,
// //     },
// //   });

// //   const user = await prisma.user.create({
// //     data:{
// //         email:"samrat@gmail.com",
// //         name:"Samrat Das"
// //     }
// //   })
// //   console.log("Created user:", user);

//   // Fetch all users with their posts
// //   const allUsers = await prisma.user.findMany({
// //     include: {
// //       posts: true,
// //     },
// //   });
// //   console.log("All users:", JSON.stringify(allUsers, null, 2));

// //   const users = await prisma.user.findMany();
// //   console.log(users);

// const updatedUser = await prisma.user.update({
//     where:{
//         id:1
//     },
//     data:{
//         name:"Alice Sharma"
//     }
// })
// console.log(updatedUser);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

import express from "express";
import { prisma } from "./lib/prisma.js";

const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({
        message: "provide name and email both",
      });
    }
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    console.log(newUser);
    res.status(201).json({
      message:"user created successfully",
      user:newUser
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:"Internal server error"
    })
  }
});

app.listen(3000, () => {
  console.log("App is listening to the port 3000");
});
