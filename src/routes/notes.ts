import { publicProcedure, router } from "../trpc";
import { z } from 'zod'

const getNotes = publicProcedure.query( () => {
    return [{
        id: 1201,
        title: 'Nota - 1',
        description: 'Notas preliminares'
    }]
})

const createNotes = publicProcedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation(({ input }) => {
        console.log(input)
        return 'received'
    })

export const notesRouter = router({
    get: getNotes,
    create: createNotes
})