import Footer from './Footer';
import React from 'react';
import Header from './Header'
import EventForm from './Form';
import { Component } from 'react';

class NewEvent extends Component {
  state={
    dataS:[]
  }
  componentDidMount(){
    fetch('http://localhost:8000/addevents',
    {
          method:'POST',
          headers:{
            'Content-type':'application/json'
          }})
    .then(res =>{
      this.setState({
        dataS:res.data
      })
      console.log(res.data)
    })
  }
  render(){
    return(
        <div style={{backgroundColor:'black', color:'white'}} >
          <div>
            <Header/>
          </div>
          <div style={{height:'180vh', marginTop: '20%'}}>
          <EventForm/>
          </div>
          <div>
            <Footer/>
          </div>
        </div>




    )
  }

}
 export default NewEvent


//   const [formInfo, setFormInfo] = useState(
//     {
//       content:'',
//       user_string:'generic_user',
//     }
//     )

//     const handleSubmit = (e) => {
//       e.preventDefault()
//       const url = process.env.REACT_APP_API_URL + 'addevents'
//       const opts = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${accessToken}`,
//         },
//         body: JSON.stringify(formInfo),
//       }
//       fetch(url, opts)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//       })
//     }

//     const handleChange = (e) => {
//       setFormInfo({...formInfo, [e.target.id]: e.target.value})
//     }

    
//     return (
//         <div style={{backgroundColor: 'black'}}> 
//           <div style={{margin: '20px'}}>
//           <Header/>
//           </div>
//           <div style={{height: '200vh', marginTop: '30%'}}>
//             <form onSubmit={handleSubmit}>
              
//                 <input id="content" type="text" onChange={handleChange}/>
//                 {/* <input id="user_string" type="hidden" /> */}
//                 <button type="submit">Create New Event</button>
//             </form>
//             </div>
//             <Footer/>
//         </div>
//   )
// }

// handleChange(e){
//   var name = e.target.name
//   var value = e.target.value
//   console.log('Name:', name)
//   console.log('Value:', value)

//   this.setState({
//     activeItem:{
//       ...this.state.activeItem,
//       title:value
//     }
//   })
// }
//   handleSubmit(e){
//     e.preventDefault()
//     console.log('ITEM:', this.state.activeItem)

//     var csrftoken = this.getCookie('csrftoken')

//     var url = 'http://localhost:8000/addevents'

//     if(this.state.editing == true){
//       url = `http://127.0.0.1:8000/api/event-update/${ this.state.activeItem.id}/`
//       this.setState({
//       editing:false
//     })
//   }

//   fetch(url, {
//     method:'POST',
//     headers:{
//       'Content-type':'application/json',
//       'X-CSRFToken':csrftoken,
//     },
//     body:JSON.stringify(this.state.activeItem)
//   }).then((response)  => {
//       this.fetchTasks()
//       this.setState({
//          activeItem:{
//         id:null, 
//         title:'',
//         completed:false,
//       }
//       })
//   }).catch(function(error){
//     console.log('ERROR:', error)
//   })

// }

// return(

//   <div style={{backgroundColor: 'black'}}> 
//   //           <div style={{margin: '20px'}}>
//   //           <Header/>
//   //           </div>
//   //           <div style={{height: '200vh', marginTop: '30%'}}>
//   //             <form onSubmit={handleSubmit}>
                
//   //                 <input id="content" type="text" onChange={this.handleChange} value={this.state.activeItem.title}/>
//   //                 {/* <input id="user_string" type="hidden" /> */}
//   //                 <button type="submit">Create New Event</button>
//   //             </form>
//   //             </div>
//   //             <Footer/>
//   //         </div>





// )







// export default NewEvent;




// var url = 'http://localhost:8000/addevents'
// fetch(url,{
//   method: 'POST',
// })