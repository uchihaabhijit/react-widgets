import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Color = ({options}) => {

    return (
        <div>
            <Dropdown 
                label="Select a Color"
                options={options}
            />
        </div>
    );
};

export default Color;