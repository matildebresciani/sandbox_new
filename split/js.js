const theText =
  "Det her er noget tekst, hvor nogle ord skal udskiftes med nogle andre ord";

const theSplittedText = theText.split("nogle");
console.log(theSplittedText);

const theJoinedText = theSplittedText.join("alle");
console.log(theJoinedText);
