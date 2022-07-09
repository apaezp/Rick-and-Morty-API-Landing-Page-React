import React from 'react'
import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => (
          <Carousel autoPlay>
        
        <div className="img1">
          <img
            src="https://www.xtrafondos.com/descargar.php?id=6046&resolucion=3840x2160"
            alt=""
          />
        </div>
        <div className="img2">
          <img
            src="https://images6.alphacoders.com/909/thumb-1920-909641.png"
            alt=""
          />
        </div>
        <div className="img3">
          <img
            src="https://www.xtrafondos.com/descargar.php?id=5441&resolucion=3840x2160"
            alt=""
          />
        </div>
        

        </Carousel>
)

