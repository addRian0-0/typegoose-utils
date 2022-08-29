import { prop, getModelForClass, Ref, ReturnModelType, pre } from "@typegoose/typegoose"
import { Role } from "./Role";

/* ejecutara antes de hacer un save */
@pre<User>('save', function(){
    console.log(this.firstName);
})

export class User {

    @prop({ required: true })
    firstName: string;

    @prop({ required: true })
    lastName: string;

    @prop({ required: true, trim: true })
    email: string;

    @prop({ required: true, minlength: 6 })
    password: string;

    /* Referencia uno a muchos (el usuario puede tener varios roles) 
    ARREGLO DE REFERENCIAS (ARREGLO DE OID'S)*/
    @prop({ ref: () => Role })
    roles: Ref<Role>[]

    static async findByFirstName(this: ReturnModelType<typeof User>, firstName: string) {
        return this.find({ firstName })
    }

    encryptPassword(password: string) {
        return `123xyz` + password;
    }

}

const UserModel = getModelForClass(User);
export default UserModel;