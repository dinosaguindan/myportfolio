import React, { Component } from 'react';
import {Grid,Cell,ListItem,ListItemContent,List} from 'react-mdl';
class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Dino Saguindan</h2>
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%',margin: 'auto', paddingTop: '1em'}}>
                        Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>    
                                    (123) 456-7890</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>    
                                    dinosaguindan@gmail.com</ListItemContent>
                                </ListItem><ListItem>
                                    <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>    
                                    MySKYPEID</ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact