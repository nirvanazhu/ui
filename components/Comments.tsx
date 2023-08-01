import Giscus from '@giscus/react'

const Comments = () => {
  return (
    <div
      id="comments-section"
      className="mt-4 rounded border border-gray-400/30 p-4 md:-mx-4"
    >
      <Giscus
        repo="nirvanazhu/comments"
        repoId="R_kgDOHTodYA"
        category="giscus"
        categoryId="DIC_kwDOHTodYM4CPAy-"
        mapping="pathname"
        reactionsEnabled="1"
        theme="preferred_color_scheme"
        loading="lazy"
        inputPosition="top"
      />
    </div>
  )
}

export default Comments