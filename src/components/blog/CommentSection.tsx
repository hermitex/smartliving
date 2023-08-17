import React from "react";
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import { Comment as CommentIcon } from "@mui/icons-material";

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [newComment, setNewComment] = React.useState("");
  const [commentList, setCommentList] = React.useState<Comment[]>(comments);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj: Comment = {
        id: Date.now(),
        author: "User", // You can replace this with the actual username
        content: newComment,
        timestamp: new Date().toLocaleString(),
      };

      setCommentList([...commentList, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <Box sx={{ paddingTop: "2rem" }}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      <Paper
        elevation={3}
        sx={{ padding: "1rem", maxHeight: "50vh", overflowX: "auto" }}
      >
        <List>
          {commentList.map((comment) => (
            <React.Fragment key={comment.id}>
              <ListItem alignItems="flex-start">
                <Avatar>
                  <CommentIcon />
                </Avatar>
                <ListItemText
                  primary={comment.author}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {comment.timestamp}
                      </Typography>
                      <Typography variant="body2">{comment.content}</Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <Box sx={{ marginTop: "1rem" }}>
        <Typography variant="h6" gutterBottom>
          Leave a Comment
        </Typography>
        <TextField
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          sx={{ backgroundColor: "#fff" }}
        />
        <Button
          variant="contained"
          color="warning"
          sx={{ marginTop: "1rem" }}
          onClick={handleAddComment}
        >
          Post Comment
        </Button>
      </Box>
    </Box>
  );
};

export default CommentSection;
