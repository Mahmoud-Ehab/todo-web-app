import Row from 'react-bootstrap/Row';

const Task = (props) => {
    const warning = (props.deadline - Date.now()) < (24*60*60*1000);

    const rmvTask = () => {
        props.rmvTaskHandler(props.id);
    };

    // Style Objects
    const taskStyle1 = props.selected ? {
        backgroundColor: 'rgba(82, 160, 255, 0.75)',
        border: 'solid rgba(82, 160, 255, 0.2) 2px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 10px 2px',
        color: 'white'
    } : {};

    const taskStyle2 = {
        backgroundColor: `rgba(150, ${(props.deadline - Date.now()) * 100 / (24*60*60*1000)}, 0, 0.75)`,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 10px 2px',
        margin: 5,
        color: 'white'
    };
    
    // return statement - JSX
    return (
        <Row 
        className={`taskRow d-flex justify-content-between p-3 mx-3 user-select-none ${warning && 'animate__animated animate__headShake animate__delay-1s'}`}
        style={warning && !props.selected ? taskStyle2 : taskStyle1}
        id={props.id}
        onClick={props.onClickHandler}>

            <label 
            className='d-flex lead mx-3' 
            style={{ transform: 'translateY(4px)' }}
            id={props.id}
            onClick={props.onClickHandler}>

                {props.title}

            </label>

            <img id='rmvBtn' alt='delete' src='delete.svg' onClick={rmvTask} />
        </Row>
    );
};

export default Task;