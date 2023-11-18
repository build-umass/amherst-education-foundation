// Playing around with supabase buckets and Postgress DB
// import { createClient } from "@supabase/supabase-js";

const express = require("express");
const crypto = require("crypto");
// import { SupabaseClient } from "@supabase/supabase-js";
const { SBclient } = require("./supabaseSetUp");

const app = express();

const port = 5000;

// const { data, error } = await SBClient.from(
//   "Amherst-Education-Foundation-BUILD-UMASS"
// ).select("articles").select("*");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

async function pullFromDB(req, res) {
  try {
    const { data, error } = await SBclient.from("articles").select("*");

    if (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Database query error" });
    } else {
      res.status(200).json({ data });
    }
    console.log(data);
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function POST_articles(req, res) {
    try{
        console.log(req.body);
        const {author, date, primary_content} = req.body;
        const{error} = await SBclient.from("articles").insert({
            article_id: crypto.randomUUID(),
            author,
            date: new Date(date),
            primary_content
        });

        if(error){
            console.log(error);
            res.status(500).json({error: "post failed"});
        }else{
            res.status(200).json({message: "article successfully uploaded"})
        }
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error. Unable to post"})
    }

}

app.get("/api", pullFromDB);
app.post('/api/createArticle', POST_articles);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
