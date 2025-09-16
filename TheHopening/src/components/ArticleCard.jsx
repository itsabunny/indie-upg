import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from "prop-types";

export default function ArticleCard({ article, onOpen, onDelete }) {
  const isMine = article.source === 'local';

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{article.title}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }} noWrap>
          {article.body}
        </Typography>
        <Typography variant="caption" sx={{ display:'block', mt: 1, opacity: 0.7 }}>
          {isMine ? 'Min artikel' : 'API-artikel'} · 👍 {article.likes ?? 0} · 👎 {article.dislikes ?? 0}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={1}>
          <Button size="small" onClick={onOpen}>Öppna</Button>
          {isMine && (
            <Button size="small" color="error" onClick={onDelete}>
              Radera
            </Button>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    source: PropTypes.oneOf(["local", "api"]).isRequired,
    createdAt: PropTypes.string,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
  onDelete: PropTypes.func, // only used for my own articles
};
