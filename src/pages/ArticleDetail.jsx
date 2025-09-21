import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useArticlesStore } from "../store/articlesStore";
import formatDate from "../utils/formatDate";

export default function ArticleDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const { getById, reactTo } = useArticlesStore();
  const article = getById(id);

  if (!article) {
    return (
      <Stack spacing={2}>
        <Typography variant="h6">Article not found</Typography>
        <Button onClick={() => nav("/")}>Back</Button>
      </Stack>
    );
  }

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={8}>
        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link component={RouterLink} underline="hover" color="inherit" to="/">
            Hem
          </Link>
          <Typography color="text.primary">{article.title}</Typography>
        </Breadcrumbs>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4">{article.title}</Typography>

            {/* Meta-line: date + source */}
            <Typography variant="caption" sx={{ display: "block", mt: 1, opacity: 0.8 }}>
              Published: {formatDate(article.createdAt)} ·{" "}
              {article.source === "local" ? "My article" : "API-article"}
            </Typography>

            <Typography variant="body1" sx={{ mt: 2, whiteSpace: "pre-wrap" }}>
              {article.body}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 3 }} alignItems="center">
              <Button variant="contained" onClick={() => reactTo(article.id, "like")}>
                👍 Like
              </Button>
              <Button variant="outlined" onClick={() => reactTo(article.id, "dislike")}>
                👎 Dislike
              </Button>
              <Typography variant="body2" sx={{ ml: 1 }}>
                👍 {article.likes ?? 0} · 👎 {article.dislikes ?? 0}
              </Typography>
            </Stack>

            <Button sx={{ mt: 3 }} onClick={() => nav("/")}>
              ← Back
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
