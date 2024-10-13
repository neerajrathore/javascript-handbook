
# JavaScript Interview Questions

Below are 15 questions aimed at helping you grasp the concepts so that you can perform well in interview rounds.


### 1.) Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

##### Constraints:
+ The input string may contain alphabetic characters, digits, spaces, and punctuation.
+ The input string is non-empty.
+ The input string may contain multiple words separated by spaces.

###### Note:
+ If the input string is empty or contains only whitespace, the function should return an false.
+ The function should ignore leading and trailing whitespace when determining the longest word.

```javascript
const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  console.log(words);
  return words[0];
};

console.log(
  findLongestWord(
    "My name is Ramesh"; // will return Ramesh
  )
);
```
#### Explanation

The `findLongestWord` function is designed to identify the longest word in a given input string. It begins by checking if the input string is empty or consists solely of whitespace. If this is the case, the function returns false, ensuring that it only processes valid input.

Next, the function splits the string into an array of words using the `split` method, which divides the string at spaces. It then sorts this array in descending order based on the length of the words, utilizing the `sort` method with a comparison function that subtracts the lengths of the words. This sorting method ensures that the longest words appear first in the array.

After sorting, the function returns the first element of the sorted array, which is the longest word. 

### 2.) You are required to implement a function generateHash that generates a hash tag from a given input string.

##### Constraints:
+ The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
+ If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
+ Otherwise, the function should return the generated hash tag prefixed with `#`.

```javascript
const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }

  str = str.split(" ");
  str = str.map(
    (curElem) =>
      curElem.charAt(0).toUpperCase() + curElem.slice(1)
  );
  str = `#${str.join("")}`;
  return str;
};

console.log(generateHash("The quick brown fox")); // Output:- #TheQuickBrownFox
```
#### Explanation

The `generateHash` function is designed to create a hashtag from a given input string. It first checks if the string meets specific criteria: the length must not exceed 280 characters, and it should not be empty or consist solely of whitespace. If either condition is violated, the function returns false.

If the input string is valid, the function proceeds to process it. It splits the string into an array of words using the `split` method, which separates the string at spaces. Each word is then transformed so that its first character is capitalized, while the rest of the characters remain unchanged. This is accomplished using the map method, which applies a function to each element of the array. The transformation is done by taking the first character of each word `(curElem.charAt(0).toUpperCase())` and appending the rest of the word `(curElem.slice(1))`.

After capitalizing the words, the function joins them back together without spaces using the `join` method, and prefixes the resulting string with a`# to create the final hashtag. The resulting hashtag is returned, and in the provided example, it effectively formats the string according to the specified requirements.

### 3.) Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

##### Constraints:
+ The function should be case-sensitive.
+ The function should handle both lowercase and uppercase characters.
+ The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).

```javascript
const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  totalCount = word.split("").reduce((accum, curChar) => {
    if (curChar === char) {
      accum++;
    }
    return accum;
  }, 0);
  return totalCount;
};

console.log(countChar("MissIssippi", "I")); // Output: 4
```
#### Explanation

The `countChar` function is designed to count the occurrences of a specified character in a given string, with a focus on case sensitivity. It takes two parameters: `word`, which is the string in which the character will be counted, and `char`, the character to be counted.

The function begins by converting both the string and the character to lowercase to ensure that the counting is case-insensitive. However, this is contrary to the requirement for case sensitivity, meaning that the function will incorrectly count characters if they have different cases.

Next, the function utilizes the `split` method to transform the string into an array of individual characters. It then employs the `reduce` method to iterate over this array. The accumulator, `accum`, starts at zero and increments each time the current character, `curChar`, matches the specified char. Finally, the total count of matching characters is returned.

### 4.) Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

##### Constraints:
+ The input string may contain alphabetic characters, digits, spaces, and punctuation.
+ The input string is non-empty.
+ The input string may contain multiple words separated by spaces.

###### Note:
+ If the input string is empty or contains only whitespace, the function should return an false.
+ The function should ignore leading and trailing whitespace when determining the longest word.

```javascript
function reverseString(str) {
    // Check if the input is empty or contains only whitespace
    let trimmedStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            trimmedStr += str[i];
        }
    }

    if (trimmedStr.length === 0) {
        return false;
    }

    const reversedArr = [];
    for (let j = str.length - 1; j >= 0; j--) {
        reversedArr.push(str[j]);
    }

    return reversedArr.join('');
}

console.log(reverseString("Hello, World!")); // Output: "!dlroW ,olleH"
console.log(reverseString("  "));            // Output: false
```
#### Explanation
The `reverseString` function is designed to reverse an input string without using any built-in methods or libraries. It begins by checking if the string is empty or contains only whitespace. To do this, the function initializes an empty string called `trimmedStr` and iterates through each character of the input string. During this iteration, it adds only non-whitespace characters to `trimmedStr`. If, after this process, `trimmedStr` is empty, the function returns `false`, indicating that the input string did not contain any significant characters.

Once it confirms that the string has meaningful content, the function proceeds to reverse the string. It initializes an empty array called `reversedArr` and uses a `for` loop to iterate backward through the original string, starting from the last character and moving to the first. Each character is pushed into the `reversedArr`. Finally, the function combines the characters in reversedArr into a single string using `join`, and this reversed string is returned.

### 5.) Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.

##### Constraints:
+ Sort the array in ascending order.
+ If the array has an odd number of elements, the median is the middle element.
+ If the array has an even number of elements, the median is the average of the two middle elements.

```javascript
const findMedian = (arr) => {
  // Sort the array
  arr.sort((a, b) => a - b);
  // Check if the array length is odd or even
  let length = arr.length;
  let mid = Math.floor(length / 2);
  if (length % 2 === 0) {
    // for even length array
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    // for odd length array
    return arr[mid];
  }
};

console.log(findMedian([5, 3, 9, 1, 7])); // Output: 5
console.log(findMedian([2, 4, 6, 8])); // Output: 5
```
#### Explanation
The `findMedian` function calculates the median of a given array of numbers by first sorting the array in ascending order. It uses the built-in `sort` method, ensuring numerical sorting through a comparison function that arranges the numbers correctly. After sorting, the function determines the length of the array and calculates the middle index using `Math.floor(length / 2)`. It then checks whether the length of the array is odd or even. If the length is even, the median is computed by averaging the two middle elements, specifically the elements at the calculated middle index and one before it. Conversely, if the length is odd, the median is simply the middle element of the sorted array. The function effectively handles both scenarios and returns the correct median, demonstrating its capability to adapt to varying input conditions. 

### 6.) You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

##### Constraints:
+ 1 <= word1.length, word2.length <= 100
+ word1 and word2 consist of lowercase English letters.

###### Examples

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1: "abc"
word2: "pqr"
merged: "apbqcr"

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

```javascript
const mergeAlternately = function (word1, word2) {

    // initialize empty array arr and len is equal to 0
    let arr = [], len = 0;

    // if word1 length is greater than word2 then make length of word1 to len else length of word2 to len
    word1.length > word2.length ? len = word1.length : len = word2.length;

    // run for loop from index 0 to len
    for (i = 0, j = 0; i < len; i++, j++) {

        // initialize word1[i] to arr[j]
        arr[j] = word1[i];

        // increase j
        j++;

        // initialize word2[i] to arr[j]
        arr[j] = word2[i];
    }

    // convert arr to string and return it
    return arr.join('');
};
```
#### Explanation

The `mergeAlternately` function combines two strings, `word1` and `word2`, by alternating their characters. It starts with the first character of `word1`, followed by the first character of `word2`, and continues this pattern until all characters from both strings have been merged. If one string is longer than the other, any remaining characters from the longer string are appended to the end of the merged result.

The function begins by initializing an empty array, `arr`, which will hold the merged characters. It also determines the length of the longer string, assigning this value to the variable `len`. This is done using a conditional statement that compares the lengths of `word1` and `word2`.

Next, the function enters a `for` loop that iterates up to `len`, using two index variables, `i` and `j`, to manage the positions in `word1` and `arr`, respectively. In each iteration, it alternately adds characters from `word1` and `word2` to `arr`. The first character from `word1` goes to `arr[j]`, followed by the first character from `word2` at `arr[j + 1]`, and so on. If one string runs out of characters before the other, the loop still attempts to add characters from both strings but may encounter undefined values if one index exceeds the length of its respective string.

Finally, the function converts the array arr into a string using the `join` method and returns the merged result.

### 7.) Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.


##### Constraints:
+ 1 <= num.length <= 1000
+ num consists of only digits.
+ num doesn't have any leading zeros.

###### Examples
Input: num = "51230100"
Output: "512301"
Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".

Input: num = "123"
Output: "123"
Explanation: Integer "123" has no trailing zeros, we return integer "123".

```javascript
const removeTrailingZeros = function (num) {

    for (let i = num.length - 1; i >= 0; i--) { // loop through the every element of string num from end
        if (num[i] != 0) {  // if every character of num is not equal to zero
            return num.slice(0, i + 1); // return  the character of num upto ith character
        }
    }
};
```
#### Explanation
The `removeTrailingZeros` function is designed to take a positive integer represented as a string and return the same number without any trailing zeros. It does this by iterating through the string from the end to the beginning. The loop starts at the last character of the string and moves backwards, checking each character.

As it iterates, the function looks for the first character that is not a zero. When it encounters a non-zero character, it returns a substring of the original number, slicing it from the start up to and including the position of this non-zero character. This effectively removes all trailing zeros from the string.

### 8.) Given an array of strings words and a string s, determine if s is an acronym of words. The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"]. Return true if s is an acronym of words, and false otherwise.

##### Constraints:
+ 1 <= words.length <= 100
+ 1 <= words[i].length <= 10
+ 1 <= s.length <= 100
+ words[i] and s consist of lowercase English letters.

###### Examples

Input: words = ["alice","bob","charlie"], s = "abc"
Output: true
Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym. 

Input: words = ["an","apple"], s = "a"
Output: false
Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively. 
The acronym formed by concatenating these characters is "aa". 
Hence, s = "a" is not the acronym.

```javascript
const isAcronym = function (words, s) {

    // initialize empty string str
    let str = '';

    // run for of loop for words
    for (let word of words) {

        // add first character of words in str
        str += word.charAt(0);
    }

    // if str is equal to s then return true otherwise return false
    if (str === s) {
        return true;
    } else {
        return false;
    }
};
```
#### Explanation

The `isAcronym` function checks whether a given string s is an acronym formed from an array of strings words. An acronym is defined as a string that is created by concatenating the first character of each word in the provided array.

To achieve this, the function begins by initializing an empty string called `str`, which will accumulate the first characters of each word. It then iterates through each word in the words array using a `for...of` loop. During each iteration, it extracts the first character of the current word using `word.charAt(0)` and appends this character to the `str`.

After constructing the string of first characters, the function compares `str` with the input string `s`. If they are equal, it returns true, indicating that s is indeed the acronym of the words. If they are not equal, it returns false.

This straightforward approach efficiently constructs the acronym and checks for equality in linear time, making it suitable given the constraints of the problem, where the lengths of words and s are manageable.

### 9.) Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

##### Constraints:
+ 1 <= s.length <= 100
+ s consists of printable ASCII characters.

###### Examples

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"

```javascript
const toLowerCase = function (s) {
    // convert to lowercase and return the string
    return s.toLowerCase();
};
```
#### Explanation
The `toLowerCase` function is designed to convert a given string `s` to all lowercase letters. This is achieved using the built-in JavaScript method `toLowerCase()`, which is called directly on the string `s`.

When the function is invoked, it takes the input string, processes it, and returns a new string where every uppercase letter has been replaced with its corresponding lowercase letter. This method handles all characters in the string, so any uppercase letters are transformed while lowercase letters and non-alphabetic characters remain unchanged.

The function efficiently meets the problem's requirements, operating in linear time relative to the length of the string, and adheres to the constraints provided (with a maximum length of 100 characters). As such, it effectively produces the desired output with minimal complexity.

### 10.) You are given a 0-indexed array of strings words and a character x. Return an array of indices representing the words that contain the character x. Note that the returned array may be in any order.

##### Constraints:
+ 1 <= words.length <= 50
+ 1 <= words[i].length <= 50
+ x is a lowercase English letter.
+ words[i] consists only of lowercase English letters.

###### Examples
Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

```javascript
var findWordsContaining = function (words, x) {
    let result = [];

    // if x is includes in any element of array words then add that index in array result
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) result.push(i);
    }

    // return the array result
    return result;
};
```
#### Explanation
The findWordsContaining function is designed to find the indices of words in an array that contain a specified character, `x`. To achieve this, the function initializes an empty array called `result`, which will store the indices of the matching words.

The function then iterates through each word in the words array using a for loop. For each word, it checks if the character `x` is present by using the includes method. If `x` is found within a word, the index of that word is added to the result array using the `push` method.

Once the loop has processed all the words, the function returns the `result` array, which contains the indices of the words that include the character `x`. This approach is straightforward and efficient, given the constraints, and effectively gathers all relevant indices for further use or display.

### 11.) The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

##### Constraints:
+ 0 <= n <= 30

###### Examples
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

```javascript
const fib = function (n) {

    // initialize dp(dynamic programming) as empty array
    let dp = [];

    // set the value of 0th element of dp as 0 and 1th element of dp as 1
    dp[0] = 0;
    dp[1] = 1;

    // run for loop from 2 to n
    for (let i = 2; i <= n; i++) {

        // dp[i] is sum of i-1th and i-2th element value of dp
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // return nth element value of dp
    return dp[n];
};
```
#### Explanation
The `fib` function calculates the nth Fibonacci number using a dynamic programming approach. The Fibonacci sequence is defined such that each number is the sum of the two preceding ones, starting with F(0) = 0 and F(1) = 1.

To begin, the function initializes an array `dp` to store the Fibonacci numbers up to the nth number. It sets the first two elements of the array: `dp[0]` to 0 and `dp[1]` to 1, representing the base cases of the Fibonacci sequence.

Next, the function enters a loop that runs from 2 to n. In each iteration, it calculates the Fibonacci number for the current index i by summing the two previous Fibonacci numbers stored in `dp`: specifically, `dp[i - 1]` and `dp[i - 2]`. This effectively builds up the sequence iteratively, storing each computed Fibonacci number in the `dp` array.

After the loop completes, the function returns `dp[n]`, which contains the nth Fibonacci number. This approach is efficient, allowing the function to compute Fibonacci numbers in linear time while using an array to store previously computed results, thus avoiding redundant calculations and making it suitable for the given constraints (0 ≤ n ≤ 30).

### 12.) Given two positive integers a and b, return the number of common factors of a and b.

An integer x is a common factor of a and b if x divides both a and b.

##### Constraints:
+ 1 <= a, b <= 1000

###### Example

Input: a = 12, b = 6
Output: 4
Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

```javascript
const commonFactors = function (a, b) {

    // find minimum from a and b
    let min = Math.min(a, b);

    // initialize count to be 0
    let count = 0;

    // run for loop from 1 to min
    for (let i = 1; i <= min; i++) {

        // a modulo i is equal to 0 and b modulo i is equal to 0 then increment count
        if (a % i === 0 && b % i === 0) {
            count++;
        }
    }
    // return final answer count
    return count;
};
```
#### Explanation
The `commonFactors` function calculates the number of common factors between two positive integers, a and b. To determine common factors, the function first identifies the smaller of the two integers using `Math.min`, which helps optimize the range for checking potential factors. It then initializes a variable, `count`, to zero, which will be used to tally the number of common factors found.

Next, the function enters a loop that iterates from 1 to the smaller integer (inclusive). For each integer i in this range, the function checks if both a and b are divisible by i by using the `modulus` operator. If both conditions are satisfied (i.e., a % i === 0 and b % i === 0), it indicates that i is a common factor, and the function increments the `count` by one.

Once the loop completes, the function returns the final value of `count`, representing the total number of common factors shared by a and b. This approach efficiently identifies common factors by checking divisibility only up to the smaller of the two numbers, ensuring the solution remains efficient even for the maximum constraints provided.

### 13.) A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not. Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

##### Constraints:
+ 1 <= n.length <= 105
+ n consists of only digits.
+ n does not contain any leading zeros and represents a positive integer.

###### Example

Input: n = "32"
Output: 3
Explanation: 10 + 11 + 11 = 32

```javascript
const minPartitions = function (n) {

    // initialize result to 0
    let result = 0;

    // run for loop from index 0 to length of n
    for (let i = 0; i < n.length; i++) {

        // assign maximum value between result and Number(n[i])
        result = Math.max(result, Number(n[i]));
    }

    // return result
    return result;
};

```
#### Explanation
The `minPartitions` function calculates the minimum number of positive deci-binary numbers needed to sum up to a given positive decimal integer, represented as a string. A deci-binary number consists solely of the digits 0 and 1, and the task revolves around determining how many such numbers are required to represent each digit in the input. The function begins by initializing a variable called `result` to zero, which will eventually hold the maximum digit found in the string. It then iterates through each character in the string, converting each character to a number and updating result to reflect the highest digit encountered. This maximum digit signifies the minimum number of deci-binary numbers necessary since, for instance, if the highest digit is 3, it indicates that at least three deci-binary numbers (like 1 + 1 + 1) are required to account for that digit’s contribution. Finally, the function returns the value of `result`, which represents the minimum number of deci-binary numbers needed to sum to the integer represented by the input string. This approach is efficient, operating in linear time relative to the length of the string, and directly addresses the problem's requirements.

### 14.) Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.


##### Constraints:
+ 1 <= words.length <= 100
+ 1 <= words[i].length <= 100
+ words[i] consists of lowercase English letters.


###### Examples

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

Input: words = ["cool","lock","cook"]
Output: ["c","o"]

```javascript
const commonChars = function (words) {

    // initialize empty array result
    let result = [];

    // run for of loop for first string of array words
    for (let char of words[0]) {

        // if every words of word includes char then push char in result
        if (words.every(word => word.includes(char))) {
            result.push(char);

            // remove one char in every element of words 
            words = words.map(word => word.replace(char, ""));
        }
    }

    // return result
    return result;
};
```
#### Explanation
The function starts by initializing an empty array called result, which will hold the common characters. It then iterates over each character in the first string of the words array. For each character, the function checks if that character exists in every string within the words array using the every method. If the character is found in all strings, it gets added to the result array.

However, to ensure that the character is counted only as many times as it appears in the first string, the function then removes that character from all strings in the words array. This is done using the map method, which creates a new array where each word has the first occurrence of that character replaced with an empty string.

This process continues until all characters in the first string have been checked. Finally, the function returns the result array containing all the common characters that appear in every string, including duplicates.

### 15.) You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array. Return the sum of all the unique elements of nums.

##### Constraints:
+ 1 <= nums.length <= 100
+ 1 <= nums[i] <= 100

###### Examples

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

```javascript
const sumOfUnique = function (nums) {

    // initialize sum for addition of Unique elements
    let sum = 0;

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // if lastIndexOf nums[i] and indexOf of nums[i] both are equal to i then add nums[i] to sum
        if (nums.lastIndexOf(nums[i]) === i && nums.indexOf(nums[i]) === i) {
            sum += nums[i];
        }
    }

    // return answer sum
    return sum;
};
```
#### Explanation
The logic of the `sumOfUnique` function involves iterating through each element of the array while maintaining a running total of unique elements. It starts by initializing a variable `sum` to zero. For each element, it checks if the element appears only once in the array by comparing its first and last occurrences using `indexOf` and `lastIndexOf`. If both indices are the same as the current index, it confirms that the element is unique. When a unique element is identified, it is added to the sum. After completing the loop through the array, the function returns the total `sum` of all unique elements, effectively capturing the `sum` of those that appear exactly once.