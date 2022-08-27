import * as Provider from './context/provider';
import * as Section from './section';

const App = () => {
  console.log('App');
  return (
    <>
      <Provider.UserProvider>
        <Section.Section_1 />
        <Section.Section_2 />
      </Provider.UserProvider>
    </>
  );
}

export default App;