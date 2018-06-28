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

### Quick Preview
[link to SegmentedComponent!](https://exercise-5-rdjfjkbfjs.now.sh/) ( if you open the browser inspector you'll see redux action logs )