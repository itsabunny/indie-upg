import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from "prop-types";

export default function ArticleForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <Stack component="form" spacing={2}
           onSubmit={e => { e.preventDefault(); onSubmit({ title, body }); setTitle(''); setBody(''); }}>
      <TextField label="Titel" value={title} onChange={e => setTitle(e.target.value)} required />
      <TextField label="Text" value={body} onChange={e => setBody(e.target.value)} required multiline minRows={3} />
      <Button type="submit" variant="contained">Skapa artikel</Button>
    </Stack>
  );
}

ArticleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};