import { observer } from "mobx-react";
import { BlogView, BlogsController } from "../../MobX/BlogStore";
import { Button, Card } from "@surya-digital/leo-reactjs-material-ui";
import { Instance } from "mobx-state-tree";

import { useNavigate } from "react-router-dom";
const Blog = observer(() => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to blogs</h1>
      <BlogContainer1 store={BlogView} />
    </div>
  );
});

interface BlogsProps {
  store: Instance<typeof BlogsController>;
}

const BlogContainer1 = observer(({ store }: BlogsProps) => {
  let navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "32px",
        }}
      >
        {store.blogs.map((blog) => {
          return (
            <Card
              key={blog.id}
              style={{
                padding: "16px",
                width: "300px",
                height: "300px",
                overflow: "hidden",
                margin: "16px",
              }}
            >
              <h2
                style={{
                  height: "30px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                {blog.title}
              </h2>
              <p
                style={{
                  height: "200px",
                  overflow: "hidden",
                  padding: "0px",
                  margin: "0px",
                  marginBottom: "16px",
                }}
              >
                {blog.body}
              </p>
              <Button
                name="view"
                title="View"
                onClick={() => {
                  BlogView.setSelectedBlog(blog);
                  navigate("/ViewBlog");
                }}
                variant="filled"
                size="medium"
                style={{
                  width: "100%",
                  backgroundColor: "blue",
                  borderRadius: "10px",
                }}
              />
            </Card>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          name="add blog"
          title="Create a blog"
          variant="filled"
          size="large"
          style={{
            backgroundColor: "blue",
            borderRadius: "10px",
            marginBottom: "32px",
          }}
          onClick={() => {
            store.addBlog(
              `The Israel Defence Forces have posted an update to X saying: “During the night, fighter jets attacked over a hundred operational targets of the terrorist organizations in the Gaza Strip, destroying tunnel shafts, munitions warehouses and dozens of operational headquarters. During the attacks, the IDF and the Shin Bet eliminated a terrorist who was in the naval force of the terrorist organization Hamas, the terrorist took part in the murderous terrorist operations in the Gaza Strip.”The IDF said that “a terrorist squad associated with the terrorist organization’s air force that planned to launch missiles at an aircraft was foiled”.People at the scene of destruction after an Israeli attack on the Greek Orthodox church in Gaza City, 20 October 2023.People at the scene of destruction after an Israeli attack on the Greek Orthodox church in Gaza City, 20 October 2023. Photograph: Anadolu Agency/Anadolu/Getty Images Updated at 09.55 BST`,
              "Israel-Hamas war"
            );
          }}
        />
      </div>
    </div>
  );
});

export default Blog;
