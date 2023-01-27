import React from 'react';

class Mov extends React.Component{
    constructor(props){
        super(props);
        this.state = {objs:props.objs};
    }

    changeImg(e){
        e==="All"
        ?this.setState({objs:this.props.objs})
        :this.setState({objs:this.props.objs.filter((ee)=>ee.cate===e)})
    }

    Search(e){
        e.target.value.trim()!==''
        ?this.setState({objs:
            this.props.objs.filter((obj)=>obj.name.toLowerCase().includes(e.target.value.toLowerCase()))
        })
        :this.setState({objs:this.props.objs})
    }
    render(){
        return(
            <div className='container'>
                <nav className='d-flex justify-content-center my-5'>
                    {this.props.nav.map((e,i)=>
                        <button onClick={()=>{this.changeImg(e)}}className="btn btn-outline-dark col-2 mx-2" key={i}>{e}</button>
                    )}
                </nav>
                <div className="form-floating my-5 mx-auto col-10 d-flex">
                    <input onChange={(e)=>{this.Search(e)}} className="form-control border border-dark" placeholder="name@example.com"/>
                    <label>Movie Name</label>
                </div>
                <div className='imgParent col-11 mx-auto d-flex align-items-center flex-wrap justify-content-evenly'>
                    {this.state.objs.map((e,i)=>
                        <div style={{width:'300px'}} key={i} className='cadre mx-1 my-3'>
                            <img height='420px' width='100%' src={e.url} alt=''/>
                            <p className='text-center text-dark fs-5'>{e.name}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Mov;