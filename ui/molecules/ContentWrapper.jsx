import React from 'react'; 
import { SemanticUI } from 'react-atomic-molecule';

const ContentWrapper = (props) => (
    <SemanticUI
        className="content-wrapper"
        {...props}
        style={{...Styles.container, ...props.style}}
    />
);

export default ContentWrapper;

const Styles = {
    container: {
        position: 'absolute',
        overflow: 'hidden',
        top: '87%',
        right:0,
        left: 0,
        zIndex: 0,
        minHeight: '30%',
        background: 'white'
    }
};
