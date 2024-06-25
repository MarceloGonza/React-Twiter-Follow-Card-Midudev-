import { useState } from "react"

export function TwiterFollowCard({ children, userName }) {
    const [IsFollowing, setIsFollowing] = useState(false)

    const text = IsFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = IsFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!IsFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    alt="Avatar midudev"
                    src={`https://unavatar.io/${userName}`}>
                </img>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}