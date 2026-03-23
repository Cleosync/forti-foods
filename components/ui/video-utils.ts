// ── Helper: Extract YouTube video ID from URL ──────────────────────────────
export function getYouTubeVideoId(
  url: string | null | undefined
): string | null {
  if (!url) return null;
  const youtubeRegex =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
  const match = url.match(youtubeRegex);
  return match ? match[1] : null;
}

// ── Helper: Extract Vimeo video ID from URL ────────────────────────────────
export function getVimeoVideoId(
  url: string | null | undefined
): string | null {
  if (!url) return null;
  const vimeoRegex = /(?:vimeo\.com\/)(\d+)/;
  const match = url.match(vimeoRegex);
  return match ? match[1] : null;
}
