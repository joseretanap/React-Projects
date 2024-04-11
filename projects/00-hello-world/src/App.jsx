import './App.css'
import { XFollowCard } from './XFollowCard'

function App() {
  return (
    <section className="App">
      <XFollowCard isFollowing={false} userName="jprp">
        Jose Retana
      </XFollowCard>
      <XFollowCard isFollowing userName="midudev" >
        Miguel
      </XFollowCard>
    </section>    
  )
}

export default App
