import React from 'react'; 
import { SemanticUI } from 'react-atomic-molecule';

const ContentWrapper = ({style, background, ...props}) => { 
    if (background) {
        style.background = background
    }
    return (
    <SemanticUI
        className="content-wrapper"
        {...props}
        style={{...Styles.container, ...style}}
    />
    )
}

ContentWrapper.defaultProps = {
    background: 'white'
}

export default ContentWrapper;

const Styles = {
    container: {
        position: 'absolute',
        overflow: 'hidden',
        top: '100vh',
        right:0,
        left: 0,
        zIndex: 0,
        minHeight: '30%'
    }
};
