import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { fetchApiArticles } from "../api/dummyJson";
import { useArticles } from "../store/articlesStore";
import ArticleCard from "../components/ArticleCard";
import ArticleForm from "../components/ArticleForm";

export default function Home() {
  const nav = useNavigate();
  const { apiLoaded, apiArticles, myArticles, setApiArticles, addMyArticle, deleteMyArticle } =
    useArticles();

  useEffect(() => {
    if (!apiLoaded) {
      fetchApiArticles()
        .then(setApiArticles)
        .catch(() => toast.error("Couldn't fetch API-articles"));
    }
  }, [apiLoaded, setApiArticles]);

  const handleCreate = ({ title, body }) => {
    const article = {
      id: `local-${crypto.randomUUID()}`,
      title,
      body,
      likes: 0,
      dislikes: 0,
      source: "local",
      createdAt: new Date().toISOString(), // date for my own articles
    };
    addMyArticle(article);
    toast.success("Article successfully added");
  };

  const handleDelete = (id) => {
    deleteMyArticle(id);
    toast("Article successfully deleted", { icon: "🗑️" });
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Post new article
      </Typography>
      <ArticleForm onSubmit={handleCreate} />
      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" sx={{ mb: 2 }}>
        My articles
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {myArticles.map((a) => (
          <Grid key={a.id} item xs={12} sm={6}>
            <ArticleCard
              article={a}
              onOpen={() => nav(`/article/${a.id}`)}
              onDelete={() => handleDelete(a.id)}
            />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ mb: 2 }}>
        API-articles
      </Typography>
      <Grid container spacing={2}>
        {apiArticles.map((a) => (
          <Grid key={a.id} item xs={12} sm={6}>
            <ArticleCard article={a} onOpen={() => nav(`/article/${a.id}`)} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}