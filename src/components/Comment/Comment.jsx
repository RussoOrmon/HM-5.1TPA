import "./comment.css"
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";

function Comment(props) {
   
  return (
   <div className="Comment">
   <CommentWrapper className="comment-first">
      <CommentUserInfo avatarUrl={props.author.avatarUrl}
                            name={props.author.name} />

     
   </CommentWrapper>

<CommentWrapper className="comment-second">
 
      <div className="Comment-text">{props.text}</div>

      <CommentDate date={props.date}/>
</CommentWrapper>

   </div>
   
 );

}
export default Comment;
