import React from 'react'
import { dateToString } from './dataManipulation'
export const createTitleCells = (tableTitles) => tableTitles.map( ( title ) => <th key={ title }>{ title }</th>)

export const createDataCells = ( dataObject , objectKeys )=> {

    let keyRow = 0
    let keyColumn = 0

    return dataObject.map( (row)=>

                <tr key={keyRow++}>

        {
            objectKeys.map( ( objectKey ) => <td key={keyColumn++}>

                { ( objectKey == 'date' || objectKey == 'lastShare' ) ? 
                    dateToString( row [objectKey] ) : row [ objectKey ].toString() }
            </td>
        )}

    </tr>)}