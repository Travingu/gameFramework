const slots = ['Coming soon', 'Coming soon', 'Coming soon', 'Coming soon', 'Coming soon', 'Coming soon']

function App() {
  return (
    <>
      <header className="w-full px-8 py-8">
        <a
          href="https://travingn.dev/"
          className="text-[32px] font-bold tracking-tight text-ink transition-opacity hover:opacity-60"
        >
          Travis Nguyen
        </a>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-24">
        <div className="pt-8 pb-14 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            TRAVIS' GAMES
          </h1>
          <p className="mt-3 text-lg font-semibold text-accent">
            prototypes by Travis
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((label, i) => (
            <div
              key={i}
              className="flex aspect-4/3 flex-col items-center justify-center rounded-2xl border-[3px] border-black bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000]"
            >
              <span className="text-lg font-bold text-black">{label}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App
