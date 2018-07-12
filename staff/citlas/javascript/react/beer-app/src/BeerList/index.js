import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Beer from './Beer'
import axios from 'axios';

class BeerList extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: this.props.location,
      inputValue: '',
      page: 1,
      per_page: 2,
      beers: [
        
      ]
    }
    this.setLocation = this.setLocation.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changePerPage = this.changePerPage.bind(this);

  }

  changePage(event){
    console.log(event.target.dataset.pageNum)
    this.setState({page: event.target.dataset.pageNum});
  }

  changePerPage(event){
    console.log(event.target.value)
    this.setState({per_page: event.target.value});
  }
  //no sirve mostrar header, ni search, no he empezado paginacion
  //https://stackoverflow.com/questions/36683770/react-how-to-get-the-value-of-an-input-field
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  setLocation() {
    console.log(this.props.prueba)
    console.log(this.state.location.pathname)
    //this.props.gettingLocation(this.state.location.pathname)    
  }

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers`,{
      params: {
        page: this.state.page,
        per_page: this.state.per_page
      }
    })
    
      
    .then(res => {
        const beers = res.data;
        this.setState({ beers });
      })
      .catch(function (error) {
        // handle error - si falla
        console.log(error);
      })
  }

  
  searchBeer(searchThis){
    //this.props.history.push('/some/path')
    //this.props.history.push('/search-beer/ipa')


    searchThis = this.state.inputValue
    axios.get("https://api.punkapi.com/v2/beers?beer_name="+searchThis)
      .then(res => {
        const beers = res.data;
        this.setState({beers});
      })
      .catch(function (error) {
        // handle error - si falla
        console.log(error);
      })
  }
       
          
 

  render() {
    {//console.log(this.props.location.pathname + 'de beer list')
  }
    {//console.log(this.props.location)
    }
    this.setLocation()
    return (
     //poner name, tagline y foto
     
        <div className="App" >
        <p>this is beerlist</p>
        
        <div className='buscarContainer' id='aqui'>
          <p>Busca una cerveza </p>
          <input value={this.state.inputValue} onChange={this.updateInputValue} type="text" className="cervezaABuscar" name="cervezaBuscada"/>
          <button type="button" onClick={this.searchBeer} className="searchBeer">Busca!</button>

        </div>
        <div >
            <p className="toSelect">Cuantas cervezas quieres mostrar por página</p>
              <select onChange={this.changePerPage} className="selecting">
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
          </div>
          <div className="pages">
              <button onClick={this.changePage} type="button" data-page-num="1" className="page">Page 1!</button>
              <button onClick={this.changePage} type="button" data-page-num="2" className="page">Page 2!</button>
              <button onClick={this.changePage} type="button" data-page-num="3" className="page">Page 3!</button>
          </div>

        {
            this.state.beers ?
        this.state.beers.map((e)=>{
         {/*return <Beer name={e.name} 
          key={e.id} 
          tagline={e.tagline} 
          image={e.image_url}/>
        })*/} 
          return <div>< Link to= {`beer/${e.id}`} > 
                        <Beer 
                            name={e.name}
                            key={e.id} 
                            tagline={e.tagline} 
                            image={e.image_url}
                            />         
                      </Link></div> })  :
                      'Loading'
        }
          
        </div>

        

        
    
    );
  }
}

export default BeerList;
