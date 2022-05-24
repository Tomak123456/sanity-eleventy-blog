export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '628c7b5b54d7e53b85895b8f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-9hxq3rdk',
                  apiId: '88f316d0-2258-43d3-b8bb-ee740428a9ac'
                },
                {
                  buildHookId: '628c7b5b90f2a9396cb36668',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-o5gip5za',
                  apiId: '94836a6a-f0ba-46b2-8739-d2094aea8992'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tomak123456/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-o5gip5za.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
