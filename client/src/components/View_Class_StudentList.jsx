import React , {Component} from 'react' ;
import { Container , ListGroup , ListGroupItem , Button} from 'reactstrap';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from 'uuid';

class View_Class_StudentList extends Component {
    state = {
        courses : [
            {TaID: uuid()}
        ]
    }

    render() {
        const { courses } = this.state;
        return (
            <Container>
                <Button
                    color = "dark"
                    style = { {marginBottom: '2rem'} }
                    onClick = { () => {
                        const name = prompt('Enter Your ID') ;
                        if(name) {
                            this.setState(state => ({
                                courses: [...state.courses , { TaID: uuid() }] 
                            }));
                        } 
                    } } >
                     Find Courses 
                </Button>
                
                <ListGroup>
                    <TransitionGroup className="class-list" >
                        {
                            courses.map(TaID => (
                                <CSSTransition key={TaID} timeout={500} classNames="fade" >
                                    <ListGroupItem> {courses} </ListGroupItem>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </ListGroup>

          </Container>
        )
    }
}


export default View_Class_StudentList ;
