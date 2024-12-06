import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/actions";

const TaskList = ({ filter }) => {
    const tasks = useSelector((state) =>
        filter
            ? state.taskReducer.filter((task) => task.category === filter)
            : state.taskReducer
    );

    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(null); // ID задачи, которая редактируется
    const [editedText, setEditedText] = useState("");
    const [editedCategory, setEditedCategory] = useState("");

    const handleEdit = (task) => {
        setEditMode(task.id);
        setEditedText(task.text);
        setEditedCategory(task.category || "");
    };

    const handleSave = (id) => {
        dispatch(editTask(id, editedText, editedCategory));
        setEditMode(null);
    };

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    return (
        <div className="task-list">
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <div key={task.id} className={`task-card ${task.completed ? "completed" : ""}`}>
                        {editMode === task.id ? (
                            <div className="edit-mode">
                                <input
                                    type="text"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Категория"
                                    value={editedCategory}
                                    onChange={(e) => setEditedCategory(e.target.value)}
                                />
                                <button onClick={() => handleSave(task.id)}>Save</button>
                                <button onClick={() => setEditMode(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div className="task-content">
                                <p>{task.text}</p>
                                <span>{task.category || "No category"}</span>
                                <div className="task-actions">
                                    <button onClick={() => dispatch(toggleTask(task.id))}>
                                        {task.completed ? "Take it back" : "Done"}
                                    </button>
                                    <button onClick={() => handleEdit(task)}>Edit</button>
                                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>Nothing to do</p>
            )}
        </div>
    );
};

export default TaskList;
