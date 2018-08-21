import React from 'react'
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap'

class PaginationBar extends React.Component {

constructor(props){
    super(props)

}

nextPage = () => {

    this.props.nextPage()
}

previousPage = () => {

    this.props.previousPage()
}

render(){

    const { prevDisabled , pageIndex , nextDisabled } = this.props

    return( 

        <Pagination aria-label="Page navigation">

            <PaginationItem>

                <PaginationLink previous onClick = { this.previousPage } disabled = { prevDisabled ? "disabled" : "" }>
                </PaginationLink>

            </PaginationItem>

            <PaginationItem>

                <PaginationLink disabled> {pageIndex} </PaginationLink>

            </PaginationItem>

            <PaginationItem>

                <PaginationLink next onClick = { this.nextPage } disabled = { nextDisabled ? "disable" : "" }>
                </PaginationLink>

            </PaginationItem>

        </Pagination>

        )
    }
}

export default PaginationBar