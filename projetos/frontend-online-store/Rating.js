import React from 'react';
import './Rating.css';


class Rating extends React.Component {
  render() {
    return (
      <form>
        <div className="rating-section">
          
          <div className="container">
          <input id="email" placeholder="E-mail" />
            <div className="starrating risingstar d-flex justify-content-center flex-row">
              <input type="radio" id="star1" name="rating" value="1" />
              <label htmlFor="star1" title="1 star">1</label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label htmlFor="star2" title="2 star">2</label>
              <input type="radio" id="star3" name="rating" value="3" />
              <label htmlFor="star3" title="3 star">3</label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label htmlFor="star4" title="4 star">4</label>
              <input type="radio" id="star5" name="rating" value="5" />
              <label htmlFor="star5" title="5 star">5</label>
            </div>
          </div>
        </div>
        <textarea placeholder="Mensagem" />
        <button type="button" className="rating-button">Avaliar</button>
      </form>
    );
  }
}

export default Rating;
