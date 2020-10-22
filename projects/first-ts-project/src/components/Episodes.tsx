import React, { useState, useEffect } from 'react';
import { getEpisodes } from '../services/api';

type Props = {

}

interface APIReturn {
  episode: string;
  name: string
}

type State = {
  data: APIReturn[]
}

export default class Episodes extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    getEpisodes().then(({ data: { results } }) => this.setState({ data: results }))
  }

  render() {
    const { data } = this.state;
    console.log(data)
    return (
      <div>
        <p>Teste</p>
        {data.map(({ episode, name }) => <div>
          <p>{episode}</p>
          <p>{name}</p>
        </div>)}
      </div >
    )
  }

}