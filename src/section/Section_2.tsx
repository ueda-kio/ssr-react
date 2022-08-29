import { useContext } from 'react'
import * as Contexts from '../context/context';

const Section_2 = () => {
    const {user} = useContext(Contexts.UserContext);

    return (
        <section>
            <p>gender: {user.gender}</p>
            <p>member: {user.member}</p>
        </section>
    )
}

export default Section_2;
