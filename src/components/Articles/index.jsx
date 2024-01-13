
import { ArticleCard } from ".."
import { articles } from "./article-data"

export default function index() {
  return (
    <section className="w-[90%] md:w-[92%] 2xl:w-[75%] mx-auto mt-24">
      <h2 className="text-4xl text-[#fefdfb] font-normal
       leading-[43.2px]">
        Articles
      </h2>
      <p className="text-[#7a878d] text-base leading-[22.4px]
      font-light mt-5">
       I try to explain topics as best I can in writing,
       hoping that it would help someone who is trying to grasp.
      </p>
      
      <section className="mt-10 grid grid-cols-1 gap-y-8
      md:grid-cols-2 md:gap-x-5 lg:gap-x-8 xl:gap-x-14">
        {articles.map(article => <ArticleCard key={article?.id} article={article} />)}
      </section>
    </section>
  )
}
