import React from 'react';
import ProfileInfo from './ProfInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo profile={props.profile}
                      status={props.status}
                      updateOwnProfileStatus={props.updateOwnProfileStatus}/>
         <MyPostsContainer/>
      </div>
   )
}

export default Profile;
