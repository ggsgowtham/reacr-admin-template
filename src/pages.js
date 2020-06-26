import React, { useContext, useState } from 'react';
import UserContext from './userContext';
import { Table, Tabs, Tab, Modal, Button } from 'react-bootstrap';
import {Route, useHistory} from 'react-router-dom';
import SideNavPage from './sidebar/sidebar';
import about from './about';

const Index = () => {
    const message = useContext(UserContext);
    const history = useHistory();

    if(message && message.user && message.user.data) {
    
    function handleClick(person) {
        history.push(`/about/${person.id}`, {person})
    }
    return (
        <div className="container-fluid col-md-12" >
            <div className="row">
                <div className="col-md-2 col-sm-6 col-xs-3" style={{ height: 558 }}>
                    <SideNavPage />
                </div>
                <div className="col-md-2 col-xs-1"></div>
                <div className="col-md-6 col-sm-6 col-xs-6"  style = {{ marginTop: 30 }}>
                    <Tabs id="controlled-tab-example">
                        <Tab eventKey = {Index} title="Home">
                           
                        </Tab>
                        <Tab eventKey={about} title="User profile" />
                    </Tabs>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                            </tr>
                        </thead>  
                        <tbody>          
                        {message.user.data.map((person) => {
                            //let hyperLink = '/about/'+person.id;
                            return  <tr key={person.id} style= {{ cursor: 'pointer' }} onClick={() => handleClick(person)}>  
                                            <td>{person.id}</td>
                                            <td>{person.first_name}</td>
                                            <td>{person.last_name}</td>
                                            <td>{person.email}</td>   
                                    </tr>
                                    
                        })}
                        </tbody>
                    </Table>
                </div> 
            </div>
        </div>  
    ); 

    } else {
        return (
            <div>
                None
            </div>
        );
    }
}


export default Index;