import { publicProcedure, router } from "../trpc";
import { z } from 'zod'

import Note from '../models/note';

const getNotes = publicProcedure.query( async () => {
    const notes = await Note.find({})
    return notes 
})

const createNotes = publicProcedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation(async ({ input }) => {
        const newNote = new Note({
            title: input.title,
            description: input.description
        })
        const savedNote = await newNote.save()
        return savedNote;
})

const deleteNote = publicProcedure
    .input(z.string())
    .mutation( async ( { input }) => {
       try {
            const noteFound = await Note.findByIdAndDelete(input)
            if(!noteFound) throw new Error('Note not Found')
            return true;
       } catch (error) {
            console.log(error)
            return false;
       }
})

const updateNote = publicProcedure
    .input(z.string())
    .mutation( async ( { input }) => {
        try {
            const noteToUpdate = await Note.findById(input)
            if(!noteToUpdate) throw new Error('Note Not Found')
            noteToUpdate.done = !noteToUpdate.done
            await noteToUpdate.save()
            return true;            
        } catch (error) {
            console.log(error)
            return false;
        }
    })

export const notesRouter = router({
    get: getNotes,
    create: createNotes,
    delete: deleteNote,
    update: updateNote
})