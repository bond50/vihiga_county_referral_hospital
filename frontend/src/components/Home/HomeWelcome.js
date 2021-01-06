import React from 'react';
import {Divider, Grid, Header, Segment} from "semantic-ui-react";
import ImageGallaryComponent from "./corousel";
import classes from "./HomepageHeading.module.css";

const HomeWelcome = () => (
         <Segment vertical className={classes.segment}>
            <Grid stackable verticalAlign='middle' divided='vertically' >
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Header as='h1' className='myHeader' >
                            Welcome To Vihiga County Referral Hospital
                        </Header>
                        <Divider hidden/>
                        <p>
                            <strong><em>We Take Care Of Your Precious Health.</em></strong>
                            We are committed to providing equitable, affordable and
                            quality
                            health
                            care of the highest standard to all our residents as stipulated in the Bill of Rights in
                            the
                            Constitution 2010.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6} floated='right'>
                        <ImageGallaryComponent/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

);

export default HomeWelcome;