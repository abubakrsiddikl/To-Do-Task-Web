import useTasks from "../../hooks/useTasks";


const ToDo = () => {
    const [tasks,loading] = useTasks("To-Do");
    if(loading)return <h1>Loading...</h1>
    console.log(tasks)
    return (
        <div className='border'>
            This is todo
           
        </div>
    );
};

export default ToDo;