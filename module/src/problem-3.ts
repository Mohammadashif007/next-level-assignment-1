{
    const countWordOccurrences = (sentence: string, word: string): number => {
        const commonWordArray: string[] = [];
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
