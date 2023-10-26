import { observer } from "mobx-react";
import { BlogView, BlogsController } from "../../MobX/BlogStore";
import {
  Button,
  Card,
  useTypography,
} from "@surya-digital/leo-reactjs-material-ui";
import { Instance } from "mobx-state-tree";
import { useNavigate } from "react-router-dom";
import { TempView } from "../../MobX/TempStore";
import { CreateBlogDialog } from "./CreateBlog";
import { Box, Typography } from "@mui/material";

const Blog = observer(() => {
  const typography = useTypography();
  return (
    <Box style={{ margin: "32px" }}>
      <Typography sx={{ ...typography.h3, textAlign: "center" }}>
        Welcome to blogs
      </Typography>
      <BlogContainer store={BlogView} />
    </Box>
  );
});

interface BlogsProps {
  store: Instance<typeof BlogsController>;
}

const BlogContainer = observer(({ store }: BlogsProps) => {
  let navigate = useNavigate();
  const typography = useTypography();
  return (
    <Box>
      <Box
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
              <Typography
                sx={{
                  ...typography.h5,
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                sx={{
                  ...typography.body1,
                  height: "200px",
                  padding: "0px",
                  margin: "0px",
                  marginBottom: "16px",
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {blog.body}
              </Typography>
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
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
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
            TempView.setShowCreateBlog(!TempView.showCreateBlog);
            console.log(TempView.showCreateBlog);
          }}
        />
        {TempView.showCreateBlog && <CreateBlogDialog />}
      </Box>
    </Box>
  );
});

export default Blog;
