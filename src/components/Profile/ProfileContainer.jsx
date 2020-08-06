import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        //insted of return presentation comp we return login
        if (!this.props.isAuth) return <Redirect to='/login' />
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

// wrapper for action in compose
export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


