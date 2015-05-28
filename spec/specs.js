describe("wordCount", function() {
  it("returns the count of a single word", function() {
    expect(wordCount("kitten kitten")).to.eql({"kitten": 2});
  });

  it("returns counts for a variety of words", function() {
    expect(wordCount("kitten kitten puppie hippo kitten puppie")).to.eql({"kitten": 3, "puppie": 2, "hippo": 1});
  });
});
