'use client';
import { useState, useEffect } from 'react';
import { getSiteContent, setSiteContent, defaultContent } from './siteContent';

export function useSiteContent() {
  // Use defaultContent for initial render so server and client HTML match
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    // After hydration, apply any localStorage overrides
    setContent(getSiteContent());

    // Fetch the latest published content from the server (Vercel KV)
    fetch('/api/content')
      .then((r) => r.json())
      .then((data) => {
        setSiteContent(data);
        setContent(data);
      })
      .catch(() => {});

    const handler = () => setContent(getSiteContent());
    window.addEventListener('ntl-content-updated', handler);
    return () => window.removeEventListener('ntl-content-updated', handler);
  }, []);

  return content;
}
