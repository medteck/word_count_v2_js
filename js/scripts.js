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

  return sortHash(wordCounts);
};

var sortHash = function(hash) {
  var sortable = [];

  for (var key in hash) {
    sortable.push([key, hash[key]]);
  }

  sortable.sort(function(a, b) {
    return a[1] < b[1];
  });

  return sortable;
};


// var sortHash = function(hash) {
//   var keyArray = []
//   var keyValueArray = []
//   for (var key in hash) {
//     keyArray.push(key);
//   }
//
//   keyArray.forEach(function(key) {
//     if (hash[key] > hash[keyArray[0]]) {
//     var keyIndex = keyArray.indexOf(key)
//     keyArray.splice(keyIndex, 1);
//     keyArray.unshift(key);
//   }
//   });
//   keyArray.forEach(function(key)  {
// //     keyValueArray.push([key, hash[key]])
// //   });
// console.log(keyArray)
//   return keyValueArray;
// };

$(function() {
  $("form").submit(function() {

    $("#result-wrapper").show();
    $("#result").text(wordCount($("input").val()));
    return false;
  });
});
