import Blinklist from '../../../images/Blinklist.svg'

interface ILogo{
    className?: string;
}

const Logo= (props: ILogo) => {
  return <img src={Blinklist} alt="Blinkist" className={props.className}/>
};

export default Logo