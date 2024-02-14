import TaskMain from "./TaskMain";

const TaskList = ({ tasks, onChange, onDelete }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskMain
                    key={task.id}
                    onChange={onChange}
                    onDelete={onDelete}
                    task={task}
                />
            ))}
        </ul>
    );
};

export default TaskList;
