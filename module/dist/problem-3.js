"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        const commonWordArray = [];
        const sentenceArray = sentence.toLowerCase().split(" ");
        sentenceArray.forEach((element) => {
            if (element === word.toLowerCase()) {
                commonWordArray.push(element);
            }
        });
        return commonWordArray.length;
    };
    console.log(countWordOccurrences("I love typescript Typescript", "typescript"));
}
