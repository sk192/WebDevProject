import React from "react";
import "../stylesheet/projects.css";
import Prev from './previous.jsx';
import Next from './next.jsx';
import Profile from './profile.jsx';


var data = [
  {
    img: "/images/logo.jpg",
    link: "https://github.com/HarshaRamayanam/webdev-project/tree/main/weather-app",
    name: "Weather-Hike-WebApp",
  
  },
  { img: "/images/covid-19.jpg", link: "https://github.com/sk192/Front_End_Web_Dev_Project", name:"Covid-19-WebApp" },
  { img: "/images/MIT_Battlecode.png", link: "https://github.com/cemondr/BC19pdxgroup4/tree/master/bots", name:"MIT Battlecode" },
  
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      disabledNext: false,
      disabledPrev: true,
    };
  }

  togglePrev(e) {
      let index = this.state.index - 1;

      let disabledPrev = (index === 0);
      this.setState({index: index, disabledPrev: disabledPrev, disabledNext:false})
  }

  toogleNext(e){
      let index = this.state.index + 1;
      let disabledNext = index === (data.length - 1);
      this.setState({index: index, disabledNext:disabledNext,  disabledPrev:false})
    }
    render(){
        
        const {index, disabledNext, disabledPrev} = this.state;
        const data1 = data ? data[index] : null ;
        if(data1){
            return(
                <div className="data">
                    <div className="button_div">
                        <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />
                        
                        <Profile {...data1} />
                        <Next toggle={(e) => this.toogleNext(e)} active ={disabledNext} />
                    </div>
                    

                </div>
            )
            }
        
}


}


export default Main;
