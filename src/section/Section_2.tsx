import { useContext } from 'react'
import * as Contexts from '../context/context';

const Section_2 = () => {
    const {user} = useContext(Contexts.UserContext);

    return (
        <section>
            {user ? (
                <p>is true</p>
            ) : (
                <p>is false</p>
            )}
        </section>
    )
}

export default Section_2;
