import * as today from './today.js'
import * as scrollhandle from './scrollhandle.js'

//초기 함수 실행
;(() => {
    today.ShowDayImg()
    today.ShowTitle()
    scrollhandle.handleScroll()
})()