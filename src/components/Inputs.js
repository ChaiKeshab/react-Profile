import React, { useState } from 'react';
import './Inputs.scss'

export default function Inputs(props) {
    const [valHold, setValHold] = useState('')

    const updateText = () => {
        setValHold(valHold.toUpperCase())
    }

    const changeHandle = (event) => {
        setValHold(event.target.value)
    }

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">{props.Username}</label>
                    <input type="text" id="name" name="name" placeholder='Enter your name' onChange={changeHandle} value={valHold} />
                    <button type='button' className='upperCase' onClick={updateText}>Change to Uppercase</button>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
