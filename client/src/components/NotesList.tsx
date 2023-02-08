import { trpc } from '../utils/trpc'
import { NoteCard } from './NoteCard';

export default function NotesList() {

    const { data, isLoading, isError, error } = trpc.note.get.useQuery();

    if(isLoading) return <div> Loading !!! </div>
    if(isError) return <div> Error: {error.message} </div>

    return (
        <>
            { 
                data.map( (note: any, index) => (
                    <NoteCard note={note} key={index} />
                ))
            }
        </>
    )
}