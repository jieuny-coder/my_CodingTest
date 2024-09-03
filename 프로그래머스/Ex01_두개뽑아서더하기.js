// 정수 배열 numbers가 주어집니다. 
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 
// 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// (제약조건)
// numbers의 길이는 2이상 100이하
// numbers의 모든 수는 0이상 100 이하


function solution(numbers) {
    var answer = [];
    for(let i = 0 ; i < numbers.length; i++){
        // i와 j가 같은 인덱스면 안되니까 j+1해주기
        for(let j=i+1 ; j < numbers.length ; j++){
            // 카테시안곱? 생각하고 i*j 생각했는데 아니었다.
            answer.push(numbers[i]+numbers[j]);
            // JS에는 append메서드가 존재하지 않음. 대신에 push를 사용해야함.
        }
    }



    // 스프레드 사용하는 방법 ㅠㅠ 
    answer = [ ...new Set(answer)]
    answer.sort((a,b)=>a-b)

    return answer
    

    // return [...new Set(answer)].sort((a,b)=>a-b);

}

const result = solution([2,1,3,4,1])
console.log(result);
const result2 = solution([5,0,2,7])
console.log(result2);




