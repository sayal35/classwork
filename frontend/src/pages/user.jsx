import { useEffect, useState } from 'react';
import '../styles/user.css';
import UserCard from '../components/user_card';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const users = await res.json();
                setAllUsers(users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div id='users'>
            <h1 id='title'>All users</h1>
            <div id='user-grid'>
                {allUsers.map((user) => (
                    <UserCard user={user} key={user.id} />
                ))}
            </div>
        </div>
    );
};

export default Users;






//then method with async await
// import { useEffect, useState } from 'react';
// import '../styles/user.css'
// import UserCard from '../components/user_card';

// const Users = () => {
//     const [allUsers,setallUsers]=useState([])
//     //if set to [], called once in each render
//     useEffect(
//         () => {
//             const res = fetch("https://jsonplaceholder.typicode.com/users").then(async (res) => {
//                 console.log("res:", res)
//                 const users = await res.json()
//                 console.log("users:", users)
//                 setallUsers(()=>users)
//             })
//         },
//         []
//     )
//     return (
//         <div id='users'>
//             <h1 id='title'>All users</h1>
//            <div id='user-grid'>
//            { allUsers &&
//                 allUsers.map(
//                     (user)=>{
//                         return <UserCard user={user} key={user.id}/>
//                     }
//                 )
//             }
//            </div>
//         </div>
//     );
// }
// export default Users;