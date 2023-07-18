
const Button = ({children,style,onClick})=>{


    return(
        <button type="submit" style={style} onClick={onClick}>
            {children}
        </button>
    );

}
export default Button;