import { create } from 'zustand';

const LS_KEY = 'myArticles-v1';

function loadLocal() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) ?? []; }
  catch { return []; }
}
function saveLocal(items) {
  localStorage.setItem(LS_KEY, JSON.stringify(items));
}

export const useArticles = create((set, get) => ({
  apiLoaded: false,
  apiArticles: [],
  myArticles: loadLocal(),

  setApiArticles: (list) => set({ apiArticles: list, apiLoaded: true }),
  addMyArticle: (article) => set(state => {
    const next = [article, ...state.myArticles];
    saveLocal(next);
    return { myArticles: next };
  }),
  deleteMyArticle: (id) => set(state => {
    const next = state.myArticles.filter(a => a.id !== id);
    saveLocal(next);
    return { myArticles: next };
  }),

  // Hämta artikel oavsett källa
  getById: (id) => {
    const { apiArticles, myArticles } = get();
    return [...myArticles, ...apiArticles].find(a => a.id === id) ?? null;
  },

  // Likes/Dislikes uppdateras endast på detaljsidan (VG-kravet)
  reactTo: (id, kind /* 'like' | 'dislike' */) => set(state => {
    const inc = (a) => {
      if (a.id !== id) return a;
      if (kind === 'like') return { ...a, likes: (a.likes ?? 0) + 1 };
      return { ...a, dislikes: (a.dislikes ?? 0) + 1 };
    };
    // API-artiklar får reageras på i state (ej i API:t)
    const apiNext = state.apiArticles.map(inc);
    const myNext = state.myArticles.map(inc);
    saveLocal(myNext);
    return { apiArticles: apiNext, myArticles: myNext };
  }),
}));
