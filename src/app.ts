import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import * as trpcExpress from '@trpc/server/adapters/express'

import cors from 'cors'

import { router } from './trpc'
import { notesRouter } from './routes/notes'


const app = express()

const appRouter = router({
    note: notesRouter,
})

app.use(cors())
app.use(morgan('dev'))

app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
}))

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

export default app;