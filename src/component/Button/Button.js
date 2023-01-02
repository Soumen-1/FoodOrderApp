import classes from './Button.module.css'
const Button = (prop)=>{
    return (<button className={`${prop.className} ${classes.btn}`}>
        {prop.children}
    </button>);
}
export default Button;