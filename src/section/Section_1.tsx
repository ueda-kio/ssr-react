import { ChangeEventHandler, useContext, useEffect, useRef, useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import * as Contexts from '../context/context';
import { setManToGenderAction, setMemberAction, setWomanToGenderAction } from '../context/user/action';

const Section_1 = () => {
    const {dispatch} = useContext(Contexts.UserContext);
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(0);
    const refSelectBox = useRef(null as unknown as HTMLSelectElement);
    const memberArray: string[] = [];

    useEffect(() => {
        const select = refSelectBox.current;
        [...select.options].forEach((option) => {
            memberArray.push(option.text);
        });
        setLimit(memberArray.length);
        console.log('初期レンダリング:limit: ', limit);
    }, []);

    useEffect(() => {
        console.log('count', count);
        console.log('limit', limit);
    }, [count]);

    const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
        const target = e.target;
        const selectedText = target.options[target.selectedIndex].text;
        dispatch(setMemberAction(selectedText));
        setCount(v => v + 1);
    };

    return (
        <section>
            <p>
                <Button variant="outlined" onClick={() => dispatch(setManToGenderAction())}>
                    SET MAN
                </Button>
            </p>
            <p>
                <Button variant="outlined" onClick={() => dispatch(setWomanToGenderAction())}>
                    SET WOMAN
                </Button>
            </p>
            <div>
                    <select onChange={handleChange} defaultValue="00" ref={refSelectBox}>
                        <option value="00">-</option>
                        <option value="01">ゼクシィ</option>
                        <option value="02">カーセンサー</option>
                        <option value="03">縁結び</option>
                    </select>
            </div>
        </section>
    )
}

export default Section_1;
