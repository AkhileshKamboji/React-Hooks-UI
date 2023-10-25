import { BlogModel, BlogView } from "../../MobX/BlogStore";
import { Instance } from "mobx-state-tree";
import { Button, TextInputField } from "@surya-digital/leo-reactjs-material-ui";
import { observer } from "mobx-react";

const ViewBlog = observer(() => {
  const blogData: Instance<typeof BlogModel> = BlogView.selectedBlog;
  return (
    <div>
      <div style={{ margin: "32px" }}>
        <h1 style={{ textAlign: "center" }}>{blogData.title}</h1>
        <p>{blogData.body}</p>
        <h4>Comments</h4>
        <ul>
          {blogData.comments.map((comment) => {
            return <li key={comment}>{comment}</li>;
          })}
        </ul>
        <div>
          <TextInputField
            name="adding a comment"
            value={blogData.tempComment === null ? "" : blogData.tempComment}
            type="text"
            onTextChange={(value) => {
              blogData.setTempComment(value);
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
                blogData.tempComment !== "" &&
                blogData.tempComment !== null
              ) {
                blogData.addComment(blogData.tempComment);
                blogData.setTempComment(null);
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
