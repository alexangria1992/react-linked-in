import React from 'react'
import './Feed.css'
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"

import SubscriptionsIcon from "@material-ui/icons/Subscriptions"

import InputOption from './InputOption'


function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text"/>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title='photo' color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title='video' color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color="#7FC15E"/>

                </div>
            </div>
            {/* Posts */}
        </div>
    )
}

export default Feed
