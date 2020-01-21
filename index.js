import React from 'react';

const BuildPlaceholderCaption = ({caption}) => {
  return(   
     <figcaption style={{margin : 'auto'}}>{caption}</figcaption>
  );
}

const BuildPlaceholder = ({options, className}) => {
  let placeholderClass = 'react--placeholder';
  let caption;

  if(typeof className !== 'undefined'){
     placeholderClass = placeholderClass +' '+className;
  }

  let placeHolderStyle ={
     textAlign       : 'center',
     display         : 'flex',
     height          : options.height          ? options.height : '150px',
     width           : options.width           ? options.width  : '300px',
     textColor       : options.textColor       ? options.textColor  : '#aaa',
     border          : options.borderColor     ? '1px solid '+options.borderColor : '1px solid #ccc',
     backgroundColor : options.backgroundColor ? options.backgroundColor : '#eee',
     fontSize        : options.fontSize        ? options.fontSize : '13px'
  }

  if(typeof options.caption === "undefined" && options.caption !== false ){
     caption = options.height.replace('px','') +' x '+ options.width.replace('px','');
  }else{
     caption = options.caption;
  }

  return( 
    <figure className={placeholderClass} style={placeHolderStyle}>
      {caption &&
         <BuildPlaceholderCaption caption={caption}/>
      }
    </figure>
  );
}

const Placeholder = (props) => {
  const {options, className} = props;
  return( 
    <BuildPlaceholder options={options[0]} ClassName={className}/>
  );
}

export {
  Placeholder
}