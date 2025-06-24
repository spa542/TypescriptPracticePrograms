# TypescriptPracticePrograms
Typescript programming practice and demo programs for learning purposes.

## Section 1:
General overview of the typescript course.

Course Resources: [https://github.com/alexhddev/TSCourseResources](https://github.com/alexhddev/TSCourseResources)

### Required Tools:
* NodeJs and NPM
* TypeScript Compiler
* Text Editor

Installing node.js using nvm (https://nodejs.org/en/download)

Typescript Compiler: tsc ...

### Typescript Program Lifecycle:
1. Write some code in a .ts file
2. Compile it using tsc
3. Run the compiled code using node

Typescript is a superset around Javascript

### Extra Features for Typesscript:
* Type System - Shape for Data
* Generics
* Advanced Classes
* Decorators
* Multiple Targets - Modern JS Features, Run on Old JS runtimes
* Type Checks at Compile Time

The TypeScript compiler will make all type checks and generate JS code. The comipler is called in the background by IDEs.

You can run the program in two steps by running tsc program.ts and then node program.js or use a program to do both steps at once called tsx. Lastly, you can run the program using node --experimental-strip-types program.ts.

### The TypeScript Compiler:
You can configure the compiler using a .tsconfig.json file. (tsc --init)
* The root directory specifies where the compiler should look for source files.
* The out directory specifies where the compiler should output the compiled files.
* You can also setup language servers and other features.


## Section 2:
...


