// Hämtar artiklar från DummyJSON och mappar till vårt enkla format
export async function fetchApiArticles() {
  const res = await fetch('https://dummyjson.com/posts?limit=12'); // lagom lista
  const data = await res.json();

  return (data.posts ?? []).map(p => ({
    id: `api-${p.id}`,           // prefix för att skilja egna/artiklar från API
    title: p.title,
    body: p.body,
    likes: 0,
    dislikes: 0,
    source: 'api',
  }));
}
