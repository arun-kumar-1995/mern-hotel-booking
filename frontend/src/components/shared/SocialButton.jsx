import React from 'react';

const SocialButton = ({Icon , title , className}) =>{
    return(
        <button title="facebook login" className="btn-social facebook">
        <Icon />
      </button>
    )
}


export default SocialButton;