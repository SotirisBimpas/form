import  React, { useContext} from 'react';
import Context from './context/Context';

export default function UserInfo() {
    const { state: {user} } = useContext(Context)
    return (
        <div className="userInfo">
            <h3>User Info</h3>
            <p>USERNAME: {user.name}</p>
            <p>TOKEN: {user.token}</p>
        </div>
    )
}