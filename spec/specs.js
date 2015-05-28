describe("wordCount", function() {
  it("returns the count of a single word", function() {
    expect(wordCount("kitten kitten")).to.eql([["kitten", 2]]);
  });

  it("returns counts for a variety of words", function() {
    expect(wordCount("kitten kitten puppie hippo kitten puppie")).to.eql([["kitten", 3], ["puppie", 2], ["hippo", 1]]);
  });

  it("returns counts for a complex case", function() {
    expect(wordCount("one three three three two two four four four four six six six six six six five five five five five"))
      .to.eql([["six", 6], ["five", 5], ["four", 4], ["three", 3], ["two", 2], ["one", 1]]);
  });
});
