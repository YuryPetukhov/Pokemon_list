import React, {FunctionComponent} from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css';

interface IMoves {
  move: {
    name: string
  }
 }
 interface IStats {
   base_stat: number
 }
 interface ITypes {
  type: {name: string}
}
interface IPokemonInfo {
  species: {name: string},
  stats: Array<IStats>,
  types: Array<ITypes>,
  weight: number,
  moves: Array<IMoves>
   
}
interface IModal {
    isShowing: boolean, 
    hide: () => void,
    content: IPokemonInfo |  null  
} 
const Modal:FunctionComponent<IModal> =  ({ isShowing, hide, content }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className={style.modaloverlay}/>
    <div className={style.modalwrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className={style.modal}>
        <div className={style.modalheader}>
          <button type="button" className={style.modalclosebutton} data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {
          content &&
          <>
            <p>weight : {content.weight}</p>
            <p>Movies:</p>
            <ul>
              {
                content.moves.map((item, indx) => <li key={indx}>{item.move.name}</li>)
              }
            </ul>
            <p>Stats:</p>
            <ul>
              {
                content.stats.map((item, indx) => <li key={indx} >{item.base_stat}</li>)
              }
            </ul>
            <p>Types:</p>
            <ul>
              {
                content.types.map((item, indx) => <li key={indx} >{item.type.name}</li>)
              }
            </ul>
           </>
           
        }
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;