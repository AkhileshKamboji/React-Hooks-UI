import { types } from "mobx-state-tree";

export const TempModel = types
  .model({
    tempComment: types.maybeNull(types.string),
    showEditComment: false,
    showCreateBlog: false,
  })
  .actions((self) => ({
    setTempComment(tempComment: string | null) {
      self.tempComment = tempComment;
    },
    setShowEditComment(bool: boolean) {
      self.showEditComment = bool;
    },
    setShowCreateBlog(bool: boolean) {
      self.showCreateBlog = bool;
    },
  }));

export const TempView = TempModel.create({});
