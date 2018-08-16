import React from 'react'
import {Table} from 'reactstrap'
import LoaderIcon from './LoaderIcon'

const dateToString=(dateSeconds)=>{

    let date = new Date(dateSeconds*1000)
    let year = date.getFullYear().toString()
    let month = date.getMonth()<10?('0'+date.getMonth().toString()):date.getMonth().toString()
    let day = date.getDay()<10?('0'+date.getDay().toString()):date.getDay().toString()
    let hour = date.getHours()<10?('0'+date.getHours().toString()):date.getHours().toString()
    let minutes = date.getMinutes()<10?('0'+date.getMinutes().toString()):date.getMinutes().toString()
    return(year+'-'+month+'-'+day+' '+hour+':'+minutes)
}
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