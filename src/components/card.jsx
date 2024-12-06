import PropTypes from "prop-types";
const Card = ({name,flag}) => {
    return(
        <div
        style={{
            height:"200px",
            width:"200px",
            border:"1px solid black",
            overflow:"hidden",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }}
        >
            <img src={flag} style={{height:"100px",width:"100px"}} alt={`flag of ${name}`}/>
            <h4>{name}</h4>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    flag:PropTypes.string.isRequired,
}

export default Card