const obj1 = {prop1: "pr1"};
const obj2 = {prop2: "pr2"};

console.log("--------- ANTES --------")
console.log(obj1)
console.log(obj2)

// IMPORTANT!!!
// copia el objeto de la derecha dentro del de la izq, 
// sustituyendo las keys comunes de ambos objetos 
// con los valores del objeto de la derecha
const obj3 = Object.assign(obj1, obj2);

obj3.prop1 = "obj3";

console.log("--------- DESPUES --------")
console.log(obj1)
console.log(obj2)
console.log(obj3)

// output:
// ------ ANTES --------
// { prop1: 'pr1' }
// { prop2: 'pr2' }
// --------- DESPUES --------
// { prop1: 'obj3' }
// { prop2: 'pr2' }
// { prop1: 'obj3' }


// cómo funciona react
{/* <html>
  <head>
    <style>
      #container{
        font-family:monospace;
        font-weight:bold;
        color: #fff;
        background: #161719;
      }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  </head>
  
  <body>
    
    <div id="root"></div>
    
    <script>
      class RDOM {
        render(component, element){
          //JQUERY ONLY
          $(element).append(component.render());
        }
      }
      
      const ReactDOM = new RDOM();

      class Component {
        //  no asignar los props al state
        constructor(props){
            this.props = props;
            this.state = {
              lastName: "Bonito"
            };       
        }
        
        setState(newState){
          this.state = Object.assign(this.state, newState);
          this.render();
        }

        render(){
          return `<div>Hola ${this.props.name}</div>`;
        }
      }

      const c = new Component({name: "World"});

      console.log(c.render())

      ReactDOM.render(c, document.getElementById('root'));
    </script>
    
  </body>
</html> */}

<html>
  <head>
    <style>
      #container{
        font-family:monospace;
        font-weight:bold;
        color: #fff;
        background: #161719;
      }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  </head>
  
  <body>
    
    <div id="root"></div>
    
    <script>
      class RDOM {
        render(component, element){
          //JQUERY ONLY
          $(element).empty();
          $(element).append(component);
        }
      }
      
      const ReactDOM = new RDOM();

      class Component {
        constructor(props){
        //  no asignar los props al state
          this.props = props;
          this.state = {
            lastName: "Bonito"
          };

        }
        
        _bindEvents(){
          $('#component-01').unbind('click');
          $('#component-01').click(()=>{
            this.setState({lastName: 'Feo'});
          });
        }
        
        setState(newState){
          this.state = Object.assign(this.state, newState);
          this.render();
        }

        render(){
          console.log("state: ", this.state);
          this._bindEvents();
          
          const rendered = `<button id="component-01">Hola ${this.props.name} ${this.state.lastName}</button>`;
          ReactDOM.render(rendered, document.getElementById('root'));
        }
      }

      const c = new Component({name: "World"});

      c.render();
      c._bindEvents();
    </script>
    
  </body>
</html>


componentDidMount() {
  this.setState({}) // vuelve a decirnos si se ha ejecutado
} 
// comprueba que se ha montado/presente el elemento
// sirve para cuando llamas a apis externas

componentDidUpdate(prevProps, prevState, snapshot) {
  // añadir condicion par que no se quede en bucle
  prevState.todos.length < 4 && <Form />
}

componentWillUnmount(){}

shouldComponentUpdate(nextProps, nextState)
// if we wnat to reneder again an element
// use when sth no necessary to update in DOM
// retorne true o false




{/* 1- funcion comparte padre
2- Pasar función al componente hijo a través de props.
   la referencia, no la ejecución.
3- Componente hijo ejecuta la funcion de props {this.props.function} con o sin argumento
4-  funcion se ejecuta en el componente padre recibiendo el argumento */}


<div 
  className="beer-image" // className from react
  dataId={props.id}  // data-id -> dataId camel case
  
  // how to write style inline
  style={{backgroundImage: `url(${props.image_url})`}}> 
</div>


high order components Home de beerlist
wrappea un componente
home traer cervezas
beerlist pintar cervezas

Crear otro componente search 
:searchString

componentDidMount
axios.get(`apiurl`), {
  params: {
    beer_name: this.props.match.params.searchString
  }
}
( mirar)

---

cambio slect pags onchange
llama a otra vez a la api de cervezas
y lo enchufo a un setState