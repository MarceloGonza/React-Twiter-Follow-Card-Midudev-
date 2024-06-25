import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard'

export function App() {
    return (
        <section className='App'>

            <TwiterFollowCard userName="midudev">
                <h1>Miguel Angel Duran</h1>
            </TwiterFollowCard>

            <TwiterFollowCard userName="pheralb" >
                <h1>Pablo Hernandez</h1>
            </TwiterFollowCard>

            <TwiterFollowCard userName="QuentTarantino">
                <h1>Quentin Tarantino</h1>
            </TwiterFollowCard>

            <TwiterFollowCard userName="elonmusk" name="Elon Musk">
                <h1>Elon Musk</h1>
            </TwiterFollowCard>

        </section >
    )
}