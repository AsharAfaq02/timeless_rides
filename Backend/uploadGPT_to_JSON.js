
const fs = require('fs');
const path = require('path');
const JSON_obj = {}
async function executeGPT(prompt,iter) {
    try{
    const OpenAI = require("openai");
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
    console.log("running chatGPT")
    content_string = "in line seperated paragraphs with bold titles, write a history, design/ build, and popular upgrades on this car: " + prompt;
    const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
    { "role": "system", "content": "You are a car enthusiast, and have an expansive knowledge on all things cars." },
    { "role": "user", "content": content_string }
    ]})
     gpt_output = completion.choices[0].message['content']
     // File path
// Relative path to the JSON file
const filePath = './carGPT.json'; // Adjust this path as per your file location
// New data to push


this_car = 'car'+iter
JSON_obj[this_car] = prompt
this_info = 'info'+iter
JSON_obj[this_info] = gpt_output

fs.writeFileSync('./carGPT.json', JSON.stringify(JSON_obj))

} catch (error) {
    console.error("Error in executeGPT:", error);
}

}
 
  stuff =  [ { id: 1, "car": "Ford Model T" },
  { id: 2, "car": "Volkswagen Beetle" },
  { id: 3, "car": "Ford Mustang" },
  { id: 4, "car": "Chevrolet Corvette" },
  { id: 5, "car": "Porsche 911" },
  { id: 6, "car": "Jaguar E-Type (XKE)" },
  { id: 7, "car": "Mercedes-Benz 300SL Gullwing" },
  { id: 8, "car": "Shelby Cobra" },
  { id: 9, "car": "Aston Martin DB5" },
  { id: 10, "car": "Chevrolet Bel Air" },
  { id: 11, "car": "Chevrolet Camaro" },
  { id: 12, "car": "Ford Thunderbird" },
  { id: 13, "car": "Dodge Charger" },
  { id: 14, "car": "Alfa Romeo Spider" },
  { id: 15, "car": "BMW 2002" },
  { id: 16, "car": "Pontiac GTO" },
  { id: 17, "car": "Lamborghini Miura" },
  { id: 18, "car": "Ferrari 250 GTO" },
  { id: 19, "car": "Plymouth Barracuda" },
  { id: 20, "car": "Rolls-Royce Silver Cloud" },
  { id: 21, "car": "Mini Cooper" },
  { id: 22, "car": "Chevrolet Impala" },
  { id: 23, "car": "Cadillac Eldorado" },
  { id: 24, "car": "Pontiac Firebird" },
  { id: 25, "car": "Dodge Challenger" },
  { id: 26, "car": "Ford GT40" },
  { id: 27, "car": "Mercedes-Benz 300SL Roadster" },
  { id: 28, "car": "Buick Skylark" },
  { id: 29, "car": "Austin-Healey 3000" },
  { id: 30, "car": "Porsche 356" },
  { id: 31, "car": "Shelby GT500" },
  { id: 32, "car": "Oldsmobile 442" },
  { id: 33, "car": "Chevrolet Chevelle" },
  { id: 34, "car": "Ford Fairlane" },
  { id: 35, "car": "Dodge Dart" },
  { id: 36, "car": "MG MGB" },
  { id: 37, "car": "Studebaker Avanti" },
  { id: 38, "car": "Cadillac Coupe de Ville" },
  { id: 39, "car": "Chevrolet Nova" },
  { id: 40, "car": "Buick Riviera" },
  { id: 41, "car": "Plymouth Road Runner" },
  { id: 42, "car": "Pontiac Trans Am" },
  { id: 43, "car": "Volkswagen Karmann Ghia" },
  { id: 44, "car": "Jaguar XK120" },
  { id: 45, "car": "BMW 3.0 CSL" },
  { id: 46, "car": "DeLorean DMC-12" },
  { id: 47, "car": "Chevrolet Caprice" },
  { id: 48, "car": "Lincoln Continental" },
  { id: 49, "car": "Dodge Coronet" },
  { id: 50, "car": "Ford Falcon" }]
  

    for (let i = 0; i < stuff.length; i++) {
        setTimeout(async function() {
            //console.log(stuff[i]['car']);
            await executeGPT(stuff[i]['car'], i)

        }, 9000*i); // D
        
       
    }
