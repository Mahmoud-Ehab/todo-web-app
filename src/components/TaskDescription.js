import Alert from 'react-bootstrap/Alert';

const TaskDescription = (props) => {
    const time = new Date(props.deadline).getTime() - Date.now();
    const maxDur = 24 * 60 * 60 * 1000;

    const evaluateTime = (t) => {
        const days = Math.floor(t / (24 * 60 * 60 * 1000));
        t -= days * 24 * 60 * 60 * 1000;

        const hours = Math.floor(t / (60 * 60 * 1000));
        t -= hours * 60 * 60 * 1000;

        const minutes = Math.floor(t / (60 * 1000));

        return days + ' days ' + hours + ' hours ' + minutes + ' minutes.';
    };

    return (
        <div className='container mb-4 p-4 bg-light'>
            <p className='lead'>{props.title}</p>
            <p className='text-break'>{props.description}</p>
            <Alert className='shadow-sm' style={{backgroundColor: `rgba(150,${time * 100 / maxDur},0)`, color: '#ffffff'}}>
                {time > 0 ? evaluateTime(time) : props.deadline}
            </Alert>
        </div>
    );
};

export default TaskDescription;