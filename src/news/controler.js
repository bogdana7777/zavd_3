import News from "./model";

const newsControler = {
    async get(req, res) {
        try {
           
            const list = await News.find(makeQueryObject (req.query));            
            res.send(list);
        } catch (error) {
            res.status(500).send(error);
        }


        function makeQueryObject(query){
            let result = {};        
            if (query.year)
                result.$expr = { "$eq": [{ "$year": "$published" }, parseInt( query.year)] } ;

            if (query.minPages){
                result.pages = {"$gte": parseInt(query.minPages)};
            }

            if (query.maxPages){
                if (!result.pages )
                    result.pages = {};
                result.pages.$lte=parseInt(query.maxPages);
            }
            
            return result;
        }
    },
    async getById(req, res) {
        try {
            const news = await News.findById(req.params.id);
            if (!news)
                res.status(404).send("Not found");
            res.send(news);

        } catch (error) {
            res.status(500).send(error);
        }
    },
    async post (req, res) {
        try {           
            const news = new News(req.body);
            await news.save();
            res.send(news);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete (req, res) {
        try {
            const news = await News.findByIdAndDelete(req.params.id);
            if (!news)
                res.status(404).send("Not found");
            res.send(news);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async patch(req, res) {
        try {
            const news = await News.findByIdAndUpdate(req.params.id, req.body, {new: true}) ;
            if (!news)
                res.status(404).send("Not found");
            await news.save();  
            res.send(news);
        } catch (error) {
            res.status(500).send(error);
        }
    },
};

export default newsControler;