function Button({ style, text, onclick }) {
  return (
    <button
      className={`  font-bold text-sm  rounded-md hover:bg-darkgenoa hover:text-white  ${style}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
export default Button;
