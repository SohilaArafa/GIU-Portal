import { v1 as uuid } from 'uuid';


const initialState ={
    users:[
        {id: uuid(), name: 'name'},
        {id: uuid(), name: 'password'}
    ]
}