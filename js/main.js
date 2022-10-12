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
let fixTarget = document.querySelector('#fix1');
let marginTarget = document.querySelector('#margin1');

let fixEndTarget = document.querySelector('#scroll-end1').getBoundingClientRect().bottom + window.scrollY;
let targetTop = target.getBoundingClientRect().top + window.scrollY;

let abTop = window.pageYOffset + target.getBoundingClientRect().top;

let winY = window.pageYOffset;

console.log(targetTop)
console.log(fixEndTarget)

window.addEventListener('scroll', () => {
    if(window.scrollY >= fixEndTarget) {
        fixTarget.classList.remove('fixed')
        marginTarget.classList.remove('margined')
    } else if(window.scrollY >= targetTop) {
        fixTarget.classList.add('fixed')
        marginTarget.classList.add('margined')
    } else {
        fixTarget.classList.remove('fixed')
        marginTarget.classList.remove('margined')
    }
})