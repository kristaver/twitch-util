const Sentiment = require('sentiment');
const sentiment = new Sentiment();


const dummyData = [
  {
    username: 'jlajøl',
    prompt: 'it is really good to see you',
  },
  {
    username: 'jamal',
    prompt: 'i thnk you are ok',
  },
  {
    username: 'kimmy',
    prompt: 'i freaking love you!',
  },
  {
    username: 'pedro',
    prompt: 'u moron!!!!!1',
  },
]

const getSentimentScore = (promptArray) => {

  promptArray.forEach(p => {
    p.score = sentiment.analyze(p.prompt)
  })

  return promptArray;
}

const getBestPrompt = (promptArray) => {
  const res = Math.max(...promptArray.map(p => p.score.score));
  return promptArray.find(p => {return p.score.score === res})
}



const main = () => {
  const evaluatedPrompts = getSentimentScore(dummyData);
  const bestPrompt = getBestPrompt(evaluatedPrompts);
  console.log(bestPrompt.username, '\n', bestPrompt.prompt);
}

main()

// console.log(`TOP COMMENT: ${getBestPrompt(dummyData).prompt}`)
// console.log(`USERNAME: ${getBestPrompt(dummyData).username}`)
// console.log(`SCORE: ${getBestPrompt(dummyData).score}`)