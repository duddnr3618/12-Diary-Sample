// Router : 패킷이 전송될 경로를 지정하는 장비
// Routing : 패킷이 전송될 경로
// Route : 패킷이 가야할 장소를 설정

// page-route : 요청에 대한 컴포넌트를 호출 (컴포넌트가 하나의 페이지)
  //npm i react-router-dom

// react-router-dom v6에 추가된 신기능 3가지
// 요청정보에 대한 CSR 기능을 사용할수 있도록 만들어진 라이브러리
// 1. Path Variable을 사용할수 있다 . "edit/:id" , useParams
    // <Edit />

// 2.Query String을 사용 할수 있다. "edit?id=1&mode=abc?" , useSearchParms
    // <Edit2 />
  

// 3.Page Moveing : 이벤트 발생시 특정 페이지로 이동 useNavigate 
    // 버튼 클릭시 useNavigate 를 사용해서 이동처리
    // 함수 내부에서 자동으로 특정페이지로 이동 하도록 처리


import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';
import Gallery from './component/Gallery';
import Company from './component/Company';
import Edit from './component/Edit';
import Edit2 from './component/Edit2';


function App() {


  // useNavigate 함수 정의
  const navigate = useNavigate();


  return (
    <>
   
      <nav>
        <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/about">About</Link>
        </li>
        <li>
          <Link to ="/gallery">Gallery</Link>
        </li>
        <li>
          <a href="/company">company</a>
        </li>
        <li>
          <Link to ="/edit/100">Edit (1.Path Vaeriable)</ Link>
        </li>
        <li>
          <Link to ="/edit2?id=200&mode=abc">Edit2 (2.Query String)</ Link>
        </li>
        <li>
          <button onClick={ () => {navigate("/home")}}> 홈으로 페이지로 이동</button>
        </li>
        <li>
          <button onClick={ () => {navigate(-1)}}> 이전 페이지로 이동</button>
        </li>
        </ul>
      </nav>

      <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/about" element = {<About />}></Route>
      <Route path="/gallery" element = {<Gallery />}></Route>
      <Route path="/company" element = {<Company />}></Route>
      <Route path="/edit/:id" element = {<Edit />}></Route>
      <Route path="/edit2" element = {<Edit2 />}></Route>

      </Routes>
    

  </>
  );
}

export default App;
