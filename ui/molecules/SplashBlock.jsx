import React from 'react'; 
import { SemanticUI, assign } from 'react-atomic-molecule';

const SplashBlock = (props) => (
    <SemanticUI
        atom="section"
        className="splash-block"
        {...props}
        style={assign({},Styles.block,props.style)}
    >
        <SemanticUI
            className="splash"
            style={Styles.insideContainer}>
            {props.children}
        </SemanticUI>
    </SemanticUI>
);

export default SplashBlock;

const Styles = {
    block: {
        margin:'0',
        padding: '0',
        position: 'fixed',
        overflow: 'hidden',
        top:0,
        right:0,
        bottom:0,
        left:0,
    },
    insideContainer: {
        maxWidth: '800px',
        margin: '6.875rem auto 0',
        height: '80%',
        textAlign: 'center',
    }
};
