import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

const initialValue = 0

const sum = lines.reduce(lineParser, initialValue)

console.log(`Calibration Value: ${sum}`)

function lineParser(accumulator, entry) {
    let convertedEntry = wordsToNumbers(entry)
    let entryNumbers = convertedEntry.match(/\d/g)

    if (entryNumbers) {
        let num = entryNumbers[0] + entryNumbers[entryNumbers.length - 1]
        return accumulator + Number(num)
    }
    else {
        return accumulator
    }
}

function wordsToNumbers(entry) {

    let convertedEntry = entry.replaceAll('zero', 'zero0zero');

    convertedEntry = convertedEntry.replaceAll('one', 'one1one');
    convertedEntry = convertedEntry.replaceAll('two', 'two2two');
    convertedEntry = convertedEntry.replaceAll('three', 'three3three');
    convertedEntry = convertedEntry.replaceAll('four', 'four4four');
    convertedEntry = convertedEntry.replaceAll('five', 'five5five');
    convertedEntry = convertedEntry.replaceAll('six', 'six6six');
    convertedEntry = convertedEntry.replaceAll('seven', 'seven7seven');
    convertedEntry = convertedEntry.replaceAll('eight', 'eight8eight');
    convertedEntry = convertedEntry.replaceAll('nine', 'nine9nine');

    return convertedEntry;
}