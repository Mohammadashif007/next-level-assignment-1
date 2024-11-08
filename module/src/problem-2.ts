{
    const removeDuplicates = (arr: number[]): number[] => {
        let uniqueArr: number[] = [];
        arr.forEach((element) => {
            if (!uniqueArr.includes(element)) {
                uniqueArr.push(element);
            }
        });
        return uniqueArr;
    };

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
