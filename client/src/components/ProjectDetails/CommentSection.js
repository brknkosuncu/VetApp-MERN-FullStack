import React, { useState, useRef } from "react";
import { Button, CardText, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import { FaCommentDots } from "react-icons/fa";

import { commentProject } from "../../actions/projects";
import "./styles.css";
import moment from "moment";
import { Link, useHistory } from "react-router-dom";
import alertify from "alertifyjs";

const CommentSection = ({ project }) => {
  const [comments, setComments] = useState(project?.comments);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));
  const commentsRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleComment = async () => {
    const newComments = await dispatch(
      commentProject(`${user?.result?.name}: ${comment}`, project._id)
    );

    setComment("");
    setComments(newComments);
    window.location.reload(false);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const openUser = () => history.push(`/user/${project?.creator}`);

  return (
    <div>
      <div>
        <div>
          <h6 className="comments">Comments</h6>
          <hr></hr>
          {project?.comments?.map((c, i) => (
            <CardText key={i}>
              <strong className="comment">
                {<Link>{c.split(": ")[0]}</Link>}:
              </strong>
              {c.split(":")[1]}

              <CardText className={"time"}>
                <FaCommentDots />
              </CardText>
              <hr></hr>
            </CardText>
          ))}
          <div ref={commentsRef} />
        </div>

        {user?.result?.name && (
          <div style={{ width: "70%" }}>
            <h6 className="comments">Write a Comment</h6>
            <Input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              style={{ marginTop: "10px" }}
              disabled={!comment}
              color="primary"
              onClick={handleComment}
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
