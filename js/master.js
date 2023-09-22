let i = 1
burger = document.getElementById('burger')
document.getElementsByTagName('span')[0].addEventListener('click', function () {
    if (i % 2) {
        burger.style.left = '0'
        document.getElementsByTagName('span')[0].innerText = 'X'
    }
    else {
        burger.style.left = '-100%'
        document.getElementsByTagName('span')[0].innerText = '|||'
        document.getElementsByTagName('span')[0].style.rotate = '90'
    }
    i++
})

let _div = document.querySelectorAll('li>div')
let _p = document.querySelectorAll('li>p')

for (let i = 0; i < _p.length; i++) {
    let temp = _p[i].clientHeight
    _p[i].setAttribute('data-h', temp)
    _p[i].setAttribute('data-status', true)
    _p[i].style.height = '0'

}

_div.forEach(function(value) {
    value.addEventListener('click', function() {
        let status = value.nextElementSibling.getAttribute('data-status')

        // reset
        for (let i = 0; i < _p.length; i++) {
            _p[i].style.height = '0px'
            _p[i].setAttribute('data-status', true)

        }
        // reset


        if (status == 'true') {
            let _h = value.nextElementSibling.getAttribute('data-h')
            // value.lastElementChild.style.border = '1px solid black'
            value.nextElementSibling.style.height = _h + 'px'
            value.nextElementSibling.setAttribute('data-status', 'false')
            // value.firstElementChild.style.backgroundColor = 'green'
            // document.getElementById('demo').innerText = '-'


        } else {
            value.nextElementSibling.style.height = '0px'
            value.nextElementSibling.style.border = 'none'
            value.nextElementSibling.setAttribute('data-status', 'true')
            // value.firstElementChild.style.backgroundColor = 'white'
        }
    })
})