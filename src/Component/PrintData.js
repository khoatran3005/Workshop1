import React from 'react';

const PrintData = (props) => {
    const { formData, showData } = props;
    return (
        <div>
            {showData === true ? (
                <>
                    <h2>Printed Data</h2>
                    <p>Name: {formData.name}, Email: {formData.email}, Message: {formData.message}</p>
                </>
            ) : (
                null
            )}
        </div>
    );
};

export default PrintData;