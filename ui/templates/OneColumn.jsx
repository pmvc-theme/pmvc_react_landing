import React from 'react'; 

const OneColumn = (props) => (
    <div>
        {props.header}
        {props.menu}
        {props.body}
        {props.footer}
    </div>
);

export default OneColumn;
