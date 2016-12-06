import React from 'react'; 
import { ContentWrapper } from '../../src/index';

const OneColumn = (props) => {
    let {
        header,
        menu,
        cover,
        body,
        footer,
        last,
        contentWrapper,
        style,
    } = props;
    if (cover) {
        body = ( 
            <ContentWrapper {...contentWrapper}>
                {body}
                {footer}
            </ContentWrapper>
        );
        footer = null;
    }
    return (
    <div style={style}>
        {header}
        {menu}
        {cover}
        {body}
        {footer}
        {last}
    </div>
    );
};

export default OneColumn;
