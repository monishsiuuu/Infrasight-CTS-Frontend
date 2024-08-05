import React from 'react';

function ListToParagraphs(props) {
    const itemList = props.items;
    const paragraphElements = itemList.map((item, index) => (
        <p key={index}>{item}</p>
    ));

    return (
        <div>
            {paragraphElements}
        </div>
    );
}

export default ListToParagraphs;
