import { ChangeEvent, FormEvent, useState } from "react";

const NoteForm = () => {

    const [note, setNote] = useState({
        title: '',
        description: ''
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(note)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" 
                   name="title" 
                   placeholder="title" 
                   autoFocus 
                   onChange={handleChange}
            />

            <textarea name="description" 
                      placeholder="description" 
                      onChange={handleChange}
            ></textarea>

            <button type="submit"> Save </button>
        </form>
     );
}
 
export default NoteForm;