import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `${title} | Logix Finance & Investment`;
  }, [title]);
}
