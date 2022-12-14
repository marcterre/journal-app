export function Form({
  idInput,
  idTextarea,
  labelNameInput,
  labelNameTextarea,
  buttonText,
}) {
  return (
    <form>
      <label for={idInput}>{labelNameInput}</label>
      <input className="inputForm" id={idInput}></input>
      <label for={idTextarea}>{labelNameTextarea}</label>
      <textarea className="textareaForm" id={idTextarea}></textarea>
      <button className="buttonCreate" type="submit">
        {buttonText}
      </button>
    </form>
  );
}
