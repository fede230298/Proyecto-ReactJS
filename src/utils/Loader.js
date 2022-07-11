import React from "react"
import * as ReactBootstrap from 'react-bootstrap'

const Loader = () => {
    return (
        <div className="load-items"> <ReactBootstrap.Spinner animation="border" variant="primary" /> </div>
    )
}

export {Loader};