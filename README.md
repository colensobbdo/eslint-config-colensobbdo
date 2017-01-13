# Colenso BBDO ESLint Config

A pretty common ESLint config setup that can be shared around. To get this working you simply install this via npm then add the following to your ESLint config file.


## Install

```
npm install --save-dev @colensobbdo/eslint-config-colensobbdo
```

## Use

In your `.eslintrc.js` file add the following:

```
{
  "extends": "@colensobbdo/eslint-config-colensobbdo"
}
```

## Contributing

If you are submitting a PR to add or change an existing rule please make sure you run `$ npm run docs` to re-generate the README.md with the updated rule list. As a rule of thumb it should be one commit per rule for easy reference for changes.

**SemVer?**

Changes that are breaking e.g. upgrading from a warning to an exception should be a major bump. Downgrading to a warning should be a minor bump. Anything else related to a warning (say changing some config) could just be a patch I guess. Suggestions welcome on better ways to version this... could use a date based system¿?

## Rules

1. <a href="http://eslint.org/docs/rules/array-bracket-spacing.html" target="_blank">array-bracket-spacing</a>: [
  "error",
  "never"
] 
1. <a href="http://eslint.org/docs/rules/arrow-parens.html" target="_blank">arrow-parens</a>: [
  "error",
  "always"
] 
1. <a href="http://eslint.org/docs/rules/arrow-spacing.html" target="_blank">arrow-spacing</a>: [
  "error",
  {
    "before": true,
    "after": true
  }
] 
1. <a href="http://eslint.org/docs/rules/brace-style.html" target="_blank">brace-style</a>: [
  "warn",
  "stroustrup"
] 
1. <a href="http://eslint.org/docs/rules/callback-return.html" target="_blank">callback-return</a>: [
  "error",
  [
    "callback",
    "next"
  ]
] 
1. <a href="http://eslint.org/docs/rules/camelcase.html" target="_blank">camelcase</a>: "error" 
1. <a href="http://eslint.org/docs/rules/chasevida/spaces-in-parens.html" target="_blank">chasevida/spaces-in-parens</a>: [
  "warn",
  "never",
  {
    "exceptions": [
      "!"
    ]
  }
] 
1. <a href="http://eslint.org/docs/rules/comma-dangle.html" target="_blank">comma-dangle</a>: [
  "error",
  "never"
] 
1. <a href="http://eslint.org/docs/rules/computed-property-spacing.html" target="_blank">computed-property-spacing</a>: [
  "error",
  "never"
] 
1. <a href="http://eslint.org/docs/rules/consistent-return.html" target="_blank">consistent-return</a>: "error" 
1. <a href="http://eslint.org/docs/rules/consistent-this.html" target="_blank">consistent-this</a>: [
  "error",
  "self"
] 
1. <a href="http://eslint.org/docs/rules/constructor-super.html" target="_blank">constructor-super</a>: "error" 
1. <a href="http://eslint.org/docs/rules/curly.html" target="_blank">curly</a>: [
  "error",
  "all"
] 
1. <a href="http://eslint.org/docs/rules/dot-notation.html" target="_blank">dot-notation</a>: "warn" 
1. <a href="http://eslint.org/docs/rules/eol-last.html" target="_blank">eol-last</a>: "warn" 
1. <a href="http://eslint.org/docs/rules/eqeqeq.html" target="_blank">eqeqeq</a>: "error" 
1. <a href="http://eslint.org/docs/rules/func-style.html" target="_blank">func-style</a>: [
  "error",
  "expression"
] 
1. <a href="http://eslint.org/docs/rules/generator-star-spacing.html" target="_blank">generator-star-spacing</a>: [
  "error",
  {
    "before": true,
    "after": false
  }
] 
1. <a href="http://eslint.org/docs/rules/global-strict.html" target="_blank">global-strict</a>: "off" 
1. <a href="http://eslint.org/docs/rules/handle-callback-err.html" target="_blank">handle-callback-err</a>: [
  "error",
  "err"
] 
1. <a href="http://eslint.org/docs/rules/hapi/hapi-capitalize-modules.html" target="_blank">hapi/hapi-capitalize-modules</a>: "warn" 
1. <a href="http://eslint.org/docs/rules/hapi/no-arrowception.html" target="_blank">hapi/no-arrowception</a>: "warn" 
1. <a href="http://eslint.org/docs/rules/indent.html" target="_blank">indent</a>: [
  "error",
  4
] 
1. <a href="http://eslint.org/docs/rules/key-spacing.html" target="_blank">key-spacing</a>: "error" 
1. <a href="http://eslint.org/docs/rules/keyword-spacing.html" target="_blank">keyword-spacing</a>: "error" 
1. <a href="http://eslint.org/docs/rules/max-depth.html" target="_blank">max-depth</a>: [
  "error",
  5
] 
1. <a href="http://eslint.org/docs/rules/max-nested-callbacks.html" target="_blank">max-nested-callbacks</a>: [
  "error",
  3
] 
1. <a href="http://eslint.org/docs/rules/max-params.html" target="_blank">max-params</a>: [
  "warn",
  4
] 
1. <a href="http://eslint.org/docs/rules/new-cap.html" target="_blank">new-cap</a>: "error" 
1. <a href="http://eslint.org/docs/rules/new-parens.html" target="_blank">new-parens</a>: "error" 
1. <a href="http://eslint.org/docs/rules/newline-after-var.html" target="_blank">newline-after-var</a>: "off" 
1. <a href="http://eslint.org/docs/rules/no-array-constructor.html" target="_blank">no-array-constructor</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-class-assign.html" target="_blank">no-class-assign</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-console.html" target="_blank">no-console</a>: "warn" 
1. <a href="http://eslint.org/docs/rules/no-constant-condition.html" target="_blank">no-constant-condition</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-else-return.html" target="_blank">no-else-return</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-empty.html" target="_blank">no-empty</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-eq-null.html" target="_blank">no-eq-null</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-eval.html" target="_blank">no-eval</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-ex-assign.html" target="_blank">no-ex-assign</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-extend-native.html" target="_blank">no-extend-native</a>: [
  "error",
  {
    "exceptions": [
      "Object"
    ]
  }
] 
1. <a href="http://eslint.org/docs/rules/no-lonely-if.html" target="_blank">no-lonely-if</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-loop-func.html" target="_blank">no-loop-func</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-mixed-requires.html" target="_blank">no-mixed-requires</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-mixed-spaces-and-tabs.html" target="_blank">no-mixed-spaces-and-tabs</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-multi-spaces.html" target="_blank">no-multi-spaces</a>: [
  "error"
] 
1. <a href="http://eslint.org/docs/rules/no-native-reassign.html" target="_blank">no-native-reassign</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-new-object.html" target="_blank">no-new-object</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-new-require.html" target="_blank">no-new-require</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-new-wrappers.html" target="_blank">no-new-wrappers</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-path-concat.html" target="_blank">no-path-concat</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-process-exit.html" target="_blank">no-process-exit</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-redeclare.html" target="_blank">no-redeclare</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-regex-spaces.html" target="_blank">no-regex-spaces</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-return-assign.html" target="_blank">no-return-assign</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-shadow.html" target="_blank">no-shadow</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-sparse-arrays.html" target="_blank">no-sparse-arrays</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-this-before-super.html" target="_blank">no-this-before-super</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-trailing-spaces.html" target="_blank">no-trailing-spaces</a>: "warn" 
1. <a href="http://eslint.org/docs/rules/no-undef.html" target="_blank">no-undef</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-underscore-dangle.html" target="_blank">no-underscore-dangle</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-unreachable.html" target="_blank">no-unreachable</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-unused-expressions.html" target="_blank">no-unused-expressions</a>: "error" 
1. <a href="http://eslint.org/docs/rules/no-unused-vars.html" target="_blank">no-unused-vars</a>: "warn" 
1. <a href="http://eslint.org/docs/rules/no-use-before-define.html" target="_blank">no-use-before-define</a>: [
  "warn",
  "nofunc"
] 
1. <a href="http://eslint.org/docs/rules/no-useless-call.html" target="_blank">no-useless-call</a>: "warn" 
1. <a href="http://eslint.org/docs/rules/no-with.html" target="_blank">no-with</a>: "error" 
1. <a href="http://eslint.org/docs/rules/object-curly-spacing.html" target="_blank">object-curly-spacing</a>: [
  "error",
  "never"
] 
1. <a href="http://eslint.org/docs/rules/object-shorthand.html" target="_blank">object-shorthand</a>: "warn" 
1. <a href="http://eslint.org/docs/rules/one-var.html" target="_blank">one-var</a>: "off" 
1. <a href="http://eslint.org/docs/rules/quotes.html" target="_blank">quotes</a>: [
  "error",
  "single",
  "avoid-escape"
] 
1. <a href="http://eslint.org/docs/rules/radix.html" target="_blank">radix</a>: "error" 
1. <a href="http://eslint.org/docs/rules/semi.html" target="_blank">semi</a>: [
  "warn",
  "never"
] 
1. <a href="http://eslint.org/docs/rules/sort-vars.html" target="_blank">sort-vars</a>: "off" 
1. <a href="http://eslint.org/docs/rules/space-before-function-paren.html" target="_blank">space-before-function-paren</a>: [
  "error",
  "always"
] 
1. <a href="http://eslint.org/docs/rules/space-infix-ops.html" target="_blank">space-infix-ops</a>: "error" 
1. <a href="http://eslint.org/docs/rules/space-unary-ops.html" target="_blank">space-unary-ops</a>: [
  "warn",
  {
    "words": true,
    "nonwords": true
  }
] 
1. <a href="http://eslint.org/docs/rules/vars-on-top.html" target="_blank">vars-on-top</a>: "off" 
1. <a href="http://eslint.org/docs/rules/wrap-iife.html" target="_blank">wrap-iife</a>: [
  "error",
  "inside"
] 
1. <a href="http://eslint.org/docs/rules/yoda.html" target="_blank">yoda</a>: [
  "warn",
  "never"
] 
