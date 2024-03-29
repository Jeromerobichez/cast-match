import React, { Component } from 'react';

import ActorCarousel from './actorsCarousel';
import { requestPopularActorsNew } from './Requests';

class ActorsPopulars extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    dataArray: [],
    showButton: false

  }


  componentDidMount() {
    const getPopulars = async (page) => {
      this.setState({ dataArray: await requestPopularActorsNew({ page }) })
    }
    getPopulars(this.props.page)

  }
  showButtonToggle = () => {
    this.setState({ showButton: true })
  }
  hideButtonToggle = () => {
    this.setState({ showButton: false })
  }

  // https://api.themoviedb.org/3/person/popular?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US&page=1

  render() {
    const startRank = ((this.props.page - 1) * 20) + 1
    const endRank = this.props.page * 20

    const slide = (scrollToMake) => {
      this.myRef.current.scrollLeft += scrollToMake;
    };

    let dataArray = this.state.dataArray
    console.log("props :", this.props)
    if (this.state.dataArray !== []) {
      return (
        <>
          <h1 className="carrousel-heading">Most populars actors (n°{startRank} to {endRank})</h1>
          <div className="carrousel-container"
            onMouseEnter={this.showButtonToggle}
            onMouseLeave={this.hideButtonToggle}
            ref={this.myRef}
          >
            <span className='button-scroll-left'
              onClick={() => slide(parseInt(`-${this.myRef.current.clientWidth}`))}><span className={this.state.showButton ? "show-chevron" : "hide-chevron"}>{"<"}</span></span>
            {dataArray !== undefined ? dataArray.map((e, i) =>
              <div >
                <ActorCarousel actorInfos={e} open={this.props.open} getActorId={this.props.getActorId} page={this.props.page} /></div>) : null}
            <span className='button-scroll-right'
              onClick={() => slide(this.myRef.current.clientWidth)}>
              <span className={this.state.showButton ? "show-chevron" : "hide-chevron"}>{">"}</span></span>
          </div>
        </>
      )
    }
  }
}



export default ActorsPopulars;
