
interface Inputtypes {
        placeholder: string,
        ref?:any

}
export const Input = ({ placeholder, ref}:Inputtypes) => {
        return (
                <div className="opacity-100  my-4 font-sans" >
                        <div className="shadow-xl/10 rounded-lg w-full">
                                <input ref={ref} className="rounded-lg border  opacity-100  py-1 px-3 text-black  " type="text" placeholder={placeholder} />
                        </div></div>
        )
}  