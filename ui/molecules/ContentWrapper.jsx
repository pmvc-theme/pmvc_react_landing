import React from 'react'; 
import { SemanticUI,assign } from 'react-atomic-molecule';

const ContentWrapper = (props) => (
    <SemanticUI
        className="content-wrapper"
        {...props}
        style={assign({},Styles.container,props.style)}
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
        zIndex: 1,
        minHeight: '30%',
        background: 'white'
    }
};
