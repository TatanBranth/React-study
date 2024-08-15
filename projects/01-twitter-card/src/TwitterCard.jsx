import './app.css';
import { useState } from 'react';

export function TwitterCard ({ name, username }) {
    const userImg = `https://unavatar.io/${username}`
    const [isFollowing, setIsFollowing ] = useState(false);

    const followStatus = isFollowing ? "Following": "Follow"
    const buttonClassName = isFollowing ? "tw-followCard-aside-button isFollowing" : "tw-followCard-aside-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-header-avatar" alt="avatar img" src={userImg} />
                <div className="tw-followCard-header-info">
                    <strong className="tw-followCard-header-info-userName">{name}</strong>
                    <span className='tw-followCard-header-info-text'>{username}</span>
                </div>
            </header>
            <aside className="tw-followCard-aside">
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-aside-button-followStatus'>
                        {followStatus}
                    </span>
                    <span className='tw-followCard-aside-button-unFollowStatus'>
                        Unfollow
                    </span>
                </button>
            </aside>
        </article>
    )
}