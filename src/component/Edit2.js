import {useSearchParams} from 'react-router-dom'

const Edit2 = () => {

    // http://localhost:3026/edit?id=200&mode=abc
    const [searchParams , setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const mode = searchParams.get("mode");


    return (
        <div>
            <h1>수정페이지(Edit2 : Query String)</h1>
            <p>오신것을 환영합니다.</p>
            
            <h1>Query String 으로 넘어오는 id : {id}</h1>
            <h1>Query String 으로 넘어오는 mode : {mode}</h1>

            
        </div>
    );
}

export default Edit2;