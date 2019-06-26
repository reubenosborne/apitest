import request from 'superagent'

const baseURL = 'https://api.funtranslations.com/translate'

// const yoda = '/yoda.json'
// const pirate = '/pirate.json'
// const oldenglish = '/oldenglish.json'
// const valyrian = '/valyrian.json'
// const groot = '/groot.json'
// const australian = '/australian.json'

export function translateText (text, voice, callback) {
  console.log("I'm off to get the translation for you")
  request
    .get(baseURL + `/${voice}.json`)
    .query({text: text})
    .then(response => {
      console.log("I got a response! Check it out: ", response, " Are you after this? ", response.body.contents.translated)
      return callback(response.body.contents.translated)
    })
}