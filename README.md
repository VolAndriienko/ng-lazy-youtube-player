# Design system

Design system provides the possibility to develop and test rocketfuel-pattern-lib.

Next tools is using here:  
[Storybook](https://storybook.js.org/)  
Is using for develop Angular library, create stories and test it.  

[Compodoc](https://compodoc.app/)  
With Compodoc will be created documetation files.  

[Cypress](https://www.cypress.io/)  
Cypress allows to create end-to-end test cases for library.

[Eslint](https://eslint.org/)  
Is using to verify code styles.

## Available commands  
To build documentation please use next command:
```
npm run docs:json

```

To build storybook and documentation:
```
npm run build:storybook

```

To run storybook:
```
npm run storybook

```

To build rocketfuel-pattern-lib:
```
npm run build:lib

```

To pack library after build please use:
```
npm run pack:lib

```

To run cypress test cases:
```
npm run cypress:open

```
