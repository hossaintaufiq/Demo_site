import cloneHtml from '../../gethyped_source.html?raw'

function Home() {
  return (
    <div className="h-screen w-full overflow-hidden bg-[#faf4ec]">
      <iframe
        title="Get Hyped clone"
        srcDoc={cloneHtml}
        className="h-full w-full border-0"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  )
}

export default Home
