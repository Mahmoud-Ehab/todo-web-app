const header = (props) => {
    return (
        <div className='d-flex flex-row align-items-center'
        style={{ height: 100, backgroundColor: '#1f90ff' }}>
            <img
                alt={'logo'}
                src={'logo.png'}
                height={100}
            />
            <p className='h2 text-light w-75 text-center'>You have ToDo...</p>
        </div>
    );
};

export default header;