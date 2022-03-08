import Prop123 from 'prop-types';
import styled from "./Button.module.css";

function Button({text}){
    return <button className={styled.Btn}>{text}</button>
}

Button.proTypes = {
    text: Prop123.string.isRequired
}

export default Button