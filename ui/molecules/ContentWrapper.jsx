import React, {Component} from 'react'; 
import { SemanticUI } from 'react-atomic-molecule';

const ContentWrapper = (props) => (
    <SemanticUI className="content-wrapper" {...props} />
);

export default ContentWrapper;
