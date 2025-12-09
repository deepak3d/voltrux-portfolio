// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid'; // Import astro-mermaid
import mdx from '@astrojs/mdx';
import { astroExpressiveCode } from 'astro-expressive-code';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	
	integrations: [
		react(),
		astroExpressiveCode({
			themes: ['github-dark', 'github-light'],
		}),
		starlight({
			title: 'Voltrux Motors Engineering',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/deepak3d/Voltrux' },
				{ icon: 'external', label: 'Live Site', href: 'https://voltrux-portfolio.vercel.app/' }
			],
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/voltrux.css',
				'./src/styles/header-preview.css',
				'./src/styles/footer-preview.css',
				'./src/styles/article-list-preview.css',
				'./src/styles/testdrive-form-preview.css',
				'./src/styles/animation.css',
				'./src/styles/css-conflict-fixes.css',
			],
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'Home', slug: 'index' },
						{ label: 'Architecture', slug: 'overview/architecture' },
						{ label: 'Tech Stack', slug: 'overview/tech-stack' },
					],
				},
				{
					label: 'Guides',
					items: [{ label: 'Live Previews', slug: 'guides/live-previews' }],
				},
				{
					label: 'Component Library',
					items: [
						{ label: 'Component Catalog', slug: 'components/component-catalog' },
						{ label: 'Article List', slug: 'components/article-list' },
						{ label: 'Header', slug: 'components/header' },
						{ label: 'Footer', slug: 'components/footer' },
						{ label: 'Test Drive Form', slug: 'components/test-drive' },
						{ label: 'Truck Grid', slug: 'components/truck-grid' },
						{ label: '3D Configurator', slug: 'components/3d-configurator' },
					],
				},
				{
					label: 'Backend Logic',
					items: [
						{ label: 'Sling Models', slug: 'backend-logic/sling-models' },
						{ label: 'Servlets', slug: 'backend-logic/servlets' },
						{ label: 'OSGi Configs', slug: 'backend-logic/osgi-configs' },
					],
				},
				{
					label: 'DevOps & Workflow',
					items: [
						{ label: 'CI/CD Pipeline', slug: 'devops/ci-cd-pipeline' },
						{ label: 'Git Strategy', slug: 'devops/git-strategy' },
					],
				},
			],
		}),
		mdx(),
		mermaid(), // Add astro-mermaid integration here
	],
});
