import classes from './Button.module.css'
const Button = (props)=>{
    return (<button className={`${props.className} ${classes.btn}`} onClick={props.onclick}>
        {props.children}
    </button>);
}
export default Button;