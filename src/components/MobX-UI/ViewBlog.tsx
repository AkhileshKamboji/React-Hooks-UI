import { BlogModel, BlogView } from "../../MobX/BlogStore";
import { TempView } from "../../MobX/TempStore";
import { Instance } from "mobx-state-tree";
import {
  Button,
  TextInputField,
  useTypography,
} from "@surya-digital/leo-reactjs-material-ui";
import { observer } from "mobx-react";
import EditIcon from "@mui/icons-material/Edit";
import { EditCommentDialog } from "./EditComment";
import { Box, List, ListItem, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ViewBlog = observer(() => {
  const blogData: Instance<typeof BlogModel> = BlogView.selectedBlog;
  const typography = useTypography();
  return (
    <Box>
      <Box style={{ margin: "32px" }}>
        <Typography sx={{ ...typography.h3, textAlign: "center" }}>
          {blogData.title}
        </Typography>
        <Typography sx={{ ...typography.body1, marginBottom: "16px" }}>
          {blogData.body}
        </Typography>
        <Typography sx={{ ...typography.sh1 }}>Comments</Typography>
        <List>
          {blogData.comments.map((comment, index) => {
            return (
              <ListItem key={index}>
                <FiberManualRecordIcon style={{ padding: "4px" }} />
                <Typography
                  sx={{ ...typography.sh3, fontWeight: 400, display: "inline" }}
                >
                  {comment}
                </Typography>{" "}
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
              </ListItem>
            );
          })}
        </List>
        <Box>
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
        </Box>
      </Box>
    </Box>
  );
});

export default ViewBlog;
