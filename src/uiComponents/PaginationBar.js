import React from 'react'
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap'

class PaginationBar extends React.Component {

constructor(props){
    super(props)

    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)

}

nextPage(){

    this.props.nextPage()

}
previousPage(){

    this.props.previousPage()

}

render(){

    return( 

        <Pagination aria-label="Page navigation">

            <PaginationItem>
                <PaginationLink previous onClick={this.previousPage} disabled={this.props.prevDisabled?"disabled":""}>
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink disabled>
                    {this.props.pageIndex}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next onClick={this.nextPage} disabled={this.props.nextDisabled?"disable":""}>
                </PaginationLink>
            </PaginationItem>

        </Pagination>

        )
    }
}

export default PaginationBar