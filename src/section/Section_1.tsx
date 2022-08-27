import { useContext } from 'react'
import { Button } from '@mui/material';
import * as Contexts from '../context/context';

const Section_1 = () => {
    const {dispatch} = useContext(Contexts.UserContext);

    return (
        <section>
            <p>
                <Button variant="outlined" onClick={() => dispatch('TRUE')}>
                    TRUE
                </Button>
            </p>
            <p>
                <Button variant="outlined" onClick={() => dispatch('FALSE')}>
                    FALSE
                </Button>
            </p>
        </section>
    )
}

export default Section_1;
