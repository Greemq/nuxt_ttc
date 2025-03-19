export default defineEventHandler(async (event) => {
  try {
    return await event.next()
  } catch (error) {
    console.error('Server error:', error)
    return { error: 'Internal Server Error' }
  }
})
