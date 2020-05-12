import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    id:{
        type:Number,
        min:1
    },
    title: {
        type:String,
        required: true
    },
    authors:[String],
    text_news:[String],
    published:{
        type: Date,
        max: Date.now()
    },
    mark:{
        type:Number,
        min:1,
        max:5
    }

});

const News = mongoose.model("News", newsSchema);

export default News;