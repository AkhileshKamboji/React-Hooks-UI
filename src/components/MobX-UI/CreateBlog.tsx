import {
  Dialog,
  TextAreaInputField,
  TextInputField,
} from "@surya-digital/leo-reactjs-material-ui";
import { TempView } from "../../MobX/TempStore";
import { useState } from "react";
import { Box } from "@mui/material";
import { BlogView } from "../../MobX/BlogStore";

export const CreateBlogDialog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  return (
    <Dialog
      open={TempView.showCreateBlog}
      onClose={() => {
        TempView.setShowCreateBlog(false);
      }}
      title="Add a Blog"
      primaryButtonText="Add"
      secondaryButtonText="Cancel"
      onPrimaryButtonClick={(): Promise<void> => {
        return new Promise((resolve) => {
          if (blogBody !== "" && blogTitle !== "") {
            resolve(BlogView.addBlog(blogBody, blogTitle));
            TempView.setShowCreateBlog(false);
          } else {
            resolve(alert("Cant create blogs with empty body or title"));
          }
        });
      }}
      onSecondaryButtonClick={(): void => {
        TempView.setShowCreateBlog(false);
      }}
      disableBackdropClick={false}
      isCloseIconPresent={true}
    >
      <Box>
        <TextInputField
          name="Blog Title"
          value={blogTitle}
          type="text"
          onTextChange={(value) => {
            setBlogTitle(value);
          }}
          placeholder="Blog Title"
          label="Blog Title"
          style={{ margin: "8px" }}
        />
        <TextAreaInputField
          name="Blog Body"
          value={blogBody}
          onTextChange={(value) => {
            setBlogBody(value);
          }}
          placeholder="Blog Body"
          label="Blog Body"
          style={{ margin: "8px" }}
        />
      </Box>
    </Dialog>
  );
};
