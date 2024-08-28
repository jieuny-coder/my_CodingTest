function solution(arr) {
    const uniqueArr = [...new Set(arr)]; // ➊ 중복값 제거
    uniqueArr.sort((a, b) => b - a); // ➋ 내림차순 정렬
    return uniqueArr;
  }
  
  // TEST 코드 입니다. 주석을 풀고 실행시켜 보세요
  console.log(solution([4, 2, 2, 1, 3, 4])); // 반환값 : [4, 3, 2, 1]
  console.log(solution([2, 1, 1, 3, 2, 5, 4])); // 반환값 : [5, 4, 3, 2, 1]


//  스프레드, set()함수




//  set()함수
//  배열을 집합으로 정렬해주는 함수
// 집합에는 중복값을 허용하지 않으므로, set함수를 사용하면 배열에서 중복값을 없앨 수 있다.
const mySet = new Set([iterable]);
// iterable : 배열, 문자열, 객체


// 스프레드 
// 객체의 프로퍼티를 업데이트하거나 복사할 수 있다.
