import React, { Component }  from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return(
            <div className='form_container_div'>
                <form>
                    <input type='text' name='city' placeholder='Enter city name.....' />
                    <button>Get Weather</button>
                </form>
            </div>
        );
    };
};

export default Form;