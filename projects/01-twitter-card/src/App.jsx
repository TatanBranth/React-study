import React from 'react';
import './app.css'
import { TwitterCard } from "./TwitterCard"

export function App () {
    const users = [
        {
            userName: 'ParoHdezs',
            name: 'Paco hernandez',
            isFollowing: true,
        },
        {
            userName: 'TMChein',
            name: 'Tomas Alvarez',
            isFollowing: false,
        },
        {
            userName: 'midudev',
            name: 'Miguel Angel Duran',
            isFollowing: true,
        }
    ]
    return (
        <section className='app'>
            {
                users.map( user => {
                    const { userName, name, isFollowing} = user;
                    return (
                        <TwitterCard
                            key={userName}
                            username={userName}
                            name={name}
                            isFollowing={isFollowing}
                        />
                    )
                })
            }
        </section>
    )
}