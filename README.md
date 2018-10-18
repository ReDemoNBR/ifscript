# **IfScript**


## **Introduction**
IfScript is a compare method which compares a plain text value to other values using its own syntax. It is an user-friendly and objective form of defining comparative methods.

### Quick Examples:

```javascript
// ifscript(text, ifscriptSyntax);
ifscript("QuIcK FoX", "quick fox"); // simple comparison without case sensitivity
ifscript("QuIcK FoX", "=QuIcK FoX"); // simple comparison WITH case sensitivity
ifscript("QuIcK FoX", "~fox"); // checks if left value contains the "fox" (case insensitive)
ifscript("QuIcK Fox", "!~ foobar"); // checks if left value NOT contains "foobar"
ifscript("QuIcK FoX", "?~ quick ; ~ fox"); // checks if left value contains "quick" or contains "fox"
```
In all cases above, the result is a Boolean `true`


## Installation
```shell
npm install ifscript
```

## Usage
The function returns a `Boolean` `true` or `false` whether it passes the test or not.
The first parameter is a plain text to be compared, and the second is Monico Syntax `String`.

```javascript
const ifscript = require("ifscript");

ifscript("Chrome", "?chromium ; chrome");
ifscript("003.140", "#3.14");
```