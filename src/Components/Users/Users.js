import PropTypes from 'prop-types'
import Spinner from '../Spinner/Spinner';

import UserItem from './UserItem';

const Users =({users,loading})=> {
    if (loading){
        return <Spinner/>
    }
    return (
        <div style={userStyle}>
            {
                users.map(user=>(<UserItem key={user.id} user={user} />))
            }
        </div>
    )
}

Users.propTypes = {
    users:PropTypes.array.isRequired,
    loading: PropTypes.bool
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  };

export default Users
