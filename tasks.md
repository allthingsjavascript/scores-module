# Using the Array reduce Method to Create a Module of Functions

## Project Description

In this project you will get a chance to use the reduce method of arrays to create three functions in a node module. These three functions will manipulate an array of scores by providing at total of all scores, an average for non-zero scores, and a mininum and maximum score from the array. 

Each function will progressively require a more difficult application of the reduce method. We will provide suggestions, but it is up to you to figure out the final code using what you have learned about the reduce method.

## Project Setup

Once you have forked and downloaded the project, run the following command in the terminal at the root of the project folder to set up the project.

```
npm install
```

Now you can test the setup and your progress by running the test script.

```
npm test
```

You should see errors for everything that needs to be completed. As you work through the tasks, the errors should disappear. You can run the command as you work to see your progress. So lets get started fixing those errors!

## Coding the Functions in the Module

You have been provided with a `manipulate-score-data.js` file. This is the file for the node module and where you will create the three functions.

### Task 1: Define and Export the Three Functions

Define three functions in the file and make sure to name them: **computeTotal**, **computeNonZeroAverage**, and **getMinMaxScore**.

Each function should include a single parameter which will accept the array that is passed in.

Export the functions from the module using the same three names.

### Task 2: Code the computeTotal Function

Code the `computeTotal` function to return the sum of all the scores from the passed in array.

Use the reduce method of arrays to accomplish this. Don't forget to return, from the function, the results of the reduce method.

### Task 3: Code the computeNonZeroAverage Function

The `computeNonZeroAverage` function returns the average for all non-zero scores. So any score that is zero will not be counted in the average. This is not a difficult task after computing the total, which you have already done. But remember, you need to use the reduce method to accomplish this. 

Here are some suggestions:
* Use the computeTotal function to retrieve the sum.
* Use the accumulator in reduce to track and return the count of scores that are non-zero.
* Using these two values, have the function return the average.

### Task 4: Code the getMinMaxScore Function

The `getMinMaxScore` function needs to return a two element array where the first element is the minimum score and the second element is the maximum score. This requires a unique application of the reduce method.

Here are some suggestions:
* Use `Math.min()` and `Math.max()`.
* Each iteration of the reduce method needs to return a two element array with the current min and max values.
* Each iteration of reduce should test the current min and max values with the next available score using `Math.min` and `Math.max`.
* The initial value set for the accumulator should be an array that consists of a minimum and maximum score that is sure be replaced. For example, you can use a miniumum of 100 and a maximum of 0.
* Return the results of the reduce method from the getMinMaxScore function.