import React from 'react';

const ValidationComponent = (props) => {
    const style = {
        color: "red"
    }
    return(
        <div>
            {props.textLength < 5 && props.textLength !== 0? <p style={style}> Text Too short </p>: null}
            {props.textLength > 10? <p style={style}> Text too long </p> :null}
        </div>
    )
}

export default ValidationComponent;