import useStore from './hooks/useStore';

function App() {

  const {users} = useStore();

  return (
    <div>
      Start
    </div>
  );
}

export default App;
