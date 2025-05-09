export default function FormArr({ name, children }) {
  return (
    <div className="form_arr">
      <label>{name}:</label>
      <div className="arr_container">{children}</div>
    </div>
  );
}
