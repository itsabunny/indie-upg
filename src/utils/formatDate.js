function formatDate(iso) {
  try {
    const d = new Date(iso ?? Date.now());
    // sv-SE ger t.ex. 15 sep. 2025 19:42
    return new Intl.DateTimeFormat("sv-SE", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(d);
  } catch {
    return "";
  }
}

export default formatDate