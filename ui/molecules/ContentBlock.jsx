import React from 'react'; 
import { SemanticUI } from 'react-atomic-molecule';

const ContentBlock = (props) => (
    <SemanticUI
        atom="section"
        className="content-block"
        {...props}
        style={{...Styles.block, ...props.style}}
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
