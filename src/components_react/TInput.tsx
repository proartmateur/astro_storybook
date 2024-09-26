export interface TInputProps {
    label: string
}

export function TInput({label}:TInputProps) {
    return (
        <>
            <label htmlFor="inp">Input</label>
            <input className="text-black" type="text" id="inp" name="inp" />
        </>
    )
}
