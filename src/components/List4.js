import React from 'react'
import Axios from 'axios';

function List4() {
    const initialState={
        data: []
    };
    const reducer=(state,action)=>{
        switch(action){
            case 'add': return [...state,action.payload]
    }

    return (
        <div>
            
        </div>
    )
}

export default List4
