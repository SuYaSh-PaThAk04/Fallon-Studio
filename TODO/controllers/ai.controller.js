import fetch from "node-fetch"

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const getAi = async ( req,res)=>{
    const message = req.body;
    
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );
        const data = await response.json();
    console.log('Gemini raw response:', JSON.stringify(data, null, 2));

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      '❗ Gemini gave an empty response.';

    res.json({ reply });
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ error: 'Error connecting to Gemini API' });
  }
}
