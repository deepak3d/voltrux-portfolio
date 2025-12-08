// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid'; // Import astro-mermaid

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Voltrux Motors Engineering',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/your-username/voltrux-motors' }],
			customCss: [
				'./src/styles/custom.css', // Link to your custom CSS file
			],
			expressiveCode: {
				themes: ['github-dark', 'github-light'],
			},
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
					label: 'Component Library',
					items: [
						{ label: 'Test Drive Form', slug: 'components/test-drive' },
						{ label: 'Truck Lister', slug: 'components/truck-lister' },
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
		mermaid(), // Add astro-mermaid integration here
	],
});
