import { useParams, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useArticles } from '../store/articlesStore';

export default function ArticleDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const { getById, reactTo } = useArticles();
  const article = getById(id);

  if (!article) {
    return (
      <Stack spacing={2}>
        <Typography variant="h6">Artikeln hittades inte</Typography>
        <Button onClick={() => nav('/')}>Tillbaka</Button>
      </Stack>
    );
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4">{article.title}</Typography>
        <Typography variant="body1" sx={{ mt: 2, whiteSpace: 'pre-wrap' }}>
          {article.body}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 3 }} alignItems="center">
          <Button variant="contained" onClick={() => reactTo(article.id, 'like')}>👍 Gilla</Button>
          <Button variant="outlined" onClick={() => reactTo(article.id, 'dislike')}>👎 Ogilla</Button>
          <Typography variant="body2" sx={{ ml: 1 }}>
            👍 {article.likes ?? 0} · 👎 {article.dislikes ?? 0}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
