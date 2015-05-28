var wordCount = function(phrase) {
  var wordCounts = {};

  phrase.split(" ").forEach(function(word) {
    // If no key
    if(!wordCounts[word]) {
      wordCounts[word] = 1;
    }
    // If key
    else {
      wordCounts[word]++;
    }
  });

  return wordCounts;
};
