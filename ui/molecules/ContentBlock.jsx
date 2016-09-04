import React, {Component} from 'react'; 
import { SemanticUI,assign } from 'react-atomic-molecule';

const ContentBlock = (props) => (
    <SemanticUI
        atom="section"
        className="content"
        {...props}
        style={assign(Styles.block,props.style)}
    />
);

export default ContentBlock;

const Styles = {
    block: {
        margin:'0 auto 100px',
        maxWidth: '800px',
        padding: '0 10px'
    }
};
