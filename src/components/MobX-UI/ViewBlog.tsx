import { BlogModel, BlogView } from "../../MobX/BlogStore";
import { TempView } from "../../MobX/TempStore";
import { Instance } from "mobx-state-tree";
import { Button, TextInputField } from "@surya-digital/leo-reactjs-material-ui";
import { observer } from "mobx-react";
import EditIcon from "@mui/icons-material/Edit";
import { EditCommentDialog } from "./EditComment";

const ViewBlog = observer(() => {
  const blogData: Instance<typeof BlogModel> = BlogView.selectedBlog;
  return (
    <div>
      <div style={{ margin: "32px" }}>
        <h1 style={{ textAlign: "center" }}>{blogData.title}</h1>
        <p>{blogData.body}</p>
        <h4>Comments</h4>
        <ul>
          {blogData.comments.map((comment, index) => {
            return (
              <li key={index}>
                <p style={{ display: "inline" }}>{comment}</p>{" "}
                <EditIcon
                  onClick={() => {
                    TempView.setShowEditComment(!TempView.showEditComment);
                  }}
                />
                {TempView.showEditComment && (
                  <EditCommentDialog
                    blogData={blogData}
                    index={index}
                    comment={comment}
                  />
                )}
              </li>
            );
          })}
        </ul>
        <div>
          <TextInputField
            name="adding a comment"
            value={TempView.tempComment === null ? "" : TempView.tempComment}
            type="text"
            onTextChange={(value) => {
              TempView.setTempComment(value);
            }}
            label="New comment..."
            style={{ margin: "8px" }}
          />
          <Button
            name="add comment"
            size="medium"
            title="Add"
            onClick={() => {
              if (
                TempView.tempComment !== "" &&
                TempView.tempComment !== null
              ) {
                blogData.addComment(TempView.tempComment);
                TempView.setTempComment(null);
              } else alert("Please enter something!");
            }}
            variant="filled"
            style={{ margin: "8px" }}
          />
        </div>
      </div>
    </div>
  );
});

export default ViewBlog;
