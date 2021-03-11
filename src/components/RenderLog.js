export default RenderLog = Comp => {
  return function(props) {
    return (
      <Comp {...props}>
        this.props.children
      </Comp>
    )
  }
}