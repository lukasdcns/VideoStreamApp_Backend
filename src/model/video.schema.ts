import { Prop, Schema } from "@nestjs/mongoose";

export type VideoDocument = Video & Document;

@Schema()
export class Video {
    @Prop()
    title: string;
    @Prop()
    video: string
    @Prop()
    video: string;
    @Prop()
    coverImage: string;
}