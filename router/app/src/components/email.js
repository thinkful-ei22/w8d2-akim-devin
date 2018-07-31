import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import { Route, Redirect, Switch } from 'react-router-dom'

export default function Email() {
    return (
        <div className="email">
            <Sidebar />
            <main>
                <Switch>
                  <Route exact path="/" render={()=>(<Redirect to="/inbox"/>)} />
                  <Route exact path="/:folderId" component={EmailList}/>
                  <Route exact path="/:folderId/:emailId" component={SingleEmail} />
                </Switch>
                {/* <SingleEmail folderId="inbox" emailId="1" /> */}
                
            </main>
        </div>
    );
}
