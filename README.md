# component-wall
A wall of smbls uikit components in React

## Setup
Install:
```
yarn
ln -s /path/to/smbls/uikit/domql ./domql-smbls-components
```
The `/path/to/smbls/uikit/domql` should be the path to the smbls repository plus uikit/domql.

Run:
* Convert desired components (for now, use the --only flag like shown)
  ```
  yarn kalduna --only=Img,Button
  ```
* Start the server
  ```
  yarn start
  ```


## Can't find `domql-to-mitosis`
If running `yarn kalduna` gives an error saying it can't find the
`domql-to-mitosis` dependency, you must link it manually:
```
yarn link domql-to-mitosis
```
