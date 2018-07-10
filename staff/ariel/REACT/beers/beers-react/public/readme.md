- Cada cerveza debe tener su link a BeerDetail con esa cerveza (this.props.match.params)

- Hacer el componente header y mostrar/ocultar el link "Go to list" (this.props.location)

- En BeerList añadimos paginación: un select con el número de cervezas por página y links a cada página.

- En BeerList añadimos un input para escribir un texto y al submit vamos al path /search-beer/:search. Con SearchBeer como un componente nuevo. HINT: Reunitilizar BeerList si le pasamos el listado por props.
