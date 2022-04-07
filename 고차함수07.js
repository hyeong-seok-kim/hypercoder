function getDomain(email) {
  return email.split('@')[1].split('.')[0];
}

function getUserId(email) {
  return email.split('@')[0];
}

let output = callbackOnly(getDomain, {
  status: 'success',
  data: 'mike@codestates.com',
});

//callbackOnly 함수에 인자로 함수와 객체가 들어가있음.
//return email.split('@')[1].split('.')[0]; 에 대한 해석은
//email은 string 값으로 들어오고 @을 기준으로 인덱스 1에 위치한 값. 그리고 거기서 다시 .을 기준으로 인덱스 0의 위치를 잘라냄으로써
//codestates라는 spring값으로 출력할 수 있음.

function callbackOnly(callback, response) {
  
  if(response.status==='success') {
    return callback(response.data);
  } 
}
