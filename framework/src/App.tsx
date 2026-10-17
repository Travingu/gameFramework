import Page from './components/Page'
import { games } from './data/games'

export default function App() {
  return (
    <Page
      current="Games"
      lead="Games I’ve designed and built that run in the browser, no download needed."
      entries={games}
    />
  )
}
