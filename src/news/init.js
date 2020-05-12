import News from "./model";

export default {
    async run(req, res) {
        try {
            await News.deleteMany({});
            const newss = [
                {
                    id:"1",
                    title: "Covid-19",
                    author: ["Golovach V"],
                    text_new:"Найсвіжіші новини",
                    published: new Date("12-05-2020"),
                    mark:"4"
                },
                {
                    id:"2",
                    title: "Covid-19",
                    author: ["Popovich I"],
                    text_new:"Найсвіжіші новини",
                    published: new Date("10-05-2020"),
                    mark:"3"
                },
                {
                    id:"3",
                    title: "Sport",
                    author: ["Ivanov P"],
                    text_new:"Найсвіжіші новини",
                    published: new Date("12-05-2020"),
                    mark:"5"
                },
                {
                    id:"4",
                    title: "News",
                    author: ["Petrenko Y"],
                    text_new:"Найсвіжіші новини",
                    published: new Date("12-05-2020"),
                    mark:"4"
                },
                {
                    id:"5",
                    title: "Sport",
                    author: ["Aleksik A"],
                    text_new:"Найсвіжіші новини",
                    published: new Date("12-05-2020"),
                    mark:"3"
                },
                {
                    id:"5",
                    title: "Covid-19",
                    author: ["Yurchenko T"],
                    text_new:"Найсвіжіші новини",
                    published: new Date("12-05-2020"),
                    mark:"5"
                }
            ];

            newss.forEach(async news => await new News(news).save());
        } catch (error) {
            console.log(error)
        }
    }
}
