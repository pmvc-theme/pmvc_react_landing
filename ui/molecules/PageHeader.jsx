import React from 'react'; 
import { assign, mixClass, SemanticUI } from 'react-atomic-molecule';

const PageHeader = (props) => {
    const classes = mixClass(
        props.className,
        'page-header'
    );
    return (
        <SemanticUI 
            {...props}
            className={classes}
            style={assign(
                {},
                Styles.header,
                props.style
            )}
        />
    );
};

export default PageHeader;

const Styles = {
    header: {
        background: 'transparent',
        position: 'fixed',
        zIndex: 1,
        left:0,
        right:0,
        top:0
    }
};
