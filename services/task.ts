import api from "./api";

export const getTasks = async ()=> {
    const response = await api.get('/tasks')
    return response?.data?.tasks;
}

export const createTask = async (task: {
    title: string,
    description: string;
}) => {
    await api.post('/tasks', task)
}

export const deleteTaskById = async (id: string) => {
    await api.delete(`/tasks/${id}`)
}

