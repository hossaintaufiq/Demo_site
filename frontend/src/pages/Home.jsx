import cloneHtml from '../../gethyped_source.html?raw'

function Home() {
  return (
    <div className="min-h-screen w-full bg-[#faf4ec]">
      <iframe
        title="Get Hyped clone"
        srcDoc={cloneHtml}
        className="block h-screen w-full border-0 bg-[#faf4ec]"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  )
}

export default Home
