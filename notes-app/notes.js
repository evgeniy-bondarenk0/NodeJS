const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added '))
    } else {
        console.log(chalk.red.inverse('Note title taken '))
    }

    
}

const saveNotes = (notes) => {
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {    
    const notes = loadNotes()
    const removingNotes = notes.filter((note) => note.title != title)

    if (notes.length > removingNotes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(removingNotes)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }

    
}

const listNotes = () => {
    const notes = loadNotes() 
    console.log(chalk.inverse('Your notes '))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)
    
    if (findNote) {
            console.log(chalk.inverse('Your notes '))
            console.log(chalk.blue.inverse(findNote.title) + chalk.blue.inverse(':') + " " + chalk.yellow.inverse(findNote.body)) 
        }else{
            console.log(chalk.red.inverse('No note found!'))
        }
    }


module.exports =  {
    addNote: addNote,
    removeNote: removeNote,
    loadNotes: loadNotes,
    listNotes: listNotes,
    readNote: readNote
}