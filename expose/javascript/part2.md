# Part2
1. Line 12 will print: **3**. Because `i` is `var` type, so it can be used in anywhere in this function. On line 19, we know that the array that pass into `discountPrices` is [100, 200, 300], so the prices.lentght = 3. In the for loop, `i` will run 2 time, which is i = 0, i = 1, and i = 2, after the loop of i = 2, it will still +1, so the i = 3, and then it jump out of the loop. So i = 3.
2. Line 13 will print: **150**. `discountedPrice` is a var type, so we can use it outside the for loop. The for loop will update the `discoundedPrice` as it go throught each element in the array by increasing i. As we update in each interation, `discountedPrice` will only record the last iteration, which is the last element in the array, which is 300, and then * (1-0.5), so we got 300*0.5 = 150.
3. Line 14 will print: **150**. `finalPrice` is defined at the beginning of the function, so we can use it anywhere in this function. The for loop will update the `finalPrice` just like **3.**. Becasue the calculation ```(discountedPrice * 100)/100``` doesn't change the value, so we also got the same value as **3.** which is 150.  
4. This will return **[50, 100, 150]. At the beginning of the function, we  define and initialize `discounted = []`. In the for loop, we `discounted.push(finalPrice)` in each iteration, where the finalPrice is equal to discountedPrice. When i = 0, finalPrice = 50; i = 1, finalPrice = 100, i = 2, finalPrice = 150. So the array was empty first, and then push 50, and then push 100, and then push 150, so at the end it will return [50, 100, 150].
5. Line 12 will cause **Error** because this time is using `let`, so `i` can't be used outside the for loop. Line 12 is outside the for loop, so i is not defined. 
6. Line 13 will cause **Error** because this time is using `let`, so `discountedPrice` can't be used outside the for loop. Line 13 is outside the for loop, so it's not defined.
7. Line 14 will print: **150**. Eventhough  a `let` type,  `finalPrice` is defined at the beginning of the function, we can use it anywhere in the function. We update the value in the for loop like **3.**, and line 14 will successfully print it out. 
8. This will return **[50, 100, 150]**. Same as **4.**, even `discounted` is a `let` type, it still can be used anywhere in the function. We push the value to the array in each for loop iteration with finalPrice, so we got [50, 100, 150].
9. Line 11 will cause **Error**, same as **5.**, `i` is `let` type, so it can't be used outside the for loop.
10. Line 12 will print: 3. length is defined and initialize at the beginning `const length = prices.length`, and `prices.length` = 3, so length = 3. 
11. This will return **[50, 100, 150]**. Same as **4.**, even `discounted` is a `const` type, we still can push the value to the array in each for loop iteration with finalPrice, so we got [50, 100, 150]. However, we can't assign `discounted` to another array, we can only modify the element of it. 
12. - A. student.name
    - B. student[Grad Year]
    - C. student.greeting()
    - D. student['Favorite Teacher'].name
    - E. student.courseLoad[0]
13. - A. Output "32", because the "3" is a string, if there's a string in `+` operation, then all elemtns looked as strings and append them together. "3" + "2" = "32".
    - B. Output 1. `-` will change all the elements into integer and do the math calculation, so we got 3 - 2 = 1.
    - C. Output 3. Here we don't have any string alement, so `+` will do math calculation. null is 0 as integer, so 3 + 0 = 3.
    - D. Output "3null", because `+` change null into "null" and append it after 3, so "3" + "null" = "3null".
    - E. Output 4. true is 1 as interger, so we got 1 + 3 = 4.
    - F. Output 0. false and null are both 0, so we got 0 + 0 = 0
    - G. Output "3undefined". `+` change undefined into strings and append to '3' since '3' is a string, so we got '3' + "undefined" = "3Undefined".
    - H. Output NaN (Not-a-Number). This `-` suposed to do math calculation, but “undefined" is NaN, anything do any operation with NaN is NaN. 
14. - A. True. The left hand side '2' change into 2, so 2 > 1 is true. 
    - B. False. Both sides are strings, when we do the string comapre, it first compare the first character, and then the second. so '2' < '1' is false.
    - C. True. `==` compare can modify the type of both sides. The left hand side will change '2' into 2, and then do the comparison, so 2 = 2 which is true. 
    - D. False. `===` don't change the type, so if the type are different, then return false. 
    - E. False. We change true into 1 and compare it to 2, so we got 1 == 2 which is false.
    - F. True. Both sides are boolean variable, and the right hand side Boolean(2) is equal true, so true === true, which is true. 
15. `==` will let two side become the same type before it compare. It will change boolean or string into integer. `===` don't change the type, so if both sides are different type, then it return False. Only when two variabls has both same type and same value that it will return True. 
16. In part2-questions16.js. I use a for loop to go through each elemtn, and if statments `if (key.startsWith('r') || statistics[key] % 2 === 1)` in the for loop to see if we prints it. As the key is strings, it will go thought for loop in the order as we defined the object.
17. `modifyArray([1,2,3], doSomething),` will return a new array with the value of [2, 4, 6]. When we pass in the array[1, 2, 3] and the doSomething function into `function modifyArray`. the callblack function now is doSomething, which is multiply by 2. As go through the for loop, each alement in the array will multiply 2, so [1, 2, 3] will become [2, 4, 6].
18. In part2-questions18.js. I set print time into a function, and then use setInterval into wait everysecond and then print the time.
19. The output will be 1, 4, 3, 2. For 1 and 4, those are just noemal print out, so those will print out immideately by order. 2 is a setTimeout for 1 second, so it will print out after the code run with a second delay. 3 is also a setTimeout, but it's waiting 0 second, while it looks like print out immediately, it will still go to the task queue, so it will print later then 1 and 4, but before 2. 