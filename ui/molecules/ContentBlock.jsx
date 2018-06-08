import React from 'react'; 
import { SemanticUI } from 'react-atomic-molecule';

const ContentBlock = ({backgroundStyle, ...props}) => (
    <SemanticUI atom="section" style={backgroundStyle}>
        <SemanticUI
            className="content-block"
            {...props}
            style={{...Styles.block, ...props.style}}
        />
    </SemanticUI>
);

export default ContentBlock;

const Styles = {
    block: {
        margin:'0 auto 100px',
        maxWidth: 800,
        padding: '0 10px 10px'
    }
};
