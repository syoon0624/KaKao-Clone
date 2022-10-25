// 검색 창 구현
const searchTarget = document.querySelector('.search-container')
const headerTarget = document.querySelector('.header')
const removeTarget = [ 
        document.querySelector('.container1'),
        document.querySelector('.container2'),
        document.querySelector('.container3'),
        document.querySelector('.container4'),
        document.querySelector('.container5'),
        document.querySelector('footer')
]
const mainTarget = document.querySelector('main')

const OpenSearch = () => {
    searchTarget.classList.remove('hidden')
    headerTarget.classList.add('hidden')
    removeTarget.forEach(arr => {
        arr.classList.add('remove')
    })
    mainTarget.classList.add('do-opacity')
}

const CloseSearch = () => {
    searchTarget.classList.add('hidden')
    headerTarget.classList.remove('hidden')
    removeTarget.forEach(arr => {
        arr.classList.remove('remove')
    })
    mainTarget.classList.remove('do-opacity')
    mainTarget.classList.add('do-not-opacity')
}