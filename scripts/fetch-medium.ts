#!/usr/bin/env tsx

import { fetchAndSaveMediumArticles } from '../src/lib/medium-utils';

async function main() {
  try {
    const urls = [
      'https://medium.com/@sanjaysargam/from-first-pr-to-mentor-my-gsoc-journey-and-a-friendly-guide-to-open-source-de1691cf01ae',
      'https://medium.com/@sanjaysargam/things-i-wish-i-knew-when-i-was-in-college-df6c78d91ab7',
      'https://medium.com/@sanjaysargam/being-cringe-is-the-new-skill-76c6337fc831',
      'https://medium.com/@sanjaysargam/using-ai-in-my-terminal-for-free-ce3a8ce05cb6',
    ];

    console.log('Fetching Medium articles...');
    const slugs = await fetchAndSaveMediumArticles(urls);

    console.log('\n✅ Successfully fetched and saved articles:');
    slugs.forEach(slug => console.log(`  - ${slug}`));

    console.log('\n📝 Next steps:');
    console.log('1. Build your project: npm run build');
    console.log('2. Your blog posts will be automatically included in the blog section');
    console.log('3. Visit /blog to see all your posts');

  } catch (error) {
    console.error('❌ Error:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main();