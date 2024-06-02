// const add = (char) => {
//     let display = document.getElementById('display')
//     display.value = display.value + char
// }

const add = (char) => {
    let display = document.getElementById('display')
    display.value = display.value + char
}

const calculate = (event) => {
    const display = document.getElementById('display').value

    const result = eval(display)
    document.getElementById('result').value = result
}

const reset = () => {
    document.getElementById('display').value = ''
    document.getElementById('result').value = ''
}

const factorial = (n) => {
    if (n == 0 || n == 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

const ball_calculate = (event) => {
    event.preventDefault()
    let m = document.getElementById('M').value
    let n = document.getElementById('N').value

    let q1 = document.getElementById('q1').value
    let q2 = document.getElementById('q2').value

    if (q1 == 'yes1' && q2 == 'yes2') {
        const answer1 = Math.pow(Number(n), Number(m))
        document.getElementById('answer').value = answer1
    } else if (q1 == 'yes1' && q2 == 'no2') {
        const answer2 = factorial(Number(n)) / factorial(Number(n) - Number(m))
        document.getElementById('answer').value = answer2
    } else if (q1 == 'no1' && q2 == 'no2') {
        const answer3 =
            factorial(Number(n)) /
            (factorial(Number(n) - Number(m)) * factorial(Number(m)))
        document.getElementById('answer').value = answer3
    } else if (q1 == 'no1' && q2 == 'yes2') {
        const answer4 =
            factorial(Number(n) + Number(m) - 1) /
            (factorial(Number(n) - 1) * factorial(Number(m)))
        document.getElementById('answer').value = answer4
    }
}

const countCharacters = () => {
    const text = document.getElementById('textInput').value
    const count = text.length

    document.getElementById('characterCount').innerText = count
}

const calculatePercentage = () => {
    const total = document.getElementById('totalValue').value
    const percent = document.getElementById('percentValue').value

    let result2 = (total * percent) / 100

    document.getElementById('finally').innerText = result2
}

showDay = () => {
    const dateInput = document.getElementById('datePicker').value
    if (dateInput) {
        const date = new Date(dateInput)
        const days = [
            '일요일',
            '월요일',
            '화요일',
            '수요일',
            '목요일',
            '금요일',
            '토요일',
        ]
        const dayName = days[date.getDay()]
        // getDay() 메소드는 일요일부터 토요일까지를 0부터 6까지의 숫자로 반환
        document.getElementById(
            'selectday'
        ).innerText = `선택한 날짜는 ${dayName}입니다.`
    } else {
        document.getElementById('selectday').innerText = '날짜를 선택해주세요.'
    }
}

const changelang = () => {
    const language = document.getElementById('language').value

    switch (language) {
        case 'kor':
            document.getElementById('hi').innerText =
                '계산기 사이트에 오신 것을 환영합니다.'
            break

        case 'chi':
            document.getElementById('hi').innerText = '欢迎进入计算器网站。'
            break

        case 'eng':
            document.getElementById('hi').innerText =
                'Welcome to the calculator site.'
            break

        case 'jap':
            document.getElementById('hi').innerText = '電卓サイトへようこそ。'
            break

        default:
            '계산기 사이트에 오신 것을 환영합니다.'
    }
}
