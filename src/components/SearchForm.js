import React from 'react';


export default class SearchForm extends React.Component{
    render(){
        return(
            <>
                <form className="w-100 border rounded-fill searchBar" method="post" onSubmit={function(e){
                    e.preventDefault();
                    // debugger;
                    this.props.onSubmit(e.target.searchInput.value);
                }.bind(this)}>
                    <input className="border-0" type="text" name="searchInput"  placeholder="검색해 주세요"/>
                    <select className="border-0">
                        <option>선택</option>
                        <option>시험별</option>
                        <option>추천</option>
                    </select>
                    <input className="border-0" type="submit" name="searchBtn" value="검색"/>
                </form>
            </>
        )
    }
}
