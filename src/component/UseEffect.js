// useEffect 훅
// useEffect (Function , deps);   deps의 조건에 따라서 function이 작동
// 1.deps의 인자의 값이 오지 않을 경우 : 컴포넌트가 mount ( 생성 ) 될때 호출
// 2.deps의 인자에 []이 적용되었을시 처음 랜더링 시점에 한번만 작동됨
// 3.deps의 인자의 [count , name]에 값이 들어간 경우 -> 배열의 state(상태)의 값이 변경된경우 작동

import React, {useEffect, useState} from 'react'


function UseEffect () {
    
    // UseEffect 컴포넌트가 생성시에 호출된다 -> 뒤에 인자가 없다.(deps 생략)
    useEffect( () => {console.log(`컴포넌트 생성시에 호출됨.-랜더링 될때마다 작동`)});

    // UseEffect 컴포넌트에 deps옵션에 []을 적용한경우
    useEffect ( () => {console.log("랜더링시 한번만 시행됨.")} , []);

    // 3.useEffect : deps옵션에 [count, name] : conut, name이 수정될떄 적용
    const[count,setCount] = useState(0);
    const[name,setName] = useState("");

    useEffect ( 
      () => {console.log("count 상태 변경")}
      ,[count, name]
      );

      const countChange = () => {
        setCount (10);

      }

    return(
      <div>
        <h1>useEffect 사용 예제</h1>

        <br></br>
        <h1>{count}</h1>
        <button onClick={countChange}> count 값 변경 </button>
      </div>
    );
  }

  export default UseEffect;