/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [...numbers, ...numbers];
    } else {
        const newNumbers = [...numbers];
        newNumbers.splice(1, numbers.length - 2);
        return newNumbers;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((num: string): number =>
        Number.isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const withoutSymbols = amounts.map((str: string): string =>
        str.includes("$") ? str.replace("$", "") : str
    );
    const nums = withoutSymbols.map((num: string): number =>
        Number.isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const upperCase: string[] = messages.map((str: string): string =>
        str.endsWith("!") ? str.toUpperCase() : str
    );
    const withoutQ: string[] = upperCase.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    return withoutQ;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const num = words.filter((word: string): boolean => word.length < 4);
    return num.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // Removes all 'red', 'blue', and 'green' values, and returns true if resulting array is empty
    const noReds = colors.filter((color: string): boolean => color !== "red");
    const noBlues = noReds.filter((color: string): boolean => color !== "blue");
    const noGreens = noBlues.filter(
        (color: string): boolean => color !== "green"
    );
    return noGreens.length === 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((sum: number, n: number) => sum + n, 0);
    const nums = addends.map((num: number): string => num.toString());
    if (addends.length === 0) {
        return sum + "=0";
    }
    return sum + "=" + nums.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
// make two arrays with positive and negative
// find sum of positives
// put first negative, put sum, then put all negatives
export function injectPositive(values: number[]): number[] {
    const firstNegative = values.findIndex((val: number): boolean => val < 0);
    let final: number[];
    if (firstNegative === -1) {
        const sum = values.reduce(
            (total: number, num: number) => total + num,
            0
        );
        final = [...values];
        final.splice(values.length, 0, sum);
    } else {
        const positives = [...values];
        positives.splice(firstNegative, values.length - firstNegative);
        const sum = positives.reduce(
            (total: number, num: number) => total + num,
            0
        );
        final = [...values];
        final.splice(firstNegative + 1, 0, sum);
    }
    return final;
}
