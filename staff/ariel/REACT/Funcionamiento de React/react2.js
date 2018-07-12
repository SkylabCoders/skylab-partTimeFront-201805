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
          $(element).append(component.render());
        }
      }
      
      const ReactDOM = new RDOM();

      class Component {
        constructor(props){
          this.props = props;
          this.state = {
            lastName: "Bonito"
          };

        }
        
        setState(newState){
          this.state = Object.assign(this.state, newState); // actualizo UNICAMENTE los states que cambian
          this.render();                        // NO ASIGNAR LOS PROPS AL STATE
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
</html>
