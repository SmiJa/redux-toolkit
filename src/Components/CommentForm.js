import { useState } from "react";
import { useDispatch } from "react-redux"
import { setModalVisible } from "../Utils/appSlice"
import { addComment } from "../Utils/commentSlice";

function CommentForm() {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addComment(newComment))
    dispatch(setModalVisible(false))
  }

  return (
    <>
      <div>Comment Form</div>
      <textarea
        placeholder="add your comment"
        value={newComment}
        onChange={(text) => setNewComment(text.target.value)}
      ></textarea>
      <button onClick={onSubmit}>Submit</button>
    </>
  );
}

export default CommentForm;