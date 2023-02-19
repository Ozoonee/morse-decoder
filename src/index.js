const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    final=[]
    result=[]
    arr = expr.match(/[\s\S]{1,10}/g)
    arr.forEach((element, elInx )=> {
        result.push('')
        for (let index = 0; index < element.length; index+=2) {
            if((element[index]+element[index+1])=='11'){
                result[elInx]+='-'
            }
            else if((element[index]+element[index+1])=='10'){
                result[elInx]+='.'}
            else if((element[index]+element[index+1])=='**'){
                result[elInx]+=' '
                index+=10}
            }
        }
    )
        for (let index = 0; index < result.length; index++) {
            for (const key in MORSE_TABLE) {
                if (key==result[index]) {
                    final.push(MORSE_TABLE[key])
                }
                else if(result[index]==" "){
                    final.push(" ")
                    break
                }
            }}
        return final.join("")
            }

module.exports = {
    decode
}