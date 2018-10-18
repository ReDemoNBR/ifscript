# **Syntax**

## **SUMMARY**
1.  [Basic Operators](#basic-operators)
    +   `=` [Equality (default)](#equality)
    +   `~` [Contains](#contains)
    +   `^` [Starts with](#starts-with)
    +   `$` [Ends with](#ends-with)
    +   `#` [Numerical Equality](#numerical-equality)
    +   `>` [Greater than](#greater-than)
    +   `<` [Less than](#less-than)
    +   `>=` [Greater than or equal](#greater-than-or-equal)
    +   `<=` [Less than or equal](#less-than-or-equal)
2.  [Strict Operators](#strict-operators)
    +   `==` [Strict Equality](#strict-equality)
    +   `~~` [Strict Contains](#strict-contains)
    +   `^^` [Strict Starts with](#strict-starts-with)
    +   `$$` [Strict Ends with](#strict-ends-with)
3.  [Modifiers](#modifiers)
    +   `!` [Not](#not)
4.  [Text Special Operators](#text-special-operators)
    +   `:` [Length](#length)
5.  [Date Special Operators](#date-special-operators)
    -   [Non-Numeric Operators](#non-numeric-date-special-operators)
        +   `%a` [Weekday Short Name](#weekday-short-name) 
        +   `%A` [Weekday Name](#weekday-name) 
        +   `%b` [Month Short Name](#month-short-name) 
        +   `%B` [Month Name](#month-name)
        +   `%p` `%P` [AM/PM](#ampm)
    -   [Numeric Operators](#numeric-date-special-operators)
        +   `%C` [Century](#century)
        +   `%d` [Day of Month (1..31)](#day-of-month)
        +   `%H` [Hour 24 (0..23)](#hour-24)
        +   `%I` [Hour 12 (1..12)](#hour-12)
        +   `%j` [Day of Year (1..366)](#day-of-year)
        +   `%m` [Month Number (1..12)](#month-number)
        +   `%M` [Minute (0..59)](#minute)
        +   `%s` [Unix Epoch](#unix-epoch)
        +   `%S` [Second (0..59)](#seconds)
        +   `%w` [Day of Week (0..6)](#day-of-week)
        +   `%y` [2-digit Year](#2-digit-year)
        +   `%Y` [4-digit Year](#4-digit-year)
    -   [Timezone Operators](#timezone-date-special-operators)
        +   `%z` [Numerical Timezone](#numerical-timezone)
        +   `%Z` ~~[Alphabetic Timezone Abbreviation](#alphabetic-timezone-abbreviation)~~ (TODO?)
6.  [Semantic Version Special Operators](#semantic-version-special-operators)
    +   `@c` [SemVer Coerced Compare](#semver-coerced-compare)
    +   `@s` [SemVer Satisfy](#semver-satisfy)
    +   `@v` [SemVer Strict Compare](#semver-strict-compare)
7.  [Validation Special Operators](#validation-special-operators)
    +   `::` [Exists](#exists)
    +   `%%` [Valid Date](#valid-date)
    +   `##` [Valid Number](#valid-number)
    +   `@@` [Valid Semver](#valid-semver)
8.  [Using Multiple Expressions](#using-multiple-expressions)
    +   `&` [Every (default)](#every)
    +   `?` [Any](#any)
9.  [TODO](#todo)
    +   [Finish this doc](#finish-this-doc)
    +   `@@` [Valid SemVer](#valid-semver)
    +   `xx` [Case Sensitive Basic Operators](#case-sensitive-basic-operators)
    +   [Tips section in syntax doc](#tips-secion-in-syntax-doc)

    
---

## **BASIC OPERATORS**
Basic operators can be prepended to any `value` in order to change the way it is compared to another value. If omitted, the operator selected is the [equality](#equality). All expressions can have a `!` ([not operator](#not)) prepended denoting a negation of the comparison in order to invert result, so a _falsy_ statement becomes _truthy_ and vice-versa.

### Equality
Matches values **_without distincting the case_** of the texts. **This means that a lowercase text will match an uppercase text**.  
The `equality` operation is used whenever the operator is omitted or the expression starts with `=`.  
_If you need case distinction, check [Strict Equality](#strict-equality)_.

#### Syntax
```vala
value
```
```vala
= value
```

#### Example
The expression `tree`:

| Text      | Matches |
|-----------|---------|
| tree      | YES     | 
| TREE      | YES     |
| Tree      | YES     |
| trEE      | YES     |
| TRee      | YES     |
| trees     | NO      |
| Trees     | NO      |



### Contains
Matches any value that contains the text without distincting the case of the texts. It also matches all values that are [equal](#equality).  
The `contains` operation is used when the expresion starts with `~`.  
_If you need case distinction in `contains` opeation, read [Strict Contains](#strict-contains)_.

#### Syntax
```vala
~ value
```

#### Example
The expression `~ tree`:

| Text       | Matches |
|------------|---------|
| tree       | YES     | 
| TREE       | YES     |
| Tree       | YES     |
| trEE       | YES     |
| TRee       | YES     |
| trees      | YES     |
| Trees      | YES     |
| Small tree | YES     |
| Big Tree   | YES     |
| TREEHOUSE  | YES     |



### Starts With
Matches any value that starts with the text without distincting the case of the texts. It also matches all values that are [equal](#equality).  
The `starts with` operation is used when the expression is started with `^`.  
_If you need to an operation that matches values that contain a certain text, please read [Contains](#contains)_.

#### Syntax
```vala
^ value
```

#### Example
The expression `^ tree`:

| Text       | Matches |
|------------|---------|
| tree       | YES     | 
| TREE       | YES     |
| Tree       | YES     |
| trEE       | YES     |
| TRee       | YES     |
| trees      | YES     |
| Trees      | YES     |
| Small tree | NO      |
| Big Tree   | NO      |
| TREEHOUSE  | YES     |



### Ends With
Matches any value that ends with the text without distincting the case of the texts. It also matches all values that are [equal](#equality).  
The `ends with` operation is used when the expression starts with `$`.  
_If you need to an operation that matches values that contain a certain text, please read [Contains](#contains)_.

#### Syntax
```vala
$ value
```

#### Example
The expression `$ tree`:

| Text       | Matches |
|------------|---------|
| tree       | YES     | 
| TREE       | YES     |
| Tree       | YES     |
| trEE       | YES     |
| TRee       | YES     |
| trees      | NO      |
| Trees      | NO      |
| Small tree | YES     |
| Big Tree   | YES     |
| TREEHOUSE  | NO      |


### Numerical Equality
Matches values that are numerically equal. It is more useful than comparing numbers with [Equality](#equality) or [Contains](#contains) because it parses both to number and compare them.  
It will only match if both values can be parsed to number and both parsed numbers are numerically equal. Numbers must use dots as decimal separator and no arithmetic operation is made.  
The `numerical equality` operation is used when the expression starts with `#`.

#### Syntax
```vala
# value
```

#### Example
The expression `# 3.14`:

| Text     | Matches | 
|----------|---------|
| 3.14     | YES     |
| 03.14000 | YES     |
| 00003.14 | YES     |
| 3.140000 | YES     |
| 3.1415   | NO      |
| 3.014    | NO      |
| 3        | NO      |
| 314/100  | NO*     |

\* No arithmetic operation is performed, so `314/100` is considered a text and not a valid number to be parsed.



### Greater than
Matches any value that is numerically greater or sorts after **without case distinction** the given value in expression. It will only use the numerical comparison if both values are numbers, otherwise it will check if it sorts after in case insensitive comparison.  
In text sorting, numeric digits come before text characters due to character encodings. For more info, read [Unicode on Wikipedia](https://en.wikipedia.org/wiki/Unicode).  
The `greater than` operation is used when the expression starts with `>`.  
_If you need the equality along with the greater than, read [Greater than or Equal](#greater-than-or-equal)_.

#### Syntax
```vala
> value
```
#### Example 1
The expression `> 42`:

| Text     | Matches | 
|----------|---------|
| 55       | YES     |
| 42.55    | YES     |
| 42       | NO      |
| -100     | NO      |
| -15      | NO      |
| hello    | YES     |
| TREE     | YES     |
| 100+55   | NO*     |
 
\* No arithmetic operation is performed, so `100+55` **is considered a text** instead of a valid number to be parsed, so it checks if the **TEXT** `100+55` sorts after the **TEXT** `42`.

#### Example 2
The expression `> tree`:

| Text     | Matches | 
|----------|---------|
| 55       | NO      |
| 42.55    | NO      |
| 42       | NO      |
| -42      | NO      |
| -100     | NO      |
| -15      | NO      |
| tree     | NO      |
| TREE     | NO      |
| trees    | YES     |
| zylon    | YES     |
| foo      | NO      |


### Less than
Matches any value that is numerically lesser or sorts before **without case distinction** the given value in expression. It will only use the numerical comparison if both values are numbers, otherwise it will check if the sorting in case insensitive comparison.  
In text sorting, numeric digits come before text characters due to character encodings. For more info, read [Unicode on Wikipedia](https://en.wikipedia.org/wiki/Unicode).  
The `less than` operation is used when the expression starts with `<`.  
_If you need the equality along with the `less than`, read [Less than or Equal](#less-than-or-equal)_.

#### Syntax
```vala
< value
```

#### Example 1
The expression `< 42`:

| Text     | Matches | 
|----------|---------|
| 55       | NO      |
| 42.55    | NO      |
| 42       | NO      |
| 22       | YES     |
| -100     | YES     |
| -15      | YES     |
| hello    | NO      |
| TREE     | NO      |
| 100+55   | YES*    |
 
\* No arithmetic operation is performed, so `100+55` **is considered a text** instead of a valid number to be parsed, so it checks if the **TEXT** `100+55` sorts before the **TEXT** `42`.

#### Example 2
The expression `< tree`:

| Text     | Matches | 
|----------|---------|
| 55       | YES*    |
| 42.55    | YES*    |
| 42       | YES*    |
| -42      | YES*    |
| -100     | YES*    |
| -15      | YES*    |
| tree     | NO      |
| TREE     | NO      |
| trees    | NO      |
| zylon    | NO      |
| foo      | YES     |

\* Attention that `tree` is not a number so it checks the text sorting.


### Greater than or Equal
Matches any value that is numerically greater than, [numerically equal](#numerical-equality), [equals](#equality) or sorts after **without case distinction** the given value in expression. It will only use the numerical comparison if both values are numbers, otherwise it will check if the sorting and [equality](#equality) in case insensitive comparison.  
In text sorting, numeric digits come before text characters due to character encodings. For more info, read [Unicode on Wikipedia](https://en.wikipedia.org/wiki/Unicode).  
The `greater than or equal` operation is used when the expression starts with `>=`.  
_If you need remove the equality, read [Greater than](#greater-than)_.

#### Syntax
```vala
>= value
```

#### Example
The expression `>= 42`:

| Text     | Matches | 
|----------|---------|
| 55       | YES     |
| 42.55    | YES     |
| 42       | YES     |
| -42      | NO      |
| -100     | NO      |
| -15      | NO      |
| hello    | YES     |
| TREE     | YES     |
| 100+55   | NO*     |

\* No arithmetic operation is performed, so `100+55` **is considered a text** instead of a valid number to be parsed, so it checks if the **TEXT** `100+55` sorts after or [equals](#equality) to the **TEXT** `42`.



### Less than or Equal
Matches any value that is numerically lesser, [numerically equal](#numerical-equality), [equals](#equality) or sorts before **without case distinction** the given value in expression. It will only use the numerical comparison if both values are numbers, otherwise it will check if the sorting and [equality](#equality) in case insensitive comparison.  
In text sorting, numeric digits come before text characters due to character encodings. For more info, read [Unicode on Wikipedia](https://en.wikipedia.org/wiki/Unicode).  
The `less than or equal` operation is used when the expression starts with `<=`.  
_If you need remove the equality, read [Less than](#less-than)_.

#### Syntax
```vala
<= value
```

#### Example
The expression `<= 42`:

| Text     | Matches | 
|----------|---------|
| 55       | NO      |
| 42.55    | NO      |
| 42       | YES     |
| -42      | YES     |
| -100     | YES     |
| -15      | YES     |
| hello    | NO      |
| TREE     | NO      |
| 100+55   | YES*    |

\* No arithmetic operation is performed, so `100+55` **is considered a text** instead of a valid number to be parsed, so it checks if the **TEXT** `100+55` sorts before or [equals](#equality) to the **TEXT** `42`.


---

## **STRICT OPERATORS**
Strict operators work just like basic operators counterparts, except that the strict versions are **case sensitive**. This means that uppercase letters differ from lowercase letters, unlike what happens in [Basic Operators](#basic-operators).


### Strict Equality
Matches values that are equal, distincting the case of the texts.  
The `strict equality` operation is used when the expression starts with `==`.  
_If you need to remove case distinction, read [Equality](#equality)_.

#### Syntax
```vala
== value
```

#### Example
The expression `== tree`:

| Text      | Matches |
|-----------|---------|
| tree      | YES     | 
| TREE      | NO      |
| Tree      | NO      |
| trEE      | NO      |
| TRee      | NO      |
| trees     | NO      |
| Trees     | NO      |



### Strict Contains
Matches any value that contains the text, distincting the case of the texts. It also matches all values that are [strict equal](#strict-equality).  
The `strict contains` operation is used when the expression starts with `~~`.  
_If you need to remove case distinction, read [Contains](#contains)_.

#### Syntax
```vala
~~ value
```

#### Example
The expression `~~ tree`:

| Text       | Matches |
|------------|---------|
| tree       | YES     | 
| TREE       | NO      |
| Tree       | NO      |
| trEE       | NO      |
| TRee       | NO      |
| trees      | YES     |
| Trees      | NO      |
| Small tree | YES     |
| Big Tree   | NO      |
| TREEHOUSE  | NO      |



### Strict Starts With
Matches any value that starts with the text, distincting the case of the texts. It also matches all values that are [strict equal](#strict-equality).  
The `strict starts with` operation is used when the expression is started with `^^`.  
_If you need to an operation that matches values that contain a certain text, please read [Strict Contains](#strict-contains)_.  
_If you need to remove case distinction, check out [Starts With](#starts-with)_.

#### Syntax
```vala
^^ value
```

#### Example
The expression `^^ tree`:

| Text       | Matches |
|------------|---------|
| tree       | YES     | 
| TREE       | NO      |
| Tree       | NO      |
| trEE       | NO      |
| TRee       | NO      |
| trees      | YES     |
| Trees      | NO      |
| Small tree | NO      |
| Big Tree   | NO      |
| TREEHOUSE  | NO      |



### Strict Ends With
Matches any value that ends with the text, distincting the case of the texts. It also matches all values that are [strict equal](#strict-equality).  
The `strict ends with` operation is used when the expression starts with `$`.  
_If you need to an operation that matches values that contain a certain text, please read [Contains](#contains)_.  
_If you need to remove case distinction, check out [Ends With](#ends-with)_.

#### Syntax
```vala
$$ value
```

#### Example
The expression `$$ tree`:

| Text       | Matches |
|------------|---------|
| tree       | YES     | 
| TREE       | NO      |
| Tree       | NO      |
| trEE       | NO      |
| TRee       | NO      |
| trees      | NO      |
| Trees      | NO      |
| Small tree | YES     |
| Big Tree   | NO      |
| TREEHOUSE  | NO      |




---
## **MODIFIERS**
Modifiers can be prepended to any valid expression. The only modifier support for now is the [Not](#not) which will invert the result of any expression, so a _falsy_ expression becomes _truthy_ and vice-versa.

### Not
Invert the value of any valid expression. So a _truthy_ expression becomes _falsy_ and a _falsy_ expression becomes _truthy_.  
The `not` modifier is used when there is a `!` before a valid expression.  
As it is used before an expression, it can be combined with any [Basic](#basic-operators), [Semantic Version](#semantic-version-special-operators) and [Date](#date-special-operators) operators.  
Using multiple negations before an expression does not affect performance at all, because it is optimized to invert the value or not whether the number of negations is odd or even.

#### Syntax
Spaces in between `!` and expression is optional.
```vala
! expression
```

#### Using combined with operators
`!~ value` combined with [Contains Operator](#contains)  
`! # value` combined with [Numerical Equality Operator](#numerical-equality)  
`!>= value` combined with [Greater than or Equal Operator](#greater-than-or-equal)  
`! value` combined with [Equality Operator](#equality) (the equality operator is omitted by default)

#### Example
The valid expression `~~ tree` can be negated with `!~~ tree` so it inverts the result of the match:

| Text       | Matches |
|------------|---------|
| tree       | NO      | 
| TREE       | YES     |
| Tree       | YES     |
| trEE       | YES     |
| TRee       | YES     |
| trees      | NO      |
| Trees      | YES     |
| Small tree | NO      |
| Big Tree   | YES     |
| TREEHOUSE  | YES     |


---

## **TEXT SPECIAL OPERATORS**
As the name implies, these operators are special. They are meant for specific tasks.  
They can be combined with inequality operators `<`, `<=`, `>` and `>=` and the equality operator `=`.

### Length
Counts the total number of characters in the text and can be combined with inequality operators like `<`, `<=`, `>` and `>=`. If there is no inequality operator, it will compare if the length is equal to the value.  
The `length` operator is used whenever an expression starts with `:`

#### Syntax
```vala
: value
```
```vala
: op value
```
where `op` can be replaced by `<`, `<=`, `>`, `>=` or `=`

#### Example 1
The expression `: 4`:

| Text       | Matches |
|------------|---------|
| tree       | YES     | 
| TREE       | YES     |
| Tree       | YES     |
| trEE       | YES     |
| TRee       | YES     |
| trees      | NO      |
| Trees      | NO      |
| Small tree | NO      |
| Big Tree   | NO      |
| TREEHOUSE  | NO      |

#### Example 2
Combining with `>=` [Greater Than or Equal](#greater-than-or-equal) operator. The expression `: >= 6`;

| Text       | Matches |
|------------|---------|
| tree       | NO      | 
| TREE       | NO      |
| Tree       | NO      |
| trEE       | NO      |
| TRee       | NO      |
| trees      | NO      |
| Trees      | NO      |
| Small tree | YES     |
| Big Tree   | YES     |
| TREEHOUSE  | YES     |


### SemVer
Compares the text and the value as semantic versions. For more information on Semantic Version, read [their official page](#https://semver.org/)
The `semver` operator is used whenever an expression starts with `@`

#### Syntax
```vala
@ value
```
```vala
@ op value
```
where `op` can be replaced by `<`, `<=`, `>`, `>=` or `=`

#### Example 1
The expression `@ 2.6`:

| Text       | Matches |
|------------|---------|
| 2.6        | YES     | 
| 2.6.1      | NO      |
| 2.6.0      | NO      |
| foobar     | NO      |
| 2.60       | NO      |
| trees      | NO      |
| Trees      | NO      |
| Small tree | YES     |
| Big Tree   | YES     |
| TREEHOUSE  | YES     |


---

## **DATE SPECIAL OPERATORS**
Date special operators are used to extract part of a date from a valid JavaScript Date Format. The dates are always extracted in UTC for standardization with `en-US` locale.  
All Date Special Operators can be combined with inequality operators `<`, `<=`, `>` and `>=` or the equality operator `=` which can be omitted by default.  
All operators are prefixed with `%` sign to resemble UNIX date command.  
_If the text is not a valid JavaScript date, then it will not match by default_.


### **NON-NUMERIC DATE SPECIAL OPERATORS**
Non-numeric Date Special Operators can operate `YYYY-MM-DDTHH:mm:ssZ` or `YYYY-MM-DDTHH:mm:ss.SSSZ` ISO-8601 format dates and are able to extract part of it, like day of week name and month name.  
Unlike the numeric section of Date Special Operators, the non-numeric do not accept inequality operators because all values are compared as texts. The texts are always compared if are [equal without case distinction](#equality).  
Localization is `en-US` for standadization.


### Weekday Short Name
Extracts the day of week name from a valid date to compare and abbreviate it to the first 3 letters only. Ex.: `Sun` for "Sunday".  
The `weekday short name` operator is used when the expression starts with `%a`.  
_If you need day of week number, please read [Day of Week](#day-of-week)_.  
_If you need full name of the day, please read [Weekday Name](#weekday-name)_.  

#### Syntax
```vala
%a value
```

#### Example
The expression `%a Fri`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-09-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-08-31T23:59:51Z     | YES     |                                           |
| 2018-03-16T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Weekday Name
Extracts the day of week name from a valid date to compare.  
The `weekday name` operator is used when the expression starts with `%A`.  
_If you need day of week number, please read [Day of Week](#day-of-week)_.  
_If you need abbreviated name of the day, please read [Weekday Short Name](#weekday-short-name)_. 

#### Syntax
```vala
%A value
```

#### Example
The expression `%A Friday`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-09-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T04:30:45Z     | NO      |                                           |
| 2018-08-31T23:59:51Z     | YES     |                                           |
| 2018-03-16T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Month Short Name
Extracts the name of month from a valid date and abbreviate it to compare. Ex.: `Jan` for "January".  
The `month short name` operator is used when the expression starts with `%b`.  
_If you need month number, please read [Month Number](#month-number)_.  
_If you need full name of the month, please read [Month Name](#month-name)_. 

#### Syntax
```vala
%b value
```

#### Example
The expression `%b Mar`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-09-14T04:30:45Z     | NO      |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-08-31T23:59:51Z     | NO      |                                           |
| 2018-03-16T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Month Name
Extracts the month name from a valid date to compare.  
The `month name` operator is used when the expression starts with `%B`.  
_If you need month number, please read [Month Number](#month-number)_.  
_If you need short name of the month, please read [Month Short Name](#month-short-name)_. 

#### Syntax
```vala
%B value
```

#### Example
The expression `%B March`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-09-14T04:30:45Z     | NO      |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-08-31T23:59:51Z     | NO      |                                           |
| 2018-03-16T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### AM/PM
Extracts the AM or PM from a valid date to compare.  
The `AM/PM` operator is used when the expression starts with `%P` or `%p`.  

#### Syntax
```vala
%P value
```
```vala
%p value
```

#### Example
The expression `%P AM`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-09-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-08-31T23:59:51Z     | NO      |                                           |
| 2018-03-16T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |



### **NUMERIC DATE SPECIAL OPERATORS**
Numeric Date Special Operators can operate any JavaScript date and are able to extract part of it in order to compare.  
Unlike the non-numeric section of Date Special Operators, the numeric accepts inequality operators because all values are compared as numbers, so all operators here can be combined with `<`, `<=`, `>` and `>=`. If there is no inequality operator, it will use the numerical equality by default.  

### Century
Extracts the century from a valid date to compare. **It omits the last two digits** so the year 2018 has century 20.  
The `century` operator is used when the expression starts with `%C`.  
_If you need 2-digit year, please read [2-digit Year](#2-digit-year)_.  
_If you need 4-digit year, check out [4-digit Year](#4-digit-year)_.

#### Syntax
```vala
%C value
```  
```vala
%C op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%C 20`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 1999-03-14T04:30:45Z     | NO      |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-03-16T23:59:51Z     | YES     |                                           |
| 2018-03-16T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%C < 20`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 1999-03-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T04:30:45Z     | NO      |                                           |
| 2018-03-16T23:59:51Z     | NO      |                                           |
| 2018-03-16T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Day of Month
Extracts the day of month from a valid date to compare. The values can range from 1 to 31.  
The `day of month` operator is used when the expression starts with `%d`.  
_If you need day of week, please read [Day of Week](#day-of-week)_.  
_If you need day of year, check out [Day of Year](#day-of-year)_.

#### Syntax
```vala
%d value
```
```vala
%d op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%d 16`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-14T04:30:45Z     | NO      |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-03-16T23:59:51Z     | YES     |                                           |
| 2018-03-16T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%d <= 7`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-03T04:30:45Z     | YES     |                                           |
| 2018-03-09T04:30:45Z     | NO      |                                           |
| 2018-03-07T23:59:51Z     | YES     |                                           |
| 2018-03-01T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Hour 24
Extracts the hour from a valid date in a 24h format to compare. **The values range from 0 to 23**.  
The `hour 24` operator is used when the expression starts with `%H`.  
_If you need AM/PM format, check [Hour 12](#hour-12)_.

#### Syntax
```vala
%H value
```  
```vala
%H op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%H 23`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-14T04:30:45Z     | NO      |                                           |
| 2018-03-16T04:30:45Z     | NO      |                                           |
| 2018-03-16T23:59:51Z     | YES     |                                           |
| 2018-03-16T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%H > 12`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-03T04:30:45Z     | NO      |                                           |
| 2018-03-09T04:30:45Z     | NO      |                                           |
| 2018-03-07T23:59:51Z     | YES     |                                           |
| 2018-03-01T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Hour 12
Extracts the hour from a valid date in AM/PM format to compare. **The values range from 1 to 12**.  
The `hour 12` operator is used when the expression starts with `%I`.  
_If you need 24h format, check [Hour 24](#hour-24)_.

#### Syntax
```vala
%I value
```  
```vala
%I op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%I 4`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T16:30:45Z     | YES     |                                           |
| 2018-03-16T23:59:51Z     | NO      |                                           |
| 2018-03-16T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T16:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T04:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%I < 5`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-03T04:30:45Z     | YES     |                                           |
| 2018-03-09T16:30:45Z     | YES     |                                           |
| 2018-03-07T23:59:51Z     | NO      |                                           |
| 2018-03-01T00:01:00Z     | NO      | Hour is 12                                |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T16:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T04:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Day of Year
Extracts the day of year from a valid date to compare. The values can range from 1 to 366.  
The `day of year` operator is used when the expression starts with `%j`.  
_If you need day of month, check out [Day of Month](#day-of-month)_.
_If you need day of week, please read [Day of Week](#day-of-week)_.  

#### Syntax
```vala
%j value
```  
```vala
%j op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%j 75`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-14T04:30:45Z     | NO      |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-03-16T23:59:51Z     | YES     |                                           |
| 2018-03-16T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%j <= 183`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-03T04:30:45Z     | YES     |                                           |
| 2018-03-09T04:30:45Z     | YES     |                                           |
| 2018-03-07T23:59:51Z     | YES     |                                           |
| 2018-03-01T00:01:00Z     | YES     |                                           |
| 2018-12-25T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Month Number
Extracts the month number from a valid date to compare. The values can range from 1 to 12.  
The `month` operator is used when the expression starts with `%m`.  
_If you need month name, check out [Month Name](#month-name)_.
_If you need month short name, please read [Month Short Name](#month-short-name)_.  

#### Syntax
```vala
%m value
```  
```vala
%m op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%m 5`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-05-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T04:30:45Z     | NO      |                                           |
| 2018-03-16T23:59:51Z     | NO      |                                           |
| 2018-05-16T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%m <= 4`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-03T04:30:45Z     | YES     |                                           |
| 2018-11-09T04:30:45Z     | NO      |                                           |
| 2018-03-07T23:59:51Z     | YES     |                                           |
| 2018-03-01T00:01:00Z     | YES     |                                           |
| 2018-12-25T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Minute
Extracts the minute from a valid date to compare. The values can range from 0 to 59.  
The `minute` operator is used when the expression starts with `%M`.

#### Syntax
```vala
%M value
```  
```vala
%M op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%M 30`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-05-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-03-16T23:59:51Z     | NO      |                                           |
| 2018-05-16T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:30:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%M <= 5`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-03T04:30:45Z     | NO      |                                           |
| 2018-11-09T04:30:45Z     | NO      |                                           |
| 2018-03-07T23:59:51Z     | NO      |                                           |
| 2018-03-01T00:01:00Z     | YES     |                                           |
| 2018-12-25T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Unix Epoch
Extracts the number of seconds elapsed since `00:00:00 (UTC), 01 January 1970` from a valid date to compare.  
The `unix epoch` operator is used when the expression starts with `%s`.  
_If you need the seconds number in a date, check [Seconds](#seconds)_.

#### Syntax
```vala
%s value
```  
```vala
%s op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%s 1526272245`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-05-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T04:30:45Z     | NO      |                                           |
| 2018-03-16T23:59:51Z     | NO      |                                           |
| 2018-05-16T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:30:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%s >= 1533911415`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-03T04:30:45Z     | NO      |                                           |
| 2018-11-09T04:30:45Z     | YES     |                                           |
| 2018-03-07T23:59:51Z     | NO      |                                           |
| 2018-03-01T00:01:00Z     | NO      |                                           |
| 2018-12-25T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Second
Extracts the seconds from a valid date to compare. The values can range from 0 to 59.  
The `seconds` operator is used when the expression starts with `%S`.  
_If you need the number of seconds elapsed from 01 Jan 1970, read [Unix Epoch](#unix-epoch)_.

#### Syntax
```vala
%S value
```  
```vala
%S op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%S 45`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-05-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-03-16T23:59:51Z     | NO      |                                           |
| 2018-05-16T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:30:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%S > 30`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-03T04:30:45Z     | YES     |                                           |
| 2018-11-09T04:30:45Z     | YES     |                                           |
| 2018-03-07T23:59:51Z     | YES     |                                           |
| 2018-03-01T00:01:00Z     | NO      |                                           |
| 2018-12-25T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### Day of Week
Extracts the day of week from a valid date to compare. The values range from 0 to 6, starting at Sunday (`0`) and ending at Saturday (`6`).  
The `day of week` operator is used when the expression starts with `%w`.  
_If you need day of month, please read [Day of Month](#day-of-month)_.  
_If you need day of year, check out [Day of Year](#day-of-year)_.

#### Syntax
```vala
%w value
```  
```vala
%w op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%w 5`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-14T04:30:45Z     | NO      |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-03-16T23:59:51Z     | YES     |                                           |
| 2018-03-16T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | NO      |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%w >= 4`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-03T04:30:45Z     | YES     |                                           |
| 2018-03-09T04:30:45Z     | YES     |                                           |
| 2018-03-07T23:59:51Z     | NO      |                                           |
| 2018-03-01T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### 2-digit Year
Extracts the year from a valid date to compare. The values range from 0 to 99 as this is just the last two digits of year.  
The `2-digit year` operator is used when the expression starts with `%y`.  
_If you need a 4-digit year, take a look at [4-digit Year](#4-digit-year)_.  

#### Syntax
```vala
%y value
```  
```vala
%y op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%y 18`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-03-16T23:59:51Z     | YES     |                                           |
| 2019-03-16T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%y < 20`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 1998-03-03T04:30:45Z     | NO      | 98 is greater than 20                     |
| 2018-03-09T04:30:45Z     | YES     |                                           |
| 2098-03-07T23:59:51Z     | NO      | 98 is greater than 20                     |
| 2018-03-01T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### 4-digit Year
Extracts the full year from a valid date to compare.  
The `4-digit year` operator is used when the expression starts with `%Y`.  
_If you need a 2-digit year, please read [2-digit Year](#2-digit-year)_.  

#### Syntax
```vala
%Y value
```  
```vala
%Y op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%Y 2018`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 2018-03-14T04:30:45Z     | YES     |                                           |
| 2018-03-16T04:30:45Z     | YES     |                                           |
| 2018-03-16T23:59:51Z     | YES     |                                           |
| 2019-03-16T00:01:00Z     | NO      |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |

#### Example 2
The expression `%Y >= 2018`:

| Text                     | Matches | Reason                                    |
|--------------------------|---------|-------------------------------------------|
| 1998-03-03T04:30:45Z     | NO      |                                           |
| 2018-03-09T04:30:45Z     | YES     |                                           |
| 2098-03-07T23:59:51Z     | YES     |                                           |
| 2018-03-01T00:01:00Z     | YES     |                                           |
| 2018-03-15T23:59:59.999Z | YES     |                                           |
| 2018-13-16T18:22:35Z     | NO      | Invalid date, there is no such month `13` |
| 2018-02-30T18:22:35Z     | NO      | Invalid date, there is no such day in Feb |


### **TIMEZONE DATE SPECIAL OPERATORS**
Timezone Date Special Operators can operate any valid IANA compliant timezone and are able to extract the short numerical timezone and name abbreviation.  
**Timezones are date-time sensitive because of Daylight Saving Time (DST)**, so comparing `America/New_York` when on DST will differ from when not on DST. So it is prefered to use these special operators if you application is DST sensitive.
_If you want to have an static timezone that does not have DST changes, prefer to use the `Etc/` ones._ [Read more about IANA timezone database here](#https://en.wikipedia.org/wiki/Tz_database).
_For a list with all IANA timezones, read [here](#https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

### Numerical Timezone
Extracts the UTC offset from IANA compliant timezone and compare to a `(+|-)HHMM` or `(+|-)HH:MM` format numerical timezone.  
This operator can be combined with inequality operators `<`, `<=`, `>` and `>=`, just like the equality operator `=`.  
The `numerical timezone` operator is used when the expression starts with `%z`.

#### Syntax
```vala
%z value
```
```vala
%z op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `%z 01:00`:

| Text                | Matches | Reason                             |
|---------------------|---------|------------------------------------|
| America/New_York    | NO      |                                    |
| Europe/Copenhagen   | YES\*   | **But will NOT match when on DST** |
| Europe/London       | NO\*    | **But will match when on DST**     |
| America/Los_Angeles | NO      |                                    |
| Asia/Tokyo          | NO      |                                    |
| America/Sao_Paulo   | NO      |                                    |
| Etc/GMT             | NO      |                                    |
| Etc/GMT-1           | YES*    | Sign is inverted on IANA database  |
| Etc/GMT+1           | NO*     | Sign is inverted on IANA database  |

#### Example 2
The expression `%z < +00:00`:

| Text                | Matches | Reason                             |
|---------------------|---------|------------------------------------|
| America/New_York    | YES     |                                    |
| Europe/Copenhagen   | NO      |                                    |
| Europe/London       | NO      |                                    |
| America/Los_Angeles | YES     |                                    |
| Asia/Tokyo          | NO      |                                    |
| America/Sao_Paulo   | YES     |                                    |
| Etc/GMT             | NO      |                                    |
| Etc/GMT-1           | NO*     | Sign is inverted on IANA database  |
| Etc/GMT+1           | YES*    | Sign is inverted on IANA database  |



---
## **SEMANTIC VERSION SPECIAL OPERATORS**
Semantic versioning is a way of assigning version numbers to packages. [SemVer](https://semver.org/) is specification used here.  
The operators here make comparison using this specification.


### SemVer Coerced Compare
Apply a coercion to SemVer format if possible and compare the coerced versions. If any of the coerced versions is not valid, the comparison will fail returning `false`.  
This operator can be combined with inequality operators `<`, `<=`, `>` and `>=`.  
The `semver compare with coercion` operator is used when the expression starts with `@c`.
_If you want to compare without coercion, take a look at [Compare without Coercion](#semver-strict-compare)_.

#### Syntax
```vala
@c value
```
```vala
@c op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `@c 69.0.3497.100`:

| Text             | Matches | Reason                     |
|------------------|---------|----------------------------|
| 69.0.3497.100    | YES     | Only `X.Y.Z` is considered |
| 69.0.3497.92     | YES     | Only `X.Y.Z` is considered |
| 69.0.3497        | YES     | Only `X.Y.Z` is considered |
| 69.0.3497.tree   | YES     | Only `X.Y.Z` is considered |
| 69.0.3496        | NO      |                            |
| 69.0.3498        | NO      |                            |
| 68.0.3497        | NO      |                            |
| 70.0.3497        | NO      |                            |
| foo              | NO      |                            |

#### Example 2
The expression `@c > 69.0.3497.92`:

| Text             | Matches | Reason                     |
|------------------|---------|----------------------------|
| 69.0.3497.100    | NO      | Only `X.Y.Z` is considered |
| 69.0.3497.92     | NO      |                            |
| 69.0.3497        | NO      |                            |
| 69.0.3497.tree   | NO      |                            |
| 69.0.3496        | NO      |                            |
| 69.0.3498        | YES     |                            |
| 68.0.3497        | NO      |                            |
| 70.0.3497        | YES     |                            |
| foo              | NO      |                            |


### SemVer Satisfy
Checks if a version satisfies a specified range of versions. The `range` syntax for SemVer can be found [here](https://www.npmjs.com/package/semver#ranges).  
The `semver satisfy` operator is used when the expression starts with `@s`.  

#### Syntax
```vala
@s value
```

#### Example 1
The expression `@s ~2.5`:

| Text  | Matches |
|-------|---------|
| 1.0.0 | NO      |
| 1.7.2 | NO      |
| 1.2.3 | NO      |
| 2.4.0 | NO      |
| 2.0.3 | NO      |
| 2.5.0 | YES     |
| 2.5.7 | YES     |
| 5.3.1 | NO      |
| 7.2.3 | NO      |
| 7.5.0 | NO      |

#### Example 2
The expression `@s 1.x || >=2.5.0 || 5.0.0 - 7.2.3`:

| Text  | Matches |
|-------|---------|
| 1.0.0 | YES     |
| 1.7.2 | YES     |
| 1.2.3 | YES     |
| 2.4.0 | NO      |
| 2.0.3 | NO      |
| 2.5.0 | YES     |
| 2.5.7 | YES     |
| 5.3.1 | YES     |
| 7.2.3 | YES     |
| 7.5.0 | YES     |


### SemVer Strict Compare
Does a strict SemVer comparison without any coercion, this means that values must follow the SemVer specification. If any of the versions is not valid, the comparison will fail returning `false`.  
This operator can be combined with inequality operators `<`, `<=`, `>` and `>=`.  
The `semver strict compare` operator is used when the expression starts with `@v`.
_If you want to compare using coercion, take a look at [Compare without Coercion](#semver-coerced-compare)_.

#### Syntax
```vala
@v value
```
```vala
@v op value
```
where `op` can be replaced by any inequality operator (`<`, `<=`, `>`, `>=`).

#### Example 1
The expression `@v 3.4.1`:

| Text    | Matches |
|---------|---------|
| 3.4.1   | YES     |
| 3.4.0   | NO      |
| 3.4.2   | NO      |
| 4.4.1   | NO      |
| foo     | NO      |
| 3.4.1.0 | NO      |
| 3.4.1.1 | NO      |
| 3.4     | NO      |

#### Example 2
The expression `@v >= 3.4.1`:

| Text    | Matches |
|---------|---------|
| 3.4.1   | YES     |
| 3.4.0   | NO      |
| 3.4.2   | YES     |
| 4.4.1   | YES     |
| foo     | NO      |
| 3.4.1.0 | NO      |
| 3.4.1.1 | NO      |
| 3.4     | NO      |


---

## **VALIDATION SPECIAL OPERATORS**
Validation special operators do simple validations and do not take any argument in expression.  

### Exists
Tests if value has a text with a non-zero length. Useful for testing if value exists. Shortcut to `: > 0`.

#### Syntax
```vala
::
```

#### Example

### Valid Date
Tests if value is a valid date in `YYYY-MM-DDTHH:mm:ssZ` or `YYYY-MM-DDTHH:mm:ss.SSSZ` format.  

#### Syntax
```vala
%%
```

#### Example


### Valid Number
Tests if value is a valid decimal number.

#### Syntax
```vala
##
```

#### Example


### Valid SemVer
Tests if value follows the SemVer 2.0.0 specification.  

#### Syntax
```vala
@@
```


---

## **USING MULTIPLE EXPRESSIONS**
This is used whenever you need to make more than one test, such like to test if a value is in between two other numbers or when there is more than one pattern of tests.  
By default, expressions can be chained using `;`. So `^ foo ; ~~ bar ; !<= baz ; $ qux` is a valid expression. In this case, it would test if the text passes **all** the tests (starts with `foo`, strict-contains `bar`, is not less or equal than `baz` and ends with `qux`).  
There are 2 ways of testing chained expressions. **[Every](#every)** (default) tests if **all** tests succeed, and **[Any](#any)** tests if at **least 1** succeed.  
**You can NOT combine multiple chaining methods**.

### Every
Check if all tests succeed. Tests are performed from the left to the right.  
For optimization matters, if any test fail, then it will not make the other tests because the whole test is already _falsy_.  
The `every` chaining is used when the comparation starts with `&` or there is chaining without specifying the chaining method.

#### Syntax
```vala
expression1 [; expression2 [; expression3 [...] ] ]
```
```vala
& expression1 [; expression2 [; expression3 [...] ] ]
```

#### Example
Test if it is in between numbers 5 and 10: `>= 5 ; <= 10` (equivalent to `& >= 5 ; <= 10`)

| Text       | Matches |
|------------|---------|
| 1          | NO      | 
| tree       | NO      |
| 5          | YES     |
| 8          | YES     |
| 7.42       | YES     |
| 10         | YES     |
| 12         | NO      |

Test multiple expressions: `^ foo ; * bar ; !<= baz ; $ qux` (equivalent to `& ^ foo ; ~~ bar ; !<= baz ; $ qux`)  
Chained methods:
-   [Starts With](#starts-with) `foo`
-   [Strict Contains](#strict-contains) `bar`
-   [Not](#not) [Less Than or Equal](#less-than-or-equal) `baz`
-   [Ends With](#ends-with) `qux`

| Text         | Matches | Reason*                                       |
|--------------|---------|-----------------------------------------------|
| foobarbazqux | YES     |                                               |
| FOOBARBAZQUX | NO      | BAR should be lowercase to pass `* bar` test  |
| FOObarBAZQUX | YES     |                                               |
| foobarbazQUX | YES     |                                               |
| foobarqux    | YES     | `!<= baz` tests if **NOT** sorts before `baz` |
| foobarbaz    | NO      | `$ qux` requires to end with `qux`            |


Test if is Friday the 13th by checking if [Day of Month](#day-of-month) is `13` and if [Day of Week](#day-of-week) is `5`. For more information on Date Operation, check [Date Special Operators](#date-special-operators): `%d 13 ; %w 5` (equivalent to `$ %d 13 ; %w 5`)


| Text (ISO-8601 date) | Matches | Reason*                     |
|----------------------|---------|-----------------------------|
| 2018-04-13T05:30:45Z | YES     | It is friday and it is 13th |
| 2018-08-17T12:00:00Z | NO      | Not 13th                    |
| 2018-06-13T16:20:00Z | NO      | Not friday                  |
| 2018-07-13T04:20:00Z | YES     | It is friday and it is 13th |




### Any
Checks if at least one of the tests succeed. Tests are performed from the left to the right.  
For optimization matters, if any tests succeed, then it will not make the other tests because the whole test is already _truthy_.  
The `any` chaining is used when the comparation starts with `?`.

#### Syntax
```vala
? expression1 [; expression2 [; expression3 [...] ] ]
```

#### Example
Tests if it is one of the common web browsers by the name: `? ^ chrom ; firefox ; vivaldi ; opera`.
-   [Starts with](#starts-with) `chrom`, so it matches `Chrome` and `Chromium`
-   [Equals](#equality) `firefox`
-   [Equals](#equality) `vivaldi`
-   [Equals](#equality) `opera`

| Text             | Matches | Reason*                             |
|------------------|---------|-------------------------------------|
| Chromium         | YES     |                                     |
| Firefox          | YES     |                                     |
| Google Chrome    | NO      | Would match if started with `chrom` |
| Chrome           | YES     |                                     |
| Vivaldi          | YES     |                                     |
| Vivaldi Snapshot | NO      |                                     |
| Opera Beta       | NO      |                                     |
| Opera            | YES     |                                     |
| Mozilla Firefox  | NO      | Not equals to `firefox`             |




## TODO
Things that will be done shortly™

### Finish this doc

### Add AM/PM Non-numeric Date operator (%p and %P) to the docs

### Valid Date
Test valid date using `%%` token as operator:
-   [IETF-compliant RFC 2822 timestamp](#https://tools.ietf.org/html/rfc2822#page-14)
-   [ISO-8601 Extended Format](#http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) `YYYY-MM-DDTHH:MM:SS.sssZ`
-   **NOT** unix timestamp as it can be done with "valid number".


### Valid Number
Check if it is a number and follows `^\d+(\.\d*)?$|^\d?\.\d+$` regular expression. Binary, octal, hexadecimal and non decimal should not be supported.
Use `##` token as operator;


### Valid SemVer
Check if it is a valid Semantic Version using `@@` token as operator.


### Is contained by
Do the inverse operation of the "Contains" and "Strict Contains". Still need to define a token.


### Is lowercase
To consider: Check if all characters are lowercase using `,` or `,,` token as operator
