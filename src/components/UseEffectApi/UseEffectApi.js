import React, { useEffect, useState } from 'react';
import './UseEffectApi.css';

const UseEffectApi = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>Number of Users:{users.length} </h2>
            <p>Friends added:{users.length}</p>

            <div className="container">
                {
                    users.map(user => {
                        return (
                            <div>

                                <div className='Users'>
                                    <div className="image"><img src={user.avatar_url} alt="" /></div>
                                    <div className="Users-details">
                                        <h2>name: {user.login}</h2>
                                        <p>key:{user.id}</p>
                                        <h4>Location: USA</h4>
                                        <p>Company: Google </p>
                                        <p>Followers:{user.followers_url.length} </p>
                                        <p>Email: www.{user.login}@gmail.com</p>
                                        <button >Add Friend</button>
                                    </div>
                                </div>
                            </div>

                        );
                    })
                }
            </div>

        </>
    );
};

export default UseEffectApi;