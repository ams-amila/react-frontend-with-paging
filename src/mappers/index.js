export const mapBlogPostFormToBlogPostInput = (blogPostForm) => {
    return {
        title: blogPostForm.title,
        description: blogPostForm.description,
        content: blogPostForm.content,
        coverImage: blogPostForm.coverImage,
        category: blogPostForm.category,
        ownedSystem: 'MANUSHA_W_BRAND_BLOG',
        published: blogPostForm.published
    };
};