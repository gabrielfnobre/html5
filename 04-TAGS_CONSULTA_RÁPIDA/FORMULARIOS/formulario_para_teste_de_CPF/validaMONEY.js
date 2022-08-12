let input = document.getElementById('money')

SimpleMaskMoney.setMask(input, {
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
})