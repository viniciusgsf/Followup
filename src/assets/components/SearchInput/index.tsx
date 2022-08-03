/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState,} from "react";
import { IconBaseProps} from "react-icons/lib";

import { Container, Error } from "./styles";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    containerStyle?: object;
    icon?: React.ComponentType<IconBaseProps>;
}

const SearchInput: React.FC<InputProps> = ({ name, icon: Icon, containerStyle, ...rest}) => {

    return (
    <Container >
        { Icon && <Icon size={20}/>}
        <input 
                name={name}
                {...rest}
            />

    </Container>
    );     
};

export default SearchInput;