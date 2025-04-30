# Part2
### 1.
The bug is the type of num1 and num2 are string, not integer. When we use the `+` operation and one of the variable is string, it will change both sides into string and then append two strings instead of adding the sum. 
### 2.
When we input 2 nums from the website, those are string type, so before we use `+` to get the sum, we need to convert them into integer first. I use `Number()` to conver them. 