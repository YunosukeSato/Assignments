export default function Search({value, onChange, onSubmit, children}) {
  return (
    <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChange} />
            <button type="submit">{children}</button>
        </form>
  )
}