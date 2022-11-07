const timeToRead = (article) => {
    const noOfWords = article.split(' ').length
    const wordsPerMinute = noOfWords / 183
    return Math.round(wordsPerMinute) === 0 ? 1 : Math.round(wordsPerMinute)
  }
  
  module.exports = { timeToRead }