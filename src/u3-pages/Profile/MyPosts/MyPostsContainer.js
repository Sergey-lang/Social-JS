import {addPostActionCreator} from '../../../u4-redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: (postMessageText) => {
         dispatch(addPostActionCreator(postMessageText))
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
