import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  connectHits,
  Configure
} from 'react-instantsearch-dom';

import './App.css';

class Hit extends React.Component<Props> {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="hit-container">
        <div className="hit-left-container col-md-7 col-xs-7">
          <div className="hit-header">
            <div className="hit-type col-md-8 col-xs-8">
              {this.props.hit.room_type}
            </div>
            <div className="hit-reviews col-md-4 col-xs-4">
              {this.props.hit.reviews_count}
            </div>
          </div>
          <div className="hit-title col-md-12 col-xs-12">
            {this.props.hit.name}
          </div>
          <div className="hit-description col-md-12 col-xs-12">
            {this.props.hit.city}, {this.props.hit.zipcode}
          </div>
          <div className="hit-price col-md-12 col-xs-12">
            {this.props.hit.price_formatted}
          </div>
        </div>
        <div className="hit-right-container col-md-5 col-xs-5">
          <img style={{width: '100%', height: '100%', objectFit: 'cover', overflow:'hidden', float:'right'}} src={this.props.hit.thumbnail_url} />

        </div>

      </div>
    );
  }
}

export default Hit;
