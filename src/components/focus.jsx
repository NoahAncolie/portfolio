import React from 'react'

export const Focus = ({content}) => {
    return (
        <div className="cours-focus">
            <div className="cours-focus-content" id="focus-content">
                {content}
            </div>
        </div>
    )
}