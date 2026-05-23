import React from 'react'
import { Link, useParams } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'
import { useApi } from './useApi'
import PokemonAbility from './PokemonAbility'
import ErrorMessage from './ErrorMessage'

const formatName = (nameWithDash) => nameWithDash.replace('-', ' ')

const PokemonPage = ({ previous, next }) => {
  const { name } = useParams()
  const { data: pokemon, error, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon/${name}`)

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <ErrorMessage error={error} />
  }

  const { type } = pokemon.types.find((type) => type.slot === 1)
  const stats = pokemon.stats.map((stat) => ({
    name: formatName(stat.stat.name),
    value: stat.base_stat
  })).reverse()
  const normalAbility = pokemon.abilities.find((ability) => !ability.is_hidden)
  const hiddenAbility = pokemon.abilities.find((ability) => ability.is_hidden === true)


