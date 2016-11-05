import React from 'react'; 
import { ContentWrapper } from '../../src/index';

const OneColumn = (props) => {
    let {
        header,
        menu,
        body,
        footer,
        cover,
        contentWrapper
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
    <div>
        {header}
        {menu}
        {cover}
        {body}
        {footer}
    </div>
    );
};

export default OneColumn;
