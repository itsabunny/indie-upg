import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import useArticles from "../hooks/useArticles";

export default function Home() {
  const nav = useNavigate();
  
  const {
    apiArticles,
    myArticles,
    handleDelete,
  } = useArticles();

  return (
    <>
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
