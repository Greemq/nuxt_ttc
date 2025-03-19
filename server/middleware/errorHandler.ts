export default defineEventHandler(async (event) => {
    try {
        return await event.next();
    } catch (error) {
        console.error('❌ API Error:', error);

        return createError({
            statusCode: 500,
            statusMessage: 'Произошла ошибка на сервере. Попробуйте позже.',
        });
    }
});