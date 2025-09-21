import { useEffect } from "react";
import { useArticlesStore } from "../store/articlesStore";
import { toast } from "react-hot-toast";
import { fetchApiArticles } from "../api/dummyJson";

const useArticles = () => {
  const {
    apiLoaded,
    apiArticles,
    myArticles,
    setApiArticles,
    deleteMyArticle,
  } = useArticlesStore();

  useEffect(() => {
    if (!apiLoaded) {
      fetchApiArticles()
        .then(setApiArticles)
        .catch(() => toast.error("Unable to fetch API-articles"));
    }
  }, [apiLoaded, setApiArticles]);

  const handleDelete = (id) => {
    deleteMyArticle(id);
    toast("Article deleted", { icon: "🗑️" });
  }; return {apiArticles, myArticles, handleDelete}
};

export default useArticles
