# TypescriptPracticePrograms
Typescript programming practice and demo programs for learning purposes.

# Section 1:
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
Lots about types!
Notes are in the files themselves.


## Section 3:
Lots more about types and type features!
Notes are in the files themselves.

Note that return types of literals in typescript are of type the literal itself.


## Section 4:
Lots about OOP and Classes!
Notes are in the files themselves.
Usually more used like a functional language.

TypeScript provides great support for:
* Classes
* Abstract Classes
* Interfaces
* Access Modifiers


## Section 5:
Lots about TypeScript Generics!
Notes are in the files themselves.

Generics are an extra layer of abstraction over regular types.
They are pretty much parameters for types.
We need them to recude code duplication and build stronger types.
They are essential for TypeScript advanced types!


## Section 6:
Lots about working with types and advanced features!
Notes are in the files themselves.

Read-only, const, index signatures, conditional types, infer, literal types, mapped types, utility types, etc...

Type Challenges: https://github.com/type-challenges/type-challenges
- Will teach you how to create some very interesting and complex types


## Section 7:
Lots about functions and asynchronous programming. This is more about JS as a whole and not purely about TypeScript.
Notes are in the files themselves.

Different section: not TypeScript specific
Asynchronous Programmering - early and often while writing TS
Async functions and promises
Function overloading


## Section 8:
Lots about modules and module bundling. Learning the TS ecosystem.
Notes are in the files themselves.

How code is referenced from one file to another in JS.
Simple concept - endless problems - backward compatibility (Node)
Opinion: Understanding modules is more important than understanding advanced type.
Module bundling - combine all modules into one file
Add TypeScript now!

Section Structure:
* JS modules and imports recap
* TypeScript and NPM
* Module bundlers (Webpack and Esbuild)

Module Bundlers:
1. .js1 + .js2 + .... = bundle.js
2. .ts + .css + .... = bundle.js
3. Advantage: usage in browsers, better performance, easier browser support
4. With TS, bundlers have double role:
- First call the TS compiler
- Merge the generated JS files
5. Mostly used in frontend apps, also used in backend applications

Module Bundler Examples:
- webpack
- vite
- rollup
- esbuild

Further Reading:
https://webpack.js.org/configuration/
https://esbuild.github.io/


## Section 9:
Lots about tuning the TypeScript compiler!
Notes are in the files themselves.

ts -> tsc -> js
You learn most of the compiler options from experience.
However, some options are more often used and more important than others.

- Include and exclude
- Target and lib
- Strict checks
- Source maps
- CLI options

It is important to understand that the target key in the tsconfig.json defines the target runtime environment and will identify what JS/TS features are valid and what are not.
Lib is generally automatically generated based on the target, however, we can provide different specifications to support multiple versions of JS/TS.

The source map links the generated JS code to the original TS code. This allows you to debug the original TS code in the browser.

Starting points for tsconfig.json: https://github.com/tsconfig/bases/tree/main/bases


## Section 10:
Lots about creating npm packages with TypeScript!
Notes are in the files themselves.

- Create an NPM package with TypeScript
- Observe the steps and tips
- Use the new package in another project
- Observe particularities

Very important to understand how npm works and how TypeScript types work in npm.
Steps are similar for YARN/PNPM.

NPM Further Reading: https://www.npmjs.com/package/npm


## Section 11:
Lots about TypeScript decorators!
Notes are in the files themselves.

Decorators - mechanism for adding metadata information to our source code
- Resemble other languages meta programming: Java annotations, C# attributes, Python decorators
- Used to add something to existing logic - popular choice for libraries - use more than create
- Can be attached to classes and class members - not for functional programming

Where to use? Where you want to easily add reusable logic to existing code.

History in TS:
- Until TypeScript 5 - experimental - enable flag in order to use - stage 2
- TypeScript 5 - stage 3 JS decorators
- Stages 2 and 3 are very different
Will see both version implementations in this section.

Overview:
- JS prototypes
- Stage 2 - old way of using decorators
- Stage 3 - new way of using decorators
