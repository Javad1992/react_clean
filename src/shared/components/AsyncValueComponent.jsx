const AsyncValueComponent = ({ state, children }) => {
  return (
    state.isLoaing ? <div>Loading</div> :
      state.isError ? <div>{state.error}</div> :
        children(state.data)
  )
}

export default AsyncValueComponent;