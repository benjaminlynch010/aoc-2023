import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

const initialValue = 0

const sum = lines.reduce(lineParser, initialValue)

console.log(`Calibration Value: ${sum}`)

function lineParser(accumulator, entry) {

    let entryNumbers = entry.match(/\d/g)

    if (entryNumbers) {
        let num = entryNumbers[0] + entryNumbers[entryNumbers.length - 1]
        return accumulator + Number(num)
    }
    else {
        return accumulator
    }
}