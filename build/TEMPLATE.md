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
