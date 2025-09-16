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
        .catch(() => toast.error("Kunde inte hämta API-artiklar"));
    }
  }, [apiLoaded, setApiArticles]);

     const handleCreate = ({ title, body }) => {
     const article = {
       id: `local-${crypto.randomUUID()}`,
       title, body,
       likes: 0, dislikes: 0,
       source: 'local',
+      createdAt: new Date().toISOString(),
     };
     addMyArticle(article);
     toast.success('Artikel skapad');
   };


  const handleDelete = (id) => {
    deleteMyArticle(id);
    toast("Artikel raderad", { icon: "🗑️" });
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Skapa ny artikel
      </Typography>
      <ArticleForm onSubmit={handleCreate} />
      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" sx={{ mb: 2 }}>
        Mina artiklar
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
        API-artiklar
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
