import { autorun } from "mobx";
import { types } from "mobx-state-tree";
import { Instance } from "mobx-state-tree";

const BlogModel = types
  .model({
    id: types.identifierNumber,
    body: types.string,
    title: types.string,
    comments: types.array(types.string),
    tempComment: types.maybeNull(types.string),
  })
  .actions((self) => ({
    setTitle(title: string) {
      self.title = title;
    },
    addComment(comment: string) {
      self.comments.push(comment);
    },
    setTempComment(tempComment: string | null) {
      self.tempComment = tempComment;
    },
  }));

const BlogsController = types
  .model({
    blogs: types.array(BlogModel),
    selectedBlog: types.reference(BlogModel),
  })
  .views((self) => ({
    get numberOfBlogs() {
      return self.blogs.length;
    },
  }))
  .actions((self) => ({
    addBlog(body: string, title: string) {
      self.blogs.push(
        BlogModel.create({
          id: self.blogs.length + 1,
          body,
          title,
          comments: [],
        })
      );
    },
    setSelectedBlog(blog: Instance<typeof BlogModel>) {
      self.selectedBlog = blog;
    },
  }));

const BlogView = BlogsController.create({
  blogs: [
    {
      id: 1,
      body: `The Israel Defence Forces have posted an update to X saying: “During the night, fighter jets attacked over a hundred operational targets of the terrorist organizations in the Gaza Strip, destroying tunnel shafts, munitions warehouses and dozens of operational headquarters. During the attacks, the IDF and the Shin Bet eliminated a terrorist who was in the naval force of the terrorist organization Hamas, the terrorist took part in the murderous terrorist operations in the Gaza Strip.”The IDF said that “a terrorist squad associated with the terrorist organization’s air force that planned to launch missiles at an aircraft was foiled”.People at the scene of destruction after an Israeli attack on the Greek Orthodox church in Gaza City, 20 October 2023.People at the scene of destruction after an Israeli attack on the Greek Orthodox church in Gaza City, 20 October 2023. Photograph: Anadolu Agency/Anadolu/Getty Images Updated at 09.55 BST`,
      title: "Israel-Hamas war",
      comments: ["first"],
      tempComment: "",
    },
  ],
  selectedBlog: 1,
});

autorun(() => {
  console.log("There are ", BlogView.numberOfBlogs, " blogs");
});

export { BlogModel, BlogView, BlogsController };
