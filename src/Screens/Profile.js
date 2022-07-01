import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setScreen, setModalVisible } from '../Utils/appSlice'
import Modal from '../Components/Modal'
import CommentForm from '../Components/CommentForm'

function Profile() {

  const dispatch = useDispatch();
  const app = useSelector(
    (state) => state.app
  )
  const comments = useSelector(state => state.comments.list)

  const listComments = comments.map((comment, index) => (
    <p key={index}>{comment}</p>
  ))

  return (
    <>
    <div>Profile Screen</div>
    <button onClick={() => dispatch(setScreen("home"))}>Home</button>
    <div>{listComments}</div>
    <button onClick={() => dispatch(setModalVisible(true))}>Add Comment</button>
    {app.modalVisible && (
      <Modal>
        <CommentForm/>
      </Modal>
    )}
    </>
  )
}

export default Profile;