var questionStr = `Thank you so much for contacting us. Dreamland guest relations. 
You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. 
What is your phone number? It is 9876535362 as mentioned in the book Diary. 
Thank you so much for providing the info!`;

// First extracting the sentence from the string using match function and storing it in an array;
const sentenceArray = questionStr.match(/(.*?(?:\.|\?|!))(?: |$)/g);

/*So with map we basically travese through the array and count the length of words in each 
sentence and only return sentences having words count > 3Then we use filter to filter out undefined values 
at position of sentences less than or equal to 3 words */
const ansArray = sentenceArray
  .map((sentence) => {
    sentence = sentence.replace(/(^\s*)|(\s*$)/gi, "");
    sentence = sentence.replace(/[ ]{2,}/gi, " ");
    sentence = sentence.replace(/\n /, "\n");
    size = sentence.split(" ").length;
    if (size > 3) {
      return sentence;
    }
  })
  .filter((elements) => elements != undefined);

// Printing solution of Q.1 -> Task 1
for (var index = 0; index < ansArray.length; index++) {
  const ansString = `${index + 1}. ${ansArray[index]}`;
  console.log(ansString);
}
