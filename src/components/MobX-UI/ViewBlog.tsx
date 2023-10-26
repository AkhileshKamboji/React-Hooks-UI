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
import { useTranslation } from "react-i18next";

const ViewBlog = observer(() => {
  const blogData: Instance<typeof BlogModel> = BlogView.selectedBlog;
  const typography = useTypography();
  const { t } = useTranslation();
  return (
    <Box>
      <Box style={{ margin: "32px" }}>
        <Typography sx={{ ...typography.h3, textAlign: "center" }}>
          {blogData.title}
        </Typography>
        <Typography sx={{ ...typography.body1, marginBottom: "16px" }}>
          {blogData.body}
        </Typography>
        <Typography sx={{ ...typography.sh1 }}>{t("Comments")}</Typography>
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
            name={t("NewComment")}
            value={TempView.tempComment === null ? "" : TempView.tempComment}
            type="text"
            onTextChange={(value) => {
              TempView.setTempComment(value);
            }}
            label={t("NewComment")}
            style={{ margin: "8px" }}
          />
          <Button
            name={t("NewComment")}
            size="medium"
            title={t("Add")}
            onClick={() => {
              if (
                TempView.tempComment !== "" &&
                TempView.tempComment !== null
              ) {
                blogData.addComment(TempView.tempComment);
                TempView.setTempComment(null);
              } else alert(t("EmptyCommentAlert"));
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
