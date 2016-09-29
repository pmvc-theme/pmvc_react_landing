import React, {Component} from 'react'; 
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
        top: '87%',
        width: '100%',
        zIndex: 2,
        minHeight: '30%',
        background: 'white'
    }
};
