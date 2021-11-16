import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick }) => {
    
    return <button className='btn' onClick={onClick} style={{ backgroundColor: color }}>{text}</button>
}

Button.prototype = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}
Button.defaultProps = {
    text: 'Button',
    color: 'blue'
}

export default Button
