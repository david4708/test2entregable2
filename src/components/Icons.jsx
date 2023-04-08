import React from 'react'

const Icons = (icon) => {

switch (icon) {


  
  case 'Thunderstorm':
    icon='icons/thunderstorms-rain.svg'
    console.log("tormenta")
    
    break;

    case 'Drizzle':
      icon='icons/drizzle.svg'
      console.log("llovizna")
      
      break;
      case 'Rain':
        icon='icons/rain.svg'
        console.log("lluvia")
        
        break;
        case 'Snow':
          icon='icons/snow.svg'
          console.log("nieve")
          
          break;
          case 'Clear':
            icon='icons/clear-day.svg'
            console.log("despejado")
            
            break;
            case 'Atmosphere':
              icon='icons/weather.svg'
              console.log("atmosfera")
              
              break;
              case 'Clouds':
                icon='icons/fog.svg'
                console.log("nubes")
                
                break;
                case 'Haze':
                  icon='icons/haze.svg'
                  console.log("brumas")
                  
                  break;
                  case 'Smoke':
                    icon='icons/smoke.svg'
                    console.log("humo")
                    
                    break;

  default:
    icon='icons/clear-day.svg'
    console.log("despejado")
    
}

  return icon
}

export default Icons