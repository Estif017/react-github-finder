import { useContext } from 'react';
import GithubContext from '../../Context/Github/Github_Context'
import Spinner from '../Spinner/Spinner';

import UserItem from './UserItem';

const Users =()=> {
    const githubContext=useContext(GithubContext)
    const {users,isLoading}=githubContext
    if (isLoading) return <Spinner/>
    return (
        <div style={userStyle}>
            {
                users.map(user=>(<UserItem key={user.id} user={user} />))
            }
        </div>
    )
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  };

export default Users
