import React from "react";
// import { Next, Prev } from "react-bootstrap/esm/PageItem";
import "../stylesheet/projects.css";
import Prev from './previous.jsx';
import Next from './next.jsx';
import Profile from './profile.jsx';
// import weather_img from '../../public/images/logo.jpg';
// import covid_img from '../../public/images/covid-19.jpg';

// const project = () => {
//   const data = [
//     {
//       img: "/images/logo.jpg",
//       link: "https://github.com",
//     },
//     { img: "/images/covid-19.jpg", link: "https://github.com" },
//   ];

//   return (
//     <div
//       className="project_div"
//       style={{ backgroundImage: "url(/images/logo.jpg)" }}
//     >
//       <a href="https://github.com">Weather-Hike-webApp</a>
//     </div>
//   );
// };

// export default project;

var data = [
  {
    img: "/images/logo.jpg",
    link: "https://github.com",
    name: "Weather-Hike-React-WebApp"
  },
  { img: "/images/covid-19.jpg", link: "https://github.com", name:"Covid-19-WebApp" },
  { img: "/images/logo192.png", link: "https://github.com", name:"logo" },
  { img: "/images/logo512.png", link: "https://github.com", name:"logo1" },
  { img: "/images/covid-19.jpg", link: "https://github.com", name:"Covid-19-WebApp" },
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
                        <Next toggle={(e) => this.toogleNext(e)} active ={disabledNext} />
                    </div>
                    <Profile {...data1} />

                </div>
            )
            }
        
}


}


export default Main;
