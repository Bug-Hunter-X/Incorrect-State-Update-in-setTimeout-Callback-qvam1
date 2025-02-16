# Incorrect State Update in setTimeout Callback
This example demonstrates a common mistake when using React's useState hook in conjunction with setTimeout.  The issue lies in attempting to update state using the previous state value inside the callback.

## Bug
The bug is in `bug.js`. The component uses setTimeout to increment the count. However, the callback function uses the initial value of `count` (0) to increment because it is not using the latest value of the state. 

## Solution
The solution is in `bugSolution.js`. It utilizes a functional update to access and update the latest value of count.  This ensures the count increments correctly.