import { useDispatch } from 'react-redux'
import { setScreen } from '../Utils/appSlice'

function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <div>Home Screen</div>
      <button onClick={() => dispatch(setScreen("profile"))}>Profile</button>
    </>
  )
}

export default Home;