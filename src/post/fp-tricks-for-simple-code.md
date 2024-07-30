---
title: Functional Programming tricks for simplifying and improving code
description: Functional programming techniques for simplifying code
date: 2020-03-24
luogo: Espoo
published: true
tags: ["javascript", "functional programming", "programming", "code"]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

{% image "./src/images/fp-trick.jpg", "My iMac" %}

Functional Programming can make your code simpler. Simplicity means that the code is easier to read and understand, testable, and more maintainable.

In this blog post, I describe some of the Functional Programming (FP) tricks you can use to turn your code better by making it simpler.

## Get rid of temp variables

Functional Programming favours immutability. This principle of immutability means that you don't change the values of your variables after you have initialised them. Similarly, you don't mutate your objects, or strings, after you have created them.

If you are programming in JavaScript, all your variable definitions should use const. For anyone who is reading your code, the constant definition gives peace of mind: It guarantees that the variable is never reassigned. Because reassignment is impossible, the reader's brain is free from the burden of tracking and recognising reassignments from the code.

What about when you need to change your values? At first, you could have an array:

```javascript
const fruits = ['apple', 'orange', 'banana']
```

What do you do when you want to add a new fruit into this list? The solution is to initialise a new constant variable with new or updated values. We can copy the existing fruits values using the spread operator:

```javascript
const allFruits = [...fruits, 'pineapple']
```

You should follow the principle of immutability everywhere in your code. Because if you do, your code becomes cleaner.

You know that the value of your fruits variable never changes, and you know this fact the first time you see the declaration of the variable. After the initialisation, anywhere you see the fruits variable, you know that it still has the same three fruits in it.

## Get rid of loops

Functional code tells what happens instead of instructing how it should happen.

Loops are not functional, and we should get rid of them.

Consider the following loop:

```javascript
var list = [];
var i = 0;
while (i < rows.length) {
    var row = rows[i];
    var message = {
        childAddress: row[1],
        action: 'switchToBackupNode2',
        role: 'edge'
    };
    list.push(message);
    i += 1;
}
```

The functional alternative gets rid of the while loop and uses map to process the rows into a list.

```javascript
const list = rows.map(r => ({
    childAddress: r[1],
    action: 'switchToBackupNode2',
    role: 'edge'
 }))
```

In addition to getting rid of the loop, this code has also removed temporary variables row and message and the loop variable i.

The result is much more readable.

It's crystal clear.

You can trust that this code works just by looking at it. To be fair here, to gain this level of trust, you need to understand the map function first. The map function is used everywhere in functional programming and thus learning it is an essential step in transitioning to FP.

`map` is one of the functions that programmers use for list processing. Processing data in lists is a big part of FP, and you should also learn the other list processing functions: most importantly, the reduce and filter functions.

## Removing ifs

Removing ifs is a useful strategy in my guest of simplifying code. There are several strategies that one can take to remove if statements from code, and applying any of them usually results in cleaner, easier to understand, structures.

Let's look at some strategies for removing if statements.

### Ternary Operator

The ternary operator is my main tool for getting rid of if statements from variable assignments.

Consider the following:

```javascript
let message;
if (person !== null) {
  message = `hello, ${person}!`
} else {
  message = 'hey there!'
}
```

There are two problems in the code above:

I must use a non-const variable message **because, with the if-structure, I am unable to give the message a value right away in the variable declaration.

The code is quite a verbose and complex considering that it only accomplishes the simple task of declaring a variable and conditionally assigning a value to it.

The same job can be done in one line by using the ternary operator `?`:

```javascript
const message = person !== null ? `hello, ${person}!` : 'hey there!'
```

### Boolean operators && and ||

The boolean operators, `&&` and `||` provide effective alternatives to if statements.

Instead of doing this,

```javascript
if (value) {
  doStuff(value)
} else {
  doStuff(1)
}
```

you can do this:

```javascript
doStuff(value || 1)
```

The logical OR operator `||` here provides a quick way to pass a default value to a function. You can use the same trick every time you don't know, or when it's not guaranteed, that a variable has a value: Provide a default value by prefixing  with || <default>.

Here is an example of how to use the AND operator && . First, the version using if:

```javascript
if (data) {
  sendData(data.value);
}
```

Then we remove the if using &&:

```javascript
data && sendData(data.value)
```

Here, we are using `&&` to fist check that the data variable holds a value. Without this check, the code would crash when there is no value (in other words, the value is null or undefined).

We are relying on short-circuit evaluation of boolean expressions when using these operators her. With the `&&` and `||` operators, JavaScript will not evaluate the latter part of the expression when the first part is falsy. You can learn more about short circuiting here.

## Maps and lookups

Using maps as lookup tables is an effective way to replace a sequence of if-statements. Consider the following:

```javascript
let language;
if (country ==) 'FI') {
  language = 'Finnish'
} else if (country === 'SE') {
  language = 'Swedish'
} else if (country === 'USA') {
  language = 'English (American)'
} else if (country === 'UK') {
  language = 'English (UK)'
} // etc...
```

A cleaner way is to use a map of country/language pairs.

```javascript
const languages = Map([
  ['FI', 'Finnish'],
  ['SE', 'Swedish'],
  ['USA', 'English (American)'],
  ['UK', 'English (UK)'],
])
const language = languages.get(country)
```

The second implementation is much simpler. The code reveals it's intention right away. As a bonus, it converts the language variable to use const

## Small Functions

Functional Programming is all about functions. It's better to write many small functions instead of a small number of long functions. The main reason for decomposing code into smaller modules is that smaller (shorter) pieces are easier to understand in isolation. Smaller pieces are also easier to test and maintain.

With the tricks I have shown here, your code can be more compact. That is an important goal and an excellent reason to learn these tricks, and more importantly, to learn functional programming.

There are more tricks and strategies like this. Let me know if you would like me to write a post about the other strategies!
