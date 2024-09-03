import axios from "axios";

export const getBooksFromStorage = (setList,page) => {
  // axios.get('요청URL');
  // axios.get('요청URL').then(콜백).catch(콜백).finally(콜백);
  

  // axios.get('http://localhost:8080/book/findAll')
  axios.get('http://localhost:8080/book/findPage/10/1')
       .then((response)=>{  //response : 서버의 응답 데이터
         //요청(이벤트)후 처리할 문장
           console.log(response.data);//[{person},{person}]
            // personList = response.data;
            setList(response.data);
        });
};


