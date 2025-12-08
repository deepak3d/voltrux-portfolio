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
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'Home', link: '/' },
						{ label: 'Architecture', link: '/overview/architecture' },
						{ label: 'Tech Stack', link: '/overview/tech-stack' },
					],
				},
				{
					label: 'Component Library',
					items: [
						{ label: 'Test Drive Form', link: '/components/test-drive' },
						{ label: 'Truck Lister', link: '/components/truck-lister' },
						{ label: '3D Configurator', link: '/components/3d-configurator' },
					],
				},
				{
					label: 'Backend Logic',
					items: [
						{ label: 'Sling Models', link: '/backend-logic/sling-models' },
						{ label: 'Servlets', link: '/backend-logic/servlets' },
						{ label: 'OSGi Configs', link: '/backend-logic/osgi-configs' },
					],
				},
				{
					label: 'DevOps & Workflow',
					items: [
						{ label: 'CI/CD Pipeline', link: '/devops/ci-cd-pipeline' },
						{ label: 'Git Strategy', link: '/devops/git-strategy' },
					],
				},
			],
		}),
		mermaid(), // Add astro-mermaid integration here
	],
});
