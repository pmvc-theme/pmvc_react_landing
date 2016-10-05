import React from 'react'; 
import { assign, SemanticUI } from 'react-atomic-molecule';

const PageHeader = (props) => {
    return (
        <SemanticUI 
            {...props}
            className="page-header"
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
        zIndex: '2',
        left:0,
        right:0
    }
};
