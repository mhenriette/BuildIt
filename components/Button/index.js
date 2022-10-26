function Button({style,text,onclick}){
    return (
        <button className={`  font-bold text-sm  rounded-md  ${style}` } onClick={onclick} >{text}</button>

    );

}
export default Button