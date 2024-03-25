const ViTextInput =(props) => {
    return (
      <div class="input-data">
      <input type="text"  
      id={props.id} 
      name={props.name} 
      onChange={props.handleChange} 
      value={props.value} 
      {...props}
       />
      <div class="underline"></div>
      <label>{props.title}</label>
     {props.isSubmitted && !props.value && <span>{props.errMessage}</span>}
  </div>
    )
  }
  export default ViTextInput;