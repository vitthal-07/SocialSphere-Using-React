import React from "react";

export const LoadingState = () => {
    return (
        <div className='text-center'>
            <div className='spinner-border loading' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    );
};
