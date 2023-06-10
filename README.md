# component-wall
A wall of smbls uikit components in React

## Setup
Run:
```
yarn
ln -s /path/to/smbls/uikit/domql ./domql-smbls-components
yarn kalduna --only=Img,Button
yarn start
```
The `/path/to/smbls/uikit/domql` should be the path to the smbls repository plus uikit/domql.


## Can't find `domql-to-mitosis`
If running `yarn kalduna` gives an error saying it can't find the
`domql-to-mitosis` dependency, you must link it manually:
```
yarn link domql-to-mitosis
```
