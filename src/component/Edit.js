import {useParams} from 'react-router-dom';

const Edit = () => {

    const {id} = useParams();

    return (
        <div>
            <h1>수정페이지(Edit : Path Variable)</h1>
            <p>오신것을 환영합니다.</p>

            <p>Path Param으로 넘어오는 변수값은</p>
            <h2>{id}</h2>
        </div>
    );

}

export default Edit;