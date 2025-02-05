# TypeScript Runtime Error: Missing Object Properties

This repository demonstrates a common runtime error in TypeScript that can occur when dealing with object properties.  TypeScript's type system ensures type safety at compile time, but it doesn't guarantee the existence of properties at runtime. 

The `bug.ts` file contains code that attempts to access object properties that might be missing, leading to a runtime error. The `bugSolution.ts` file provides a solution using optional chaining and nullish coalescing to handle this case gracefully.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the repository directory.
3. Compile and run the code using `tsc bug.ts && node bug.js`.

You'll see a runtime error because `printCoord` is called with an object lacking the `y` property.

## Solution

The solution is to use optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access object properties and provide default values if properties are missing.