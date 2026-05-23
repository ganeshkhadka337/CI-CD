return (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<PokemonList pokemonList={pokemonList} />}
      />

      <Route
        path="/pokemon/:name"
        element={
          <PokemonPage
            pokemonList={pokemonList}
            previous={previous}
            next={next}
          />
        }
      />
    </Routes>
  </Router>
)
