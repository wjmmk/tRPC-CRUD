interface Props {
    note: {
        title: string
        description: string
    }
}

export function NoteCard({ note }: Props){
    return (
        <>
            <h1> {note.title} </h1>
            <p> {note.description} </p>
            <button type="submit"> Done </button>
            <button type="submit"> Delete </button>
        </>
    )
}