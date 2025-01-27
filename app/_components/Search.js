function Search({ placeholder, onChangeHandler }) {
  return (
    <div className="py-4">
      <input
        type="search"
        onChange={onChangeHandler}
        className="text-black px-3 lg:w-[400] h-[50]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
