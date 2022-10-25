const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const today = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']

//오늘의 날짜 이미지 생성
export const ShowDayImg = () => {
    const dayImg = `https://www.kakaocorp.com/page/calendar/light/ico_date${day}.gif`
    console.log("??");
    let inDateImg = document.querySelector(".span-title")
    inDateImg.style.background = `url(${dayImg}) no-repeat 0 94px`
    inDateImg.style.backgroundSize = '72px 72px'
    console.log(inDateImg.style.background)
}

//오늘의 날짜 안내 문구 생성
export const ShowTitle = () => {
    const dateSpan = document.querySelector(".date-title")
    dateSpan.textContent = `${month}월 ${day}일  ${today[date.getDay() - 1]} 소식입니다`
}