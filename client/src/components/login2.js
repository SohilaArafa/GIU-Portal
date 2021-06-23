// LoginModal



// import React , {Component} from 'react';
// import {
//     Buttom,
//     Modal,
//     ModalHeader,
//     ModalBody,
//     Form,
//     FormGroup,
//     Label,
//     Input,
//     NavLink,
//     Alert
// } from 'reacrstrap';
// import { connect } from 'react-redux';
// import PropTypes from 'prop=types';
// import { login } from '../../actions/authActions';
// import { clearErrors } from '../../actions/errorActions';
// import { withRouter } from "react-router";


// class LoginModal extends Component {
//     state={
//         modal=false,
//         email='',
//         password='',
//         msg=null
//     };
// static PropTypes={
//     isAuthenticated:PropTypes.bool,
//     error:PropTypes.Object.isRequired,
//     login:PropTypes.func.isRequired,
//     clearErrors:PropTypes.func.isRequired
// };
// componentDidUpdate(prevProps){
//     const {error,isAuthenticated}=this.props;
//     if(error !== prevProps.error) {
//         if(error.id === 'LOGIN_FAIL') {
//             this.setState({msg:error.msg.msg});
//         }else{
//             this.setState({msg:null});
//         }
//     }
    

//     if(this.state.modal) {
//         if(isAuthenticated) {
//             this.toggle();
//         }
//       }
//     }
//     toggle = ()=> {
//         //clear errors
//         this.props.clearErrors();
//         this.setState({
//             modal: !this.state.modal
//         });
//     };

//     onchange=e=> {
//         this.setState({ [e.target.name]: e.target.value });
//     };
    
//     onSubmit = e=> {
//         e.preventDefault();

//         const {email,password}=this.state;
//         const user= {
//             email,
//             password
//         }
//         //attempt to login
//         this.props.login(user);
//     };

//     render() {
//         return (
//             <div>
//                 <NavLink onClick={this.toggle} href='#'>
//                   Login  
//                 </NavLink>

//                 <Modal isOpen={this.state.modal} toggle={this.toggle}>
//                     <ModalHeader toggle={this.toggle}>Login</ModalHeader>
//                     <ModalBody>
//                         {this.state.msg ? (
//                             <Alert color='danger'>{this.state.msg}</Alert>
//                         ) : null}
//                         <form onSubmit ={this.onSubmit}>
//                             <FormGroup>
//                                 <label for='email'>Email</label>    
//                                 <input
//                                     type='email'
//                                     name='email'
//                                     id='email'
//                                     placeholder='Email'
//                                     className='mb-3'
//                                     onChange={this.onChange}
//                                     />
//                                     <Label for ='password'>Password</Label>
//                                     <Input
//                                     type='password'
//                                     name='password'
//                                     id='password'
//                                     placeholder='password'
//                                     className='mb-3'
//                                     onChange={this.onChange}
//                                     />
//                                     <Button color='dark' style ={{marginTop: '2erm'}} block>
//                                         Login
//                                     </Button>

//                             </FormGroup>
//                         </form>
//                     </ModalBody>
//                 </Modal>
//             </div>

//         );
//     }
// }

// const mapStateToProps=state => ({
//     isAuthenticated:state.auth.isAuthenticated,
//     error:state.error
// });
// export default connect(
//     mapStateToProps,
//     {login,clearErrors}
// )(LoginModal);






// appNavBar 


// import React,{Component} from 'react';
// import{
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container
// } from 'reactstrap';

// //import {connect} from 'react-redux';
// //import PropTypes from 'prop-types';
// import LoginModal from './auth/LoginModal'
// //import Logout from './auth/Logout'

// class AppNavbar extends Component {
//     state={
//         isOpen:false
//     };
   

//     toggle=() => {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     };
//     render(){
//         return(
//             <div>
//                 <Navbar color='dark' dark expands='sm' className='mb-5'>
//                     <Container>
//                         <navbarBrand href='/'>Login</navbarBrand>
//                         <NavbarToggler onClick={this.toggle} />
//                         <collapse isOpen={this.state.isOpen} navbar>
//                             <nav className='ml-auto' navbar>
//                                 <navItem>
//                                     <LoginModal/>
//                                 </navItem>
//                             </nav>
//                         </collapse>
//                     </Container>
//                 </Navbar>
//             </div>
//         )
//     }
// }


// export default AppNavbar;




// authActions


// //Login User

// export const login=({email,password})=>dispatch => {
//     const config ={
//         header: {
//             'content-Type':'application/json'
//         }
//     };
    
//     //Request body
//     const body=JSON.stringify({email,password});

//     axios
//         .post('/api/auth',body,config)
//         .then(res =>
//             dispatch({
//                 type:LOGIN_SUCCESS,
//                 payload:res.data
//             })
//         )
//         .catch(err => {
//             dispatch(
//                 returnErrors(err.response.data,err.reponse.status,'LOGIN_FAIL')

//             );
//             dispatch({
//                 type:LOGIN_FAIL
//             });
//         });
//     };

