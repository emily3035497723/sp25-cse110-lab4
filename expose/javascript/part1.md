# Part1

### 1. 
Line 9 prints: **values added: 20**. Because in function sum num1 and num2, by line 16, we know that num1 and num2 are both 10, and the `add = true` means it will go through the sum operations, so the result will be 20, and then pass to `consule.log`. 
### 2. 
Line 13 prints: **final result: 20**. Same as **1.**, the values of result is 20. 
### 3. 
We want to avoid `var` because it's a function scope, this variable can be used even outside that `if`, as long as they are in the same function. This might easily cause the naming conflicts. While `let`, `const` are block scope, it can only used in that area, so it's safer.
### 4. 
Line 9 prints: **values added: 20**. Same as **1.**, the result now is `let`, but it still work in this `if`.
### 5. 
Line 13 will cause **Error**. Now result is a `let` type, so it only works in the `if` statement, while line 13 is not in the `if`.
### 6. 
Line 9 will cause **Error**. Now result is a `const` type, so it can't be changed after it be assigned a value. The program will stop and pinrt out error on line7, where we try to modify result by num1 + num2. 
### 7. 
Line 13 will cause **Error**. Now result is a `const` type, so it only works in the `if` statement, while line 13 is not in the `if`.