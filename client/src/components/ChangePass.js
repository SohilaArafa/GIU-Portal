import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v1 as uuid } from 'uuid';

class UserPass extends Component {
    state = { 
        users:[
            {id: uuid(), name: 'name'},
            {id: uuid(), name: 'password'}
        ]
    }

    render() {
        const { users } = this.state;
        return(
            <Container>
                <Button
                 color="dark"
                 style={{marginBottom: '2rem'}}
                 onClick={() => {
                     const name = prompt('Enter user');
                     if (name){
                         this.setState(state => ({
                             users: [...state.users, { id: uuid(), name }]
                         }));
                     }
                 }}
                >
                    Change password
                </Button>
                <ListGroup>
                    <TransitionGroup className="Change-Password">
                        {users.map(({ id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                            users: state.users.filter(user => user.id !== id)
                                        }));
                                    }}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }

}

export default UserPass;
