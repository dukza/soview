import React from 'react';
import './css/App.css';
import './css/style.css';
import SearchForm from './components/SearchForm';
import SearchBtn from './components/SearchBtn';
import SearchLink from './components/SearchLink';


export default class App extends React.Component{
  state = {
    searchBtns:[
      {
        label: 'ㄱ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㄴ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㄷ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㄹ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㅁ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㅂ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㅅ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㅇ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㅈ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㅊ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㅋ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㅌ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㅍ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'ㅎ',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'A',
        link: 'https://www.google.co.kr/'
      }
    ],
    searchLinks:[
      {
        label: '9급 행정직 공무원',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'TOEIC',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '수능',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '영어회화',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '경찰',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '어린이집 리뷰',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'TOEFL',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '유치원 리뷰',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'OPIc',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '소방공무원',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '대학교수',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '중국어',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '해커스',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '토익스피킹',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '공무원',
        link: 'https://www.google.co.kr/'
      },
      {
        label: 'IELTS',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '일본어',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '내신학원',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '영어회화',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '공단기',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '기술직 공무원',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '댓글알바',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '공인중개사',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '중학교 내신',
        link: 'https://www.google.co.kr/'
      },
      {
        label: '유학준비',
        link: 'https://www.google.co.kr/'
      }
    ]
  }
  render(){
    const {searchBtns,searchLinks} = this.state;
    return(
      <div className="App h-100 d-flex align-items-center justify-content-center flex-column">
        <div className="page">
          {/* 타이틀 */}
          <div className="h1 font-weight-bolder">SEARCH</div>
          <div className="mt-1">어떤 선생님, 학원, 시험을 찾으세요?</div>
          {/* 타이틀 */}
          {/* 검색바 */}
          <SearchForm onSubmit={function(searchInput){
            console.log(searchInput)
            // this.setState({

            // })
          }.bind(this)}/>
          {/* 검색바 */}
          {/* 검색버튼 */}
          <div className="w-100 align-items-start">
            <span class="font-weight-bolder">시험별 검색</span>
            {searchBtns.map(searchBtn => {
                return (
                  <SearchBtn label={searchBtn.label} link={searchBtn.link}/>
                )
            })}
          </div>
          {/* 검색버튼 */}
          {/* 추천링크 */}
          <div className="w-100 align-items-start">
            <span class="font-weight-bolder">추천 #링크</span>
            {searchLinks.map(searchLink => {
                return (
                  <SearchLink label={searchLink.label} link={searchLink.link}/>
                )
            })}
          </div>
          {/* 추천링크 */}
        </div>
      </div>    
    )

  }
}
