import { markdownToHTML } from "@/data/blog";

interface MediumArticle {
  title: string;
  publishDate: string;
  summary?: string;
  content: string;
  image?: string;
  tags?: string[];
  author: string;
  slug: string;
}

interface MediumArticle {
  title: string;
  publishDate: string;
  summary?: string;
  content: string;
  image?: string;
  tags?: string[];
  author: string;
  slug: string;
}

// Extract content from Medium markup
function extractMediumContent(markup: string): string {
  // Remove specific Medium-related formatting and extract clean content
  let content = markup
    // Remove medium-specific image elements
    .replace(/<img[^>]*>/g, '')
    // Remove special characters and whitespace
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    // Normalize line breaks
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return content;
}

// Extract title from URL
function extractTitleFromUrl(url: string): string {
  const match = url.match(/\/([^\/]+)$/);
  return match ? match[1] : '';
}

// Generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Format date for frontmatter
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
}

// Extract HTML content from Medium page
async function extractContentFromMediumPage(url: string): Promise<{
  title: string;
  content: string;
  publishDate: string;
  author: string;
  image?: string;
} | null> {
  try {
    // Use WebFetch to get the page content
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    // Create a temporary DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Extract title
    const title = doc.querySelector('h1')?.textContent?.trim() ||
                  doc.querySelector('title')?.textContent?.replace(' - Medium', '').trim() ||
                  'Untitled';

    // Extract publish date
    const publishDateElement = doc.querySelector('time');
    const publishDate = publishDateElement?.getAttribute('datetime') ||
                       new Date().toISOString().split('T')[0];

    // Extract author
    const author = doc.querySelector('[data-testid="authorName"]')?.textContent?.trim() ||
                   doc.querySelector('.pw-author-name')?.textContent?.trim() ||
                   'Sanjay Sargam';

    // Extract featured image
    const imageElement = doc.querySelector('img');
    const image = imageElement?.src || undefined;

    // Extract content from article body
    const articleBody = doc.querySelector('article') || doc.querySelector('[data-testid="postArticle"]');
    const paragraphs = articleBody?.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, code') || [];

    let content = '';
    paragraphs.forEach(element => {
      const tagName = element.tagName.toLowerCase();

      if (tagName === 'h1') {
        content += `# ${element.textContent}\n\n`;
      } else if (tagName === 'h2') {
        content += `## ${element.textContent}\n\n`;
      } else if (tagName === 'h3') {
        content += `### ${element.textContent}\n\n`;
      } else if (tagName === 'h4') {
        content += `#### ${element.textContent}\n\n`;
      } else if (tagName === 'h5') {
        content += `##### ${element.textContent}\n\n`;
      } else if (tagName === 'h6') {
        content += `###### ${element.textContent}\n\n`;
      } else if (tagName === 'p') {
        content += `${element.textContent}\n\n`;
      } else if (tagName === 'ul' || tagName === 'ol') {
        const listItems = element.querySelectorAll('li');
        listItems.forEach((li, index) => {
          const prefix = tagName === 'ul' ? '- ' : `${index + 1}. `;
          content += `${prefix}${li.textContent}\n`;
        });
        content += '\n';
      } else if (tagName === 'blockquote') {
        content += `> ${element.textContent}\n\n`;
      } else if (tagName === 'pre') {
        const code = element.querySelector('code');
        if (code) {
          const language = element.className.includes('language-')
            ? element.className.split('language-')[1]
            : '';
          content += `\`\`\`${language}\n${code.textContent}\n\`\`\`\n\n`;
        }
      } else if (tagName === 'code') {
        // Inline code
        content += `\`${element.textContent}\``;
      }
    });

    // Clean up the content
    content = extractMediumContent(content);

    return {
      title,
      content,
      publishDate,
      author,
      image,
    };
  } catch (error) {
    console.error('Error extracting Medium content:', error);
    throw new Error(`Failed to extract content from Medium page: ${error}`);
  }
}

// Fetch article from Medium
async function fetchMediumArticle(url: string): Promise<MediumArticle | null> {
  try {
    console.log(`Fetching article from: ${url}`);

    const extracted = await extractContentFromMediumPage(url);
    if (!extracted) {
      throw new Error('Could not extract content from page');
    }

    // Generate summary from first paragraph
    const paragraphs = extracted.content.split('\n').filter(p => p.trim());
    const summary = paragraphs.length > 0
      ? paragraphs[0].substring(0, 200) + '...'
      : extracted.title.substring(0, 200) + '...';

    return {
      title: extracted.title,
      publishDate: extracted.publishDate,
      summary,
      content: extracted.content,
      image: extracted.image,
      tags: [],
      author: extracted.author,
      slug: generateSlug(extracted.title),
    };
  } catch (error) {
    console.error('Error fetching Medium article:', error);
    throw new Error(`Failed to fetch article from Medium: ${error}`);
  }
}

// Convert Medium article to MDX format
export function mediumToMDX(article: MediumArticle): string {
  const frontmatter = {
    title: `"${article.title.replace(/"/g, '\\"')}"`,
    publishedAt: `"${article.publishDate}"`,
    summary: `"${article.summary?.replace(/"/g, '\\"') || ''}"`,
    image: article.image ? `"${article.image}"` : undefined,
    author: `"${article.author}"`,
    tags: article.tags ? JSON.stringify(article.tags) : undefined,
  };

  const frontmatterString = Object.entries(frontmatter)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n  ');

  return `---
${frontmatterString}
---

${article.content}`;
}

// Fetch and save Medium articles
export async function fetchAndSaveMediumArticles(urls: string[]): Promise<string[]> {
  const slugs: string[] = [];

  for (const url of urls) {
    try {
      console.log(`Fetching article from: ${url}`);
      const article = await fetchMediumArticle(url);

      if (article) {
        const mdxContent = mediumToMDX(article);
        const fileName = `medium-${article.slug}.mdx`;
        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(process.cwd(), 'content', fileName);

        // Ensure content directory exists
        if (!fs.existsSync('content')) {
          fs.mkdirSync('content', { recursive: true });
        }

        // Write to file
        fs.writeFileSync(filePath, mdxContent, 'utf-8');

        console.log(`Saved article: ${article.title}`);
        slugs.push(article.slug);
      }
    } catch (error) {
      console.error(`Failed to process URL ${url}:`, error);
    }
  }

  return slugs;
}

// Get all Medium articles (for routing)
export async function getMediumArticles(): Promise<MediumArticle[]> {
  const urls = [
    'https://medium.com/@sanjaysargam/from-first-pr-to-mentor-my-gsoc-journey-and-a-friendly-guide-to-open-source-de1691cf01ae',
    'https://medium.com/@sanjaysargam/things-i-wish-i-knew-when-i-was-in-college-df6c78d91ab7',
    'https://medium.com/@sanjaysargam/being-cringe-is-the-new-skill-76c6337fc831',
    'https://medium.com/@sanjaysargam/using-ai-in-my-terminal-for-free-ce3a8ce05cb6',
  ];

  const articles: MediumArticle[] = [];

  for (const url of urls) {
    try {
      const article = await fetchMediumArticle(url);
      if (article) {
        articles.push(article);
      }
    } catch (error) {
      console.error(`Failed to fetch ${url}:`, error);
    }
  }

  return articles;
}