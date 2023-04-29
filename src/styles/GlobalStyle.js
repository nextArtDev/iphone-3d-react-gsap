import { createGlobalStyle } from 'styled-components'
import fontLight from '../assets/fonts/IRANSansX-Light.woff2'
import fontMedium from '../assets/fonts/IRANSansX-Medium.woff2'
import fontBold from '../assets/fonts/IRANSansX-Bold.woff2'
import fontRegular from '../assets/fonts/IRANSansX-Regular.woff2'
import fontNumeric from '../assets/fonts/IRANSansXFaNum-Regular.woff2'
import fontNumericBold from '../assets/fonts/IRANSansXFaNum-Bold.woff2'

export const GlobalStyle = createGlobalStyle`
*,*::before, *::after{
    margin:0;
    padding:0;
    /* outline: 1px solid red !important; */  
    //Border Hack!
}
h1 ,h2 , h3 , h4 , h5 , h6{
    margin:0;
    padding: 0;
}   

@font-face {
    font-family:'Irs light' ;
    src: local('Irs light') url(${fontLight}) format('trueType') ;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family:'Irs medium' ;
    src: local('Irs medium') url(${fontMedium}) format('trueType') ;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family:'Irs bold' ;
    src: local('Irs bold') url(${fontBold}) format('trueType') ;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family:'Irs' ;
    src: local('Irs') url(${fontRegular}) format('trueType') ;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family:'Irs numeric' ;
    src: local('Irs numeric') url(${fontNumeric}) format('trueType') ;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family:'Irs numeric bold' ;
    src: local('Irs numeric bold') url(${fontNumericBold}) format('trueType') ;
    font-display: swap;
    font-style: normal;
}

body{
    font-family: 'Irs', sans-serif;
    overflow-x: hidden;
}

:root{
    // Fonts As per the type scale generator => https://material-io.cn/inline-tools/typography/
 --fontBig: 7em; //88 px
 --fontxxxl: 5.5em; //88 px
 --fontxxl: 3.4375em; //55 px
 --fontxl: 2.75em; //44 px
 --fontlg: 1.9375em; //31 px
 --fontmd: 1.375em; //22 px
 --fontsm: 1.125em; //18 px
 --fontxs: 1em; //16 px
 --fontxxs: 0.75em; //12 px


  // Colors
  --dark: #000000;
  --grey: #666666;
  --greyLight: #979797;
  --offWhite: #eeeeee;
  --white: #ffffff;
  --blue: #0071e3;
  --blueRgba:"0, 113, 227";

  //fonts
  --fontL: "Irs light";
  --fontR: "Irs";
  
  // gradient
  --gradient: #35c3f3 0%, #8b9fe8 20%, #e681d8 39%, #ffa9a4 76%, #fed2ce 100%;
}
`