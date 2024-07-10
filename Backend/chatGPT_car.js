
const OpenAI = require("openai");
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })
const fs = require('fs');
console.log("run")
  while (!fs.existsSync("./car_chatGPT.json")) { 
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
}
       const data =  fs.readFileSync('./car_chatGPT.json', 'utf8')    
       const parsed = JSON.parse(data)
    content_string = "in seperate paragraphs, write a history, design/ build, and popular upgrades on this car: " + parsed['year'] + ' ' + parsed['make'] + ' ' + parsed['model'];
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "You are a car enthusiast, and have an expansive knowledge on all things cars."},
            {"role": "user", "content": content_string }
          ]
    })
    fs.writeFileSync("response_chatGPT.txt", completion.choices[0].message['content']);

    console.log(completion.choices[0].message['content'])
    
        