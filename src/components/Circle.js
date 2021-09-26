function Circle(props) {

    const Element = {
        width: props.diameter,
        height: props.diameter,
        float: "left",
        MozBorderRadius: "50px",
        WebkitBorderRadius: "50px",
        borderRadius: "50px",
        background: "rgb(255, 255, 255)",
        boxShadow: "0 0 20px rgb(255, 255, 255)"
    }
    
    return (
    <div style={Element}>

    </div>
  );
}

export default Circle;