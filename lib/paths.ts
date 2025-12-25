/**
 * Get the correct path with basePath for static assets
 * In production (GitHub Pages), basePath is '/Resume'
 * In development, basePath is empty
 */
export function getAssetPath(path: string): string {
  // Use NEXT_PUBLIC_BASE_PATH which is available in browser
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Return path with basePath
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}

