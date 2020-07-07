import React, {useEffect, useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [dataUser , setData] = useState([]);

  const handleDelete = e => {
    // console.log(itemId)
      var array = [...dataUser]; // make a separate copy of the array
      var index = array.indexOf(e)
      if (index !== -1) {
        array.splice(index, 1);
        Axios.get('https://api.github.com/users').then(resolve=>{
          const newData = [resolve.data[Math.floor(Math.random() * resolve.data.length)+2]];
          newData.push(...array)
          setData(newData);
          // console.log(newData)
        })
      }
  };


  const getData = () =>{
    Axios.get('https://api.github.com/users').then(resolve=>{
      if(resolve){
        const random = resolve.data.slice(Math.floor(Math.random() * resolve.data.length)+2)
        const data = random.slice(1,6);
        setData(data)
        // console.log(data)
      }
    }).catch(err=>console.log(err))
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <div className="container">
      <div className="content">
        <header className="header">
          <h1 className="title">Who to follow</h1>
          <button onClick={()=>getData()} type="button" className="btn btn-primary">Refresh</button>
        </header>
        <section className="content-data">
          {
            dataUser.length === 5 ? dataUser.map(data=>{
              return(
                <div key={data.id} className="cards">
                  <div className="box-avatar">
                    <img src={data.avatar_url} alt="" className="avatar"/>
                  </div>
                  <div className="box-name">
                    <p className="name">{data.login}</p>
                  </div>
                  <div className="box-username">
                    {
                      data.twitter_username ? 
                      <p className="username">{data.twitter_username}</p> : <p>@twitter_username</p>
                    }
                  </div>
                  
                  <div type="button" onClick={()=>handleDelete(data)} className="btn btn-primary btn-x"><span>X</span></div>
                </div>
              )
            }) : <button className="btn-trans" onClick={getData()}></button>
          }
        </section>
      </div>
    </div>
  );
}

export default App;
