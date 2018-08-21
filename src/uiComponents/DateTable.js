import React from 'react'
import { Table } from 'reactstrap'
import LoaderIcon from './loaderIcon'
import { createTitleCells , createDataCells } from '../utilities/tableUtilities'


const DateTable = ( props ) => {

    let returnTable = <LoaderIcon/>

    if ( Array.isArray( props.data ) && ( typeof props.data[0]== 'object' ) ) {

        let objectKeys = Object.getOwnPropertyNames( props.data[0] )

        returnTable=(
            <Table>

                <thead>
                    <tr>{createTitleCells(objectKeys)}</tr>
                </thead>

                <tbody>
                    {createDataCells(props.data , objectKeys)}
                </tbody>

            </Table>
    )
}

    return returnTable
}

export default DateTable