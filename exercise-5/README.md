# Piano Component

Not too fancy and not functional Piano Component. The purpose of this is to expose a project structure for a Digital piano interface and how to implement State management.

### Folders
`/src/actions`
  This is used for redux actions

`/src/components/`
  This is used for presentational stateless components. Each component could contain any asset, for example images. Styles are inline.

`/src/containers`
  This is used for smart components ( Components connected to the State and are in charge of passing state to presentation components )

`/src/reducers`
  This is for redux reducers

### Usage

```
import PianoContainer from './containers/PianoContainer';

<PianoContainer />
```

### Description

1. Piano need to be ON before.
2. Every action on the Piano interface will dispatch a redux action.
3. In case any Piano's key is pressed then the `setKeysPressed` action will access the redux state and send all values saved in the redux store to the central Mixer component.
4. If Piano switch to off then all configuration is reseted.

### Quick Preview
[link to Piano!](https://exercise-5-rdjfjkbfjs.now.sh/) ( if you open the browser inspector you'll see redux action logs )