export default function WatchesForm({ onSubmit, onChange, name, timezone }) {
  return (
    <>
      <form className="watches-form" onSubmit={onSubmit}>
        <label>
          Название: <br />
          <input
            name="name"
            type="text"
            className="watches-form__name"
            value={name}
            onChange={onChange}
          />
        </label>
        <label>
          Временная зона: <br />
          <input
            name="timezone"
            type="number"
            className="watches-form__timezone"
            value={timezone}
            onChange={onChange}
          />
        </label>
        <button className="watches-form__submit">Добавить</button>
      </form>
    </>
  );
}
