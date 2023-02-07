import { publicProcedure, router } from "../trpc";

const getNotes = publicProcedure.query( () => {
    return [{
        id: 1201,
        title: 'Nota - 1',
        description: 'Notas preliminares'
    }]
})

export const notesRouter = router({
    get: getNotes
})