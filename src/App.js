import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Stats
} from 'react-instantsearch-dom';
import './App.css';
import './bootstrap.min.css';
import { appID, API_KEY } from './config'
import Hit from './Hits.js'
import MapContainer from './MapContainer'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const searchClient = algoliasearch(
  appID,
  API_KEY
);

class App extends Component {
  render() {
    return (
      <div>
        <InstantSearch searchClient={searchClient} indexName="airbnb">
          <header className="header">
            <h1 className="header-title">
              <a href="/">Tourism Placeholder</a>
            </h1>
            <SearchBox
              className="searchbox"
              translations={{
                placeholder: '',
              }}
            />
          </header>
          <div>
            <div className="info-area">
              <Stats />
            </div>
            <div className="container">
              <div className="left-container">
                <div className="search-panel">
                  <div className="search-panel__results">
                    <Hits hitComponent={Hit} />
                    <div className="pagination">
                      <Pagination />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-container">
                <div className="map-panel">
                  <div className="map-panel__results">
                    <MapContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default App;
