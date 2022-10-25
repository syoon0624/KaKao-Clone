//좌표값 구하기
const target = document.querySelector(".container1")
const targetTop = target.getBoundingClientRect().top + window.scrollY - 100

const fixTarget = document.querySelector('#fix1')
const marginTarget = document.querySelector('#margin1')
const fixEndTarget = document.querySelector('#scroll-end1').getBoundingClientRect().top + window.scrollY - 150


const target2 = document.querySelector(".container3")
const targetTop2 = target2.getBoundingClientRect().top + window.scrollY

const fixTarget2 = document.querySelector('#fix2')
const marginTarget2 = document.querySelector('#margin2')
const fixEndTarget2 = document.querySelector('#scroll-end2').getBoundingClientRect().bottom + window.scrollY


//스크롤 값에 따라 위치 선정
export const handleScroll = window.addEventListener('scroll', () => {
    if(window.scrollY >= 2100) {
        // console.log(3)
        fixTarget2.classList.remove('fixed2')
        target2.classList.add('flex-end')
    } else if(window.scrollY <= 2100 && window.scrollY >= 1850) { // 좌표값 하드코딩 ㅠㅠ
        // console.log(4)
        fixTarget2.classList.add('fixed2')
        target2.classList.remove('flex-end')
    } else if(window.scrollY >= fixEndTarget) {
        // console.log(1)
        fixTarget.classList.remove('fixed')
        marginTarget.classList.remove('margined')
        fixTarget2.classList.remove('fixed2')
        marginTarget2.classList.remove('margined')
        target.classList.add('flex-end')
    } else if(window.scrollY >= targetTop) {
        // console.log(2)
        fixTarget.classList.add('fixed')
        marginTarget.classList.add('margined')
    } else {
        // console.log(5)
        fixTarget.classList.remove('fixed')
        marginTarget.classList.remove('margined')
        target.classList.remove('flex-end')
        fixTarget2.classList.remove('fixed2')
        marginTarget2.classList.remove('margined')
        target2.classList.remove('flex-end')
    }
})