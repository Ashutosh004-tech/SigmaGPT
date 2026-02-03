import dotenv from "dotenv";
dotenv.config();

const responseGenai = async(message)=>{
     const obptions = {
    method: "POST",
    headers: {
      "x-goog-api-key": `${GEMINI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            {
              text:message,
            },
          ],
        },
      ],
    }),
  };
  try {
    const respone = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      obptions,
    );
    const data = await respone.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
   return reply;
  } catch (err) {
    console.log(err);
  }
}

export default responseGenai;