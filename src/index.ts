import mongoose from "mongoose";
import User from "./models/User";
import Product from "./models/Product";
import Role from "./models/Role";

const connectDb = async () => {
    const db = await mongoose.connect("mongodb://localhost/typegoosedb")
    console.log(`Database is connected to: ${db.connection.db.databaseName}...`);
}

connectDb();

async function executeQuery() {

    /* const newUser = new User({
        firstName: "Ithan",
        lastName: "Flores",
        email: "addrianun@gmail.com",
        password: "123456"
    });
    await newUser.save();
    console.log(newUser); */

    /* const users = await User.find({}, { firstName: 1 });
    console.log(users); */

    /* const user = await User.findByIdAndUpdate("630d059f00ed26a6abd5452f", {
        firstName: "Adrian"
        // new: true devuelve el dato actualizado 
    }, { new: true });
    console.log(user) */

    /* const producto = await Product.create({
        name: "Lavadora",
        price: 30,
        url: "product-01",
        tags: ["cosas del hogar", "lavadora"],
        comments: [
            {
                text: "noma si esta chido"
            },
            {
                text: "no esta chido"
            }
        ],
        owner: "630d059f00ed26a6abd5452f"
    });
    console.log(producto); */

    /* const producto = await Product.findById("630d142493e42302edeb81fc").populate("owner");
    console.log(producto); */

    /* const res = await Role.insertMany([
        { name: "admin" },
        { name: "guest" },
        { name: "user" }
    ]);
    console.log(res) */

    /* 630d1626e25b543dc64c3337
    630d1626e25b543dc64c3336 */

    /* const user = new User({
        firstName: "Jhonny",
        lastName: "Cash",
        email: "jhocash@gmail.com",
        password: "123456",
        roles: [
            "630d1626e25b543dc64c3337",
            "630d1626e25b543dc64c3336"
        ]
    });

    await user.save();
    console.log(user); */

    /* const user = await User.findById("630d19266fb213cecf9b4319").populate("roles", 'name - _id');
    console.log(user); */

    /* const res = await User.findByFirstName("Jhonny");
    console.log(res); */

    const newUser = new User({
        firstName: "IthanG",
        lastName: "FloresZ",
        email: "addrian@gmail.com",
    });
    newUser.password = newUser.encryptPassword("123456");
    await newUser.save();    

    console.log(newUser);

}

executeQuery();