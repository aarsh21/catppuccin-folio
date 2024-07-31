---
title: How do I use this template ?
description: In this world it is important to have a portfolio and a blog whether you're student , working employee or retired superhuman.
date: '2024-07-30'
categories:
  - template
  - Open Source
  - svelte
published: true
---

## Why Build This Template? **(Inspiration)**

I built this portfolio template for myself and my friends to help everyone kickstart their blogging journey and showcase their skills online. As a **computer science** student, it’s almost a shame that I'm in my final year of college without a portfolio.

## Using This Template

1. **Clone the Repo:**
   [Clone this repo](https://github.com/aarsh21/aarsh-xyz). Then, navigate to the cloned repo folder on your system and remove the **.git** folder to erase all information about my commits and logs. After that, initialize your own git repository.

   ```bash
   # For Linux and Mac
   git clone https://github.com/aarsh21/catppuccin-folio portfolio
   cd portfolio
   rm -rf .git
   git init .
   # what ever node package manager you prefer eg : npm , bun , pnpm.
   bun i

   ```

2. **Open the Repo in Your Code Editor:**

   ```bash
   nvim .
   # or
   code .
   # or
   zed .
   ```

3. **Modify the Template:**

   - The template renders text dynamically from a single TypeScript file. Simply edit that file to get your portfolio up and running.

   - Update your details in [src/lib/profileDetails.ts](https://github.com/aarsh21/catppuccin-folio/blob/main/src/lib/profileDetails.ts). If you're new to JavaScript/TypeScript, I recommend using [Claude](https://claude.ai/new).

   - **Custom Link Icons:** Check out [lucide-icons](https://lucide.dev/) to add your own icons.

   Example:

   ```typescript
   import profile from '$lib/images/profile.png';
   import { Github, Mail, FileText, Linkedin, Twitch, Youtube } from 'lucide-svelte';

   export const profilePicture = profile;
   export const Name = 'Aarsh Padia';
   export const Location = 'Rajkot, Gujarat';
   export const Profession = 'Web Developer and OSS Contributor';
   export const Bio = `I'm a 20 y/o CS undergrad student. I love building things, playing games, and ricing my Arch Linux. Web development is my passion, and I live on the terminal. When I'm not coding, I'm probably losing my mind in Valorant or watching anime.`;
   export const Work = [
   	{
   		link: 'https://dcycle.design/',
   		position: 'Web Development Intern',
   		company: 'Dcycle Design Studio',
   		start_date: '06/2023',
   		end_date: '08/2023',
   		responsibilities: [
   			'Elevated organizational productivity by designing and implementing HTML/CSS templates for webpages.',
   			'Optimized user experience through enhancements in visual appeal and functionality.',
   			'Streamlined development processes, boosting efficiency by 50% for the design team.'
   		]
   	}
   ];
   export const Projects = [
   	{
   		project: 'Chat-App',
   		details: [
   			'Built full-stack applications using Next.js 14, enhancing server-side rendering and front-end development.',
   			'Gained expertise in database management with Neon DB and Prisma, handling complex queries efficiently.',
   			'Implemented real-time communication with LiveKit, mastering socket connections and data synchronization.',
   			'Ensured secure authentication using Clerk, reinforcing user identity management and app security.'
   		],
   		link: 'https://discord-clone-production-cc9a.up.railway.app/invite/e8e71148-aba9-42d2-99d5-8ab8c28acdc9'
   	},
   	{
   		project: 'Article Digester',
   		details: [
   			'Summarizes articles by extracting text from URLs, using Redux Toolkit, Vite with React, and Tailwind CSS.',
   			'Integrated Rapid API for processing and summarizing content, showcasing API integration skills.'
   		],
   		link: 'https://articledigester.netlify.app/'
   	},
   	{
   		project: 'Slime-Link',
   		details: [
   			'Created an open-source alternative to Tree Link with Svelte and Firebase for dynamic interfaces.',
   			'Ensured responsive design for seamless usability across devices.'
   		],
   		link: 'https://slime-link.vercel.app/'
   	}
   ];
   export const Links = [
   	{ name: 'GitHub', url: 'https://github.com/aarsh21', icon: Github },
   	{ name: 'Email', url: 'mailto:padiaaarsh@gmail.com', icon: Mail },
   	{ name: 'Resume', url: 'https://your-resume-link.com', icon: FileText },
   	{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/aarshpadia21/', icon: Linkedin },
   	{ name: 'Twitch', url: 'https://www.twitch.tv/weel3fps', icon: Twitch },
   	{ name: 'YouTube', url: 'https://www.youtube.com/weel3fps', icon: Youtube }
   ];
   ```

4. **Customize Code Themes:**

   For code highlighting, Shiki is used. To change code themes, modify [svelte.config.js](https://github.com/aarsh21/catppuccin-folio/blob/main/svelte.config.js). Replace **catppuccin-frappe** with your preferred theme. Shiki provides Intellisense for themes, so you don’t have to search Google for theme names. 😉

   ```javascript
   const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'catppuccin-frappe' }));
   ```

   Check out [Shiki](https://shiki.style/) for more details.

5. **Change Your Profile Picture:**

   Replace the image in [_src/lib/image/profile.png_](https://github.com/aarsh21/catppuccin-folio/blob/main/src/lib/images/profile.png) with your own image, ensuring it has the same filename and extension.

6. **Clean Up the Posts Folder:**

   Remove all files from [src/posts/](https://github.com/aarsh21/catppuccin-folio/tree/main/src/posts).

## How Do I Make This Template Entirely Mine?

1. **Customize the Color Palette:**

   - Tailwind CSS and Catppuccin colors are used. Check them out [here](https://tailwindcss.com/) and [here](https://github.com/catppuccin/catppuccin).

2. **Leverage SvelteKit:**

   - It’s easy to extend and tailor to your needs.

3. **Markdown Rendering with MDsveX:**

   - Powered by [MDsveX](https://github.com/pngwn/MDsveX).

4. **Explore Shadcn-Svelte Components:**
   - Check out [Shadcn-svelte](https://www.shadcn-svelte.com/) for amazing Svelte components.

## Conclusion

Opportunities are endless! Personally, I prefer my portfolio to be clean and minimalistic. Feel free to customize it however you like. Just make sure to give me credit or link back to the original repository. A star on GitHub would be appreciated too! ⭐️
