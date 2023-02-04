import React from 'react';
import Mov from './Mov';

const nav = ['All','movies', 'anime','series','cartoon']
const objs = [
  {name:'Dragon Ball Super Hero', url:'./img/DBS.jpg',cate:'anime'},
  {name:'Game Of Thrones', url:'img/GOT.jpg',cate:'series'},
  {name:'Prisoners', url:'img/PRI.jpg',cate:'movies'},
  {name:'The Way Back', url:'img/TWB.jpg',cate:'movies'},
  {name:'Hunter X Hunter Phantom Rouge', url:'img/HXH.jpg',cate:'anime'},
  {name:'Over The Garden Wall', url:'img/OTGW.jpg',cate:'cartoon'},
  {name:'Adventure Time', url:'img/AT.jpg',cate:'cartoon'},
  {name:'Breaking Bad', url:'img/BB.jpg',cate:'series'},
]

const App = _ => {
  return(
    <Mov nav={nav} objs={objs}/>
  );
}
export default App;
