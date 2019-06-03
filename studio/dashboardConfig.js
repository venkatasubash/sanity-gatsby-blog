export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cf4815e6717988f233fb699',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oyy1wdw3',
                  apiId: '7c41a655-150f-4ec0-815d-d6f22ad44f31'
                },
                {
                  buildHookId: '5cf4815e3f6d57ae14f95fc3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gt53utit',
                  apiId: 'd29ae7f8-d843-48ca-9ca0-1eeccf75b719'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/venkatasubash/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gt53utit.netlify.com', category: 'apps'}
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
