import React from 'react'

const HashDayTable = (props)=>{
    let keys = Object.keys(props.data)
    return(
        <table>
            <tbody>
                {keys.map((row)=>(
                    <tr key={row}>
                        <th>{row}</th><td>{Math.round(props.data[row])}</td>
                    </tr>
                ))}
            </tbody>
            </table>
    )

}

export default HashDayTable