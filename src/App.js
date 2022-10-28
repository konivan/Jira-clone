import useStore from './hooks/useStore';
import { observer } from 'mobx-react-lite';

function App() {
  const {users, boards} = useStore();

  return (
    <div>
      Start
    </div>
  );
}

export default observer(App);
