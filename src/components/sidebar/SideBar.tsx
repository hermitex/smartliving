import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  List,
  ListItem,
  CardMedia,
  ListItemText,
  Divider,
} from "@mui/material";

interface BlogPost {
  title: string;
  image: string;
}

interface SideBarProps {
  recentPosts: BlogPost[];
}

const SideBar: React.FC<SideBarProps> = ({ recentPosts }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredPosts = recentPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Grid item xs={12} md={3} sx={{ position: "sticky", top: 5 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for other posts..."
        sx={{ marginBottom: "1rem", backgroundColor: "#fff" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Typography variant="h6">Recent Posts</Typography>
      <List>
        {filteredPosts.map((post, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <CardMedia
                component="img"
                height="64"
                image={post.image}
                alt={post.title}
                sx={{ marginRight: "1rem" }}
              />
              <ListItemText
                disableTypography
                primary={<Typography noWrap>{post.title}</Typography>}
              />
            </ListItem>
            {index < filteredPosts.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Grid>
  );
};

export default SideBar;
