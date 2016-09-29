import React, {Component} from 'react'; 
import { SemanticUI, assign } from 'react-atomic-molecule';

const SplashBlock = (props) => (
    <SemanticUI
        atom="section"
        className="splash-block"
        {...props}
        style={assign(Styles.block,props.style)}
    >
        <SemanticUI className="splash" style={Styles.insideContainer}>
            {props.children}
        </SemanticUI>
    </SemanticUI>
);

export default SplashBlock;

const Styles = {
    block: {
        margin:'0',
        padding: '0',
        zIndex: 1,
        position: 'fixed',
        width: '100%',
        height: '100%',
    },
    insideContainer: {
        maxWidth: '800px',
        width: '100%',
        margin: '100px auto 0',
        height: '80%',
        textAlign: 'center',
    }
};
