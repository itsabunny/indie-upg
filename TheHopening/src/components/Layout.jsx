import { useState } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import { useArticles } from "../store/articlesStore";
import { toast } from "react-hot-toast";
import ArticleForm from "./ArticleForm";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const { addMyArticle } = useArticles();

  const handleCreate = ({ title, body }) => {
    const article = {
      id: `local-${crypto.randomUUID()}`,
      title,
      body,
      likes: 0,
      dislikes: 0,
      source: "local",
      createdAt: new Date().toISOString(),
    };
    addMyArticle(article);
    toast.success("Article created");
    setOpen(false);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div">
            News page
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setOpen(true)}
          >
            New Article
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ py: 3 }}>
        <Container maxWidth="md">{children}</Container>
      </Box>

      {/* Modal to create new article */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>New Article</DialogTitle>
        <DialogContent dividers>
          <ArticleForm onSubmit={handleCreate} />
        </DialogContent>
      </Dialog>
    </>
  );
}
