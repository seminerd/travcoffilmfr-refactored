import React,
{
    Component
}
from "react";
import MainApp from "./components/MainApp";

import axios from "axios";

class App extends Component
{
    state =
    {
        photos: []
    };
    shuffle(array)
    {
        let counter = array.length;
        let i = 20;
        let newarr=[];

        while (counter > 0)
        {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        while (i>0)
        {
        	newarr[i]=array[i];
        	i--;
        }


        return newarr;
    }
    componentDidMount()
    {
        axios(
        {
            method: "get",
            url: "https://salty-springs-26389.herokuapp.com/home"
        }
        )
        .then(res =>
        {
            const photos = this.shuffle(res.data);
            this.setState(
            {
                photos: photos
            }, ()=>{
                console.log(photos);
            }
            );
            
        }
        )
        .catch(console.log);
    }
    render()
    {
        return  < MainApp photoset =
        {
            this.state.photos && this.state.photos
        }
        />;
          };
        };
        export default App;
