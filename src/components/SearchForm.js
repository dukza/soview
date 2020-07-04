import React from 'react';


export default class SearchForm extends React.Component{
    render(){
        return(
            <>
                <form className="w-100 rounded-pill mb-5 d-flex align-items-center searchForm" method="post" onSubmit={function(e){
                    e.preventDefault();
                    // debugger;
                    this.props.onSubmit(e.target.searchFormInput.value);
                }.bind(this)}>
                    <input className="h-100 bg-transparent border-0 flex-grow-1 searchFormInput" type="text" name="searchFormInput"  placeholder="검색해 주세요"/>
                    <select className="border-0 mr-2 searchFormSelect">
                        <option>선택</option>
                        <option>시험별</option>
                        <option>추천</option>
                    </select>
                    <input className="btn border-0 searchFormBtn" type="submit" name="searchFormBtn" value="" />
                </form>
            </>
        )
    }
}
