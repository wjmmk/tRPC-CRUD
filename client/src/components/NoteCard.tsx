import { trpc } from '../utils/trpc'
interface Props {
    note: {
        _id: string
        title: string
        description: string
        done: boolean
    }
}

export function NoteCard({ note }: Props){

    const deleteNote = trpc.note.delete.useMutation()
    const updateNote = trpc.note.update.useMutation()
    const utils = trpc.useContext()

    return (
        <>
            <h1> {note.title} </h1>
            <p> {note.description} </p>

            <button onClick={
                () => {
                    updateNote.mutate(note._id, {
                        onSuccess(data) {
                            if(data) {
                                utils.note.get.invalidate()
                            }
                        },
                        onError: (error) => {
                            console.log(error)
                        }
                    })
                }
            }> 
                
            { note.done ? 'Undone' : 'Done' }
            </button>

            <button onClick={
                () => {
                     deleteNote.mutate(note._id, {
                        onSuccess: (data) => {
                            if (data) {
                                utils.note.get.invalidate()
                            }
                        },
                        onError: (error) => {
                            console.log(error)
                        }
                    })
                }}
            > Delete </button>
        </>
    )
}