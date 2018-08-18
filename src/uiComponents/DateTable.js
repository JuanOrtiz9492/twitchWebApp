import React from 'react'
import {Table} from 'reactstrap'
import LoaderIcon from './loaderIcon'
import {dateToString} from '../utilities/dataManipulation'


const DateTable =(props)=>{

    let returnTable = <LoaderIcon/>
    if (Array.isArray(props.data) && (typeof props.data[0]== 'object') ) {

        let objectKeys = Object.getOwnPropertyNames(props.data[0])
        let keyRow=0;
        let keyColumn=0;

        returnTable=(
            <Table>

                <thead>
                    <tr>{objectKeys.map((title)=><th key={title}>{title}</th>)}</tr>
                </thead>

                <tbody>
                    {props.data.map((row)=>
                        <tr key={keyRow++}>

                            {
                                objectKeys.map((objectKey,index)=>
                                <td key={keyColumn++}>

                                    {(objectKey=='date'||objectKey=='lastShare')?dateToString(row[objectKey]):row[objectKey].toString()}
                                    
                                </td>
                            )}

                        </tr>)}
                </tbody>

            </Table>
    )
}

    return returnTable
}

export default DateTable