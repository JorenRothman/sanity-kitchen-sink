export default {
  widgets: [
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
                  buildHookId: '624ab6f6698b51274b0e0778',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-z59gsz5f',
                  apiId: 'b6e6630d-2e84-4288-a551-5d1da06be4ab'
                },
                {
                  buildHookId: '624ab6f7a5c73d031248dddd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4ep43c9n',
                  apiId: '43070d9f-e309-4e56-9633-b09c9c38ccb6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JorenRothman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4ep43c9n.netlify.app', category: 'apps'}
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
