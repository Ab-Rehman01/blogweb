import { getAuthor } from "@/lib/firebase/author/read_server";
import { getCategory } from "@/lib/firebase/category/read_server";
import { getAllPosts } from "@/lib/firebase/post/read_server";
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function PostListView() {
    const posts = await getAllPosts();
    if (!posts) {
        return (
            <div>
                <h3>Posts Not Available!</h3>
            </div>
        );
    }
    return (
        
        <section className="p-4 sm:p-10">
    <h1 className="text-center font-bold text-3xl sm:text-4xl mb-8 text-black-600 outline-yellow"> This blog page develop by nextjs with firebase authantication and store data Only admin can post, edit, and delete.  </h1>    
    {/* Responsive Grid: Adjust the number of columns based on screen size */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {posts?.map((post, key) => (
            <PostCard post={post} key={key} />
        ))}
    </div>
</section>


    );
}

export function PostCard({ post }) {
    return (
        <Link href={`/posts/${post?.id}`}>
<div className="flex flex-col gap-3 p-1 rounded bg-white shadow-md transition-transform transform hover:scale-105 h-full">
<div className="relative flex-grow">
                    <div className="absolute flex justify-end w-full p-3">
                        <CategoryCard categoryId={post?.categoryId} />
                    </div>
                    <img
                        className="h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] w-full object-cover rounded-t"
                        src={post?.imageURL}
                        alt={post?.title || 'Post image'}
                    />
                </div>
                <h6 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                    {post?.title}
                    </h6>
                <div className="flex justify-between items-center">
                    <AuthorCard authorId={post?.authorId} />
                    <h5 className="text-xs sm:text-sm md:text-base text-gray-500">
                        {post?.timestamp?.toDate()?.toLocaleDateString()}
                    </h5>
                </div>
            </div>
        </Link>
    );
}

async function AuthorCard({ authorId }) {
    const author = await getAuthor(authorId);
    return (
        <div className="flex gap-2 items-center sm:gap-4">
            <img
                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full object-cover"
                src={author?.photoURL}
                alt={author?.name || 'Author'}
            />
            <h6 className="text-sm sm:text-base lg:text-lg text-gray-500">{author?.name}</h6>
        </div>
    );
}

async function CategoryCard({ categoryId }) {
    const category = await getCategory(categoryId);
    return (
        <div className="flex gap-2 items-center bg-white bg-opacity-60 rounded-full px-2 py-1">
            <img className="h-4 w-4 rounded-full object-cover" src={category?.iconURL} alt={category?.name || 'Category'} />
            <h4 className="text-xs text-gray-500">{category?.name}</h4>
        </div>
    );
}
