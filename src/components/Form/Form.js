export function Form({
  idInput,
  idTextarea,
  labelNameInput,
  labelNameTextarea,
  buttonText,
  onAddEntry,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    onAddEntry();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={idInput}>{labelNameInput}</label>
      <input className="inputForm" id={idInput}></input>
      <label htmlFor={idTextarea}>{labelNameTextarea}</label>
      <textarea className="textareaForm" id={idTextarea}></textarea>
      <button className="buttonCreate" type="submit">
        {buttonText}
      </button>
    </form>
  );
}
