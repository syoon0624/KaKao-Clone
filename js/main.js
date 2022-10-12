const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const today = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']

//오늘의 날짜 이미지 생성
const ShowDayImg = () => {
    const dayImg = `https://www.kakaocorp.com/page/calendar/light/ico_date${day}.gif`

    let inDateImg = document.querySelector(".span-title")
    inDateImg.style.background = `url(${dayImg}) no-repeat 0 94px`
    inDateImg.style.backgroundSize = '72px 72px'
    console.log(inDateImg.style.background)
}

//오늘의 날짜 안내 문구 생성
const ShowTitle = () => {
    const dateSpan = document.querySelector(".date-title")
    dateSpan.textContent = `${month}월 ${day}일  ${today[date.getDay() - 1]} 소식입니다`
}

//초기 렌더
const Render = (() => {
    ShowDayImg();
    ShowTitle();
})();


//좌표값 구하기
let target = document.querySelector(".container1");
let targetTop = target.getBoundingClientRect().top + window.scrollY - 100;

let fixTarget = document.querySelector('#fix1');
let marginTarget = document.querySelector('#margin1');
let fixEndTarget = document.querySelector('#scroll-end1').getBoundingClientRect().top + window.scrollY - 150;


let target2 = document.querySelector(".container3");
let targetTop2 = target2.getBoundingClientRect().top + window.scrollY;

let fixTarget2 = document.querySelector('#fix2');
let marginTarget2 = document.querySelector('#margin2');
let fixEndTarget2 = document.querySelector('#scroll-end2').getBoundingClientRect().bottom + window.scrollY;

console.log(fixEndTarget2); // 2000
console.log(targetTop2); //2200

//스크롤 값에 따라 위치 선정
window.addEventListener('scroll', () => {
    if(window.scrollY >= 2100) {
        console.log(3)
        fixTarget2.classList.remove('fixed2')
        target2.classList.add('flex-end')
    } else if(window.scrollY <= 2100 && window.scrollY >= 1850) { // 좌표값 하드코딩 ㅠㅠ
        console.log(4)
        fixTarget2.classList.add('fixed2')
        target2.classList.remove('flex-end')
    } else if(window.scrollY >= fixEndTarget) {
        console.log(1)
        fixTarget.classList.remove('fixed')
        marginTarget.classList.remove('margined')
        fixTarget2.classList.remove('fixed2')
        marginTarget2.classList.remove('margined')
        target.classList.add('flex-end')
    } else if(window.scrollY >= targetTop) {
        console.log(2)
        fixTarget.classList.add('fixed')
        marginTarget.classList.add('margined')
    } else {
        console.log(5)
        fixTarget.classList.remove('fixed')
        marginTarget.classList.remove('margined')
        target.classList.remove('flex-end')
        fixTarget2.classList.remove('fixed2')
        marginTarget2.classList.remove('margined')
        target2.classList.remove('flex-end')
    }
})