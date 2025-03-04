import { prop, getModelForClass } from '@typegoose/typegoose'
import { Document } from 'mongoose'

export class Pokemon {
    @prop({ type: String, required: true })
    public name!: string

    @prop({ type: String, required: true })
    public image!: string

    @prop({ type: Number, required: true })
    public id!: number

    @prop({ type: Number, required: true })
    public level!: number
}

export class UserSchema {
    @prop({ type: String, required: true, unique: true })
    public jid!: string

    @prop({ type: Number, required: true, default: 0 })
    public experience!: number

    @prop({ type: Boolean, required: true, default: false })
    public banned!: boolean

    @prop({ type: Number, required: true, default: 0 })
    public wallet!: number

    @prop({ type: Number, required: true, default: 0 })
    public bank!: number

    @prop({ type: () => Pokemon, required: true, default: [] })
    public party!: Pokemon[]

    @prop({ type: () => Pokemon, required: true, default: [] })
    public pc!: Pokemon[]

    @prop({ type: Number, required: true, default: 0 })
    public quizWins!: number

    @prop({ type: Number, required: true, default: 0 })
    public lastDaily!: number

    @prop({ type: Number, required: true, default: 1 })
    public level!: number

    @prop({ type: String, required: true })
    public tag!: string
}

export type TUserModel = UserSchema & Document

export const userSchema = getModelForClass(UserSchema)
