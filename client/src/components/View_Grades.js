import React , {Component} from 'react' ;
import { Container , ListGroup , ListGroupItem , Button} from 'reactstrap';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import {v1 as uui} from 'uuid';

class View_Grades extends Component {
    state = {
        courses : [
            {id: uuid(), name: course_name}
        ]
    }

    render() {
        const {courses} = this.state ;
        return(
            <Container>
                <Button>
                    color = "dark"
                    style = { {marginBottom: '2rem'} }
                    onClick = { () => {
                        const name = prompt('Enter Course name') ;
                        if(name) {
                            this.setState(state => ({
                                courses: [...state.courses , { id: uuid(), name}] 
                            }));
                        } 
                    } } 
                    Add Item</Button>
                </Container>
        ) ;
    }

}

export default View_Grades ;
