import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Junhao Yang, a student, a software engineer and an extremely handsome men.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
