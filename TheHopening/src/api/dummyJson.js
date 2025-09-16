 export async function fetchApiArticles() {
   const res = await fetch('https://dummyjson.com/posts?limit=12');
   const data = await res.json();

   return (data.posts ?? []).map(p => ({
     id: `api-${p.id}`,
     title: p.title,
     body: p.body,
     likes: 0,
     dislikes: 0,
     source: 'api',
+    createdAt: new Date().toISOString(), // ger API-artiklarna ett datum
   }));
 }
