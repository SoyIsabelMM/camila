export function assetUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`;
}
