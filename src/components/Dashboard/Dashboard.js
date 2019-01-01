import React, { Component } from 'react'
import { connect } from 'react-redux'
import './dashboard.scss'
import EventCard from '../EventCard/EventCard'
import axios from 'axios'
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      userLat: 33.4484,
      userLng: -112.0740,
      eventsArray: []
    }
  }
  componentWillMount() {
    const {userLat, userLng} = this.state
    axios.post('/api/events/local', {lat: userLat, lng: userLng }).then(res => {
      this.setState({
        eventsArray: res.data
      })
    })
  }

  render() {
    if (!this.props.user.id) {
      return <div>LOADING</div>
    }
    const eventCard = this.state.eventsArray.map((event,i) => {
        return <EventCard events={event} />
    })
    return (
      <div className="dashboard-container">
        <div className="dashboard-top-box">
            <Link className="add-edit-link" to='/dashboard/add-event'><button>Add Event</button></Link>
            <h1>Upcoming Events</h1>
            
        
        </div>

        <div className="events">
            {eventCard}
        
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    const { user } = state
    return {
        user
    }
}



export default connect(mapStateToProps)(Dashboard)