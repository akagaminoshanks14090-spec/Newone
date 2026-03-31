import { onRequest } from "firebase-functions/v2/https";
import fetch from "node-fetch";

export const getLiveMatch = onRequest(async (req, res) => {
  try {
    const response = await fetch("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com"
      }
    });

    const data = await response.json();

    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});
