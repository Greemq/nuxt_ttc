export const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/platform',
        component: () => import('@/views/platform/index.vue'),
        children: [
            {
                path: 'assistant',
                name: 'createAssistant',
                component: () => import('@/views/platform/assistants/create.vue')
            }
        ]
    }
];
