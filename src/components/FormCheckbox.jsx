const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control flex items-center">
      <label htmlFor={name} className="label cursor-pointer flex items-center">
        <input
          type="checkbox"
          id={name}
          name={name}
          defaultChecked={defaultValue}
          className={`checkbox checkbox-primary ${size}`}
        />
        <span className="label-text capitalize ml-2">{label}</span>
      </label>
    </div>
  );
};

export default FormCheckbox;
