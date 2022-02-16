var questionStr = `Thank you so much for contacting us. Dreamland guest relations. 
You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. 
What is your phone number? It is 9876535362 as mentioned in the book Diary. 
Thank you so much for providing the info!`;

// Task - 1
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

// Task - 2
/* Here I used map to basically traverse through ans array from task one and then 
mask any number present using regex */
const maskedNumbersArray = ansArray.map((item) => {
  return item.replace(/[0-9]/g, "X");
});

// Final Output
for (var index = 0; index < maskedNumbersArray.length; index++) {
  const ansString = `${index + 1}. ${maskedNumbersArray[index]}`;
  console.log(ansString);
}
