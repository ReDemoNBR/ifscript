## Grammar

```
TODO
expression-set     ::= ( mode )? modifier ( comb modifier )*
modifier           ::= ( not )? expresssion
expression         ::= validation | semver | length | date | strict | basic | ''
validation         ::= '##' | '@@' | '%%'
semver             ::= '@' ( inequality )? value
length             ::= '#' ( inequality )? value
date               ::= numerical-date | non-numerical-date
strict             ::= ( '==' | '~~' | '^^' | '$$' ) value
basic              ::= ( '' | '=' | '~' | '^' | '$' ) value
comb               ::= ';'
not                ::= '!'
numerical-date     ::= ( '%' [CdHIjmMsSwyYz] ) ( inequality )? value
non-numerical-date ::= ( '%' [aAbBpP] ) value
inequality         ::= '>' | '<' | '>=' | '<='
mode               ::= '?' | '&'
value              ::= .*
```
