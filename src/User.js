import React from 'react';
import PropTypes from 'prop-types';

const User = ({userName, playedGames, showPlayedGames}) => {
  return (
    <li>{`${userName} played ${showPlayedGames ? playedGames : '*'} games`}</li>
  )
}

User.propTypes = {
  userName: PropTypes.string.isRequired,
  playedGames: PropTypes.number.isRequired,
  showPlayedGames: PropTypes.bool.isRequired

}

export default User;