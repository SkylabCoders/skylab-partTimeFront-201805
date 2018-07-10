import React from 'react';
import './index.css';

function About(props){
  return (
    <div className="about">
      <h1>about</h1>

      <p>Have you ever wanted to search through Brewdog's expansive back catalogue of beer in a programmatic way? Maybe build a tool that pairs beer with food, or search beers with an abv of more than 4%? Well now your prayers have been answered!</p>
      <p>The Punk API takes Brewdog's DIY Dog and turns it into a searchable, filterable API that's completely free and open source.</p>
      <h2>The Legal Stuff</h2>
      <p>The data in this API is taken directly from BrewDog’s DIY Dog and is therefore free to use, replicate verbatim and share, but cannot be used for commercial purposes. If you have an enquiry about DIY Dog, contact hello@brewdog.com.</p>


    </div>
  );
}

export default About;