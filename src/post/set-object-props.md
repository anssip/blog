---
title: How to add object fields conditionally
description: A neat syntax for adding fields to an object conditionally without polluting it with undefined fields.
date: 2020-07-09
luogo: Espoo, Finland
published: true
tags: ["javascript", "code", "programming"]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

I often run into situations where I need to construct an object in JavaScript, and I want to set fields to this object conditionally. That could be an options object that I am passing as a parameter to some other function or API. I have only some of the field values available, and only those should be part of the parameter object.

To describe the situation, let's take a look at an example with a straightforward syntax using if statements.

{% image "./src/images/object-mutation.png", "Mutation", "600", "450" %}

Here I'm mutating the object conditionally, setting fields for values that are available. I don't like this kind of mutations, because they make the code hard to follow.

Here is another attempt:

```javascript
const options = {
    key1: value1 || undefined;
    key2: value2 || undefined;
};
```

This "solution" pollutes the object with fields that have undefined values. These fields will be present in the object, even though their values are undefined. With this kind of an object, you cannot be sure what happens when you pass it to the external library you are building this object for: It might behave just fine, or you might get errors, or worst, it might work in some unpredictable ways.

## The Way

Following is the cleanest syntax that I know of that solves these problems:

```javascript
const options = {
    …(value1 && { key1: value1 }),
    …(value2 && { key2: value2 })
    };
```

I like this a lot: Looks clean, does not add unnecessary fields to the object, and it does not use ugly if statements.

With the ES6 shorthand property syntax it looks even more clean:

{% image "./src/images/address-object.png", "screenshot", "600", "450" %}

I found this trick when I was looking at some code that my ex co-developer had produced, and have used it twice since I discovered it. I hope you find it useful too.
