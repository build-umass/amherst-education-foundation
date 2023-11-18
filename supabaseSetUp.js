const supabase = require("@supabase/supabase-js");
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const DB_URL= process.env.DB_URL;

const Client = supabase.createClient(DB_URL, API_KEY);

Client.from('articles').select("*")

module.exports = {SBclient: Client};