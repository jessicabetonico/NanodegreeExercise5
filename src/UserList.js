import React from 'react';
import PropTypes from 'prop-types';
import User from './User'

const UserList = ({userList, showPlayedGames}) => {
  return (
    <div>
     <p className="item">List of user</p>
     <ol className="item">
      {userList.map(user => <User key={user.userName} userName={user.userName} showPlayedGames={showPlayedGames}
                                    playedGames={user.playedGames}/> )}
     </ol>
	</div>
  )
}

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
  showPlayedGames: PropTypes.bool.isRequired
}

export default UserList;