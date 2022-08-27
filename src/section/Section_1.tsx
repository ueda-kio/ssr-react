import { useContext } from 'react'
import * as Contexts from '../context/context';

const Section_1 = () => {
    const {dispatch} = useContext(Contexts.UserContext);

    return (
        <section>
            <button type='button' onClick={() => dispatch('TRUE')}>true</button>
            <button type='button' onClick={() => dispatch('FALSE')}>false</button>
        </section>
    )
}

export default Section_1;
