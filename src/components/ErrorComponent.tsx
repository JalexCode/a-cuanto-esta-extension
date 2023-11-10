import { useState } from "react"

const ErrorComponent = (errorMessage) => {
    return (
        <div>
            <div className="error-title">
                <h3>
                    Error
                </h3>
            </div>
            
            <div className="error-message">
            <h4>{errorMessage !== undefined ?
                errorMessage :
                "An error was ocurred"}</h4>
            </div>
        </div>
    );
}
export default ErrorComponent;