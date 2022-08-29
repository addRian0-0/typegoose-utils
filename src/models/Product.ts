import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Comment } from "./Comments";
/* Al desestructurar solo trae la clase de ts 
(export default de User trae el modelo construido por getModelForClass()) */
import { User } from "./User";

class Product {

    @prop({ required: true, trim: true })
    name: string;

    @prop({ required: true, default: 0 })
    price: number;

    @prop({ required: true, lowercase: true })
    url: string;

    @prop({ required: true, trim: true })
    tags: string[];

    @prop({ type: () => [Comment] })
    comments: Comment[];

    /* ref */
    @prop({ ref: () => User })
    owner: Ref<User>

}

const ProductModel = getModelForClass(Product);
export default ProductModel;