import {
  Dialog,
  TextAreaInputField,
  TextInputField,
} from "@surya-digital/leo-reactjs-material-ui";
import { TempView } from "../../MobX/TempStore";
import { useState } from "react";
import { Box } from "@mui/material";
import { BlogView } from "../../MobX/BlogStore";
import { useTranslation } from "react-i18next";

export const CreateBlogDialog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const { t } = useTranslation();
  return (
    <Dialog
      open={TempView.showCreateBlog}
      onClose={() => {
        TempView.setShowCreateBlog(false);
      }}
      title={t("AddBlog")}
      primaryButtonText={t("Add")}
      secondaryButtonText={t("Cancel")}
      onPrimaryButtonClick={(): Promise<void> => {
        return new Promise((resolve) => {
          if (blogBody !== "" && blogTitle !== "") {
            resolve(BlogView.addBlog(blogBody, blogTitle));
            TempView.setShowCreateBlog(false);
          } else {
            resolve(alert(t("EmptyBlogAlert")));
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
          name={t("BlogTitle")}
          value={blogTitle}
          type="text"
          onTextChange={(value) => {
            setBlogTitle(value);
          }}
          placeholder={t("BlogTitle")}
          label={t("BlogTitle")}
          style={{ margin: "8px" }}
        />
        <TextAreaInputField
          name={t("BlogBody")}
          value={blogBody}
          onTextChange={(value) => {
            setBlogBody(value);
          }}
          placeholder={t("BlogBody")}
          label={t("BlogBody")}
          style={{ margin: "8px" }}
        />
      </Box>
    </Dialog>
  );
};
