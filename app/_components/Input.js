function Input({ label, id, error, ...props }) {
  return (
    <div className="my-4 flex items-center">
      <p className="w-[300]">
        <label htmlFor={id} className="text-3xl mr-10 ">
          {label}
        </label>
      </p>
      <p>
        <input id={id} {...props} className="w-[400] rounded-sm text-black" />
      </p>
      <div>{error && <p>{error}</p>}</div>
    </div>
  );
}

export default Input;
