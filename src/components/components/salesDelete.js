import React, { Component } from 'react'

class SalesDelete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.toDelete,
        }
    }

    render() {
        return (
            <button>{this.state.id}</button>
        )
    }
}

export default SalesDelete
