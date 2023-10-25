import { Dialog, TextInputField } from "@surya-digital/leo-reactjs-material-ui";
import { Instance } from "mobx-state-tree";
import { useState } from "react";
import { BlogModel } from "../../MobX/BlogStore";
import { TempView } from "../../MobX/TempStore";

interface EditCommentDialogInterface {
  blogData: Instance<typeof BlogModel>;
  index: number;
  comment: string;
}

export const EditCommentDialog = ({
  blogData,
  index,
  comment,
}: EditCommentDialogInterface) => {
  const [newComment, setNewComment] = useState(comment);
  return (
    <Dialog
      open={TempView.showEditComment}
      onClose={() => {
        TempView.setShowEditComment(false);
        TempView.setTempComment(null);
      }}
      title="Edit the Comment"
      primaryButtonText="Confirm"
      secondaryButtonText="Cancel"
      onPrimaryButtonClick={(): Promise<void> => {
        return new Promise((resolve) => {
          resolve(blogData.editComment(index, newComment));
          TempView.setShowEditComment(false);
          TempView.setTempComment(null);
        });
      }}
      onSecondaryButtonClick={(): void => {
        TempView.setShowEditComment(false);
        TempView.setTempComment(null);
      }}
      disableBackdropClick={false}
      isCloseIconPresent={true}
    >
      <TextInputField
        name="newComment"
        value={newComment}
        type="text"
        onTextChange={(e) => {
          setNewComment(e);
        }}
        placeholder="Edit Comment"
        label="Edit Comment"
      />
    </Dialog>
  );
};
