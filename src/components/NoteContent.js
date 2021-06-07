import React from 'react';
import Popover from 'react-bootstrap/Popover';

const NoteContent = (note) => {

    return (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Notes:</Popover.Title>
            <Popover.Content>{note}</Popover.Content>
        </Popover>
    );
}

export default NoteContent;