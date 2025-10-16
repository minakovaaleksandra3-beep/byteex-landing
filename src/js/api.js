export async function fetchContent() {
  // This simulates a Headless CMS
  // In production, this would be: fetch('https://your-strapi.com/api/homepage')
  const response = await fetch('/byteex-landing/data/content.json');
  if (!response.ok) {
    throw new Error('Failed to fetch content');
  }
  return response.json();
}