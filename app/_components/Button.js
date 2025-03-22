function Button({ children, ...props }) {
  return (
    <button
      className="border rounded-md w-[150px] flex items-center justify-center p-2 opacity-70 hover:opacity-100"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
