import React from 'react'

export default (props) => {

    return props.editing ? props.editor() : props.viewer()

}