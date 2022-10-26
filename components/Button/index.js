function Button({style,text}){
    return (
        <button className={`  font-bold text-sm  rounded-md  ${style}` }>{text}</button>

    );

}
export default Button